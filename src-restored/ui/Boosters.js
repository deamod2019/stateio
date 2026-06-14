/**
 * Restored source for Webpack Module #67884.
 *
 * Home-screen booster purchase/free-reward row.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { TypesSocial, AdResponse } = require("../core/CoreTypes")
const ui = require("./UIContext")
const { math } = require("../core/MathUtils")
const { PlayerType } = require("../core/PlayerType")
const { showReward } = require("../core/UIHelpers")
const { TypesGame } = require("../core/TypesGame")
const { Booster, BoosterType } = require("./Booster")
const { UIConstants } = require("../core/UIConstants")
const classNames = require("./classNames").default
const hooks = require("./UIHooks")
const { toFixedString } = require("../core/NumberFormat")
require("./styleSideEffects")("46193")
const { GameEvents } = require("../core/GameEvents")
const { SIOConstants } = require("../core/SIOConstants")

let isInitialFtueBoosters = true

function Boosters(props) {
  const className = props.className
  const boosterConfigs = UIConstants.boosters
  const model = ui.useInjection(TypesGame.model)
  const social = ui.useInjection(TypesSocial.model)

  ui.useEventListener("YANDEX_SYNC", () => {
    setState((state) => ({ ...state, coins: model.cookie.coins }))
  })

  const initialState = {
    coins: model.cookie.coins,
    startCoins: model.cookie.coins,
    boosters: boosterConfigs,
    adViewed: false,
  }
  const [state, setState] = hooks.useState(() => initialState)
  const coins = state.coins
  const adViewed = state.adViewed

  const refreshBoosters = () => {
    const boosters = createBoosters()
    setState((state) => ({ ...state, boosters }))
    if (isInitialFtueBoosters) isInitialFtueBoosters = false
  }

  hooks.useEffect(refreshBoosters, [coins, adViewed, isInitialFtueBoosters])
  ui.useEventListener(GameEvents.COINS_UPDATED, refreshBoosters)
  Date.now()

  function createBoosters() {
    const disableBecauseFtue = social.session.ftue && isInitialFtueBoosters
    const canOfferFree = model.absoluteLevelNum > 1
    const boosters = []

    for (let index = 0; index < boosterConfigs.length; index += 1) {
      boosters[index] = { ...boosterConfigs[index], ...createBoosterState(boosterConfigs[index]) }
    }

    const priceOrder = []
    boosters.forEach((booster) => {
      priceOrder.push({ id: booster.id, price: booster.price })
    })
    priceOrder.sort((left, right) => right.price - left.price)
    const mostExpensiveId = priceOrder[0].id

    boosters.forEach((booster) => {
      booster.isFree = false
      booster.disabled = !model.cookie.isEnoughCoins(booster.price)

      if (booster.id === mostExpensiveId && booster.disabled && canOfferFree) {
        booster.disabled = false
        booster.isFree = true
      }

      if (
        SIOConstants.REWARD_AD_PLAYED.has("boosters") &&
        SIOConstants.REWARD_AD_PLAYED.get("boosters") > Date.now() - 60000
      ) {
        booster.disabled = true
      }

      let paidUpgrade = function noop() {}
      let freeUpgrade = function noop() {}
      switch (booster.id) {
        case BoosterType.START_UNITS:
          paidUpgrade = () => {
            model.meta.increaseStartPopulation()
          }
          freeUpgrade = () => {
            model.meta.increaseStartPopulationFree()
          }
          break
        case BoosterType.START_PRODUCE:
          paidUpgrade = () => {
            model.meta.increaseSpawn()
          }
          freeUpgrade = () => {
            model.meta.increaseSpawnFree()
          }
          break
        case BoosterType.OFFLINE_EARNINGS:
          paidUpgrade = () => {
            model.meta.increaseOffline()
          }
          freeUpgrade = () => {
            model.meta.increaseOfflineFree()
          }
          break
      }

      booster.onClick = async function onBoosterClick() {
        setState((state) => ({ ...state, adViewed: false }))
        if (booster.isFree && canOfferFree) {
          if ((await showReward()) === AdResponse.PLAYED) {
            SIOConstants.REWARD_AD_PLAYED.set("boosters", Date.now())
            freeUpgrade()
            setState((state) => ({ ...state, adViewed: true }))
          }
        } else {
          paidUpgrade()
          setState((state) => ({ ...state, coins: model.cookie.coins }))
        }
      }

      if (disableBecauseFtue) {
        booster.disabled = true
        booster.isFree = false
      }
    })

    return boosters
  }

  function createBoosterState(booster) {
    let defaultCount = 11
    let price = 99
    let levelNum = 66
    const disabled = false

    switch (booster.id) {
      case BoosterType.START_UNITS:
        levelNum = model.cookie.playerStartPopulation
        price = model.meta.getStartPopulationCost()
        defaultCount = model.meta.getStartPopulation(PlayerType.First)
        break
      case BoosterType.START_PRODUCE:
        levelNum = model.cookie.playerSpawnLevel
        price = model.meta.getPopulationRateCost()
        defaultCount = math.round(model.meta.getPlayerGenerationRateValue(levelNum), 100)
        break
      default:
        levelNum = model.cookie.playerOfflineLevel
        price = model.meta.getOfflineEarningCost()
        defaultCount = model.meta.getOfflineEarning()
    }

    return {
      defaultCount: toFixedString(defaultCount),
      price,
      levelNum,
      disabled,
      isFree: false,
      async onClick() {},
    }
  }

  return jsxRuntime.jsx(
    "div",
    {
      className: classNames("boosters", className),
      children: state.boosters.map((booster) => jsxRuntime.jsx(Booster, { ...booster })),
    },
  )
}

module.exports = { Boosters }
