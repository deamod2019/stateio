/**
 * Webpack Module #40470
 * @exports FieldMediator
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.FieldMediator = void 0))
  var i = n(70655),
    r = n(25317),
    o = n(86178),
    a = n(55132),
    s = n(94572),
    u = n(95781),
    l = n(86700),
    c = n(47283),
    d = n(88969),
    h = i.__importDefault(n(11414)),
    p = i.__importDefault(n(69185)),
    f = n(65370),
    _ = n(82496),
    g = n(44365),
    m = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, a
      return (
        i.__extends(t, e),
        (t.prototype.initialize = function () {
          var e = this
          ;(this._renderingSystem || (this._renderingSystem = new d.DisplaySystem(this.view)),
            this.model.engine.addSystem(this._renderingSystem),
            (this.view.alpha = 0),
            this.addListener(c.GameEvents.LEVEL_LOADED, function () {
              ;(e.onStateChanged(e.model.state), r.gsap.to(e.view, { alpha: 1 }))
            }),
            this.addListener(c.GameEvents.RESTART_LEVEL, function () {
              return e.focusOn(e.model.currentContinent.stageLevel)
            }),
            this.addListener(c.GameEvents.STATE_CHANGED, this.onStateChanged),
            this.addListener(c.GameEvents.RESIZE, this.onResize))
        }),
        (t.prototype.onResize = function () {
          this.onStateChanged(this.model.state)
        }),
        (t.prototype.onStateChanged = function (e) {
          switch (e) {
            case f.GameState.GAMEPLAY:
              this.focusOn(this.model.currentContinent.stageLevel)
              break
            case f.GameState.LOBBY:
              this.focusOn(NaN, 0)
              break
            case f.GameState.LOOSE:
            case f.GameState.WIN_STAGE:
            case f.GameState.WIN_CONTINENT:
              this.focusOn(NaN)
          }
        }),
        (t.prototype.getMapBounds = function (e, t) {
          if ((void 0 === t && (t = 150), isNaN(e))) {
            var n = this.view.getLocalBounds()
            return [n.left, n.top, n.right, n.bottom]
          }
          var r = [1 / 0, 1 / 0, -1 / 0, -1 / 0]
          return (
            this.model.currentContinent.parsed.forEach(function (n, o) {
              var a
              if (n.stage === e)
                if (isNaN(t))
                  null === (a = n.shapes) ||
                    void 0 === a ||
                    a.forEach(function (e) {
                      var t = (0, h.default)(e)
                      ;((r[0] = Math.min(r[0], t[0])),
                        (r[1] = Math.min(r[1], t[1])),
                        (r[2] = Math.max(r[2], t[2])),
                        (r[3] = Math.max(r[3], t[3])))
                    })
                else {
                  var s = i.__read(n.statePos, 2),
                    u = s[0],
                    l = s[1]
                  ;((r[0] = Math.min(r[0], u - t)),
                    (r[1] = Math.min(r[1], l - t)),
                    (r[2] = Math.max(r[2], u + t)),
                    (r[3] = Math.max(r[3], l + t)))
                }
            }),
            r
          )
        }),
        (t.prototype.focusOn = function (e, t) {
          ;(void 0 === e && (e = 0), void 0 === t && (t = 1))
          var n = _.GameConstants.StartScreen.focusHeightFactor,
            o = isNaN(e) ? 0 : 100,
            a = this.root.size,
            s = a.width,
            u = a.height,
            l = isNaN(e) ? u * n : u,
            c = i.__read(this.getMapBounds(e), 4),
            d = c[0],
            h = c[1],
            p = c[2],
            f = c[3]
          h -= o
          var m = p - d,
            v = (f += g.SIOConstants.BANNER_HEIGHT) - h,
            y = s / m,
            C = l / v,
            b = Math.min(1, Math.min(y, C)),
            w = m * b,
            x = v * b,
            T = d * b,
            S = h * b
          ;(r.gsap.to(this.view.scale, { x: b, y: b, duration: t }),
            r.gsap.to(this.view, { x: 0.5 * (s - w) - T, y: 0.5 * (l - x) - S, duration: t }),
            this.model.currentContinent.buildings.forEach(function (n) {
              return n.toggleActive(e, t)
            }))
        }),
        (t.prototype.destroy = function () {
          ;(this.model.engine.removeSystem(this._renderingSystem), e.prototype.destroy.call(this))
        }),
        i.__decorate(
          [
            (0, l.inject)(o.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== p.default && p.default) ? n : Object,
            ),
          ],
          t.prototype,
          "root",
          void 0,
        ),
        i.__decorate(
          [
            (0, l.inject)(u.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (a = void 0 !== s.GameModel && s.GameModel) ? a : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        (t = i.__decorate([(0, l.injectable)()], t))
      )
    })(a.Mediator)
  t.FieldMediator = m
}
