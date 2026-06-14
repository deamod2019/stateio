"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const original = require("../src-cjs/20811_GroupModel.js")
const restored = require("../src-restored/core/GroupModel.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "GroupModel export order differs")
assert.deepEqual(
  Object.getOwnPropertyNames(restored.GroupModel.prototype).sort(),
  Object.getOwnPropertyNames(original.GroupModel.prototype).sort(),
  "GroupModel prototype differs",
)
assert.deepEqual(
  descriptorShape(Object.getOwnPropertyDescriptor(restored.GroupModel.prototype, "IsReachedEnd")),
  descriptorShape(Object.getOwnPropertyDescriptor(original.GroupModel.prototype, "IsReachedEnd")),
  "GroupModel IsReachedEnd descriptor differs",
)

const scenarios = [
  ["constructor shape", (GroupModel) => snapshot(new GroupModel("owner", 2, 7, path(), "target", "source", 3, -1))],
  ["init and accumulate", (GroupModel) => {
    const group = new GroupModel("owner", 2, 7, path(), "target", "source", 3, -1)
    group.Init(100, 3, 0.5, 12)
    group.AccumPath(4)
    return snapshot(group)
  }],
  ["accumulate clamps at end", (GroupModel) => {
    const group = new GroupModel("owner", 2, 7, path(), "target", "source", 3, -1)
    group.Init(100, 500, 0.5, 12)
    return snapshot(group)
  }],
  ["trace along first and second segment", (GroupModel) => {
    const group = new GroupModel("owner", 2, 7, path(), "target", "source", 3, -1)
    group.Init(100, 0, 0.5, 12)
    return [group.TracePath(2), group.TracePath(7), group.TracePath(999)]
  }],
  ["generate segmented fighter shapes", (GroupModel) => {
    const group = new GroupModel("owner", 2, 12, path(), "target", "source", 3, -1)
    group.Init(100, 8, 0.5, 12)
    return group.GenerateSegments(5)
  }],
]

for (const [name, run] of scenarios) {
  assert.deepEqual(normalize(run(restored.GroupModel)), normalize(run(original.GroupModel)), name)
}

console.log(
  JSON.stringify(
    {
      module: "GroupModel",
      scenarios: scenarios.length,
      status: "ok",
    },
    null,
    2,
  ),
)

function path() {
  return [
    [0, 0],
    [4, 0],
    [4, 3],
  ]
}

function snapshot(group) {
  return {
    Owner: group.Owner,
    Speed: group.Speed,
    Amount: group.Amount,
    Path: group.Path,
    Target: group.Target,
    Source: group.Source,
    TargetAmount: group.TargetAmount,
    LastBurstTimestamp: group.LastBurstTimestamp,
    CreationTimestamp: group.CreationTimestamp,
    BurstDelay: group.BurstDelay,
    SegmentLen: group.SegmentLen,
    IsReachedEnd: group.IsReachedEnd,
    traceStart: group.TracePath(0),
    traceMid: group.TracePath(5),
    segments: group.BurstDelay === undefined ? undefined : group.GenerateSegments(4),
  }
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value))
}

function descriptorShape(descriptor) {
  return {
    hasGetter: typeof descriptor.get === "function",
    hasSetter: typeof descriptor.set === "function",
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
  }
}
