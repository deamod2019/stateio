/**
 * Webpack Module #51006
 * @exports TutorialFingerView
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.TutorialFingerView = void 0))
  var i = n(70655),
    r = n(25317),
    o = n(86700),
    a = n(6538),
    s = n(55132),
    u = n(44656),
    l = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.onAdded = function () {
          ;(this.sprite.anchor.set(0.5, 20 / this.sprite.height),
            this.sprite.position.set(0, 0),
            this.addChild(this.sprite),
            e.prototype.onAdded.call(this))
        }),
        (t.prototype.hold = function (e) {
          return (
            void 0 === e && (e = 0.5),
            i.__awaiter(this, void 0, Promise, function () {
              var t,
                n,
                o = this
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      this.cancelTweens(),
                      (t = 0.4 * this.sprite.width),
                      (n = -Math.tan(t / this.sprite.height)),
                      0.9,
                      [
                        4,
                        new Promise(function (i) {
                          r.gsap
                            .timeline()
                            .to(o.sprite, { y: 0.9 * t, duration: e, rotation: n })
                            .to(o.sprite.scale, { x: 0.9, y: 0.9, duration: e, onComplete: i }, 0)
                        }),
                      ]
                    )
                  case 1:
                    return (i.sent(), [2])
                }
              })
            })
          )
        }),
        (t.prototype.release = function (e) {
          return (
            void 0 === e && (e = 0.5),
            i.__awaiter(this, void 0, Promise, function () {
              var t = this
              return i.__generator(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      this.cancelTweens(),
                      [
                        4,
                        new Promise(function (n) {
                          r.gsap
                            .timeline()
                            .to(t.sprite, { x: 0, y: 0, duration: e, rotation: 0 })
                            .to(t.sprite.scale, { x: 1, y: 1, duration: e, onComplete: n }, 0)
                        }),
                      ]
                    )
                  case 1:
                    return (n.sent(), [2])
                }
              })
            })
          )
        }),
        (t.prototype.cancelTweens = function () {
          ;(r.gsap.killTweensOf(this.sprite), r.gsap.killTweensOf(this.sprite.scale))
        }),
        (t.prototype.tap = function (e) {
          return (
            void 0 === e && (e = 200),
            i.__awaiter(this, void 0, Promise, function () {
              return i.__generator(this, function (t) {
                switch (t.label) {
                  case 0:
                    return [4, this.hold()]
                  case 1:
                  case 3:
                    return (t.sent(), [4, u.WaitAction.ms(e)])
                  case 2:
                    return (t.sent(), [4, this.release()])
                  case 4:
                    return (t.sent(), [2])
                }
              })
            })
          )
        }),
        i.__decorate(
          [
            (0, o.inject)("finger.svg"),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== a.Sprite && a.Sprite) ? n : Object,
            ),
          ],
          t.prototype,
          "sprite",
          void 0,
        ),
        (t = i.__decorate([(0, o.injectable)()], t))
      )
    })(s.View)
  t.TutorialFingerView = l
}
