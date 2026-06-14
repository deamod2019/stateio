"use strict"

function installBrowserLikeGlobals() {
  const noop = function noop() {}
  const canvasContext = () => ({
    fillStyle: "",
    strokeStyle: "",
    globalAlpha: 1,
    font: "",
    textAlign: "left",
    textBaseline: "alphabetic",
    canvas: null,
    beginPath: noop,
    closePath: noop,
    clearRect: noop,
    clip: noop,
    drawImage: noop,
    fill: noop,
    fillRect: noop,
    fillText: noop,
    getImageData: () => ({ data: new Uint8ClampedArray(4), width: 1, height: 1 }),
    lineTo: noop,
    measureText: () => ({ width: 0 }),
    moveTo: noop,
    putImageData: noop,
    restore: noop,
    save: noop,
    scale: noop,
    setTransform: noop,
    stroke: noop,
    translate: noop,
  })
  const element = () => {
    const node = {
      style: {},
      children: [],
      childNodes: [],
      appendChild: noop,
      insertBefore: noop,
      removeChild: noop,
      setAttribute: noop,
      getAttribute: () => null,
      getContext: (type) => (type === "2d" || type === undefined ? canvasContext() : null),
      addEventListener: noop,
      removeEventListener: noop,
      getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0 }),
    }
    return node
  }

  globalThis.window ??= globalThis
  globalThis.window.addEventListener ??= noop
  globalThis.window.removeEventListener ??= noop
  globalThis.window.dispatchEvent ??= () => true
  globalThis.window.requestAnimationFrame ??= ((callback) => setTimeout(() => callback(Date.now()), 0))
  globalThis.window.cancelAnimationFrame ??= ((id) => clearTimeout(id))
  globalThis.self ??= globalThis
  globalThis.navigator ??= { userAgent: "node-restoration-check" }
  globalThis.location ??= { href: "http://localhost/" }
  globalThis.DOMParser ??= class DOMParser {
    parseFromString() {
      return { documentElement: element() }
    }
  }
  globalThis.document ??= {
    body: element(),
    head: element(),
    documentElement: element(),
    createElement: element,
    createElementNS: element,
    getElementById: () => null,
    getElementsByTagName: () => [],
    importNode: (node) => node,
    addEventListener: noop,
    removeEventListener: noop,
  }
  globalThis.Image ??= class Image {
    constructor() {
      this.onload = null
      this.onerror = null
    }
  }
  globalThis.XMLHttpRequest ??= class XMLHttpRequest {}
  globalThis.WebGLRenderingContext ??= class WebGLRenderingContext {}
  installReflectMetadataShim()
}

module.exports = { installBrowserLikeGlobals }

function installReflectMetadataShim() {
  const store = new WeakMap()

  function targetStore(target) {
    if (!store.has(target)) store.set(target, new Map())
    return store.get(target)
  }

  function metadataKey(propertyKey) {
    return propertyKey === undefined ? "__target__" : String(propertyKey)
  }

  Reflect.defineMetadata ??= function defineMetadata(key, value, target, propertyKey) {
    const byProperty = targetStore(target)
    const prop = metadataKey(propertyKey)
    if (!byProperty.has(prop)) byProperty.set(prop, new Map())
    byProperty.get(prop).set(key, value)
  }

  Reflect.hasOwnMetadata ??= function hasOwnMetadata(key, target, propertyKey) {
    return targetStore(target).get(metadataKey(propertyKey))?.has(key) || false
  }

  Reflect.hasMetadata ??= Reflect.hasOwnMetadata

  Reflect.getOwnMetadata ??= function getOwnMetadata(key, target, propertyKey) {
    return targetStore(target).get(metadataKey(propertyKey))?.get(key)
  }

  Reflect.getMetadata ??= Reflect.getOwnMetadata

  Reflect.getMetadataKeys ??= function getMetadataKeys(target, propertyKey) {
    return Array.from(targetStore(target).get(metadataKey(propertyKey))?.keys() || [])
  }

  Reflect.getOwnMetadataKeys ??= Reflect.getMetadataKeys

  Reflect.metadata ??= function metadata(key, value) {
    return function metadataDecorator(target, propertyKey) {
      Reflect.defineMetadata(key, value, target, propertyKey)
    }
  }

}
