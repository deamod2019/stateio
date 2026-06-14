/**
 * Webpack Module #53333
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { Am: () => d, Ub: () => c, Yd: () => l, in: () => r })
  const i = []
  var r
  !(function (e) {
    ;((e[(e.DEBUG = 0)] = "DEBUG"),
      (e[(e.VERBOSE = 1)] = "VERBOSE"),
      (e[(e.INFO = 2)] = "INFO"),
      (e[(e.WARN = 3)] = "WARN"),
      (e[(e.ERROR = 4)] = "ERROR"),
      (e[(e.SILENT = 5)] = "SILENT"))
  })(r || (r = {}))
  const o = {
      debug: r.DEBUG,
      verbose: r.VERBOSE,
      info: r.INFO,
      warn: r.WARN,
      error: r.ERROR,
      silent: r.SILENT,
    },
    a = r.INFO,
    s = {
      [r.DEBUG]: "log",
      [r.VERBOSE]: "log",
      [r.INFO]: "info",
      [r.WARN]: "warn",
      [r.ERROR]: "error",
    },
    u = (e, t, ...n) => {
      if (t < e.logLevel) return
      const i = new Date().toISOString(),
        r = s[t]
      if (!r) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
      console[r](`[${i}]  ${e.name}:`, ...n)
    }
  class l {
    constructor(e) {
      ;((this.name = e),
        (this._logLevel = a),
        (this._logHandler = u),
        (this._userLogHandler = null),
        i.push(this))
    }
    get logLevel() {
      return this._logLevel
    }
    set logLevel(e) {
      if (!(e in r)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``)
      this._logLevel = e
    }
    setLogLevel(e) {
      this._logLevel = "string" == typeof e ? o[e] : e
    }
    get logHandler() {
      return this._logHandler
    }
    set logHandler(e) {
      if ("function" != typeof e)
        throw new TypeError("Value assigned to `logHandler` must be a function")
      this._logHandler = e
    }
    get userLogHandler() {
      return this._userLogHandler
    }
    set userLogHandler(e) {
      this._userLogHandler = e
    }
    debug(...e) {
      ;(this._userLogHandler && this._userLogHandler(this, r.DEBUG, ...e),
        this._logHandler(this, r.DEBUG, ...e))
    }
    log(...e) {
      ;(this._userLogHandler && this._userLogHandler(this, r.VERBOSE, ...e),
        this._logHandler(this, r.VERBOSE, ...e))
    }
    info(...e) {
      ;(this._userLogHandler && this._userLogHandler(this, r.INFO, ...e),
        this._logHandler(this, r.INFO, ...e))
    }
    warn(...e) {
      ;(this._userLogHandler && this._userLogHandler(this, r.WARN, ...e),
        this._logHandler(this, r.WARN, ...e))
    }
    error(...e) {
      ;(this._userLogHandler && this._userLogHandler(this, r.ERROR, ...e),
        this._logHandler(this, r.ERROR, ...e))
    }
  }
  function c(e) {
    i.forEach((t) => {
      t.setLogLevel(e)
    })
  }
  function d(e, t) {
    for (const n of i) {
      let i = null
      ;(t && t.level && (i = o[t.level]),
        (n.userLogHandler =
          null === e
            ? null
            : (t, n, ...o) => {
                const a = o
                  .map((e) => {
                    if (null == e) return null
                    if ("string" == typeof e) return e
                    if ("number" == typeof e || "boolean" == typeof e) return e.toString()
                    if (e instanceof Error) return e.message
                    try {
                      return JSON.stringify(e)
                    } catch (e) {
                      return null
                    }
                  })
                  .filter((e) => e)
                  .join(" ")
                n >= (null != i ? i : t.logLevel) &&
                  e({ level: r[n].toLowerCase(), message: a, args: o, type: t.name })
              }))
    }
  }
}
