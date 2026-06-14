"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const gsapModule = require("../src-cjs/25317_SteppedEase.js")
const gsapCssModule = require("../src-cjs/10990__mod.js")
const { Sprite } = require("../src-cjs/6538_SIDES.js")

const original = {
  BaseScreen: require("../src-cjs/49083_BaseScreen.js").BaseScreen,
  Overlay: require("../src-cjs/41099_Overlay.js").Overlay,
  ScreenContainer: require("../src-cjs/6846_ScreenContainer.js").ScreenContainer,
  ProgressBar: require("../src-cjs/56212_ProgressBar.js").ProgressBar,
  Spinner: require("../src-cjs/68878_Spinner.js").Spinner,
}

const restored = {
  BaseScreen: require("../src-restored/core/BaseScreen.js").BaseScreen,
  Overlay: require("../src-restored/core/Overlay.js").Overlay,
  ScreenContainer: require("../src-restored/core/ScreenContainer.js").ScreenContainer,
  ProgressBar: require("../src-restored/core/ProgressBar.js").ProgressBar,
  Spinner: require("../src-restored/core/Spinner.js").Spinner,
}

for (const key of Object.keys(original)) {
  assert.deepEqual(
    publicPrototypeMembers(restored[key]),
    publicPrototypeMembers(original[key]),
    `${key} public prototype changed`,
  )
}

