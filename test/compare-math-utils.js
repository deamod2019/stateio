"use strict"

const assert = require("node:assert/strict")

const originalMathOnly = require("../src-cjs/68532__mod.js")
const original = require("../src-cjs/77577__mod.js")
const restored = require("../src-restored/core/MathUtils.js")

assert.deepEqual(Object.keys(restored), Object.keys(original), "MathUtils export order differs")
assert.deepEqual(Object.keys(restored.math), Object.keys(original.math), "math helper order differs")
assert.deepEqual(Object.keys(restored.color), Object.keys(original.color), "color helper order differs")

for (const module of [originalMathOnly, original]) {
  compareMath(module, restored)
}
compareColor(original, restored)
compareOwnerGenerator(original, restored)

console.log(
  JSON.stringify(
    {
      module: "MathUtils",
      mathKeys: Object.keys(restored.math).length,
      colorKeys: Object.keys(restored.color).length,
      status: "ok",
    },
    null,
    2,
  ),
)

function compareMath(source, target) {
  const samples = [
    ["dist", () => source.dist([0, 0], [3, 4]), () => target.dist([0, 0], [3, 4])],
    ["lerp", () => source.math.lerp([0, 10], [10, 20], 0.25), () => target.math.lerp([0, 10], [10, 20], 0.25)],
    ["len", () => source.math.len([3, 4]), () => target.math.len([3, 4])],
    ["sum", () => source.math.sum([1, 2], [3, 4]), () => target.math.sum([1, 2], [3, 4])],
    ["sub", () => source.math.sub([1, 2], [3, 4]), () => target.math.sub([1, 2], [3, 4])],
    ["scale", () => source.math.scale([2, -3], 4), () => target.math.scale([2, -3], 4)],
    ["rotate", () => source.math.rotate([1, 2], Math.PI / 3), () => target.math.rotate([1, 2], Math.PI / 3)],
    ["rotateAround", () => source.math.rotateAround([10, 20], [1, 2], Math.PI / 3), () => target.math.rotateAround([10, 20], [1, 2], Math.PI / 3)],
    ["norm", () => source.math.norm([3, 4]), () => target.math.norm([3, 4])],
    ["dot", () => source.math.dot([1, 2], [3, 4]), () => target.math.dot([1, 2], [3, 4])],
    ["clamp low", () => source.math.clamp(-1, 0, 1), () => target.math.clamp(-1, 0, 1)],
    ["clamp high", () => source.math.clamp(2, 0, 1), () => target.math.clamp(2, 0, 1)],
    ["repeat", () => source.math.repeat(101, 100), () => target.math.repeat(101, 100)],
    ["remap", () => source.math.remap(5, 0, 10, 100, 200), () => target.math.remap(5, 0, 10, 100, 200)],
    ["approximately true", () => source.math.approximately(1, 1 + 1e-8), () => target.math.approximately(1, 1 + 1e-8)],
    ["approximately false", () => source.math.approximately(1, 1.1), () => target.math.approximately(1, 1.1)],
    ["angle", () => source.math.angle([0, 0], [1, 1]), () => target.math.angle([0, 0], [1, 1])],
    ["round default", () => source.math.round(1.23456), () => target.math.round(1.23456)],
    ["round precision", () => source.math.round(1.23456, 10), () => target.math.round(1.23456, 10)],
    ["array_summ", () => source.math.array_summ([1, 2, 3]), () => target.math.array_summ([1, 2, 3])],
    ["constants", () => [source.math.RAD2DEG, source.math.DEG2RAD, source.math.EPSILON], () => [target.math.RAD2DEG, target.math.DEG2RAD, target.math.EPSILON]],
  ]

  for (const [name, sourceRun, targetRun] of samples) {
    assert.deepEqual(normalize(targetRun()), normalize(sourceRun()), `math ${name} differs`)
  }
}

function compareColor(source, target) {
  const samples = [
    ["fromHex", () => source.color.fromHex("#112233"), () => target.color.fromHex("#112233")],
    ["fromHex no hash quirk", () => source.color.fromHex("112233"), () => target.color.fromHex("112233")],
    ["toRGB", () => source.color.toRGB(0x112233), () => target.color.toRGB(0x112233)],
    ["fromRGB varargs", () => source.color.fromRGB(17, 34, 51), () => target.color.fromRGB(17, 34, 51)],
    ["fromRGB float truncation", () => source.color.fromRGB(127.5, 1.5, 2.5), () => target.color.fromRGB(127.5, 1.5, 2.5)],
    ["lerp low", () => source.color.lerp(0, 0xffffff, 0), () => target.color.lerp(0, 0xffffff, 0)],
    ["lerp high", () => source.color.lerp(0, 0xffffff, 1), () => target.color.lerp(0, 0xffffff, 1)],
    ["lerp middle", () => source.color.lerp(0, 0xffffff, 0.5), () => target.color.lerp(0, 0xffffff, 0.5)],
    ["lerp asymmetric", () => source.color.lerp(0x112233, 0xaabbcc, 0.3), () => target.color.lerp(0x112233, 0xaabbcc, 0.3)],
    ["pale default", () => source.color.pale(0x112233), () => target.color.pale(0x112233)],
    ["pale custom", () => source.color.pale(0x112233, 0.2), () => target.color.pale(0x112233, 0.2)],
    ["rgbToHsl", () => source.color.rgbToHsl(17, 34, 51), () => target.color.rgbToHsl(17, 34, 51)],
    ["rgbToHsl gray", () => source.color.rgbToHsl(128, 128, 128), () => target.color.rgbToHsl(128, 128, 128)],
  ]

  for (const [name, sourceRun, targetRun] of samples) {
    assert.deepEqual(normalize(targetRun()), normalize(sourceRun()), `color ${name} differs`)
  }
}

function compareOwnerGenerator(source, target) {
  const fills = ["#DE7676", "#DE7676", "#74BCFF", "#ffffff", undefined]
  const sourceGenerator = source.getOwnerGenerator()
  const targetGenerator = target.getOwnerGenerator()
  assert.deepEqual(
    fills.map((fill) => targetGenerator(fill)),
    fills.map((fill) => sourceGenerator(fill)),
    "default owner generator differs",
  )

  const sourceCustom = source.getOwnerGenerator([7, 8])
  const targetCustom = target.getOwnerGenerator([7, 8])
  assert.deepEqual(
    ["#DE7676", "#DE7676"].map((fill) => targetCustom(fill)),
    ["#DE7676", "#DE7676"].map((fill) => sourceCustom(fill)),
    "custom owner generator differs",
  )
}

function normalize(value) {
  return JSON.parse(
    JSON.stringify(value, (_, item) => {
      if (typeof item === "number") {
        if (Number.isNaN(item)) return "NaN"
        return Math.round(item * 1e12) / 1e12
      }
      return item
    }),
  )
}
