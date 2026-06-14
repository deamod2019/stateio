"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/77875_CommandsGenerator.js")
const restored = require("../src-restored/core/CommandsGenerator.js")
const { DecisionType } = require("../src-restored/core/DecisionType.js")
const { PlayerType } = require("../src-restored/core/PlayerType.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "CommandsGenerator export order differs")
assert.deepEqual(
  Object.getOwnPropertyNames(restored.CommandsGenerator).sort(),
  Object.getOwnPropertyNames(original.CommandsGenerator).sort(),
  "CommandsGenerator static surface differs",
)

const states = [
  {
    name: "mixed neutral and opponent",
    state: state([
      building("a", PlayerType.First),
      building("b", PlayerType.First),
      building("c", PlayerType.First),
      building("n", PlayerType.Neutral),
      building("x", PlayerType.Second),
    ]),
    owner: PlayerType.First,
    presets: [
      { maxBuildingsMove: 2, alivePlayerBuildingsLimit: -1 },
      { maxBuildingsMove: 3, alivePlayerBuildingsLimit: 3 },
      { maxBuildingsMove: 3, alivePlayerBuildingsLimit: 4 },
    ],
  },
  {
    name: "second owner with player buildings",
    state: state([
      building("p1", PlayerType.First),
      building("s1", PlayerType.Second),
      building("s2", PlayerType.Second),
      building("s3", PlayerType.Second),
      building("n1", PlayerType.Neutral),
    ]),
    owner: PlayerType.Second,
    presets: [
      { maxBuildingsMove: 1, alivePlayerBuildingsLimit: -1 },
      { maxBuildingsMove: 2, alivePlayerBuildingsLimit: 1 },
    ],
  },
  {
    name: "empty owned buildings",
    state: state([building("n1", PlayerType.Neutral)]),
    owner: PlayerType.Second,
    presets: [{ maxBuildingsMove: 3, alivePlayerBuildingsLimit: -1 }],
  },
]

let scenarioCount = 0
for (const item of states) {
  for (const preset of item.presets) {
    compare(`${item.name} attack`, (CommandsGenerator) =>
      CommandsGenerator.GenerateAttackCommands(item.state, item.owner, preset),
    )
    compare(`${item.name} defence`, (CommandsGenerator) =>
      CommandsGenerator.GenerateDefenceCommands(item.state, item.owner, preset),
    )
    compare(`${item.name} wait`, (CommandsGenerator) =>
      CommandsGenerator.GenerateWaitCommands(item.state, item.owner),
    )
    compare(`${item.name} possible`, (CommandsGenerator) =>
      CommandsGenerator.GeneratePossibleCommands(item.state, item.owner, preset),
    )
    scenarioCount += 4
  }
}

console.log(
  JSON.stringify(
    {
      module: "CommandsGenerator",
      scenarios: scenarioCount,
      status: "ok",
    },
    null,
    2,
  ),
)

function compare(name, run) {
  assert.deepEqual(
    normalize(run(restored.CommandsGenerator)),
    normalize(run(original.CommandsGenerator)),
    name,
  )
}

function state(buildings) {
  return { buildings }
}

function building(Id, Owner) {
  return { Id, Owner }
}

function normalize(commands) {
  return commands.map((command) => ({
    Type: DecisionType[command.Type],
    Subject: normalizeBuilding(command.Subject),
    Objects: (command.Objects || []).map(normalizeBuilding),
  }))
}

function normalizeBuilding(building) {
  if (!building) return building
  return { Id: building.Id, Owner: building.Owner }
}
