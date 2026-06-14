/**
 * Restored source for Webpack Module #68313.
 *
 * Small scoped console logger used by runtime utility exports.
 */
"use strict"

let level = 2

const loggers = {
  1: ["fatal", ["#7c002a"], console.error],
  2: ["info", ["#4454FF", "#7e86de"], console.info],
  3: ["error", ["#f31"], console.error],
  4: ["warn", ["#ffcd84"], console.warn],
  5: ["debug", ["#168d21", "#168d21"], console.log],
  6: ["trace", ["#aaa"], console.log],
}

function formatToken(value) {
  switch (typeof value) {
    case "string":
      return "%s"
    case "boolean":
      return "%o"
    case "number":
      return (0 ^ value) === value ? "%i" : "%f"
    default:
      return "%O"
  }
}

function writeLog(messageLevel, scope = "") {
  return function logMessage(items) {
    if (level < messageLevel || !loggers[messageLevel]) return

    const logger = loggers[messageLevel]
    const name = logger[0]
    const colors = logger[1]
    logger[2].apply(
      null,
      [
        `${scope} %c #%s %c ${items.map(formatToken).join(" ")}`,
        `background-color:${colors[0] || ""};color:white;`,
        name,
        colors[1] ? `color:${colors[1]};` : "",
      ].concat(items),
    )
  }
}

function createLogger(scope) {
  return {
    trace(...items) {
      return writeLog(6, scope)(items)
    },

    debug(...items) {
      return writeLog(5, scope)(items)
    },

    warn(...items) {
      return writeLog(4, scope)(items)
    },

    error(...items) {
      return writeLog(3, scope)(items)
    },

    info(...items) {
      return writeLog(2, scope)(items)
    },

    fatal(...items) {
      return writeLog(1, scope)(items)
    },
  }
}

const log = Object.assign(createLogger(), {
  scope: createLogger,
  setLevel(value) {
    level = value
    return level
  },
})

Object.defineProperty(exports, "__esModule", { value: true })
exports.log = log
