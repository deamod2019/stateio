/**
 * Restored source for Webpack Modules #70796 and #86125.
 */
"use strict"

const legacyModulePaths = [
  require.resolve("../../src-cjs/70796_Localize.js"),
  require.resolve("../../src-cjs/86125__mod.js"),
]

class Localize {
  static addTemplates(templates) {
    const mocked = getMockedLegacyLocalize()
    if (mocked?.addTemplates) return mocked.addTemplates(templates)
    Object.keys(templates).forEach((key) => Localize.templates.set(key, templates[key]))
  }

  static get(key, fallback, locale) {
    const mocked = getMockedLegacyLocalize()
    if (mocked) return mocked.get(key, fallback, locale)

    if (locale === undefined) locale = Localize.defaultLocale
    const template = this.templates.get(key)
    if (template?.localizations) {
      const resolvedLocale = resolveLocale(locale, template.localizations)
      if (resolvedLocale) {
        const localized = template.localizations[resolvedLocale]
        if (localized) return localized
      }
    }
    return template?.default || fallback || key
  }

  static get defaultLocale() {
    const mocked = getMockedLegacyLocalize()
    if (mocked && mocked.defaultLocale !== undefined) return mocked.defaultLocale
    if (!Localize._defaultLocale) {
      Localize._defaultLocale = normalizeLocale(globalThis.window?.navigator?.language)
    }
    return Localize._defaultLocale
  }

  static set defaultLocale(locale) {
    const mocked = getMockedLegacyLocalize()
    if (mocked) mocked.defaultLocale = locale
    Localize._defaultLocale = locale
  }
}

Localize.templates = new Map()

for (const modulePath of legacyModulePaths) seedLegacyLocalizeCache(modulePath)

function resolveLocale(locale, localizations) {
  const [language, region] = locale.split("_")

  if (localizations && language !== "en") {
    const available = Object.keys(localizations)
    const sameLanguage = available.filter((item) => language === item.split("_")[0])
    if (sameLanguage.length === 1) return sameLanguage[0]
    if (sameLanguage.length > 1) {
      const sameRegion = available.filter((item) => region === item.split("_")[1])
      if (sameRegion.length === 1) return sameRegion[0]
      console.warn(`Unable to determine locale for "${locale}"`)
    }
  }
}

function normalizeLocale(language) {
  if (language) {
    const [locale, region] = language.split("-")
    return region
      ? `${locale}_${region.toLocaleUpperCase()}`
      : `${locale}_${locale.toUpperCase()}`
  }
  return "en_US"
}

function getMockedLegacyLocalize() {
  for (const modulePath of legacyModulePaths) {
    const localize = require.cache[modulePath]?.exports?.Localize
    if (localize && localize !== Localize) return localize
  }
  return null
}

function seedLegacyLocalizeCache(modulePath) {
  const cached = require.cache[modulePath]
  if (cached?.exports?.Localize && cached.exports.Localize !== Localize) return

  require.cache[modulePath] = {
    id: modulePath,
    filename: modulePath,
    loaded: true,
    exports: { Localize },
  }
}

module.exports = { Localize }
