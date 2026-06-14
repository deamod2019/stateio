/**
 * Restored source for Webpack Module #72688.
 *
 * Optional root-level custom social banner slot.
 */
"use strict"

const { h } = require("./preactRuntime")
const { lazyGet } = require("../core/RuntimeCore")
const { TypesUI } = require("../core/CoreTypes")

function SocialBanners() {
  const Component = lazyGet(TypesUI.customComponent.SOCIAL_BANNERS)
  return Component && h(Component, {})
}

module.exports = { SocialBanners }