main()
  .then(() => {
    console.log(
      JSON.stringify(
        {
          modules: Object.keys(restored),
          scenarios: [
            "base-screen-fades",
            "overlay-blur-unblur",
            "screen-container-swap",
            "progress-bar-animation-state",
            "spinner-visibility-spin",
          ],
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })

async function main() {
  await compareBaseScreen()
  await withGsapHarness(async () => {
    await compareOverlay()
    await compareProgressBar()
    await compareSpinner()
  })
  await compareScreenContainer()
}

async function compareBaseScreen() {
  const originalScreen = new original.BaseScreen()
  const restoredScreen = new restored.BaseScreen()

  assert.equal(await originalScreen.fadeIn(), await restoredScreen.fadeIn())
  assert.equal(await originalScreen.fadeOut(), await restoredScreen.fadeOut())
}

async function compareOverlay() {
  const originalResult = await overlayScenario(original.Overlay)
  const restoredResult = await overlayScenario(restored.Overlay)
  assert.deepEqual(restoredResult, originalResult)
}

async function overlayScenario(OverlayClass) {
  const overlay = new OverlayClass()
  currentHarness.targets.set(overlay, "overlay")
  overlay.onAdded()

  await overlay.blur()
  const afterBlur = snapshot(overlay, ["_blured", "interactive", "renderable", "alpha"])
  await overlay.unblur(0.7)

  return {
    afterBlur,
    afterUnblur: snapshot(overlay, ["_blured", "interactive", "renderable", "alpha"]),
    records: currentHarness.records.splice(0),
  }
}

async function compareScreenContainer() {
  const originalResult = await screenContainerScenario(original.ScreenContainer, original.BaseScreen)
  const restoredResult = await screenContainerScenario(restored.ScreenContainer, restored.BaseScreen)
  assert.deepEqual(restoredResult, originalResult)
}

async function screenContainerScenario(ScreenContainerClass, BaseScreenClass) {
  const records = []
  const container = new ScreenContainerClass()
  container.size = { width: 321, height: 123 }

  const first = makeScreen(BaseScreenClass, "first", records)
  const second = makeScreen(BaseScreenClass, "second", records)

  await container.setScreen(first)
  const afterFirst = {
    screen: container.screen === first ? "first" : "other",
    children: container.children.length,
    records: records.splice(0),
  }

  await container.setScreen(second)
  return {
    afterFirst,
    afterSecond: {
      screen: container.screen === second ? "second" : "other",
      children: container.children.length,
      hasFirst: container.children.includes(first),
      hasSecond: container.children.includes(second),
      records,
    },
  }
}

async function compareProgressBar() {
  const originalResult = progressBarScenario(original.ProgressBar)
  const restoredResult = progressBarScenario(restored.ProgressBar)
  assert.deepEqual(restoredResult, originalResult)
}

function progressBarScenario(ProgressBarClass) {
  const bar = new ProgressBarClass()
  currentHarness.targets.set(bar, "bar")
  currentHarness.targets.set(bar.fg, "bar.fg")
  currentHarness.targets.set(bar.bg, "bar.bg")

  bar.init({ width: 200, height: 6 })
  bar.onAdded()
  bar.show(2)
  bar.progress = 0.5
  bar.hide()

  return {
    state: snapshot(bar, ["_progress", "_barWidth", "visible", "alpha"]),
    childCount: bar.children.length,
    records: currentHarness.records.splice(0),
  }
}

async function compareSpinner() {
  const originalResult = spinnerScenario(original.Spinner)
  const restoredResult = spinnerScenario(restored.Spinner)
  assert.deepEqual(restoredResult, originalResult)
}

function spinnerScenario(SpinnerClass) {
  const spinner = new SpinnerClass()
  const sprite = new Sprite()
  Object.defineProperty(spinner, "graphics", { value: sprite, configurable: true, writable: true })
  currentHarness.targets.set(spinner, "spinner")
  currentHarness.targets.set(sprite, "spinner.graphics")

  spinner.onAdded()
  spinner.show()
  const afterShow = {
    spinning: spinner.spinning,
    visible: spinner.graphics.visible,
    rotation: round(spinner.graphics.rotation),
    childCount: spinner.children.length,
  }

  spinner.hide()
  return {
    afterShow,
    afterHide: {
      spinning: spinner.spinning,
      visible: spinner.graphics.visible,
      rotation: round(spinner.graphics.rotation),
      childCount: spinner.children.length,
    },
    records: currentHarness.records.splice(0),
  }
}

function makeScreen(BaseScreenClass, label, records) {
  const screen = new BaseScreenClass()
  screen.fadeIn = async () => {
    records.push([label, "fadeIn"])
  }
  screen.fadeOut = async () => {
    records.push([label, "fadeOut"])
  }
  screen.resize = (width, height) => {
    records.push([label, "resize", width, height])
  }
  return screen
}

let currentHarness = null
const originalEnv = {
  gsapTo: gsapModule.gsap.to,
  gsapFromTo: gsapModule.gsap.fromTo,
  gsapKillTweensOf: gsapModule.gsap.killTweensOf,
  gsapCssTo: gsapCssModule.default.to,
  setTimeout: globalThis.setTimeout,
  clearTimeout: globalThis.clearTimeout,
}

async function withGsapHarness(run) {
  currentHarness = { records: [], targets: new Map() }

  gsapModule.gsap.killTweensOf = function killTweensOf(target, props) {
    currentHarness.records.push(["gsap.killTweensOf", labelTarget(target), props])
  }
  gsapModule.gsap.fromTo = function fromTo(target, fromVars, toVars) {
    currentHarness.records.push(["gsap.fromTo", labelTarget(target), fromVars, cloneTweenVars(toVars)])
    applyTweenVars(target, fromVars)
    applyTweenVars(target, toVars)
    return makeCompletedTween()
  }
  gsapModule.gsap.to = function to(target, toVars) {
    currentHarness.records.push(["gsap.to", labelTarget(target), cloneTweenVars(toVars)])
    applyTweenVars(target, toVars)
    return makeCompletedTween()
  }
  gsapCssModule.default.to = function cssTo(target, toVars) {
    currentHarness.records.push(["gsapCss.to", labelTarget(target), cloneTweenVars(toVars)])
    applyTweenVars(target, toVars)
    return makeCompletedTween()
  }
  globalThis.setTimeout = function fakeSetTimeout(callback, delay) {
    currentHarness.records.push(["setTimeout", typeof callback, delay])
    return `timeout-${currentHarness.records.length}`
  }
  globalThis.clearTimeout = function fakeClearTimeout(id) {
    currentHarness.records.push(["clearTimeout", id ?? null])
  }

  try {
    await run()
  } finally {
    gsapModule.gsap.to = originalEnv.gsapTo
    gsapModule.gsap.fromTo = originalEnv.gsapFromTo
    gsapModule.gsap.killTweensOf = originalEnv.gsapKillTweensOf
    gsapCssModule.default.to = originalEnv.gsapCssTo
    globalThis.setTimeout = originalEnv.setTimeout
    globalThis.clearTimeout = originalEnv.clearTimeout
    currentHarness = null
  }
}

function applyTweenVars(target, vars) {
  for (const [key, value] of Object.entries(vars || {})) {
    if (key === "onComplete") continue
    if (key === "duration" || key === "delay" || key === "ease") continue
    target[key] = value
  }
  vars?.onComplete?.()
}

function makeCompletedTween() {
  return {
    isActive: () => false,
    then: () => Promise.resolve(),
  }
}

function cloneTweenVars(vars) {
  const clone = {}
  for (const [key, value] of Object.entries(vars || {})) {
    clone[key] = typeof value === "function" ? "function" : value
  }
  return clone
}

function snapshot(target, keys) {
  return Object.fromEntries(keys.map((key) => [key, target[key]]))
}

function labelTarget(target) {
  return currentHarness.targets.get(target) || target?.constructor?.name || typeof target
}

function publicPrototypeMembers(ctor) {
  return Object.getOwnPropertyNames(ctor.prototype)
    .filter((key) => key !== "constructor")
    .sort()
}

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
