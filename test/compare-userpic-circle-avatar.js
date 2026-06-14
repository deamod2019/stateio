"use strict"

const assert = require("node:assert/strict")
const { installBrowserLikeGlobals } = require("./setup-browser-like-globals")

installBrowserLikeGlobals()

const textures = require("../src-cjs/4199__mod.js")
const restoredTextures = require("../src-restored/core/TextureLoader.js")
const pixi = require("../src-cjs/6538_SIDES.js")
const { UserPic: OriginalUserPic } = require("../src-cjs/78001_UserPic.js")
const { CircleAvatar: OriginalCircleAvatar } = require("../src-cjs/42970_CircleAvatar.js")
const { UserPic: RestoredUserPic } = require("../src-restored/core/UserPic.js")
const { CircleAvatar: RestoredCircleAvatar } = require("../src-restored/core/CircleAvatar.js")

const originalLoadTexture = textures.loadTexture
const originalRestoredLoadTexture = restoredTextures.loadTexture
let loadCalls = []

Promise.resolve()
  .then(async () => {
    await compareScenario("UserPic constructor creates square background", async (deps) => {
      const pic = new deps.UserPic()
      return snapshotUserPic(pic)
    })

    await compareScenario("UserPic loads user photo and replaces old sprite", async (deps) => {
      const pic = new deps.UserPic()
      await setUserAndFlush(pic, { id: "u1", photo: "/u1.png" })
      const first = snapshotUserPic(pic)
      await setUserAndFlush(pic, { id: "u2", photo: "/u2.png" })
      return {
        first,
        second: snapshotUserPic(pic),
        loadCalls,
      }
    })

    await compareScenario("CircleAvatar onAdded masks and draws circle background", async (deps) => {
      const avatar = new deps.CircleAvatar()
      avatar.onAdded()
      avatar.bgColor = 0x112233
      return snapshotCircleAvatar(avatar)
    })

    await compareScenario("CircleAvatar image load recenters masked image container", async (deps) => {
      const avatar = new deps.CircleAvatar()
      avatar.onAdded()
      await setUserAndFlush(avatar, { id: "u3", photo: "/u3.png" })
      return snapshotCircleAvatar(avatar)
    })

    console.log(
      JSON.stringify(
        {
          modules: ["UserPic", "CircleAvatar"],
          scenarios: 4,
          status: "ok",
        },
        null,
        2,
      ),
    )
  })
  .catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => {
    textures.loadTexture = originalLoadTexture
    restoredTextures.loadTexture = originalRestoredLoadTexture
  })

async function compareScenario(name, run) {
  const original = normalize(await withMockedTextureLoader(() => run({
    UserPic: OriginalUserPic,
    CircleAvatar: OriginalCircleAvatar,
  })))
  const restored = normalize(await withMockedTextureLoader(() => run({
    UserPic: RestoredUserPic,
    CircleAvatar: RestoredCircleAvatar,
  })))
  assert.deepEqual(restored, original, name)
}

async function withMockedTextureLoader(run) {
  loadCalls = []
  textures.loadTexture = async function loadTexture(path) {
    loadCalls.push(path)
    const texture = pixi.Texture.WHITE
    texture.textureCacheIds = []
    return texture
  }
  restoredTextures.loadTexture = textures.loadTexture

  return run()
}

async function setUserAndFlush(pic, user) {
  pic.user = user
  await Promise.resolve()
  await Promise.resolve()
}

function snapshotUserPic(pic) {
  return {
    childTypes: pic.children.map(displayType),
    bgAndImgChildTypes: pic.bgAndImgCont.children.map(displayType),
    bgWidth: pic.bg.width,
    bgHeight: pic.bg.height,
    user: pic.user && { id: pic.user.id, photo: pic.user.photo },
    spriteExists: Boolean(pic.sprite),
    spriteWidth: pic.sprite?.width,
    spriteHeight: pic.sprite?.height,
    spriteCacheId: pic.sprite?.texture?.textureCacheIds?.[0],
  }
}

function snapshotCircleAvatar(avatar) {
  return {
    userPic: snapshotUserPic(avatar),
    bgColor: avatar.bgColor,
    childTypes: avatar.children.map(displayType),
    hasMask: Boolean(avatar.bgAndImgCont.mask),
    maskType: displayType(avatar.bgAndImgCont.mask),
    circleBgWidth: Math.round(avatar.circleBg.width),
    circleBgHeight: Math.round(avatar.circleBg.height),
    bgAndImgWidth: Math.round(avatar.bgAndImgCont.width),
    bgAndImgX: Math.round(avatar.bgAndImgCont.x),
    bgAndImgY: Math.round(avatar.bgAndImgCont.y),
  }
}

function displayType(value) {
  if (!value) return value
  return value.constructor?.name || typeof value
}

function normalize(value) {
  return JSON.parse(JSON.stringify(value, (_, item) => {
    if (typeof item === "function") return "[function]"
    if (typeof item === "symbol") return item.toString()
    if (item === undefined) return "__undefined__"
    return item
  }))
}
