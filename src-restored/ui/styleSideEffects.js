/**
 * Restored no-op style side-effect marker for extracted CSS modules.
 */
"use strict"

const loadedStyleModuleIds = new Set()

function includeStyle(moduleId) {
  loadedStyleModuleIds.add(String(moduleId))
}

function getLoadedStyleModuleIds() {
  return [...loadedStyleModuleIds]
}

function resetLoadedStyleModuleIds() {
  loadedStyleModuleIds.clear()
}

module.exports = includeStyle
module.exports.includeStyle = includeStyle
module.exports.getLoadedStyleModuleIds = getLoadedStyleModuleIds
module.exports.resetLoadedStyleModuleIds = resetLoadedStyleModuleIds
