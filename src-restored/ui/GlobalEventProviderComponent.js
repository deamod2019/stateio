/**
 * Restored source for Webpack Module #97949.
 */
"use strict"

const preact = require("./preactRuntime")
const { TypesCore } = require("../core/CoreTypes")

const BaseComponent = preact.Component || class Component {}

class GlobalEventProviderComponent extends BaseComponent {
  constructor() {
    super(...arguments)
    this.listenersMap = {}
  }

  componentWillUnmount() {
    this.removeAllListeners()
  }

  dispatch(eventName, payload) {
    this._dispatcher.emit(eventName, payload)
  }

  addListener(eventName, listener) {
    if (this.mapListenerToEvent(eventName, listener, this.listenersMap)) {
      this._dispatcher.on(eventName, listener, this)
    } else {
      console.warn(`Listener ${listener} for event ${eventName} is already exists`)
    }
  }

  addListenerOnce(eventName, listener) {
    const once = (payload) => {
      listener.call(this, payload)
      this.removeListener(eventName, once)
    }
    this.addListener(eventName, once)
  }

  removeListener(eventName, listener) {
    if (this.unMapListenerToEvent(eventName, listener, this.listenersMap)) {
      this._dispatcher.off(eventName, listener, this)
    } else {
      console.warn(`${listener} is not a listener for event ${eventName}`)
    }
  }

  removeListeners(eventName) {
    const listeners = this.listenersMap[eventName]
    if (listeners) {
      for (const listener of listeners) this._dispatcher.off(eventName, listener, this)
      delete this.listenersMap[eventName]
    } else {
      console.warn(`There are no any listeners for event ${eventName}`)
    }
  }

  removeAllListeners() {
    for (const eventName of Object.keys(this.listenersMap)) this.removeListeners(eventName)
    this.listenersMap = {}
  }

  hasListeners() {
    return Object.keys(this.listenersMap).length !== 0
  }

  mapListenerToEvent(eventName, listener, listenersMap) {
    let listeners = listenersMap[eventName]
    if (listeners) {
      if (listeners.indexOf(listener) > -1) return false
      listeners.push(listener)
    } else {
      listeners = [listener]
      listenersMap[eventName] = listeners
    }
    return true
  }

  unMapListenerToEvent(eventName, listener, listenersMap) {
    const listeners = listenersMap[eventName]
    if (listeners) {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
        if (listeners.length === 0) delete listenersMap[eventName]
        return true
      }
    }
    return false
  }
}

try {
  const { lazyInjectToken } = require("../core/DecoratorHelpers")
  lazyInjectToken(GlobalEventProviderComponent, "_dispatcher", TypesCore.dispatcher)
} catch (_error) {}

module.exports = { GlobalEventProviderComponent }
