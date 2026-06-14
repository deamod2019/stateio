/**
 * Readable wrappers around TypeScript/Inversify decorator output.
 */
"use strict"

const { inject, injectable } = require("./diRuntime")

function injectProperty(targetClass, propertyName, token, designType) {
  inject(token)(targetClass.prototype, propertyName)
  applyDesignMetadata(targetClass.prototype, propertyName, "design:type", designType)
}

function injectToken(targetClass, propertyName, token) {
  inject(token)(targetClass.prototype, propertyName)
}

function lazyInjectProperty(targetClass, propertyName, token, designType) {
  const { lazyInject } = require("./RuntimeCore")
  lazyInject(token)(targetClass.prototype, propertyName)
  applyDesignMetadata(targetClass.prototype, propertyName, "design:type", designType)
}

function lazyInjectToken(targetClass, propertyName, token) {
  const { lazyInject } = require("./RuntimeCore")
  lazyInject(token)(targetClass.prototype, propertyName)
}

function deferredLazyInjectProperty(targetClass, propertyName, token, designType) {
  Object.defineProperty(targetClass.prototype, propertyName, {
    get() {
      const { di } = require("./RuntimeCore")
      const value = di.get(token)
      Object.defineProperty(this, propertyName, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      })
      return value
    },
    set(value) {
      Object.defineProperty(this, propertyName, {
        value,
        writable: true,
        enumerable: true,
        configurable: true,
      })
    },
    enumerable: true,
    configurable: true,
  })
  applyDesignMetadata(targetClass.prototype, propertyName, "design:type", designType)
}

function applyDesignMetadata(target, propertyName, metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    Reflect.metadata(metadataKey, metadataValue)(target, propertyName)
  }
}

function applyClassMetadata(targetClass, metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") {
    Reflect.metadata(metadataKey, metadataValue)(targetClass)
  }
}

function markInjectable(targetClass) {
  injectable()(targetClass)
  return targetClass
}

function defineDecoratedProperty(targetClass, propertyName) {
  if (!Object.prototype.hasOwnProperty.call(targetClass.prototype, propertyName)) {
    Object.defineProperty(targetClass.prototype, propertyName, {
      value: undefined,
      writable: false,
      enumerable: false,
      configurable: false,
    })
  }
}

module.exports = {
  applyClassMetadata,
  applyDesignMetadata,
  deferredLazyInjectProperty,
  defineDecoratedProperty,
  injectProperty,
  injectToken,
  lazyInjectProperty,
  lazyInjectToken,
  markInjectable,
}
