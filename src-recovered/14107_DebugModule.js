/**
 * Webpack Module #14107
 * @exports DebugModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugModule = void 0))
  var i = n(44656),
    r = n(66920),
    o = n(86700)
  t.DebugModule = new o.ContainerModule(function () {
    i.di.bind("fspMeterAction").to(r.CreateFPSMeterAction)
  })
}
