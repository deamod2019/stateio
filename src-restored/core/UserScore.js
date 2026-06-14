/**
 * Restored source for Webpack Module #66423.
 *
 * User score aggregate over session, context, and global entries.
 */
"use strict"

const { EventDispatcher } = require("./EventDispatcher")
const { ScoreEvent, ScoreType } = require("./SocialAppExports")

class UserScore extends EventDispatcher {
  setScoreSession(score) {
    if (isNaN(score)) {
      this._sessionScore = NaN
    } else {
      const previous = this._sessionScore || 0
      this._sessionScore = score
      if (score >= previous) this.emit(ScoreEvent.INCREASED)
      this.emit(ScoreEvent.UPDATED)
    }
  }

  update(contextScore, globalScore) {
    this._contextScore = contextScore || this._contextScore
    this._globalScore = globalScore || this._globalScore
    if (globalScore || contextScore) this.emit(ScoreEvent.UPDATED)
  }

  getScore(scoreType = ScoreType.SESSION | ScoreType.CONTEXT | ScoreType.GLOBAL) {
    const hasType = (type, mask) => !!(mask & type)
    let scores = []

    if (hasType(ScoreType.SESSION, scoreType)) scores.push(this._sessionScore)
    if (hasType(ScoreType.CONTEXT, scoreType)) {
      scores.push(this._contextScore && this._contextScore.getScore())
    }
    if (hasType(ScoreType.GLOBAL, scoreType)) {
      scores.push(this._globalScore && this._globalScore.getScore())
    }

    scores = scores.filter((score) => !isNaN(score))
    if (scores.length) return Math.max.apply(null, scores)
  }

  getEntry(scoreType) {
    switch (scoreType) {
      case ScoreType.GLOBAL:
        return this._globalScore
      case ScoreType.CONTEXT:
        return this._contextScore
    }
  }

  flush() {
    delete this._contextScore
    delete this._sessionScore
  }
}

module.exports = { UserScore }
