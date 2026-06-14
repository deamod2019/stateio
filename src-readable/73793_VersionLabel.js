/**
 * Webpack Module #73793
 * @exports VersionLabel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.VersionLabel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(16584) /* 16584__mod */
  n(92716) /* 92716__mod */
  var o = n(19562) /* 19562__mod */,
    a = n(86178) /* 86178__mod */
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
