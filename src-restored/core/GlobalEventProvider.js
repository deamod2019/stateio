/**
 * Restored source for Webpack Module #44018.
 *
 * Base class for objects that dispatch/listen through the global dispatcher.
 */
"use strict"

const {
  defineDecoratedProperty,
  injectProperty,
  markInjectable,
} = require("./DecoratorHelpers")
const { TypesCore } = require("./TypesCore")
const { EventDispatcher } = require("./EventDispatcher")

class GlobalEventProvider {
  constructor() {
    this.listenersMap = {}
  }

  destroy() {
    this.removeAllListeners()
  }

  dispatch(event, payload) {
    this._dispatcher.emit(event, payload)
  }

  addListener(event, listener) {
    if (this.mapListenerToEvent(event, listener, this.listenersMap)) {
      this._dispatcher.on(event, listener, this)
    } else {
      console.warn(`Listener ${listener} for event ${event} is already exists`)
    }
  }

  addListenerOnce(event, listener) {
    const onceListener = (payload) => {
      listener.call(this, payload)
      this.removeListener(event, onceListener)
    }
    this.addListener(event, onceListener)
  }

  removeListener(event, listener) {
    if (this.unMapListenerToEvent(event, listener, this.listenersMap)) {
      this._dispatcher.off(event, listener, this)
    } else {
      console.warn(`${listener} is not a listener for event ${event}`)
    }
  }

  removeListeners(event) {
    const listeners = this.listenersMap[event]
    if (listeners) {
      for (const listener of listeners) {
        this._dispatcher.off(event, listener, this)
      }
      delete this.listenersMap[event]
    } else {
      console.warn(`There are no any listeners for event ${event}`)
    }
  }

  removeAllListeners() {
    for (const event of Object.keys(this.listenersMap)) {
      this.removeListeners(event)
    }
    this.listenersMap = {}
  }

  hasListeners() {
    return Object.keys(this.listenersMap).length !== 0
  }

  mapListenerToEvent(event, listener, targetMap) {
    let listeners = targetMap[event]
    if (listeners) {
      if (listeners.indexOf(listener) > -1) return false
      listeners.push(listener)
    } else {
      listeners = [listener]
      targetMap[event] = listeners
    }
    return true
  }

  unMapListenerToEvent(event, listener, targetMap) {
    const listeners = targetMap[event]
    if (listeners) {
      const index = listeners.indexOf(listener)
      if (index > -1) {
        listeners.splice(index, 1)
        if (listeners.length === 0) delete targetMap[event]
        return true
      }
    }
    return false
  }
}

injectProperty(GlobalEventProvider, "_dispatcher", TypesCore.dispatcher, EventDispatcher)
defineDecoratedProperty(GlobalEventProvider, "_dispatcher")
markInjectable(GlobalEventProvider)

module.exports = { GlobalEventProvider }
