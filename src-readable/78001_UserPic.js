/**
 * Webpack Module #78001
 * @exports UserPic
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.UserPic = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(6538) /* 6538_SIDES */,
    a = n(59795) /* 59795__mod */,
    s = n(4199) /* 4199__mod */,
    u = (function (e) {
      function t() {
        var t = e.call(this) || this
        return (
          (t.bgAndImgCont = new o.Container()),
          (t.bg = new o.Graphics().beginFill(15724527).drawRect(0, 0, 10, 10).endFill()),
          (t.bg.width = 320),
          (t.bg.height = 320),
          t.bgAndImgCont.addChild(t.bg),
          t.addChild(t.bgAndImgCont),
          t
        )
      }
      return (
        i.__extends(t, e),
        Object.defineProperty(t.prototype, "user", {
          get: function () {
            return this._user
          },
          set: function (e) {
            ;((this._user = e), this._updateInternal())
          },
          enumerable: false,
          configurable: true,
        }),
        (t.prototype._updateInternal = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e
            return i.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return (
                    this._sprite &&
                      (this.bgAndImgCont.removeChild(this._sprite), delete this._sprite),
                    this._user ? [4, (0, s.loadTexture)(this._user.photo)] : [3, 2]
                  )
                case 1:
                  ;(((e = t.sent()).textureCacheIds[0] = "user-photo-".concat(this._user.id)),
                    (this._sprite = new o.Sprite(e)),
                    this.bgAndImgCont.addChild(this._sprite),
                    (this._sprite.width = this.bg.width),
                    (this._sprite.height = this.bg.height),
                    this.onImageLoaded(),
                    (t.label = 2))
                case 2:
                  return [2]
              }
            })
          })
        }),
        (t.prototype.onImageLoaded = function () {}),
        Object.defineProperty(t.prototype, "sprite", {
          get: function () {
            return this._sprite
          },
          enumerable: false,
          configurable: true,
        }),
        (t = i.__decorate([(0, r.injectable)(), i.__metadata("design:paramtypes", [])], t))
      )
    })(a.View)
  t.UserPic = u
}
