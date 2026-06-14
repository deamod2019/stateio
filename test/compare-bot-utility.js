"use strict"

const assert = require("node:assert/strict")

const original = require("../src-cjs/35081_BotUtility.js")
const restored = require("../src-restored/core/BotUtility.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "BotUtility export order differs")
assert.deepEqual(
  Object.getOwnPropertyNames(restored.BotUtility).sort(),
  Object.getOwnPropertyNames(original.BotUtility).sort(),
  "BotUtility static surface differs",
)

const scenarios = [
  ["CalculateBounds axis aligned", (BotUtility) => BotUtility.CalculateBounds([0, 0], 4, 2, 0)],
  ["CalculateBounds rotated", (BotUtility) => BotUtility.CalculateBounds([3, -2], 4, 2, 45)],
  ["DrawBox noop", (BotUtility) => BotUtility.DrawBox({})],
  ["IsPointInRectangle inside", (BotUtility) =>
    BotUtility.IsPointInRectangle([0, 0], BotUtility.CalculateBounds([0, 0], 4, 2, 0)),
  ],
  ["IsPointInRectangle outside", (BotUtility) =>
    BotUtility.IsPointInRectangle([10, 0], BotUtility.CalculateBounds([0, 0], 4, 2, 0)),
  ],
  ["IsLineIntersectCircle projection hit", (BotUtility) =>
    BotUtility.IsLineIntersectCircle([0, 0], 1, [-3, 0], [3, 0]),
  ],
  ["IsLineIntersectCircle endpoint hit", (BotUtility) =>
    BotUtility.IsLineIntersectCircle([0, 0], 1, [0.5, 4], [3, 4]),
  ],
  ["IsLineIntersectCircle miss", (BotUtility) =>
    BotUtility.IsLineIntersectCircle([0, 0], 1, [-3, 4], [3, 4]),
  ],
  ["IsRectIntersectCircle center inside", (BotUtility) =>
    BotUtility.IsRectIntersectCircle([0, 0], 1, [0, 0], 4, 2, 0),
  ],
  ["IsRectIntersectCircle edge hit", (BotUtility) =>
    BotUtility.IsRectIntersectCircle([3, 0], 1.2, [0, 0], 4, 2, 0),
  ],
  ["IsRectIntersectCircle miss", (BotUtility) =>
    BotUtility.IsRectIntersectCircle([10, 0], 1, [0, 0], 4, 2, 0),
  ],
  ["IsSegmentIntersectCircle hit", (BotUtility) =>
    BotUtility.IsSegmentIntersectCircle([0, 0], 1, segment([0, 0], 4, 2, 30)),
  ],
  ["IsSegmentIntersectSegment overlap", (BotUtility) =>
    BotUtility.IsSegmentIntersectSegment(segment([0, 0], 4, 2, 0), segment([1, 0], 4, 2, 45)),
  ],
  ["IsSegmentIntersectSegment miss", (BotUtility) =>
    BotUtility.IsSegmentIntersectSegment(segment([0, 0], 4, 2, 0), segment([10, 0], 4, 2, 0)),
  ],
]

for (const [name, run] of scenarios) {
  assert.deepEqual(normalize(run(restored.BotUtility)), normalize(run(original.BotUtility)), name)
}

console.log(
  JSON.stringify(
    {
      module: "BotUtility",
      scenarios: scenarios.length,
      status: "ok",
    },
    null,
    2,
  ),
)

function segment(Center, Width, Height, Angle) {
  return { Center, Width, Height, Angle }
}

function normalize(value) {
  if (value === undefined) return "__undefined__"
  return JSON.parse(JSON.stringify(value))
}
