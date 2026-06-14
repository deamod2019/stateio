/**
 * Restored source for Webpack Module #42182.
 *
 * Mediator base class with tracked view event listeners and debug helpers.
 */
"use strict"

const { GlobalEventProvider } = require("./GlobalEventProvider")
const { log } = require("./RuntimeUtils")
const { markInjectable } = require("./DecoratorHelpers")

class Mediator extends GlobalEventProvider {
  constructor(...args) {
    super(...args)
    this.viewListenersMap = {}
  }

  destroy() {
    this.removeAllViewListeners()
    delete this.view
    log.trace("destroyed", this)
    super.destroy()
  }

  setView(view) {
    this.view = view
    this.initialize()
  }

  addViewListener(event, listener) {
    if (!this.view) {
      throw new Error("View listener can't be added when view not initialized!!!")
    }

    if (this.mapListenerToEvent(event, listener, this.viewListenersMap)) {
      this.view.on(event, listener)
    } else {
      log.error(`View listener ${listener} for event ${event} is already exists`)
    }
  }

  addViewListenerOnce(event, listener) {
    const once = (payload) => {
      listener.call(this, payload)
      this.removeViewListener(event, once)
    }
    this.addViewListener(event, once)
  }

  removeViewListener(event, listener) {
    if (this.unMapListenerToEvent(event, listener, this.viewListenersMap)) {
      this.view?.off(event, listener)
    } else {
      log.error(`${listener} is not a listener for event ${event}`)
    }
  }

  removeViewListeners(event) {
    const listeners = this.viewListenersMap[event]
    if (listeners) {
      for (const listener of listeners) {
        this.view?.off(event, listener)
      }
      delete this.viewListenersMap[event]
    } else {
      log.error(`There are no any listeners for event ${event}`)
    }
  }

  removeAllViewListeners() {
    for (const event of Object.keys(this.viewListenersMap)) {
      this.removeViewListeners(event)
    }
    this.viewListenersMap = {}
  }

  bindDebug() {
    const debugId = this.view?.debugId
    if (debugId !== undefined) window[debugId] = this.view
  }

  unbindDebug() {
    const debugId = this.view?.debugId
    if (debugId !== undefined) delete window[debugId]
  }
}

markInjectable(Mediator)

module.exports = { Mediator }
