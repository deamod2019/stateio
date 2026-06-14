/**
 * Webpack Module #14107
 * @exports DebugModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.DebugModule = undefined))
  var i = n(44656) /* 44656__mod */,
    r = n(66920) /* 66920_CreateFPSMeterAction */,
    o = n(86700) /* 86700_MetadataReader */
  t.DebugModule = new o.ContainerModule(function () {
    i.di.bind("fspMeterAction").to(r.CreateFPSMeterAction)
  })
}
