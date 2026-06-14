/**
 * Webpack Module #75564
 * @exports AudioModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AudioModule = undefined))
  var i = n(86700) /* 86700_MetadataReader */,
    r = n(86178) /* 86178__mod */,
    o = n(31267) /* 31267_AudioModel */,
    a = n(74886) /* 74886_PlayMusicAction */,
    s = n(70919) /* 70919_PlaySoundAction */,
    u = n(23416) /* 23416_InitAudioAction */
  t.AudioModule = new i.ContainerModule(function (e) {
    ;(e(r.TypesAudio.model).to(o.AudioModel).inSingletonScope(),
      e(r.TypesAudio.initAction).to(u.InitAudioAction),
      e(r.TypesAudio.soundAction).to(s.PlaySoundAction),
      e(r.TypesAudio.musicAction).to(a.PlayMusicAction))
  })
}
