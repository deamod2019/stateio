/**
 * Restored source for Webpack Module #57655.
 *
 * Session metadata stored in cookie data.
 */
"use strict"

class SessionData {
  constructor() {
    this.data = { gameSession: NaN, friends: [] }
  }

  init(data) {
    this.data.gameSession = (parseInt(data?.gameSession, 10) || 0) + 1
    this.data.friends = data?.friends || []
    return this.getRawData()
  }

  getRawData() {
    return this.data
  }

  get ftue() {
    return this.data.gameSession <= 1
  }
}

module.exports = { SessionData }
