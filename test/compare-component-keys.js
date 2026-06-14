"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const { Entity } = require("../src-cjs/75111__mod.js")
const { Building } = require("../src-restored/core/Building.js")
const { Spawner } = require("../src-restored/core/Spawner.js")
const { PathHolder } = require("../src-restored/core/PathHolder.js")
const { BotLogic } = require("../src-restored/core/BotLogic.js")
const { Population } = require("../src-restored/core/Population.js")
const { LevelEndSystem } = require("../src-restored/core/LevelEndSystem.js")
const { BotCalculationLogic } = require("../src-restored/core/BotCalculationLogic.js")
const { FighterGroup } = require("../src-restored/core/FighterGroup.js")
const { ActiveBuildingsQuery } = require("../src-restored/core/ActiveBuildingsQuery.js")
const { AllBuildingsQuery } = require("../src-restored/core/AllBuildingsQuery.js")
const { CapitalView } = require("../src-restored/core/CapitalView.js")
const { StateShapeView } = require("../src-restored/core/StateShapeView.js")
const { TutorialFingerView } = require("../src-restored/core/TutorialFingerView.js")
const { FighterView } = require("../src-restored/core/FighterView.js")
const { PlayerType } = require("../src-cjs/36596_PlayerType.js")

const entity = new Entity()
const spawner = new Spawner()
const pathHolder = new PathHolder()
const botLogic = Object.assign(Object.create(BotLogic.prototype), { __kind: "botLogic" })
const capitalView = Object.assign(Object.create(CapitalView.prototype), { __kind: "capitalView" })
const stateShapeView = Object.assign(Object.create(StateShapeView.prototype), { __kind: "stateShapeView" })
const tutorialFingerView = Object.assign(Object.create(TutorialFingerView.prototype), { __kind: "tutorialFingerView" })
const fighterView = Object.assign(Object.create(FighterView.prototype), { __kind: "fighterView" })

entity.add(spawner)
entity.add(pathHolder)
entity.add(botLogic)
entity.add(capitalView)
entity.add(stateShapeView)
entity.add(tutorialFingerView)
entity.add(fighterView)
entity.add(Building.ACTIVE_TAG)

assert.equal(entity.get(Spawner), spawner)
assert.equal(entity.get(PathHolder), pathHolder)
assert.equal(entity.get(BotLogic), botLogic)
assert.equal(entity.get(CapitalView), capitalView)
assert.equal(entity.get(StateShapeView), stateShapeView)
assert.equal(entity.get(TutorialFingerView), tutorialFingerView)
assert.equal(entity.get(FighterView), fighterView)
assert.equal(new LevelEndSystem().query._predicate(entity), true)
assert.equal((ActiveBuildingsQuery._predicate || ActiveBuildingsQuery.predicate)(entity), true)
assert.equal((AllBuildingsQuery._predicate || AllBuildingsQuery.predicate)(entity), true)

const bot = new BotCalculationLogic()
bot.model = {
  currentContinent: {
    buildings: new Map([
      [
        "source",
        {
          stateId: "source",
          get(key) {
            return key === PathHolder ? pathHolder : undefined
          },
        },
      ],
    ]),
  },
}

assert.equal(bot.model.currentContinent.buildings.get("source").get(PathHolder), pathHolder)

const source = Object.assign(new Entity(), {
  owner: PlayerType.Second,
  stateId: "source",
})
source.add(spawner)
source.add(pathHolder)

const target = { stateId: "target" }
const group = new FighterGroup(0, [[0, 0], [10, 0]], 1, PlayerType.Second, target, source)
assert.equal(group.BurstDelay, spawner.burstDelay)
assert.equal(group.BurstWidth, pathHolder.getPathWidth())

console.log(
  JSON.stringify(
    {
      module: "RestoredComponentKeys",
      status: "ok",
      keys: ["Spawner", "PathHolder", "BotLogic", "CapitalView", "StateShapeView", "TutorialFingerView", "FighterView", "ActiveBuildingsQuery", "AllBuildingsQuery"],
    },
    null,
    2,
  ),
)
