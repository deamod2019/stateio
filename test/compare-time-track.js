"use strict"

const assert = require("node:assert/strict")

const { TimeTrack: OriginalTimeTrack } = require("../src-cjs/39887_TimeTrack.js")
const { TimeTrack: RestoredTimeTrack } = require("../src-restored/core/TimeTrack.js")

assert.deepEqual(
  publicPrototypeMembers(RestoredTimeTrack),
  publicPrototypeMembers(OriginalTimeTrack),
  "TimeTrack prototype surface differs",
)

const originalResult = exercise(OriginalTimeTrack)
const restoredResult = exercise(RestoredTimeTrack)

assert.deepEqual(restoredResult, originalResult, "TimeTrack state transitions differ")

console.log(
  JSON.stringify(
    {
      module: "TimeTrack",
      prototype: publicPrototypeMembers(RestoredTimeTrack),
      status: "ok",
    },
    null,
    2,
  ),
)

function exercise(Klass) {
  const originalDateNow = Date.now
  const originalSetInterval = globalThis.setInterval
  const originalClearInterval = globalThis.clearInterval
  const originalClearTimeout = globalThis.clearTimeout
  const records = []
  const clock = { now: 1000 }
  let nextIntervalId = 0
  let intervalCallback = null

  Date.now = () => clock.now
  globalThis.setInterval = (callback, interval) => {
    records.push(["setInterval", interval])
    intervalCallback = callback
    nextIntervalId += 1
    return `interval-${nextIntervalId}`
  }
  globalThis.clearInterval = (id) => records.push(["clearInterval", id])
  globalThis.clearTimeout = (id) => records.push(["clearTimeout", id])

  try {
    const timer = new Klass(123, () => {
      records.push(["tick", clock.now])
    })

    records.push(["initial", snapshot(timer)])
    timer.start()
    records.push(["afterStart", snapshot(timer)])
    clock.now = 1125
    records.push(["total", timer.getTotalTime()])
    intervalCallback()
    timer.pause()
    records.push(["afterPause", snapshot(timer)])
    clock.now = 1300
    timer.resume()
    records.push(["afterResume", snapshot(timer)])
    clock.now = 1450
    records.push(["totalAfterResume", timer.getTotalTime()])
    timer.stop()
    records.push(["afterStop", snapshot(timer)])
    timer.pause()
    records.push(["pauseWhenStopped", snapshot(timer)])
    return normalize(records)
  } finally {
    Date.now = originalDateNow
    globalThis.setInterval = originalSetInterval
    globalThis.clearInterval = originalClearInterval
    globalThis.clearTimeout = originalClearTimeout
  }
}

function snapshot(timer) {
  return {
    interval: timer.interval,
    isRunning: timer.isRunning,
    startTime: timer.startTime,
    totalTime: timer.getTotalTime(),
  }
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number" && Number.isNaN(item)) return "NaN"
      if (item === undefined) return "__undefined__"
      return item
    }),
  )
}

function publicPrototypeMembers(klass) {
  return Object.getOwnPropertyNames(klass.prototype)
    .filter((name) => name !== "constructor")
    .sort()
}
