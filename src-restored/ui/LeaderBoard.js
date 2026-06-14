/**
 * Restored source for Webpack Module #14633.
 *
 * Builds leaderboard rows from social users and referral reward state.
 */
"use strict"

const { __assign, __read, __spreadArray } = require("../core/TSHelpers")
const jsxRuntime = require("./jsxRuntime")
const classNames = require("./classNames").default
const { ScoreType } = require("../core/SocialAppExports")
const { TypesSocial } = require("../core/CoreTypes")
const { lazyGet } = require("../../src-cjs/44656__mod.js")
const { LeaderBoardItem } = require("./LeaderBoardItem")
const { LeaderBoardInviteItem } = require("./LeaderBoardInviteItem")
require("./styleSideEffects")("6162")

function LeaderBoard(props) {
  const pendingRewards = lazyGet(TypesSocial.refRewardsModel)?.getPendingItems() || []
  const availableRewards = lazyGet(TypesSocial.refRewardsModel)?.getAvailableItems() || []

  function getRewardByReferral(rewards, referrerId) {
    return rewards
      .filter((reward) => reward.rf === referrerId)
      .map((reward) => reward.value)[0]
  }

  function getScore(user, scoreType) {
    switch (scoreType) {
      case ScoreType.GLOBAL:
        return user.scoreGlobal
      case ScoreType.CONTEXT:
        return user.scoreContext
    }
    return user.scores.getScore()
  }

  const userItems = (props.users.map((user) => ({
    name: user.name,
    image_url: user.photo,
    score: getScore(user, props.scoreType),
    reward: getRewardByReferral(availableRewards, user.id),
    origin: user,
  })) || []).map((user) => ({ user }))

  const inviteItems = pendingRewards.map((reward) => ({
    reward: reward.value,
    pending: !!reward.rf,
  })) || []

  props.onClose

  const items = mergeRankedItems(userItems, inviteItems)

  return jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: jsxRuntime.jsx(
      "div",
      __assign(
        { className: classNames("leaderboard") },
        {
          children: jsxRuntime.jsx(
            "ul",
            __assign(
              { className: classNames("leaderboard__scroll") },
              {
                children: items.map((item) => {
                  return item && item.user
                    ? jsxRuntime.jsx(LeaderBoardItem, __assign({}, item))
                    : jsxRuntime.jsx(LeaderBoardInviteItem, __assign({}, item))
                }),
              },
            ),
          ),
        },
      ),
    ),
  })
}

function mergeRankedItems(userItems = [], inviteItems = []) {
  userItems.sort((left, right) => (right.user.score || 0) - (left.user.score || 0))
  userItems = userItems.map((item, index) => __assign(__assign({}, item), { rank: index + 1 }))
  return __spreadArray(__spreadArray([], __read(userItems), false), __read(inviteItems), false)
}

module.exports = { LeaderBoard }
