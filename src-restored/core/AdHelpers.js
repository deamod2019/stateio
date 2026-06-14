/**
 * Restored source for the ad helper exports in Webpack Module #68252.
 */
"use strict"

const { di } = require("./RuntimeCore")
const { TypesAds } = require("./CoreTypes")

async function showAd(placement) {
  return di.get(TypesAds.adAction).showAd(placement)
}

async function showReward(placement) {
  return di.get(TypesAds.adAction).showAd(placement, true)
}

module.exports = { showAd, showReward }
