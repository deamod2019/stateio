/**
 * Restored source for Webpack Module #29518.
 *
 * Tiny Redux-like store backing transient status alerts.
 */
"use strict"

const StoreActionTypes = {
  AddAlert: "ADD_ALERT",
  RemoveAlert: "REMOVE_ALERT",
  RemoveAllAlerts: "REMOVE_ALL_ALERTS",
}

function reducer(state = [], action) {
  switch (action.type) {
    case StoreActionTypes.AddAlert:
      return [...state, action.payload]
    case StoreActionTypes.RemoveAlert:
      return state.filter((alert) => {
        return alert.id !== action.payload
      })
    case StoreActionTypes.RemoveAllAlerts:
      return []
    default:
      return state
  }
}

let state = []
let subscribers = []

const StatusAlertStore = {
  getState() {
    return state
  },

  dispatch(action) {
    state = reducer(state, action)
    subscribers.forEach((subscriber) => {
      return subscriber()
    })
  },

  subscribe(subscriber) {
    subscribers.push(subscriber)
    return () => {
      subscribers = subscribers.filter((item) => {
        return item !== subscriber
      })
    }
  },
}

module.exports = {
  StoreActionTypes,
  default: StatusAlertStore,
}
