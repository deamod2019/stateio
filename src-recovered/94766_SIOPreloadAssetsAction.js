/**
 * Webpack Module #94766
 * @exports SIOPreloadAssetsAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SIOPreloadAssetsAction = void 0))
  var i = n(70655),
    r = n(55132),
    o = (n(44656), n(86178)),
    a = n(48616),
    s = (n(45724), n(66154)),
    u = i.__importDefault(n(69185)),
    l = (n(95781), n(60097), n(56462), n(30107), n(86700)),
    c = n(6538),
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, void 0, Promise, function () {
            var t,
              n,
              r,
              o = this
            return i.__generator(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    console.error("start preload"),
                    (t = i.__spreadArray(
                      [],
                      i.__read(
                        Array.from(
                          s.SelectableBuildingDataSet.concat(s.SelectableFighterDataSet),
                          function (e) {
                            return e.textureUrl || ""
                          },
                        ),
                      ),
                      !1,
                    )),
                    { assets: 0 },
                    c.BitmapFont.from(
                      "Helvetica",
                      { fill: "black", fontFamily: "Helvetica", fontSize: 24, fontWeight: "800" },
                      { chars: "0123456789- ", resolution: devicePixelRatio },
                    ),
                    (n = i.__spreadArray(
                      [
                        "Notification.png",
                        "spinner.svg",
                        "skull.svg",
                        "finger.svg",
                        "animation/win-rays.svg",
                        "victory-framing.svg",
                      ],
                      i.__read(t),
                      !1,
                    )),
                    (r = e.prototype.execute.call(this, {
                      assets: n,
                      onProgress: function (e) {
                        o.pageModel.assetsProgress = e / 100
                      },
                    })),
                    [4, Promise.all([r])]
                  )
                case 1:
                  return (
                    a.sent(),
                    c.utils.TextureCache["Notification.png"].baseTexture.setResolution(1),
                    this.root.onAdded(),
                    this.root.spinner.show(),
                    [2]
                  )
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, l.inject)(o.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== u.default && u.default) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          void 0,
        ),
        i.__decorate(
          [
            (0, l.inject)(o.TypesApp.pageModel),
            i.__metadata(
              "design:type",
              "function" == typeof (r = void 0 !== a.PageModel && a.PageModel) ? r : Object,
            ),
          ],
          t.prototype,
          "pageModel",
          void 0,
        ),
        (t = i.__decorate([(0, l.injectable)()], t))
      )
    })(r.PreloadAssetsAction)
  t.SIOPreloadAssetsAction = d
}
