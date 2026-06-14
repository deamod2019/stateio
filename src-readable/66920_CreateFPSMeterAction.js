/**
 * Webpack Module #66920
 * @exports CreateFPSMeterAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CreateFPSMeterAction = undefined))
  var i = n(70655) /* 70655__mod */
  n(79349) /* 79349__mod */
  var r = n(86700) /* 86700_MetadataReader */,
    o = n(84194) /* 84194__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(84725) /* 84725_Settings */,
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            undefined === e && (e = s.Settings.debug.fpsMeter),
            i.__awaiter(this, undefined, undefined, function () {
              var t, n, r, s
              return i.__generator(this, function (i) {
                return (
                  o.log.debug("createFPSMeter"),
                  "undefined" != typeof FPSMeter &&
                    ((t = document.getElementById(a.CANVAS_ID)),
                    (n = document.createElement("div")),
                    document.body.insertBefore(n, t.parentElement),
                    (r = new FPSMeter(n, e)).show(),
                    (s = function () {
                      ;(r.tick(), requestAnimationFrame(s))
                    })()),
                  [2]
                )
              })
            })
          )
        }),
        (t = i.__decorate([(0, r.injectable)()], t))
      )
    })(a.Action)
  t.CreateFPSMeterAction = u
}
