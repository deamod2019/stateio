/**
 * Webpack Module #94766
 * @exports SIOPreloadAssetsAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.SIOPreloadAssetsAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(55132) /* 55132__mod */,
    o = (n(44656) /* 44656__mod */, n(86178) /* 86178__mod */),
    a = n(48616) /* 48616__mod */,
    s = (n(45724) /* 45724_GenerateShareImageAction */, n(66154) /* 66154_SelectableFighterDataSet */),
    u = i.__importDefault(n(69185) /* 69185__mod */),
    l = (n(95781) /* 95781_TypesGame */, n(60097) /* 60097_DebugPopup */, n(56462) /* 56462_TournamentsDebugPanel */, n(30107) /* 30107_PopupType */, n(86700) /* 86700_MetadataReader */),
    c = n(6538) /* 6538_SIDES */,
    d = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, r
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, Promise, function () {
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
                      false,
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
                      false,
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
              "function" == typeof (n = undefined !== u.default && u.default) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          undefined,
        ),
        i.__decorate(
          [
            (0, l.inject)(o.TypesApp.pageModel),
            i.__metadata(
              "design:type",
              "function" == typeof (r = undefined !== a.PageModel && a.PageModel) ? r : Object,
            ),
          ],
          t.prototype,
          "pageModel",
          undefined,
        ),
        (t = i.__decorate([(0, l.injectable)()], t))
      )
    })(r.PreloadAssetsAction)
  t.SIOPreloadAssetsAction = d
}
