/**
 * Webpack Module #952
 * @exports PreloadAssetsAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PreloadAssetsAction = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(84194),
    a = n(86700),
    s = n(6538),
    u = r.IS_ODR_BUILD ? r.ODR_BUILD_ORIGIN : r.GAME_SCRIPT_ORIGIN,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t,
              n = this
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (t = new s.Loader()),
                    e.assets
                      .filter(function (e) {
                        return -1 !== ["svg", "jpg", "png"].indexOf("" + e.split(".").pop())
                      })
                      .forEach(function (e) {
                        var i = n.transformAssetPath(e)
                        t.add(e, i, null, function (t) {
                          ;(o.log.trace("preloaded", t.name, "from:", i), n.bindAsset(e, t))
                        })
                      }),
                    e.onProgress &&
                      t.onProgress.add(function () {
                        e.onProgress(t.progress)
                      }),
                    [
                      4,
                      new Promise(function (e) {
                        return t.load(e)
                      }),
                    ]
                  )
                case 1:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.transformAssetPath = function (e) {
          return "".concat(u, "assets/").concat(e)
        }),
        (t.prototype.bindAsset = function (e, t) {
          var n,
            i = ""
              .concat((null === (n = this.data) || void 0 === n ? void 0 : n.prefix) || "")
              .concat(e)
          r.di.bind(i).toDynamicValue(function () {
            return new s.Sprite(t.texture)
          })
        }),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.Action)
  t.PreloadAssetsAction = l
}
