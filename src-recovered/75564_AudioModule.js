/**
 * Webpack Module #75564
 * @exports AudioModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.AudioModule = void 0))
  var i = n(86700),
    r = n(86178),
    o = n(31267),
    a = n(74886),
    s = n(70919),
    u = n(23416)
  t.AudioModule = new i.ContainerModule(function (e) {
    ;(e(r.TypesAudio.model).to(o.AudioModel).inSingletonScope(),
      e(r.TypesAudio.initAction).to(u.InitAudioAction),
      e(r.TypesAudio.soundAction).to(s.PlaySoundAction),
      e(r.TypesAudio.musicAction).to(a.PlayMusicAction))
  })
}
