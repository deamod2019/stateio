/**
 * Webpack Module #23416
 * @exports InitAudioAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.InitAudioAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(41766) /* 41766_Howler */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(31267) /* 31267_AudioModel */,
    l = n(44656) /* 44656__mod */,
    c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          var e, t
          return i.__awaiter(this, undefined, undefined, function () {
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
                      null === (e = r[u.AudioModel.COOKIE_KEY]) || undefined === e ? undefined : e.sounds,
                      null === (t = r[u.AudioModel.COOKIE_KEY]) || undefined === t ? undefined : t.music,
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
            undefined === t && (t = l.IS_ODR_BUILD ? l.ODR_BUILD_ORIGIN : o.GAME_SCRIPT_ORIGIN),
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
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(r.TypesAudio.model), i.__metadata("design:type", u.AudioModel)],
          t.prototype,
          "model",
          undefined,
        ),
        i.__decorate(
          [(0, s.inject)(r.TypesSocial.cookie), i.__metadata("design:type", Object)],
          t.prototype,
          "cookie",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(o.Action)
  t.InitAudioAction = c
}
