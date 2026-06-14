/**
 * Webpack Module #20383
 * @exports AppModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AppModel = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(63333),
    a = n(83977),
    s = n(47135),
    u = n(84194),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t, n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  ;(0,
                    (t = e.firebase),
                    (this._firebaseApp = (0, a.initializeApp)(t)),
                    (this._remoteConfig = (0, s.getRemoteConfig)()),
                    (this._remoteConfig.defaultConfig = this.getDefaultRemoteConfig(e.host)),
                    (i.label = 1))
                case 1:
                  return (
                    i.trys.push([1, 4, , 5]),
                    [4, (0, s.ensureInitialized)(this._remoteConfig).catch(u.log.warn)]
                  )
                case 2:
                  return (
                    i.sent(),
                    [4, (0, s.fetchAndActivate)(this._remoteConfig).catch(u.log.warn)]
                  )
                case 3:
                  return (i.sent(), [3, 5])
                case 4:
                  return ((n = i.sent()), u.log.warn("Failed to activate remote config", n), [3, 5])
                case 5:
                  return (
                    this._defaultPayload || (this._defaultPayload = {}),
                    (this._defaultPayload.app_id = e.appId),
                    (this._defaultPayload.sn = e.provider),
                    (this._defaultHost = "".concat(
                      (0, s.getString)(this._remoteConfig, "backend"),
                    )),
                    "undefined" != typeof __BACKEND_HOST__ &&
                      __BACKEND_HOST__ &&
                      (this._defaultHost = __BACKEND_HOST__),
                    (this._defaultHost = this._defaultHost.replace(/\/+$/, "")),
                    u.log.info("defaultHost", this._defaultHost),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.getAuthorizationHeader = function () {
          return this.signature
            ? "Bearer ".concat(this.signature)
            : e.prototype.getAuthorizationHeader.call(this)
        }),
        Object.defineProperty(t.prototype, "firebaseApp", {
          get: function () {
            return this._firebaseApp
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "defaultEndpoint", {
          get: function () {
            return ""
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(t.prototype, "remoteConfig", {
          get: function () {
            return this._remoteConfig
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t.prototype.getDefaultRemoteConfig = function (e) {
          return (
            void 0 === e && (e = "http://localhost"),
            { backend: e, payments_backend_url: "".concat(e, "/purchase") }
          )
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(o.BackendModel)
  t.AppModel = l
}
