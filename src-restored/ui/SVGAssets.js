/**
 * Restored source for Webpack Module #36622.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const {
  popupLose,
  popupWinCup,
  win_rays,
  winStars,
  backButton,
  boosterOffline,
  boosterProduceSpeedIcon,
  boosterProduceSpeed,
  boosterStartUnitsIcon,
  boosterStartUnits,
  cancel_icon,
  confirm_icon,
  coins,
  no_ads_icon,
  offlineEarnings,
  shop,
  video,
  leaderboardPlay,
  leaderboardCup,
  victoryFraming,
} = require("./SVGAssetSymbols")
const { settings, sounds, music, vibrate } = require("./SettingsSVGSymbols")

function renderSvg(svg, props) {
  const { Graphics } = require("./UIContext")
  return jsxRuntime.jsx(Graphics, {
    svg,
    className: props.className,
    inline: false,
  })
}

const Images = {
  Gift() {
    return jsxRuntime.jsx("img", { src: "./assets/gift-icon.svg" })
  },
  Star() {
    return jsxRuntime.jsx("img", { src: "./assets/star-icon.svg" })
  },
}

const SVG = {
  Shop(props) {
    return renderSvg(shop, props)
  },
  NO_ADS(props) {
    return renderSvg(no_ads_icon, props)
  },
  COINS(props) {
    return renderSvg(coins, props)
  },
  BoosterOfflineEarningsIcon(props) {
    return renderSvg(boosterOffline, props)
  },
  BoosterProduceSpeedIcon(props) {
    return renderSvg(boosterProduceSpeedIcon, props)
  },
  BoosterProduceSpeed(props) {
    return renderSvg(boosterProduceSpeed, props)
  },
  BoosterStartUnitsIcon(props) {
    return renderSvg(boosterStartUnitsIcon, props)
  },
  BoosterStartUnits(props) {
    return renderSvg(boosterStartUnits, props)
  },
  BackButton: function BackButtonIcon(props) {
    return renderSvg(backButton, props)
  },
  PopupWinCup(props) {
    return renderSvg(popupWinCup, props)
  },
  PopupLose(props) {
    return renderSvg(popupLose, props)
  },
  WinRays(props) {
    return renderSvg(win_rays, props)
  },
  WinStars(props) {
    return renderSvg(winStars, props)
  },
  Video(props) {
    return renderSvg(video, props)
  },
  OfflineEarnings(props) {
    return renderSvg(offlineEarnings, props)
  },
  Settings(props) {
    return renderSvg(settings, props)
  },
  Sounds(props) {
    return renderSvg(sounds, props)
  },
  Vibrate(props) {
    return renderSvg(vibrate, props)
  },
  Music(props) {
    return renderSvg(music, props)
  },
  Cancel(props) {
    return renderSvg(cancel_icon, props)
  },
  Confirm(props) {
    return renderSvg(confirm_icon, props)
  },
  LeaderBoardPlayIcon(props) {
    return renderSvg(leaderboardPlay, props)
  },
  LeaderBoardCupIcon(props) {
    return renderSvg(leaderboardCup, props)
  },
  VictoryFraming(props) {
    return renderSvg(victoryFraming, props)
  },
}

module.exports = {
  Images,
  SVG,
  cancel_icon,
  confirm_icon,
  no_ads_icon,
  win_rays,
}
