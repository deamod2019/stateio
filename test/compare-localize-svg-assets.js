"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const restoredLocalize = require("../src-restored/core/Localize.js").Localize
const originalLocalize = require("../src-cjs/86125__mod.js").Localize
const originalSvg = require("../src-cjs/36622_SVG.js")
const restoredSvg = require("../src-restored/ui/SVGAssets.js")

compareLocalize()
compareSvgAssets()

console.log(
  JSON.stringify(
    {
      modules: ["Localize", "SVGAssets"],
      status: "ok",
    },
    null,
    2,
  ),
)

function compareLocalize() {
  assert.equal(originalLocalize, restoredLocalize, "legacy Localize barrel must share restored identity")

  const originalDefault = originalLocalize.defaultLocale
  const restoredDefault = restoredLocalize.defaultLocale
  const keyPrefix = `restore.test.${Date.now()}`

  try {
    const templates = {
      [`${keyPrefix}.plain`]: { default: "Plain" },
      [`${keyPrefix}.localized`]: {
        default: "Hello",
        localizations: {
          es_ES: "Hola",
          pt_BR: "Ola",
        },
      },
      [`${keyPrefix}.ambiguous`]: {
        default: "Default",
        localizations: {
          pt_PT: "Portugal",
          pt_BR: "Brasil",
        },
      },
    }

    originalLocalize.addTemplates(templates)
    restoredLocalize.addTemplates(templates)

    const cases = [
      ["missing uses fallback", `${keyPrefix}.missing`, "Fallback", "es_ES"],
      ["missing uses key", `${keyPrefix}.missingKey`, undefined, "es_ES"],
      ["default template", `${keyPrefix}.plain`, undefined, "es_ES"],
      ["single language localization", `${keyPrefix}.localized`, undefined, "es_MX"],
      ["region disambiguation", `${keyPrefix}.ambiguous`, undefined, "fr_BR"],
      ["english falls back to default", `${keyPrefix}.localized`, undefined, "en_US"],
    ]

    for (const [, key, fallback, locale] of cases) {
      assert.equal(
        restoredLocalize.get(key, fallback, locale),
        originalLocalize.get(key, fallback, locale),
      )
    }

    originalLocalize.defaultLocale = undefined
    restoredLocalize.defaultLocale = undefined
    const previousLanguage = globalThis.window.navigator.language
    Object.defineProperty(globalThis.window.navigator, "language", {
      configurable: true,
      value: "de-at",
    })
    assert.equal(restoredLocalize.defaultLocale, originalLocalize.defaultLocale)
    Object.defineProperty(globalThis.window.navigator, "language", {
      configurable: true,
      value: previousLanguage,
    })
  } finally {
    originalLocalize.defaultLocale = originalDefault
    restoredLocalize.defaultLocale = restoredDefault
    for (const key of Array.from(originalLocalize.templates.keys())) {
      if (key.startsWith(keyPrefix)) originalLocalize.templates.delete(key)
    }
    for (const key of Array.from(restoredLocalize.templates.keys())) {
      if (key.startsWith(keyPrefix)) restoredLocalize.templates.delete(key)
    }
  }
}

function compareSvgAssets() {
  assert.deepEqual(
    Object.keys(restoredSvg).sort(),
    Object.keys(originalSvg).sort(),
    "SVG barrel exports differ",
  )
  assert.deepEqual(
    Object.keys(restoredSvg.SVG).sort(),
    Object.keys(originalSvg.SVG).sort(),
    "SVG icon keys differ",
  )
  assert.deepEqual(
    Object.keys(restoredSvg.Images).sort(),
    Object.keys(originalSvg.Images).sort(),
    "image keys differ",
  )

  for (const iconName of ["Settings", "Sounds", "Music", "Vibrate", "COINS", "PopupLose"]) {
    assert.deepEqual(
      summarizeSvgVNode(restoredSvg.SVG[iconName]({ className: "sample" })),
      summarizeSvgVNode(originalSvg.SVG[iconName]({ className: "sample" })),
      `${iconName} vnode differs`,
    )
  }

  for (const imageName of ["Gift", "Star"]) {
    assert.deepEqual(
      summarizeImageVNode(restoredSvg.Images[imageName]()),
      summarizeImageVNode(originalSvg.Images[imageName]()),
      `${imageName} image vnode differs`,
    )
  }

  assert.equal(restoredSvg.win_rays.default.id, originalSvg.win_rays.default.id)
  assert.equal(restoredSvg.cancel_icon.default.id, originalSvg.cancel_icon.default.id)
  assert.equal(restoredSvg.confirm_icon.default.id, originalSvg.confirm_icon.default.id)
  assert.equal(restoredSvg.no_ads_icon.default.id, originalSvg.no_ads_icon.default.id)
}

function summarizeSvgVNode(vnode) {
  return {
    type: typeof vnode.type,
    svgId: vnode.props.svg.default.id,
    className: vnode.props.className,
    inline: vnode.props.inline,
  }
}

function summarizeImageVNode(vnode) {
  return {
    type: vnode.type,
    src: vnode.props.src,
  }
}
