/**
 * Webpack Module #97158
 * @exports NotificationAction, IMAGES_CACHE, EMOJI, WIDTH_FULL, HEIGHT_FULL
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.NotificationAction = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(84194) /* 84194__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = n(86178) /* 86178__mod */,
    u = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t.action = "CUSTOM"), (t.template = "play_turn"), (t.notification = "PUSH"), t)
      }
      var n
      return (
        i.__extends(t, e),
        (n = t),
        (t.prototype.execute = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return ((this.data = e), [4, this.getPayload()])
                case 1:
                  return ((t = n.sent()), [4, this.social.notify(t)])
                case 2:
                  return (
                    n.sent()
                      ? r.log.trace("notification", t.text, t.strategy)
                      : r.log.warn("notification", t.text, t.strategy),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.getPayload = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    (e = {
                      action: this.action,
                      template: this.template,
                      strategy: this.strategy,
                      notification: this.notification,
                      cta: this.cta,
                      text: this.getText(),
                    }),
                    [4, this.getImage()]
                  )
                case 1:
                  return [2, ((e.image = t.sent()), e)]
              }
            })
          })
        }),
        (t.prototype.getEmoji = function () {
          return n.EMOJI ? n.EMOJI + " " : ""
        }),
        (t.prototype.getI18NKey = function () {
          return "play_turn"
        }),
        (t.prototype.getText = function () {
          var e = this,
            t = this.getEmoji()
          return (function (e, t) {
            var n = { default: t(e.default), localizations: {} }
            for (var i in e.localizations) n.localizations[i] = t(e.localizations[i])
            return n
          })(this.i18n[this.getI18NKey()], function (n) {
            return (
              t +
              n.replace(/{username}|{score}/g, function (t) {
                switch (t) {
                  case "{username}":
                    return e.social.me.name
                  case "{score}":
                    return "" + e.social.me.scoreSession
                }
                return t
              })
            )
          })
        }),
        (t.prototype.getImage = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2, this.loadImage("./assets/Notification.png")]
            })
          })
        }),
        (t.prototype.loadImage = function (e, t) {
          return (
            undefined === t && (t = true),
            i.__awaiter(this, undefined, undefined, function () {
              return i.__generator(this, function (i) {
                return t && n.IMAGES_CACHE[e]
                  ? [2, n.IMAGES_CACHE[e]]
                  : [
                      2,
                      new Promise(function (i) {
                        var r = new Image()
                        ;((r.crossOrigin = "Anonymous"),
                          (r.src = e),
                          (r.style.visibility = "hidden"),
                          document.body.appendChild(r),
                          r.addEventListener("load", function () {
                            document.body.removeChild(r)
                            var o = document.createElement("canvas"),
                              a = o.getContext("2d")
                            ;((o.width = r.width), (o.height = r.height), a.drawImage(r, 0, 0))
                            var s = o.toDataURL("image/jpeg")
                            ;(t && (n.IMAGES_CACHE[e] = s), i(s))
                          }))
                      }),
                    ]
              })
            })
          )
        }),
        (t.IMAGES_CACHE = {}),
        (t.EMOJI = ""),
        (t.WIDTH_FULL = 1200),
        (t.HEIGHT_FULL = 627),
        i.__decorate(
          [(0, a.inject)(s.TypesSocial.model), i.__metadata("design:type", Object)],
          t.prototype,
          "social",
          undefined,
        ),
        i.__decorate(
          [(0, a.inject)(s.TypesNotification.i18n), i.__metadata("design:type", Object)],
          t.prototype,
          "i18n",
          undefined,
        ),
        (t = n = i.__decorate([(0, a.injectable)()], t))
      )
    })(o.Action)
  t.NotificationAction = u
}
