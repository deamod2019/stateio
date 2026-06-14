/**
 * Restored source for Webpack Module #39887.
 *
 * Small elapsed-time helper used by continent scoring. It tracks start/stop
 * state and fires an optional tick callback immediately and then by interval.
 */
"use strict"

class TimeTrack {
  constructor(interval = 250, onTick) {
    this.interval = interval
    this.onTick = onTick
    this._started = NaN
    this._paused = NaN
    this._tid = NaN
    this._isRunning = false
  }

  get isRunning() {
    return this._isRunning
  }

  get startTime() {
    return this._started
  }

  start() {
    this._isRunning = true
    this._started = now()
    this.startTimer()
  }

  stop() {
    this._isRunning = false
    clearInterval(this._tid)
  }

  pause() {
    if (this._isRunning) {
      this._paused = now()
      clearInterval(this._tid)
      this._isRunning = false
    }
  }

  resume() {
    if (!this._isRunning) {
      this._started += now() - this._paused
      this.start()
    }
  }

  getTotalTime() {
    return now() - this._started
  }

  startTimer() {
    const tick = () => this.onTick && this.onTick()
    clearTimeout(this._tid)
    this._tid = setInterval(() => {
      tick()
    }, this.interval)
    tick()
  }
}

module.exports = { TimeTrack }

function now() {
  return Date.now()
}
