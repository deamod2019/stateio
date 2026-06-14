/**
 * Webpack Module #65248
 * @exports AuthActionBase
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.AuthActionBase = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(84194) /* 84194__mod */,
    s = n(86700) /* 86700_MetadataReader */,
    u = n(20383) /* 20383_AppModel */,
    l = n(56467) /* 56467__mod */,
    c = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      return (
        i.__extends(t, e),
        (t.prototype.execute = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e, t, n, r, o, a
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  return [4, this.getPlayerInfo()]
                case 1:
                  return (
                    (e = i.sent()),
                    (t = e.id),
                    (n = e.name),
                    (r = e.photo),
                    (o = e.signature),
                    (this.model.signature = o),
                    [4, this.model.post("auth", { user_id: t, signature: o }, false)]
                  )
                case 2:
                  return (a = i.sent())
                    ? a.token
                      ? [3, 4]
                      : [
                          4,
                          this.model.post(
                            "auth",
                            { user_id: t, user_photo: r, user_name: n, signature: o },
                            false,
                          ),
                        ]
                    : [3, 4]
                case 3:
                  ;((a = i.sent()), (i.label = 4))
                case 4:
                  return [4, this.proceedToken(null == a ? undefined : a.token)]
                case 5:
                  return (i.sent(), [2])
              }
            })
          })
        }),
        (t.prototype.proceedToken = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n, r
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (!e) return [3, 5]
                  ;((t = undefined), (n = undefined))
                  try {
                    n = (0, l.getAuth)(this.model.firebaseApp)
                  } catch (e) {
                    return [2, a.log.warn("getAuth failed with error", e)]
                  }
                  i.label = 1
                case 1:
                  return (i.trys.push([1, 3, , 4]), [4, (0, l.signInWithCustomToken)(n, e)])
                case 2:
                  return ((t = i.sent()), [3, 4])
                case 3:
                  return (
                    (r = i.sent()),
                    [2, a.log.warn("signInWithCustomToken failed with error", r)]
                  )
                case 4:
                  return (a.log.info("#auth success", t), [3, 6])
                case 5:
                  ;(a.log.warn("#auth missed token"), (i.label = 6))
                case 6:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.loadProfileImage = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  if (!e) return [3, 6]
                  i.label = 1
                case 1:
                  return (i.trys.push([1, 5, , 6]), [4, fetch(e)])
                case 2:
                  return [4, i.sent().blob()]
                case 3:
                  return (
                    (n = i.sent()),
                    [
                      4,
                      new Promise(function (e, t) {
                        var i = new FileReader()
                        ;((i.onloadend = function () {
                          return e(i.result)
                        }),
                          (i.onerror = t),
                          i.readAsDataURL(n))
                      }),
                    ]
                  )
                case 4:
                  return ((t = i.sent()), [3, 6])
                case 5:
                  return (i.sent(), a.log.warn("Failed to load profile image"), [3, 6])
                case 6:
                  return [2, t]
              }
            })
          })
        }),
        (t.prototype.auth = function (e, t) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return [2]
            })
          })
        }),
        i.__decorate(
          [(0, s.inject)(r.TypesApp.model), i.__metadata("design:type", u.AppModel)],
          t.prototype,
          "model",
          undefined,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(o.Action)
  t.AuthActionBase = c
}
