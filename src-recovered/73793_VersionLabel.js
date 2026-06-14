/**
 * Webpack Module #73793
 * @exports VersionLabel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.VersionLabel = void 0))
  var i = n(70655),
    r = n(16584)
  n(92716)
  var o = n(19562),
    a = n(86178)
  t.VersionLabel = function () {
    var e = (0, o.useInjection)(a.TypesCore.gameConfig),
      t = (0, o.useInjection)(a.TypesSocial.model),
      n = "fb" === t.socialPlatform ? FBInstant.getSDKVersion() : null
    return (0, r.jsx)(
      "a",
      i.__assign(
        { class: "version__label" },
        {
          children: ""
            .concat(t.socialPlatform)
            .concat(n ? "-" + n : "", "/")
            .concat(e.version || "localhost"),
        },
      ),
    )
  }
}
