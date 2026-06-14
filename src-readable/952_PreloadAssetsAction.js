/**
 * Webpack Module #952
 * @exports PreloadAssetsAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PreloadAssetsAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(44656) /* 44656__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(6538) /* 6538_SIDES */,
    u = r.IS_ODR_BUILD ? r.ODR_BUILD_ORIGIN : r.GAME_SCRIPT_ORIGIN,
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
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
              .concat((null === (n = this.data) || undefined === n ? undefined : n.prefix) || "")
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
