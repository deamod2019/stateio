"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/66721__mod.js")
const restored = require("../src-restored/core/PathParserRuntime.js")

assert.equal(restored, original, "path parser runtime adapter must expose the original parser")
assert.equal(typeof restored, "function", "path parser runtime must be callable")

const originalCommands = collectCommands(original)
const restoredCommands = collectCommands(restored)

assert.deepEqual(restoredCommands, originalCommands, "normalized path commands differ")

console.log(
  JSON.stringify(
    {
      module: "PathParserRuntime",
      status: "ok",
    },
    null,
    2,
  ),
)

function collectCommands(parsePath) {
  const commands = []
  parsePath("M0 0 h10 v20 q5 10 15 0 c5 -10 10 10 20 0 z")
    .abs()
    .unarc()
    .unshort()
    .iterate((command, index, previousX, previousY) => {
      commands.push({
        command: Array.from(command),
        index,
        previousX,
        previousY,
      })
    }, true)
  return commands
}
