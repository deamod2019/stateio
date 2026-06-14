/**
 * Restored source for Webpack Module #26729.
 *
 * Bundled EventEmitter implementation used by the restored event dispatcher.
 */
"use strict"

const hasOwn = Object.prototype.hasOwnProperty

let prefix = "~"

function EventsMap() {}

function EventHandler(fn, context, once) {
  this.fn = fn
  this.context = context
  this.once = once || false
}

function addListener(emitter, event, listener, context, once) {
  if (typeof listener !== "function") throw new TypeError("The listener must be a function")

  const handler = new EventHandler(listener, context || emitter, once)
  const key = prefix ? prefix + event : event

  if (emitter._events[key]) {
    if (emitter._events[key].fn) emitter._events[key] = [emitter._events[key], handler]
    else emitter._events[key].push(handler)
  } else {
    emitter._events[key] = handler
    emitter._eventsCount++
  }

  return emitter
}

function removeEvent(emitter, key) {
  if (--emitter._eventsCount === 0) emitter._events = new EventsMap()
  else delete emitter._events[key]
}

function EventEmitter() {
  this._events = new EventsMap()
  this._eventsCount = 0
}

if (Object.create) {
  EventsMap.prototype = Object.create(null)
  if (!new EventsMap().__proto__) prefix = false
}

EventEmitter.prototype.eventNames = function eventNames() {
  let events
  let name
  const names = []

  if (this._eventsCount === 0) return names

  events = this._events
  for (name in events) if (hasOwn.call(events, name)) names.push(prefix ? name.slice(1) : name)

  return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(events)) : names
}

EventEmitter.prototype.listeners = function listeners(event) {
  const key = prefix ? prefix + event : event
  const handlers = this._events[key]

  if (!handlers) return []
  if (handlers.fn) return [handlers.fn]

  const items = new Array(handlers.length)
  for (let index = 0; index < handlers.length; index++) items[index] = handlers[index].fn
  return items
}

EventEmitter.prototype.listenerCount = function listenerCount(event) {
  const key = prefix ? prefix + event : event
  const handlers = this._events[key]

  return handlers ? (handlers.fn ? 1 : handlers.length) : 0
}

EventEmitter.prototype.emit = function emit(event, arg1, arg2, arg3, arg4, arg5) {
  const key = prefix ? prefix + event : event
  if (!this._events[key]) return false

  let args
  let index
  const handlers = this._events[key]
  const argCount = arguments.length

  if (handlers.fn) {
    if (handlers.once) this.removeListener(event, handlers.fn, undefined, true)

    switch (argCount) {
      case 1:
        handlers.fn.call(handlers.context)
        return true
      case 2:
        handlers.fn.call(handlers.context, arg1)
        return true
      case 3:
        handlers.fn.call(handlers.context, arg1, arg2)
        return true
      case 4:
        handlers.fn.call(handlers.context, arg1, arg2, arg3)
        return true
      case 5:
        handlers.fn.call(handlers.context, arg1, arg2, arg3, arg4)
        return true
      case 6:
        handlers.fn.call(handlers.context, arg1, arg2, arg3, arg4, arg5)
        return true
    }

    args = new Array(argCount - 1)
    for (index = 1; index < argCount; index++) args[index - 1] = arguments[index]
    handlers.fn.apply(handlers.context, args)
  } else {
    for (index = 0; index < handlers.length; index++) {
      if (handlers[index].once) this.removeListener(event, handlers[index].fn, undefined, true)

      switch (argCount) {
        case 1:
          handlers[index].fn.call(handlers[index].context)
          break
        case 2:
          handlers[index].fn.call(handlers[index].context, arg1)
          break
        case 3:
          handlers[index].fn.call(handlers[index].context, arg1, arg2)
          break
        case 4:
          handlers[index].fn.call(handlers[index].context, arg1, arg2, arg3)
          break
        default:
          if (!args) {
            args = new Array(argCount - 1)
            for (let argIndex = 1; argIndex < argCount; argIndex++) args[argIndex - 1] = arguments[argIndex]
          }
          handlers[index].fn.apply(handlers[index].context, args)
      }
    }
  }

  return true
}

EventEmitter.prototype.on = function on(event, listener, context) {
  return addListener(this, event, listener, context, false)
}

EventEmitter.prototype.once = function once(event, listener, context) {
  return addListener(this, event, listener, context, true)
}

EventEmitter.prototype.removeListener = function removeListener(event, listener, context, once) {
  const key = prefix ? prefix + event : event
  if (!this._events[key]) return this

  if (!listener) {
    removeEvent(this, key)
    return this
  }

  const handlers = this._events[key]
  if (handlers.fn) {
    if (handlers.fn === listener && (!once || handlers.once) && (!context || handlers.context === context)) {
      removeEvent(this, key)
    }
  } else {
    const remaining = []
    for (let index = 0; index < handlers.length; index++) {
      if (handlers[index].fn !== listener || (once && !handlers[index].once) || (context && handlers[index].context !== context)) {
        remaining.push(handlers[index])
      }
    }

    if (remaining.length) this._events[key] = remaining.length === 1 ? remaining[0] : remaining
    else removeEvent(this, key)
  }

  return this
}

EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  let key

  if (event) {
    key = prefix ? prefix + event : event
    if (this._events[key]) removeEvent(this, key)
  } else {
    this._events = new EventsMap()
    this._eventsCount = 0
  }

  return this
}

EventEmitter.prototype.off = EventEmitter.prototype.removeListener
EventEmitter.prototype.addListener = EventEmitter.prototype.on

EventEmitter.prefixed = prefix
EventEmitter.EventEmitter = EventEmitter

module.exports = EventEmitter
