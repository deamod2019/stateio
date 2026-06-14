/**
 * Restored source for Webpack Module #62482.
 *
 * Builds the social battle-results list from current context players and
 * renders each ranked row through the leaderboard item component.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
require("./styleSideEffects")("6376")
const { TypesSocial } = require("../core/CoreTypes")
const { ScoreType } = require("../core/SocialAppExports")
const { TypesGame } = require("../core/TypesGame")
const { math } = require("../core/MathUtils")
const classNames = require("./classNames").default
const ui = require("./UIContext")
const { LeaderBoardItem } = require("./LeaderBoardItem")

function BattleResults(props) {
  const passedStage = props.passedStage
  const isLevelFinished = props.isLevelFinished !== undefined && props.isLevelFinished
  const social = ui.useInjection(TypesSocial.model)
  const model = ui.useInjection(TypesGame.model)

  function getScores(user) {
    if (user === social.me) return model.currentContinent.getHistory()

    const extraData = user.scores.getEntry(ScoreType.CONTEXT)?.getExtraData()
    return extraData
      ? JSON.parse(extraData)
      : {
          c: model.currentContinent.stageLevel,
          l: model.currentContinent.data.id,
          s: model.currentContinent.data.stages.map(() => 0),
        }
  }

  const users = social.contextPlayers
    .map((user) => ({
      user: {
        ...user,
        name: user.name,
        image_url: user.photo,
        origin: user,
      },
      scores: getScores(user),
    }))
    .map((item) => {
      item.user.score = isLevelFinished
        ? math.array_summ(item.scores.s)
        : item.scores.s[passedStage] || 0
      return item
    })
    .sort((first, second) => {
      return isLevelFinished
        ? math.array_summ(second.scores.s) - math.array_summ(first.scores.s)
        : second.scores.s[passedStage] - first.scores.s[passedStage]
    })
    .map((item, index) => ({ ...item, rank: index + 1 }))

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("leaderboard"),
      children: jsxRuntime.jsx("ul", {
        className: classNames("leaderboard__scroll"),
        children: users.map((item) =>
          jsxRuntime.jsx(LeaderBoardItem, {
            user: item.user,
            rank: item.rank,
            isSolo: false,
          }),
        ),
      }),
    },
  )
}

module.exports = { BattleResults }
