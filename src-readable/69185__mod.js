/**
 * Webpack Module #69185
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  Object.defineProperty(t, "__esModule", { value: true })
  var i = n(70655) /* 70655__mod */,
    r = n(55132) /* 55132__mod */,
    o = n(86178) /* 86178__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(6538) /* 6538_SIDES */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, u, l, c, d
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(this.progressBar.init({ width: 200, height: 7 }),
            (this.progressBar.visible = false),
            this.overlay.addChild(
              new s.Graphics().beginFill(13684944).drawRect(0, 0, 10, 10).endFill(),
            ),
            this.addChild(this.screenContainer),
            this.addChild(this.popupContainer),
            this.addChild(this.overlay),
            this.addChild(this.spinner),
            this.addChild(this.progressBar),
            e.prototype.onAdded.call(this))
        }),
        (t.prototype.goToScreen = function (e, t) {
          return (
            undefined === t && (t = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.screenContainer.setScreen(e)]
                  case 1:
                    return (t.sent(), [4, this.overlay.unblur()])
                  case 2:
                    return (t.sent(), [2])
                }
              })
            })
          )
        }),
        (t.prototype.freeze = function () {}),
        (t.prototype.unfreeze = function () {}),
        (t.prototype.onResize = function () {
          var e = this
          ;((this.spinner.x = 0.5 * (this.size.width - this.spinner.width)),
            (this.spinner.y = 0.5 * (this.size.height - this.spinner.height)),
            [this.overlay].forEach(function (t) {
              ;((t.width = e.size.width), (t.height = e.size.height))
            }),
            (this.progressBar.x = 0.5 * this.size.width),
            (this.progressBar.y = 0.75 * this.size.height),
            [this.screenContainer, this.popupContainer].forEach(function (t) {
              ;((t.size = e.size), t.onResize())
            }))
        }),
        i.__decorate(
          [
            (0, a.inject)(o.Types2D.spinner),
            i.__metadata(
              "design:type",
              "function" == typeof (n = undefined !== r.Spinner && r.Spinner) ? n : Object,
            ),
          ],
          t.prototype,
          "spinner",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(o.Types2D.screenContainer),
            i.__metadata(
              "design:type",
              "function" == typeof (u = undefined !== r.ScreenContainer && r.ScreenContainer)
                ? u
                : Object,
            ),
          ],
          t.prototype,
          "popupContainer",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(o.Types2D.screenContainer),
            i.__metadata(
              "design:type",
              "function" == typeof (l = undefined !== r.ScreenContainer && r.ScreenContainer)
                ? l
                : Object,
            ),
          ],
          t.prototype,
          "screenContainer",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(o.Types2D.overlay),
            i.__metadata(
              "design:type",
              "function" == typeof (c = undefined !== r.Overlay && r.Overlay) ? c : Object,
            ),
          ],
          t.prototype,
          "overlay",
          undefined,
        ),
        i.__decorate(
          [
            (0, a.inject)(r.ProgressBar),
            i.__metadata(
              "design:type",
              "function" == typeof (d = undefined !== r.ProgressBar && r.ProgressBar) ? d : Object,
            ),
          ],
          t.prototype,
          "progressBar",
          undefined,
        ),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.RootView)
  t.default = u
}
