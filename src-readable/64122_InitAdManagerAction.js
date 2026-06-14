/**
 * Webpack Module #64122
 * @exports InitAdManagerAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.InitAdManagerAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86125) /* 86125__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(73018) /* 73018_AdManagerBase */,
    u = n(86700) /* 86700_MetadataReader */,
    l = n(4421) /* 4421__mod */,
    c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    r.Localize.addTemplates({
                      video_ad_failed: {
                        default: "Video AD Failed",
                        localizations: {
                          ru_RU: "Ошибка видеорекламы",
                          es_ES: "Error en el anuncio",
                          es_LA: "Fallo en el anuncio",
                          pt_PT: "Erro no anúncio",
                          pt_BR: "Erro no vídeo de anúncio",
                          fr_FR: "Échec de la pub vidéo",
                          de_DE: "Videowerbung nicht verf.",
                          zh_CN: "视频广告错误",
                          zh_TW: "影片廣告錯誤",
                          ja_JP: "動画広告の再生に失敗しました",
                          ko_KR: "비디오 광고 시청 실패",
                          it_IT: "Spot video non disponibile",
                          pl_PL: "Reklama wideo błędna",
                          tr_TR: "Reklam videosu gösterilemedi",
                          th_TH: "แสดงวิดีโอโฆษณาไม่สำเร็จ",
                          hi_IN: "वीडियो विज्ञापन विफल रहा",
                          vi_VN: "Quảng cáo video không thành công",
                          id_ID: "Iklan Video gagal",
                          ms_MY: "Video AD gagal",
                        },
                      },
                      no_video_ad: {
                        default: "No Video ADs at the moment, sorry...",
                        localizations: {
                          ru_RU: "Видоереклама недоступна",
                          es_ES: "¡Vaya! No hay anuncios ahora.",
                          es_LA: "Qué pena, no hay anuncios disponibles.",
                          pt_PT: "Infelizmente não há anúncios neste momento.",
                          pt_BR: "Nenhum vídeo de anúncio no momento. Foi mal!",
                          fr_FR: "Aucune pub vidéo pour l'instant...",
                          de_DE: "Leider gibt es keine Videowerbungen im Moment …",
                          zh_CN: "目前没有视频广告，抱歉……",
                          zh_TW: "目前沒有影片廣告，抱歉……",
                          ja_JP: "現在、動画広告はありません、ご理解ください",
                          ko_KR: "죄송합니다, 지금 시청 가능한 비디오 광고가 없습니다",
                          it_IT: "Non ci sono spot video disponibili al momento.",
                          pl_PL: "W tej chwili brak reklam wideo, przykro nam…",
                          tr_TR: "Üzgünüz, şu anda reklam videosu yok.",
                          th_TH: "ขณะนี้ไม่มีวิดีโอโฆษณาพร้อมให้บริการ ขออภัยด้วย...",
                          hi_IN: "क्षमा करें, इस समय कोई वीडियो विज्ञापन नहीं है",
                          vi_VN: "Rất tiếc, hiện tại không có quảng cáo video…",
                          id_ID: "Tidak ada iklan Video saat ini, maaf…",
                          ms_MY: "Tiada Video AD buat masa ini, maaf...",
                        },
                      },
                      video_ad_cancelled: {
                        default: "Video AD Cancelled",
                        localizations: {
                          ru_RU: "Вы отменили просмотр видеорекламы",
                          es_ES: "Anuncio cancelado",
                          es_LA: "Anuncio cancelado",
                          pt_PT: "Anúncio cancelado",
                          pt_BR: "Vídeo de anúncio cancelado",
                          fr_FR: "Pub vidéo annulée",
                          de_DE: "Videowerbung abgebr.",
                          zh_CN: "视频广告已取消",
                          zh_TW: "影片廣告已取消",
                          ja_JP: "動画広告がキャンセルされました",
                          ko_KR: "비디오 광고 시청 취소",
                          it_IT: "Spot video annullato",
                          pl_PL: "Reklama wideo anulowana",
                          tr_TR: "Reklam videosu iptal edildi",
                          th_TH: "วิดีโอโฆษณาถูกยกเลิก",
                          hi_IN: "वीडियो विज्ञापन रद्द कर दिया",
                          vi_VN: "Đã hủy quảng cáo video",
                          id_ID: "Iklan Video dibatalkan",
                          ms_MY: "Video AD dibatalkan",
                        },
                      },
                    }),
                    [
                      4,
                      Promise.all([
                        this.ads.preloadNextInter(s.AdManagerBase.config.ids.INTER),
                        this.ads.preloadNextReward(s.AdManagerBase.config.ids.REWARD),
                      ]),
                    ]
                  )
                case 1:
                  return (e.sent(), [2])
              }
            })
          })
        }),
        i.__decorate(
          [(0, u.inject)(a.TypesAds.manager), i.__metadata("design:type", Object)],
          t.prototype,
          "ads",
          undefined,
        ),
        i.__decorate(
          [(0, u.inject)(a.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [(0, u.inject)(a.TypesApp.pageModel), i.__metadata("design:type", l.PageModel)],
          t.prototype,
          "page",
          undefined,
        ),
        (t = i.__decorate([(0, u.injectable)()], t))
      )
    })(o.Action)
  t.InitAdManagerAction = c
}
