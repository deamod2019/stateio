/**
 * Restored source for Webpack Module #11617.
 */
"use strict"

const jsxRuntime = require("./jsxRuntime")
const { di } = require("../core/RuntimeCore")
const { TypesFlow } = require("../core/CoreTypes")
const { parseLevelSVG } = require("../core/LevelParser")
const { GameModel } = require("../core/GameModel")
const { TypesGame } = require("../core/TypesGame")
const { useCallback, useState } = require("./preactHooks")
const { FileDropArea } = require("./FileDropArea")

function readSVGFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsText(file, "UTF-8")
    reader.onload = (event) => {
      try {
        const result = event.target === null || event.target === undefined ? undefined : event.target.result
        const document = new window.DOMParser().parseFromString(result, "text/xml")
        resolve(parseLevelSVG(document))
      } catch (error) {
        reject(error)
      }
    }
  })
}

function disposeCurrentLevel() {
  di.get(TypesGame.model).disposeCurrentLevel()
}

function DebugLevelPicker() {
  const forceUpdate = useState({})[1]
  const refresh = useCallback(() => forceUpdate({}), [])
  const model = di.get(TypesGame.model)

  return jsxRuntime.jsxs("div", {
    children: [
      jsxRuntime.jsx("select", {
        name: "levels",
        id: "levels-picker",
        onChange(event) {
          const select = event.currentTarget
          const selected = select.item(select.selectedIndex)
          const value = selected == null ? undefined : selected.value
          if (value && !value.startsWith(model.currentContinent.data.id)) {
            disposeCurrentLevel()
            di.get(TypesFlow.LevelStart).run(value)
          }
        },
        children: GameModel.LEVELS_PREDEFINED.concat(Object.keys(model.levels)).map((levelId) =>
          jsxRuntime.jsx("option", {
            value: levelId,
            selected: levelId.startsWith(model.currentContinent.data.id),
            children: `${model.levels[levelId] ? "+" : ""}${levelId}`,
          }),
        ),
      }),
      jsxRuntime.jsx(FileDropArea, {
        handleDrop(files) {
          if (files && files.length > 0) {
            const pending = []
            for (let index = 0; index < files.length; index++) {
              const file = files[index]
              if (file.name.endsWith(".svg")) {
                pending.push(
                  readSVGFile(file).then((levelData) => {
                    const gameModel = di.get(TypesGame.model)
                    const levelModel = di.get(TypesGame.levelModel).init(levelData)
                    gameModel.levels[levelData.id] = levelModel
                    return Promise.resolve(levelModel)
                  }),
                )
              }
              Promise.all(pending).then((levels) => {
                if (levels.length == 1) {
                  const level = levels[0]
                  disposeCurrentLevel()
                  di.get(TypesFlow.LevelStart).run(level.data.id)
                }
                refresh()
              })
            }
          }
        },
      }),
    ],
  })
}

module.exports = { DebugLevelPicker }
