/**
 * Webpack Module #88183
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(n.r(t),
    n.d(t, {
      BROWSER_TRACING_INTEGRATION_ID: () => se,
      BrowserTracing: () => le,
      IdleTransaction: () => O.io,
      Integrations: () => i,
      Span: () => he.Dr,
      SpanStatus: () => de,
      TRACEPARENT_REGEXP: () => T,
      Transaction: () => pe.Y,
      addExtensionMethods: () => r.ro,
      defaultRequestInstrumentationOptions: () => oe,
      extractTraceparentData: () => S,
      getActiveTransaction: () => R.x1,
      hasTracingEnabled: () => R.zu,
      instrumentOutgoingRequests: () => ae,
      spanStatusfromHttpCode: () => he.Zd,
      startIdleTransaction: () => r.lb,
      stripUrlQueryAndFragment: () => s.rt,
    }))
  var i = {}
  ;(n.r(i),
    n.d(i, {
      Apollo: () => x,
      BrowserTracing: () => le,
      Express: () => d,
      GraphQL: () => b,
      Mongo: () => y,
      Mysql: () => g,
      Postgres: () => _,
      Prisma: () => C,
    }))
  var r = n(62758) /* 62758__mod */,
    o = n(64307) /* 64307__mod */,
    a = n(12343) /* 12343__mod */,
    s = n(26956) /* 26956__mod */
  function u(e, t = {}) {
    const n = e.method && e.method.toUpperCase()
    let i = "",
      r = "url"
    t.customRoute || e.route
      ? ((i = t.customRoute || `${e.baseUrl || ""}${e.route && e.route.path}`), (r = "route"))
      : (e.originalUrl || e.url) && (i = (0, s.rt)(e.originalUrl || e.url || ""))
    let o = ""
    return (
      t.method && n && (o += n),
      t.method && t.path && (o += " "),
      t.path && i && (o += i),
      [o, r]
    )
  }
  var l = n(67597) /* 67597__mod */
  function c(e) {
    const t = (0, o.x)([
      e,
      "call",
      (e) => e(),
      "access",
      (e) => e.getClient,
      "call",
      (e) => e(),
      "optionalAccess",
      (e) => e.getOptions,
      "call",
      (e) => e(),
    ])
    return "sentry" !== ((0, o.x)([t, "optionalAccess", (e) => e.instrumenter]) || "sentry")
  }
  class d {
    static __initStatic() {
      this.id = "Express"
    }
    __init() {
      this.name = d.id
    }
    constructor(e = {}) {
      ;(d.prototype.__init.call(this),
        (this._router = e.router || e.app),
        (this._methods = (Array.isArray(e.methods) ? e.methods : []).concat("use")))
    }
    setupOnce(e, t) {
      this._router
        ? c(t)
          ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.log("Express Integration is skipped because of instrumenter configuration.")
          : ((function (e, t = []) {
              t.forEach((t) =>
                (function (e, t) {
                  const n = e[t]
                  return (
                    (e[t] = function (...e) {
                      return n.call(
                        this,
                        ...(function (e, t) {
                          return e.map((e) =>
                            "function" == typeof e
                              ? h(e, t)
                              : Array.isArray(e)
                                ? e.map((e) => ("function" == typeof e ? h(e, t) : e))
                                : e,
                          )
                        })(e, t),
                      )
                    }),
                    e
                  )
                })(e, t),
              )
            })(this._router, this._methods),
            (function (e) {
              const t = "settings" in e
              t && undefined === e._router && e.lazyrouter && e.lazyrouter()
              const n = t ? e._router : e
              if (!n)
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    a.kg.debug(
                      "Cannot instrument router for URL Parameterization (did not find a valid router).",
                    ),
                  void (
                    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    a.kg.debug("Routing instrumentation is currently only supported in Express 4.")
                  )
                )
              const i = Object.getPrototypeOf(n),
                r = i.process_params
              i.process_params = function (e, t, n, i, a) {
                n._reconstructedRoute || (n._reconstructedRoute = "")
                const {
                  layerRoutePath: c,
                  isRegex: d,
                  isArray: h,
                  numExtraSegments: p,
                } = (function (e) {
                  const t = (0, o.x)([
                      e,
                      "access",
                      (e) => e.route,
                      "optionalAccess",
                      (e) => e.path,
                    ]),
                    n = (0, l.Kj)(t),
                    i = Array.isArray(t)
                  if (!t) return { isRegex: n, isArray: i, numExtraSegments: 0 }
                  const r = i
                      ? Math.max(
                          ((u = t),
                          u.reduce((e, t) => e + (0, s.$A)(t.toString()), 0) -
                            (0, s.$A)(e.path || "")),
                          0,
                        )
                      : 0,
                    a = (function (e, t) {
                      if (e) return t.map((e) => e.toString()).join(",")
                      return t && t.toString()
                    })(i, t)
                  var u
                  return { layerRoutePath: a, isRegex: n, isArray: i, numExtraSegments: r }
                })(e)
                ;(c || d || h) && (n._hasParameters = true)
                const f = (c || e.path || "")
                  .split("/")
                  .filter((e) => e.length > 0 && (d || h || !e.includes("*")))
                  .join("/")
                f && f.length > 0 && (n._reconstructedRoute += `/${f}${d ? "/" : ""}`)
                if ((0, s.$A)(n.originalUrl || "") + p === (0, s.$A)(n._reconstructedRoute)) {
                  n._hasParameters ||
                    (n._reconstructedRoute !== n.originalUrl &&
                      (n._reconstructedRoute = n.originalUrl))
                  const e = i.__sentry_transaction
                  if (e && "custom" !== e.metadata.source) {
                    const t = n._reconstructedRoute || "/"
                    e.setName(...u(n, { path: true, method: true, customRoute: t }))
                  }
                }
                return r.call(this, e, t, n, i, a)
              }
            })(this._router))
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("ExpressIntegration is missing an Express instance")
    }
  }
  function h(e, t) {
    const n = e.length
    switch (n) {
      case 2:
        return function (n, i) {
          const r = i.__sentry_transaction
          if (r) {
            const n = r.startChild({ description: e.name, op: `middleware.express.${t}` })
            i.once("finish", () => {
              n.finish()
            })
          }
          return e.call(this, n, i)
        }
      case 3:
        return function (n, i, r) {
          const a = i.__sentry_transaction,
            s = (0, o.x)([
              a,
              "optionalAccess",
              (e) => e.startChild,
              "call",
              (n) => n({ description: e.name, op: `middleware.express.${t}` }),
            ])
          e.call(this, n, i, function (...e) {
            ;((0, o.x)([s, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
              r.call(this, ...e))
          })
        }
      case 4:
        return function (n, i, r, a) {
          const s = r.__sentry_transaction,
            u = (0, o.x)([
              s,
              "optionalAccess",
              (e) => e.startChild,
              "call",
              (n) => n({ description: e.name, op: `middleware.express.${t}` }),
            ])
          e.call(this, n, i, r, function (...e) {
            ;((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
              a.call(this, ...e))
          })
        }
      default:
        throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)
    }
  }
  d.__initStatic()
  var p = n(92448) /* 92448__mod */,
    f = n(20535) /* 20535__mod */
  class _ {
    static __initStatic() {
      this.id = "Postgres"
    }
    __init() {
      this.name = _.id
    }
    constructor(e = {}) {
      ;(_.prototype.__init.call(this), (this._usePgNative = !!e.usePgNative))
    }
    setupOnce(e, t) {
      if (c(t))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("Postgres Integration is skipped because of instrumenter configuration.")
        )
      const n = (0, p.$y)("pg")
      if (!n)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("Postgres Integration was unable to require `pg` package.")
        )
      if (
        this._usePgNative &&
        !(0, o.x)([n, "access", (e) => e.native, "optionalAccess", (e) => e.Client])
      )
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("Postgres Integration was unable to access 'pg-native' bindings.")
        )
      const { Client: i } = this._usePgNative ? n.native : n
      ;(0, f.hl)(i.prototype, "query", function (e) {
        return function (n, i, r) {
          const a = t().getScope(),
            s = (0, o.x)([a, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
            u = (0, o.x)([
              s,
              "optionalAccess",
              (e) => e.startChild,
              "call",
              (e) => e({ description: "string" == typeof n ? n : n.text, op: "db" }),
            ])
          if ("function" == typeof r)
            return e.call(this, n, i, function (e, t) {
              ;((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), r(e, t))
            })
          if ("function" == typeof i)
            return e.call(this, n, function (e, t) {
              ;((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), i(e, t))
            })
          const c = undefined !== i ? e.call(this, n, i) : e.call(this, n)
          return (0, l.J8)(c)
            ? c.then(
                (e) => ((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), e),
              )
            : ((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), c)
        }
      })
    }
  }
  _.__initStatic()
  class g {
    constructor() {
      g.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "Mysql"
    }
    __init() {
      this.name = g.id
    }
    setupOnce(e, t) {
      if (c(t))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("Mysql Integration is skipped because of instrumenter configuration.")
        )
      const n = (0, p.$y)("mysql/lib/Connection.js")
      n
        ? (0, f.hl)(n, "createQuery", function (e) {
            return function (n, i, r) {
              const a = t().getScope(),
                s = (0, o.x)([a, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                u = (0, o.x)([
                  s,
                  "optionalAccess",
                  (e) => e.startChild,
                  "call",
                  (e) => e({ description: "string" == typeof n ? n : n.sql, op: "db" }),
                ])
              return "function" == typeof r
                ? e.call(this, n, i, function (e, t, n) {
                    ;((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                      r(e, t, n))
                  })
                : "function" == typeof i
                  ? e.call(this, n, function (e, t, n) {
                      ;((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                        i(e, t, n))
                    })
                  : e.call(this, n, i, r)
            }
          })
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("Mysql Integration was unable to require `mysql` package.")
    }
  }
  g.__initStatic()
  const m = [
      "aggregate",
      "bulkWrite",
      "countDocuments",
      "createIndex",
      "createIndexes",
      "deleteMany",
      "deleteOne",
      "distinct",
      "drop",
      "dropIndex",
      "dropIndexes",
      "estimatedDocumentCount",
      "find",
      "findOne",
      "findOneAndDelete",
      "findOneAndReplace",
      "findOneAndUpdate",
      "indexes",
      "indexExists",
      "indexInformation",
      "initializeOrderedBulkOp",
      "insertMany",
      "insertOne",
      "isCapped",
      "mapReduce",
      "options",
      "parallelCollectionScan",
      "rename",
      "replaceOne",
      "stats",
      "updateMany",
      "updateOne",
    ],
    v = {
      bulkWrite: ["operations"],
      countDocuments: ["query"],
      createIndex: ["fieldOrSpec"],
      createIndexes: ["indexSpecs"],
      deleteMany: ["filter"],
      deleteOne: ["filter"],
      distinct: ["key", "query"],
      dropIndex: ["indexName"],
      find: ["query"],
      findOne: ["query"],
      findOneAndDelete: ["filter"],
      findOneAndReplace: ["filter", "replacement"],
      findOneAndUpdate: ["filter", "update"],
      indexExists: ["indexes"],
      insertMany: ["docs"],
      insertOne: ["doc"],
      mapReduce: ["map", "reduce"],
      rename: ["newName"],
      replaceOne: ["filter", "doc"],
      updateMany: ["filter", "update"],
      updateOne: ["filter", "update"],
    }
  class y {
    static __initStatic() {
      this.id = "Mongo"
    }
    __init() {
      this.name = y.id
    }
    constructor(e = {}) {
      ;(y.prototype.__init.call(this),
        (this._operations = Array.isArray(e.operations) ? e.operations : m),
        (this._describeOperations = !("describeOperations" in e) || e.describeOperations),
        (this._useMongoose = !!e.useMongoose))
    }
    setupOnce(e, t) {
      if (c(t))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("Mongo Integration is skipped because of instrumenter configuration.")
        )
      const n = this._useMongoose ? "mongoose" : "mongodb",
        i = (0, p.$y)(n)
      i
        ? this._instrumentOperations(i.Collection, this._operations, t)
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error(`Mongo Integration was unable to require \`${n}\` package.`)
    }
    _instrumentOperations(e, t, n) {
      t.forEach((t) => this._patchOperation(e, t, n))
    }
    _patchOperation(e, t, n) {
      if (!(t in e.prototype)) return
      const i = this._getSpanContextFromOperationArguments.bind(this)
      ;(0, f.hl)(e.prototype, t, function (e) {
        return function (...r) {
          const a = r[r.length - 1],
            s = n().getScope(),
            u = (0, o.x)([s, "optionalAccess", (e) => e.getSpan, "call", (e) => e()])
          if ("function" != typeof a || ("mapReduce" === t && 2 === r.length)) {
            const n = (0, o.x)([
                u,
                "optionalAccess",
                (e) => e.startChild,
                "call",
                (e) => e(i(this, t, r)),
              ]),
              a = e.call(this, ...r)
            if ((0, l.J8)(a))
              return a.then(
                (e) => ((0, o.x)([n, "optionalAccess", (e) => e.finish, "call", (e) => e()]), e),
              )
            if ((c = a) && "object" == typeof c && c.once && "function" == typeof c.once) {
              const e = a
              try {
                e.once("close", () => {
                  ;(0, o.x)([n, "optionalAccess", (e) => e.finish, "call", (e) => e()])
                })
              } catch (e) {
                ;(0, o.x)([n, "optionalAccess", (e) => e.finish, "call", (e) => e()])
              }
              return e
            }
            return ((0, o.x)([n, "optionalAccess", (e) => e.finish, "call", (e) => e()]), a)
          }
          var c
          const d = (0, o.x)([
            u,
            "optionalAccess",
            (e) => e.startChild,
            "call",
            (e) => e(i(this, t, r.slice(0, -1))),
          ])
          return e.call(this, ...r.slice(0, -1), function (e, t) {
            ;((0, o.x)([d, "optionalAccess", (e) => e.finish, "call", (e) => e()]), a(e, t))
          })
        }
      })
    }
    _getSpanContextFromOperationArguments(e, t, n) {
      const i = { collectionName: e.collectionName, dbName: e.dbName, namespace: e.namespace },
        r = { op: "db", description: t, data: i },
        o = v[t],
        a = Array.isArray(this._describeOperations)
          ? this._describeOperations.includes(t)
          : this._describeOperations
      if (!o || !a) return r
      try {
        if ("mapReduce" === t) {
          const [e, t] = n
          ;((i[o[0]] = "string" == typeof e ? e : e.name || "<anonymous>"),
            (i[o[1]] = "string" == typeof t ? t : t.name || "<anonymous>"))
        } else for (let e = 0; e < o.length; e++) i[o[e]] = JSON.stringify(n[e])
      } catch (e) {}
      return r
    }
  }
  y.__initStatic()
  class C {
    static __initStatic() {
      this.id = "Prisma"
    }
    __init() {
      this.name = C.id
    }
    constructor(e = {}) {
      var t
      ;(C.prototype.__init.call(this),
        (t = e.client) && t.$use
          ? (this._client = e.client)
          : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.warn(
              `Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(e.client)}`,
            ))
    }
    setupOnce(e, t) {
      this._client
        ? c(t)
          ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.log("Prisma Integration is skipped because of instrumenter configuration.")
          : this._client.$use((e, n) => {
              const i = t().getScope(),
                r = (0, o.x)([i, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                a = e.action,
                s = e.model,
                u = (0, o.x)([
                  r,
                  "optionalAccess",
                  (e) => e.startChild,
                  "call",
                  (e) => e({ description: s ? `${s} ${a}` : a, op: "db.sql.prisma" }),
                ]),
                c = n(e)
              return (0, l.J8)(c)
                ? c.then(
                    (e) => (
                      (0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                      e
                    ),
                  )
                : ((0, o.x)([u, "optionalAccess", (e) => e.finish, "call", (e) => e()]), c)
            })
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("PrismaIntegration is missing a Prisma Client Instance")
    }
  }
  C.__initStatic()
  class b {
    constructor() {
      b.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "GraphQL"
    }
    __init() {
      this.name = b.id
    }
    setupOnce(e, t) {
      if (c(t))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("GraphQL Integration is skipped because of instrumenter configuration.")
        )
      const n = (0, p.$y)("graphql/execution/execute.js")
      n
        ? (0, f.hl)(n, "execute", function (e) {
            return function (...n) {
              const i = t().getScope(),
                r = (0, o.x)([i, "optionalAccess", (e) => e.getSpan, "call", (e) => e()]),
                a = (0, o.x)([
                  r,
                  "optionalAccess",
                  (e) => e.startChild,
                  "call",
                  (e) => e({ description: "execute", op: "graphql.execute" }),
                ])
              ;(0, o.x)([i, "optionalAccess", (e) => e.setSpan, "call", (e) => e(a)])
              const s = e.call(this, ...n)
              return (0, l.J8)(s)
                ? s.then(
                    (e) => (
                      (0, o.x)([a, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                      (0, o.x)([i, "optionalAccess", (e) => e.setSpan, "call", (e) => e(r)]),
                      e
                    ),
                  )
                : ((0, o.x)([a, "optionalAccess", (e) => e.finish, "call", (e) => e()]),
                  (0, o.x)([i, "optionalAccess", (e) => e.setSpan, "call", (e) => e(r)]),
                  s)
            }
          })
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("GraphQL Integration was unable to require graphql/execution package.")
    }
  }
  b.__initStatic()
  var w = n(62844) /* 62844__mod */
  class x {
    constructor() {
      x.prototype.__init.call(this)
    }
    static __initStatic() {
      this.id = "Apollo"
    }
    __init() {
      this.name = x.id
    }
    setupOnce(e, t) {
      if (c(t))
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("Apollo Integration is skipped because of instrumenter configuration.")
        )
      const n = (0, p.$y)("apollo-server-core")
      n
        ? (0, f.hl)(n.ApolloServerBase.prototype, "constructSchema", function (e) {
            return function () {
              if (!this.config.resolvers)
                return (
                  ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    (this.config.schema
                      ? a.kg.warn(
                          "Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property.",
                        )
                      : this.config.modules &&
                        a.kg.warn(
                          "Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property.",
                        ),
                    a.kg.error(
                      "Skipping tracing as no resolvers found on the `ApolloServer` instance.",
                    )),
                  e.call(this)
                )
              const n = (0, w.lE)(this.config.resolvers)
              return (
                (this.config.resolvers = n.map(
                  (e) => (
                    Object.keys(e).forEach((n) => {
                      Object.keys(e[n]).forEach((i) => {
                        "function" == typeof e[n][i] &&
                          (function (e, t, n, i) {
                            ;(0, f.hl)(e[t], n, function (e) {
                              return function (...r) {
                                const a = i().getScope(),
                                  s = (0, o.x)([
                                    a,
                                    "optionalAccess",
                                    (e) => e.getSpan,
                                    "call",
                                    (e) => e(),
                                  ]),
                                  u = (0, o.x)([
                                    s,
                                    "optionalAccess",
                                    (e) => e.startChild,
                                    "call",
                                    (e) => e({ description: `${t}.${n}`, op: "graphql.resolve" }),
                                  ]),
                                  c = e.call(this, ...r)
                                return (0, l.J8)(c)
                                  ? c.then(
                                      (e) => (
                                        (0, o.x)([
                                          u,
                                          "optionalAccess",
                                          (e) => e.finish,
                                          "call",
                                          (e) => e(),
                                        ]),
                                        e
                                      ),
                                    )
                                  : ((0, o.x)([
                                      u,
                                      "optionalAccess",
                                      (e) => e.finish,
                                      "call",
                                      (e) => e(),
                                    ]),
                                    c)
                              }
                            })
                          })(e, n, i, t)
                      })
                    }),
                    e
                  ),
                )),
                e.call(this)
              )
            }
          })
        : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.error("Apollo Integration was unable to require apollo-server-core package.")
    }
  }
  x.__initStatic()
  const T = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$")
  function S(e) {
    const t = e.match(T)
    if (!e || !t) return
    let n
    return (
      "1" === t[3] ? (n = true) : "0" === t[3] && (n = false),
      { traceId: t[1], parentSampled: n, parentSpanId: t[2] }
    )
  }
  const L = "baggage",
    E = "sentry-",
    A = /^sentry-/
  function I(e) {
    return (function (e) {
      if (0 === Object.keys(e).length) return
      return Object.entries(e).reduce((e, [t, n], i) => {
        const r = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
          o = 0 === i ? r : `${e},${r}`
        return o.length > 8192
          ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              a.kg.warn(
                `Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`,
              ),
            e)
          : o
      }, "")
    })(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${E}${t}`] = n), e), {}))
  }
  function M(e) {
    return e
      .split(",")
      .map((e) => e.split("=").map((e) => decodeURIComponent(e.trim())))
      .reduce((e, [t, n]) => ((e[t] = n), e), {})
  }
  var P = n(58464) /* 58464__mod */,
    O = n(16458) /* 16458__mod */,
    R = n(63233) /* 63233__mod */
  const k = n(71235) /* 71235__mod */.n2
  var N = n(45375) /* 45375__mod */,
    D = n(21170) /* 21170__mod */
  const B = (e, t, n) => {
      let i, r
      return (o) => {
        t.value >= 0 &&
          (o || n) &&
          ((r = t.value - (i || 0)), (r || undefined === i) && ((i = t.value), (t.delta = r), e(t)))
      }
    },
    F = () =>
      k.__WEB_VITALS_POLYFILL__
        ? k.performance &&
          ((performance.getEntriesByType && performance.getEntriesByType("navigation")[0]) ||
            (() => {
              const e = k.performance.timing,
                t = k.performance.navigation.type,
                n = {
                  entryType: "navigation",
                  startTime: 0,
                  type: 2 == t ? "back_forward" : 1 === t ? "reload" : "navigate",
                }
              for (const t in e)
                "navigationStart" !== t &&
                  "toJSON" !== t &&
                  (n[t] = Math.max(e[t] - e.navigationStart, 0))
              return n
            })())
        : k.performance &&
          performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0],
    U = () => {
      const e = F()
      return (e && e.activationStart) || 0
    },
    G = (e, t) => {
      const n = F()
      let i = "navigate"
      return (
        n && (i = k.document.prerendering || U() > 0 ? "prerender" : n.type.replace(/_/g, "-")),
        {
          name: e,
          value: undefined === t ? -1 : t,
          rating: "good",
          delta: 0,
          entries: [],
          id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
          navigationType: i,
        }
      )
    },
    j = (e, t, n) => {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          const i = new PerformanceObserver((e) => {
            t(e.getEntries())
          })
          return (i.observe(Object.assign({ type: e, buffered: true }, n || {})), i)
        }
      } catch (e) {}
    },
    H = (e, t) => {
      const n = (i) => {
        ;("pagehide" !== i.type && "hidden" !== k.document.visibilityState) ||
          (e(i),
          t &&
            (removeEventListener("visibilitychange", n, true),
            removeEventListener("pagehide", n, true)))
      }
      ;(addEventListener("visibilitychange", n, true), addEventListener("pagehide", n, true))
    }
  let V = -1
  const Z = () => (
      V < 0 &&
        ((V = "hidden" !== k.document.visibilityState || k.document.prerendering ? 1 / 0 : 0),
        H(({ timeStamp: e }) => {
          V = e
        }, true)),
      {
        get firstHiddenTime() {
          return V
        },
      }
    ),
    z = {}
  function Y(e) {
    return "number" == typeof e && isFinite(e)
  }
  function W(e, { startTimestamp: t, ...n }) {
    return (
      t && e.startTimestamp > t && (e.startTimestamp = t),
      e.startChild({ startTimestamp: t, ...n })
    )
  }
  function X() {
    return k && k.addEventListener && k.performance
  }
  let q,
    K,
    $ = 0,
    J = {}
  function Q() {
    const e = X()
    e &&
      D.Z1 &&
      (e.mark && k.performance.mark("sentry-tracing-init"),
      ((e) => {
        const t = G("CLS", 0)
        let n,
          i = 0,
          r = []
        const o = (e) => {
            e.forEach((e) => {
              if (!e.hadRecentInput) {
                const o = r[0],
                  a = r[r.length - 1]
                ;(i &&
                0 !== r.length &&
                e.startTime - a.startTime < 1e3 &&
                e.startTime - o.startTime < 5e3
                  ? ((i += e.value), r.push(e))
                  : ((i = e.value), (r = [e])),
                  i > t.value && ((t.value = i), (t.entries = r), n && n()))
              }
            })
          },
          a = j("layout-shift", o)
        a &&
          ((n = B(e, t)),
          H(() => {
            ;(o(a.takeRecords()), n(true))
          }))
      })((e) => {
        const t = e.entries.pop()
        t &&
          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.log("[Measurements] Adding CLS"),
          (J.cls = { value: e.value, unit: "" }),
          (K = t))
      }),
      ((e) => {
        const t = Z(),
          n = G("LCP")
        let i
        const r = (e) => {
            const r = e[e.length - 1]
            if (r) {
              const e = Math.max(r.startTime - U(), 0)
              e < t.firstHiddenTime && ((n.value = e), (n.entries = [r]), i())
            }
          },
          o = j("largest-contentful-paint", r)
        if (o) {
          i = B(e, n)
          const t = () => {
            z[n.id] || (r(o.takeRecords()), o.disconnect(), (z[n.id] = true), i(true))
          }
          ;(["keydown", "click"].forEach((e) => {
            addEventListener(e, t, { once: true, capture: true })
          }),
            H(t, true))
        }
      })((e) => {
        const t = e.entries.pop()
        t &&
          (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.log("[Measurements] Adding LCP"),
          (J.lcp = { value: e.value, unit: "millisecond" }),
          (q = t))
      }),
      ((e) => {
        const t = Z(),
          n = G("FID")
        let i
        const r = (e) => {
            e.startTime < t.firstHiddenTime &&
              ((n.value = e.processingStart - e.startTime), n.entries.push(e), i(true))
          },
          o = (e) => {
            e.forEach(r)
          },
          a = j("first-input", o)
        ;((i = B(e, n)),
          a &&
            H(() => {
              ;(o(a.takeRecords()), a.disconnect())
            }, true))
      })((e) => {
        const t = e.entries.pop()
        if (!t) return
        const n = (0, R.XL)(D.Z1),
          i = (0, R.XL)(t.startTime)
        ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("[Measurements] Adding FID"),
          (J.fid = { value: e.value, unit: "millisecond" }),
          (J["mark.fid"] = { value: n + i, unit: "second" }))
      }))
  }
  function ee(e) {
    const t = X()
    if (!t || !k.performance.getEntries || !D.Z1) return
    ;("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
      a.kg.log("[Tracing] Adding & adjusting spans using Performance API")
    const n = (0, R.XL)(D.Z1),
      i = t.getEntries()
    let r, o
    if (
      (i.slice($).forEach((t) => {
        const i = (0, R.XL)(t.startTime),
          s = (0, R.XL)(t.duration)
        if (!("navigation" === e.op && n + i < e.startTimestamp))
          switch (t.entryType) {
            case "navigation":
              ;(!(function (e, t, n) {
                ;([
                  "unloadEvent",
                  "redirect",
                  "domContentLoadedEvent",
                  "loadEvent",
                  "connect",
                ].forEach((i) => {
                  te(e, t, i, n)
                }),
                  te(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                  te(e, t, "fetch", n, "cache", "domainLookupStart"),
                  te(e, t, "domainLookup", n, "DNS"),
                  (function (e, t, n) {
                    ;(W(e, {
                      op: "browser",
                      description: "request",
                      startTimestamp: n + (0, R.XL)(t.requestStart),
                      endTimestamp: n + (0, R.XL)(t.responseEnd),
                    }),
                      W(e, {
                        op: "browser",
                        description: "response",
                        startTimestamp: n + (0, R.XL)(t.responseStart),
                        endTimestamp: n + (0, R.XL)(t.responseEnd),
                      }))
                  })(e, t, n))
              })(e, t, n),
                (r = n + (0, R.XL)(t.responseStart)),
                (o = n + (0, R.XL)(t.requestStart)))
              break
            case "mark":
            case "paint":
            case "measure": {
              !(function (e, t, n, i, r) {
                const o = r + n,
                  a = o + i
                W(e, { description: t.name, endTimestamp: a, op: t.entryType, startTimestamp: o })
              })(e, t, i, s, n)
              const r = Z(),
                o = t.startTime < r.firstHiddenTime
              ;("first-paint" === t.name &&
                o &&
                (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                  a.kg.log("[Measurements] Adding FP"),
                (J.fp = { value: t.startTime, unit: "millisecond" })),
                "first-contentful-paint" === t.name &&
                  o &&
                  (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    a.kg.log("[Measurements] Adding FCP"),
                  (J.fcp = { value: t.startTime, unit: "millisecond" })))
              break
            }
            case "resource": {
              const r = t.name.replace(k.location.origin, "")
              !(function (e, t, n, i, r, o) {
                if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return
                const a = {}
                "transferSize" in t && (a["Transfer Size"] = t.transferSize)
                "encodedBodySize" in t && (a["Encoded Body Size"] = t.encodedBodySize)
                "decodedBodySize" in t && (a["Decoded Body Size"] = t.decodedBodySize)
                const s = o + i,
                  u = s + r
                W(e, {
                  description: n,
                  endTimestamp: u,
                  op: t.initiatorType ? `resource.${t.initiatorType}` : "resource.other",
                  startTimestamp: s,
                  data: a,
                })
              })(e, t, r, i, s, n)
              break
            }
          }
      }),
      ($ = Math.max(i.length - 1, 0)),
      (function (e) {
        const t = k.navigator
        if (!t) return
        const n = t.connection
        n &&
          (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
          n.type && e.setTag("connectionType", n.type),
          Y(n.rtt) && (J["connection.rtt"] = { value: n.rtt, unit: "millisecond" }))
        Y(t.deviceMemory) && e.setTag("deviceMemory", `${t.deviceMemory} GB`)
        Y(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency))
      })(e),
      "pageload" === e.op)
    ) {
      ;("number" == typeof r &&
        (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log("[Measurements] Adding TTFB"),
        (J.ttfb = { value: 1e3 * (r - e.startTimestamp), unit: "millisecond" }),
        "number" == typeof o &&
          o <= r &&
          (J["ttfb.requestTime"] = { value: 1e3 * (r - o), unit: "millisecond" })),
        ["fcp", "fp", "lcp"].forEach((t) => {
          if (!J[t] || n >= e.startTimestamp) return
          const i = J[t].value,
            r = n + (0, R.XL)(i),
            o = Math.abs(1e3 * (r - e.startTimestamp)),
            s = o - i
          ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.log(`[Measurements] Normalized ${t} from ${i} to ${o} (${s})`),
            (J[t].value = o))
        }))
      const t = J["mark.fid"]
      ;(t &&
        J.fid &&
        (W(e, {
          description: "first input delay",
          endTimestamp: t.value + (0, R.XL)(J.fid.value),
          op: "ui.action",
          startTimestamp: t.value,
        }),
        delete J["mark.fid"]),
        "fcp" in J || delete J.cls,
        Object.keys(J).forEach((t) => {
          e.setMeasurement(t, J[t].value, J[t].unit)
        }),
        (function (e) {
          q &&
            (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              a.kg.log("[Measurements] Adding LCP Data"),
            q.element && e.setTag("lcp.element", (0, P.Rt)(q.element)),
            q.id && e.setTag("lcp.id", q.id),
            q.url && e.setTag("lcp.url", q.url.trim().slice(0, 200)),
            e.setTag("lcp.size", q.size))
          K &&
            K.sources &&
            (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              a.kg.log("[Measurements] Adding CLS Data"),
            K.sources.forEach((t, n) => e.setTag(`cls.source.${n + 1}`, (0, P.Rt)(t.node))))
        })(e))
    }
    ;((q = undefined), (K = undefined), (J = {}))
  }
  function te(e, t, n, i, r, o) {
    const a = o ? t[o] : t[`${n}End`],
      s = t[`${n}Start`]
    s &&
      a &&
      W(e, {
        op: "browser",
        description: (0, N.h)(r, () => n),
        startTimestamp: i + (0, R.XL)(s),
        endTimestamp: i + (0, R.XL)(a),
      })
  }
  var ne = n(9732) /* 9732__mod */,
    ie = n(57321) /* 57321__mod */
  const re = ["localhost", /^\//],
    oe = { traceFetch: true, traceXHR: true, tracingOrigins: re, tracePropagationTargets: re }
  function ae(e) {
    const {
        traceFetch: t,
        traceXHR: n,
        tracePropagationTargets: i,
        tracingOrigins: r,
        shouldCreateSpanForRequest: o,
      } = { traceFetch: oe.traceFetch, traceXHR: oe.traceXHR, ...e },
      a = "function" == typeof o ? o : (e) => true,
      s = (e) =>
        (function (e, t) {
          return (0, ie.U0)(e, t || re)
        })(e, i || r),
      u = {}
    ;(t &&
      (0, ne.o)("fetch", (e) => {
        !(function (e, t, n, i) {
          if (!(0, R.zu)() || !e.fetchData || !t(e.fetchData.url)) return
          if (e.endTimestamp) {
            const t = e.fetchData.__span
            if (!t) return
            const n = i[t]
            return void (
              n &&
              (e.response
                ? n.setHttpStatus(e.response.status)
                : e.error && n.setStatus("internal_error"),
              n.finish(),
              delete i[t])
            )
          }
          const r = (0, R.x1)()
          if (r) {
            const t = r.startChild({
              data: { ...e.fetchData, type: "fetch" },
              description: `${e.fetchData.method} ${e.fetchData.url}`,
              op: "http.client",
            })
            ;((e.fetchData.__span = t.spanId), (i[t.spanId] = t))
            const o = e.args[0]
            e.args[1] = e.args[1] || {}
            const a = e.args[1]
            n(e.fetchData.url) &&
              ((a.headers = (function (e, t, n, i) {
                const r = I(t),
                  o = n.toTraceparent(),
                  a = "undefined" != typeof Request && (0, l.V9)(e, Request) ? e.headers : i.headers
                if (a) {
                  if ("undefined" != typeof Headers && (0, l.V9)(a, Headers)) {
                    const e = new Headers(a)
                    return (e.append("sentry-trace", o), r && e.append(L, r), e)
                  }
                  if (Array.isArray(a)) {
                    const e = [...a, ["sentry-trace", o]]
                    return (r && e.push([L, r]), e)
                  }
                  {
                    const e = "baggage" in a ? a.baggage : undefined,
                      t = []
                    return (
                      Array.isArray(e) ? t.push(...e) : e && t.push(e),
                      r && t.push(r),
                      { ...a, "sentry-trace": o, baggage: t.length > 0 ? t.join(",") : undefined }
                    )
                  }
                }
                return { "sentry-trace": o, baggage: r }
              })(o, r.getDynamicSamplingContext(), t, a)),
              r.metadata.propagations++)
          }
        })(e, a, s, u)
      }),
      n &&
        (0, ne.o)("xhr", (e) => {
          !(function (e, t, n, i) {
            if (
              !(0, R.zu)() ||
              (e.xhr && e.xhr.__sentry_own_request__) ||
              !(e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url))
            )
              return
            const r = e.xhr.__sentry_xhr__
            if (e.endTimestamp) {
              const t = e.xhr.__sentry_xhr_span_id__
              if (!t) return
              const n = i[t]
              return void (n && (n.setHttpStatus(r.status_code), n.finish(), delete i[t]))
            }
            const o = (0, R.x1)()
            if (o) {
              const t = o.startChild({
                data: { ...r.data, type: "xhr", method: r.method, url: r.url },
                description: `${r.method} ${r.url}`,
                op: "http.client",
              })
              if (
                ((e.xhr.__sentry_xhr_span_id__ = t.spanId),
                (i[e.xhr.__sentry_xhr_span_id__] = t),
                e.xhr.setRequestHeader && n(e.xhr.__sentry_xhr__.url))
              )
                try {
                  e.xhr.setRequestHeader("sentry-trace", t.toTraceparent())
                  const n = I(o.getDynamicSamplingContext())
                  ;(n && e.xhr.setRequestHeader(L, n), o.metadata.propagations++)
                } catch (e) {}
            }
          })(e, a, s, u)
        }))
  }
  const se = "BrowserTracing",
    ue = {
      idleTimeout: O.nT,
      finalTimeout: O.mg,
      heartbeatInterval: O.hd,
      markBackgroundTransactions: true,
      routingInstrumentation: function (e, t = true, n = true) {
        if (!k || !k.location)
          return void (
            ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
            a.kg.warn("Could not initialize routing instrumentation due to invalid location")
          )
        let i,
          r = k.location.href
        ;(t && (i = e({ name: k.location.pathname, op: "pageload", metadata: { source: "url" } })),
          n &&
            (0, ne.o)("history", ({ to: t, from: n }) => {
              undefined === n && r && -1 !== r.indexOf(t)
                ? (r = undefined)
                : n !== t &&
                  ((r = undefined),
                  i &&
                    (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                      a.kg.log(`[Tracing] Finishing current transaction with op: ${i.op}`),
                    i.finish()),
                  (i = e({
                    name: k.location.pathname,
                    op: "navigation",
                    metadata: { source: "url" },
                  })))
            }))
      },
      startTransactionOnLocationChange: true,
      startTransactionOnPageLoad: true,
      _experiments: { enableLongTask: true },
      ...oe,
    }
  class le {
    __init() {
      this.name = se
    }
    constructor(e) {
      ;(le.prototype.__init.call(this),
        (this.options = { ...ue, ...e }),
        e &&
          !e.tracePropagationTargets &&
          e.tracingOrigins &&
          (this.options.tracePropagationTargets = e.tracingOrigins),
        Q(),
        (0, o.x)([
          this,
          "access",
          (e) => e.options,
          "access",
          (e) => e._experiments,
          "optionalAccess",
          (e) => e.enableLongTask,
        ]) &&
          j("longtask", (e) => {
            for (const t of e) {
              const e = (0, R.x1)()
              if (!e) return
              const n = (0, R.XL)(D.Z1 + t.startTime),
                i = (0, R.XL)(t.duration)
              e.startChild({
                description: "Main UI thread blocked",
                op: "ui.long-task",
                startTimestamp: n,
                endTimestamp: n + i,
              })
            }
          }))
    }
    setupOnce(e, t) {
      this._getCurrentHub = t
      const {
        routingInstrumentation: n,
        startTransactionOnLocationChange: i,
        startTransactionOnPageLoad: r,
        markBackgroundTransactions: o,
        traceFetch: s,
        traceXHR: u,
        tracePropagationTargets: l,
        shouldCreateSpanForRequest: c,
      } = this.options
      ;(n((e) => this._createRouteTransaction(e), r, i),
        o &&
          (k && k.document
            ? k.document.addEventListener("visibilitychange", () => {
                const e = (0, R.x1)()
                if (k.document.hidden && e) {
                  const t = "cancelled"
                  ;(("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
                    a.kg.log(
                      `[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`,
                    ),
                    e.status || e.setStatus(t),
                    e.setTag("visibilitychange", "document.hidden"),
                    e.finish())
                }
              })
            : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
              a.kg.warn(
                "[Tracing] Could not set up background tab detection due to lack of global document",
              )),
        ae({
          traceFetch: s,
          traceXHR: u,
          tracePropagationTargets: l,
          shouldCreateSpanForRequest: c,
        }))
    }
    _createRouteTransaction(e) {
      if (!this._getCurrentHub)
        return void (
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.warn(
            `[Tracing] Did not create ${e.op} transaction because _getCurrentHub is invalid.`,
          )
        )
      const {
          beforeNavigate: t,
          idleTimeout: n,
          finalTimeout: i,
          heartbeatInterval: o,
        } = this.options,
        s = "pageload" === e.op,
        u = s ? ce("sentry-trace") : null,
        c = s ? ce("baggage") : null,
        d = u ? S(u) : undefined,
        h = c
          ? (function (e) {
              if (!(0, l.HD)(e) && !Array.isArray(e)) return
              let t = {}
              if (Array.isArray(e)) t = e.reduce((e, t) => ({ ...e, ...M(t) }), {})
              else {
                if (!e) return
                t = M(e)
              }
              const n = Object.entries(t).reduce(
                (e, [t, n]) => (t.match(A) && (e[t.slice(E.length)] = n), e),
                {},
              )
              return Object.keys(n).length > 0 ? n : undefined
            })(c)
          : undefined,
        p = {
          ...e,
          ...d,
          metadata: { ...e.metadata, dynamicSamplingContext: d && !h ? {} : h },
          trimEnd: true,
        },
        f = "function" == typeof t ? t(p) : p,
        _ = undefined === f ? { ...p, sampled: false } : f
      ;((_.metadata = _.name !== p.name ? { ..._.metadata, source: "custom" } : _.metadata),
        false === _.sampled &&
          ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log(`[Tracing] Will not send ${_.op} transaction because of beforeNavigate.`),
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) &&
          a.kg.log(`[Tracing] Starting ${_.op} transaction on scope`))
      const g = this._getCurrentHub(),
        { location: m } = k,
        v = (0, r.lb)(g, _, n, i, true, { location: m }, o)
      return (
        v.registerBeforeFinishCallback((e) => {
          ee(e)
        }),
        v
      )
    }
  }
  function ce(e) {
    const t = (0, P.qT)(`meta[name=${e}]`)
    return t ? t.getAttribute("content") : null
  }
  var de,
    he = n(55334) /* 55334__mod */
  !(function (e) {
    e.Ok = "ok"
    e.DeadlineExceeded = "deadline_exceeded"
    e.Unauthenticated = "unauthenticated"
    e.PermissionDenied = "permission_denied"
    e.NotFound = "not_found"
    e.ResourceExhausted = "resource_exhausted"
    e.InvalidArgument = "invalid_argument"
    e.Unimplemented = "unimplemented"
    e.Unavailable = "unavailable"
    e.InternalError = "internal_error"
    e.UnknownError = "unknown_error"
    e.Cancelled = "cancelled"
    e.AlreadyExists = "already_exists"
    e.FailedPrecondition = "failed_precondition"
    e.Aborted = "aborted"
    e.OutOfRange = "out_of_range"
    e.DataLoss = "data_loss"
  })(de || (de = {}))
  var pe = n(33391) /* 33391__mod */
  ;("undefined" == typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (0, r.ro)()
}
