/**
 * Webpack Module #23416
 * @exports InitAudioAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.InitAudioAction = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(44656),
    a = n(41766),
    s = n(86700),
    u = n(31267),
    l = n(44656),
    c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          var e, t
          return i.__awaiter(this, void 0, void 0, function () {
            var n, r, s, l, c, d, h, p, f
            return i.__generator(this, function (_) {
              switch (_.label) {
                case 0:
                  return (n = this.gameConfig.audio)
                    ? [4, this.cookie.get(u.AudioModel.COOKIE_KEY)]
                    : [3, 2]
                case 1:
                  r = _.sent()
                  try {
                    for (s = i.__values(Object.keys(n)), l = s.next(); !l.done; l = s.next())
                      ((c = l.value),
                        n[c] &&
                          ((d = new a.Howl(this.fixPaths(n[c]))),
                          (h = "howl_".concat(c)),
                          o.di.bind(h).toConstantValue(d)))
                  } catch (e) {
                    p = { error: e }
                  } finally {
                    try {
                      l && !l.done && (f = s.return) && f.call(s)
                    } finally {
                      if (p) throw p.error
                    }
                  }
                  return (
                    this.model.init(
                      null === (e = r[u.AudioModel.COOKIE_KEY]) || void 0 === e ? void 0 : e.sounds,
                      null === (t = r[u.AudioModel.COOKIE_KEY]) || void 0 === t ? void 0 : t.music,
                    ),
                    [3, 2]
                  )
                case 2:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.fixPaths = function (e, t) {
          return (
            void 0 === t && (t = l.IS_ODR_BUILD ? l.ODR_BUILD_ORIGIN : o.GAME_SCRIPT_ORIGIN),
            Array.isArray(e.src)
              ? (e.src = e.src.map(function (e) {
                  return "".concat(t).concat(e)
                }))
              : "string" == typeof e.src && (e.src = "".concat(t).concat(e.src)),
            e
          )
        }),
        i.__decorate(
          [(0, s.inject)(r.TypesCore.gameConfig), i.__metadata("design:type", Object)],
          t.prototype,
          "gameConfig",
          void 0,
        ),
        i.__decorate(
          [(0, s.inject)(r.TypesAudio.model), i.__metadata("design:type", u.AudioModel)],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [(0, s.inject)(r.TypesSocial.cookie), i.__metadata("design:type", Object)],
          t.prototype,
          "cookie",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(o.Action)
  t.InitAudioAction = c
}
