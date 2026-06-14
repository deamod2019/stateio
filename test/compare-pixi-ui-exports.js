"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/80672__mod.js")
const restored = require("../src-restored/core/PixiUIExports.js")
const { UserPic } = require("../src-restored/core/UserPic.js")
const { CircleAvatar } = require("../src-restored/core/CircleAvatar.js")
const { BaseScreen } = require("../src-restored/core/BaseScreen.js")
const { FingerView } = require("../src-restored/core/FingerView.js")
const { Overlay } = require("../src-restored/core/Overlay.js")
const { ScreenContainer } = require("../src-restored/core/ScreenContainer.js")
const { ProgressBar } = require("../src-restored/core/ProgressBar.js")
const { Spinner } = require("../src-restored/core/Spinner.js")

const expectedKeys = [
  "UserPic",
  "CircleAvatar",
  "BaseScreen",
  "FingerView",
  "Overlay",
  "ScreenContainer",
  "ProgressBar",
  "Spinner",
]

assert.deepEqual(Object.keys(original), expectedKeys, "original 2D barrel keys changed")
assert.deepEqual(Object.keys(restored), expectedKeys, "restored 2D barrel keys differ")

assert.equal(restored.UserPic, UserPic)
assert.equal(restored.CircleAvatar, CircleAvatar)
assert.equal(restored.BaseScreen, BaseScreen)
assert.equal(restored.FingerView, FingerView)
assert.equal(restored.Overlay, Overlay)
assert.equal(restored.ScreenContainer, ScreenContainer)
assert.equal(restored.ProgressBar, ProgressBar)
assert.equal(restored.Spinner, Spinner)

assert.deepEqual(publicPrototypeMembers(restored.UserPic), publicPrototypeMembers(original.UserPic))
assert.deepEqual(publicPrototypeMembers(restored.CircleAvatar), publicPrototypeMembers(original.CircleAvatar))
assert.deepEqual(publicPrototypeMembers(restored.BaseScreen), publicPrototypeMembers(original.BaseScreen))
assert.deepEqual(publicPrototypeMembers(restored.FingerView), publicPrototypeMembers(original.FingerView))
assert.deepEqual(publicPrototypeMembers(restored.Overlay), publicPrototypeMembers(original.Overlay))
assert.deepEqual(publicPrototypeMembers(restored.ScreenContainer), publicPrototypeMembers(original.ScreenContainer))
assert.deepEqual(publicPrototypeMembers(restored.ProgressBar), publicPrototypeMembers(original.ProgressBar))
assert.deepEqual(publicPrototypeMembers(restored.Spinner), publicPrototypeMembers(original.Spinner))

console.log(
  JSON.stringify(
    {
      module: "PixiUIExports",
      keys: Object.keys(restored),
      restoredOverrides: expectedKeys,
      cjsFallbacks: [],
      status: "ok",
    },
    null,
    2,
  ),
)

function publicPrototypeMembers(ctor) {
  return Object.getOwnPropertyNames(ctor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}
