/**
 * Webpack Module #66920
 * @exports CreateFPSMeterAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CreateFPSMeterAction = void 0))
  var i = n(70655)
  n(79349)
  var r = n(86700),
    o = n(84194),
    a = n(44656),
    s = n(84725),
    u = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          return (
            void 0 === e && (e = s.Settings.debug.fpsMeter),
            i.__awaiter(this, void 0, void 0, function () {
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
