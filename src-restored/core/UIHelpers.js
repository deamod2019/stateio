/**
 * Restored source for Webpack Module #37725.
 *
 * Small shared UI/platform helpers. Settings only needs the click sound path,
 * but the original module also exports ad helpers and rankability checks.
 */
"use strict"

const core = require("./RuntimeCore")
const { TypesAds, TypesAudio } = require("./CoreTypes")

function isRankableUser(user) {
  return user.getLbRecord !== undefined
}

async function showAd(placement) {
  return core.di.get(TypesAds.adAction).showAd(placement)
}

async function showReward(placement) {
  return core.di.get(TypesAds.adAction).showAd(placement, true)
}

async function playSound(soundId) {
  return core.lazyGet(TypesAudio.soundAction)?.run(soundId)
}

function playUIClickSound() {
  playSound("click_ui")
}

module.exports = { isRankableUser, showAd, showReward, playSound, playUIClickSound }
