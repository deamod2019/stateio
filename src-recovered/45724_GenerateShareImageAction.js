/**
 * Webpack Module #45724
 * @exports GenerateShareImageAction
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.GenerateShareImageAction = void 0))
  var i = n(70655),
    r = n(55132),
    o = n(44656),
    a = n(86125),
    s = n(86178),
    u = n(48616),
    l = n(82496),
    c = n(94572),
    d = i.__importDefault(n(69185)),
    h = n(95781),
    p = n(86700),
    f = n(6538),
    _ = l.GameConstants.LevelCompletedScreenShot,
    g = _.subTitleFontStyle,
    m = _.scoreFontStyle,
    v = _.scoreBarStyle,
    y = _.layoutSettings,
    C = (function (e) {
      function t() {
        return (null !== e && e.apply(this, arguments)) || this
      }
      var n, l, _, C
      return (
        i.__extends(t, e),
        (t.prototype.execute = function (e) {
          var t = e.points
          return i.__awaiter(this, void 0, Promise, function () {
            var e
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.drawScreenShot(t, this.social.me)]
                case 1:
                  return (
                    (e = n.sent()),
                    [2, { image: this.rootView.app.renderer.extract.base64(e) }]
                  )
              }
            })
          })
        }),
        (t.prototype.drawScreenShot = function (e, t) {
          return i.__awaiter(this, void 0, Promise, function () {
            var n, r, o, a, s, u, l, c, d, h
            return i.__generator(this, function (p) {
              switch (p.label) {
                case 0:
                  return [4, Promise.all([this.createAvatar(e, t), this.createFieldSprite()])]
                case 1:
                  return (
                    (n = i.__read.apply(void 0, [p.sent(), 2])),
                    (r = n[0]),
                    (o = n[1]),
                    (a = new f.Graphics().beginFill(13684944).drawRect(0, 0, 10, 10).endFill()),
                    (s = new f.Graphics().beginFill(0, 0.2).drawRect(0, 0, 10, 10).endFill()),
                    (u = new f.Container()),
                    (l = o.getBounds().pad(20, 20)),
                    u.addChild(a, o, r),
                    (s.width = a.width = l.width),
                    (s.height = a.height = l.height),
                    (o.x = 0.5 * (l.width - o.width)),
                    (o.y = 0.5 * (l.height - o.height)),
                    (r.x = 0.5 * (l.width - y.avatarWidth)),
                    (r.y = 0.5 * (l.height - y.avatarHeight)),
                    (c = { width: l.width, height: l.height }),
                    (d = f.RenderTexture.create(c)),
                    this.rootView.app.renderer.render(r, d),
                    (h = new f.Sprite(d)),
                    f.Texture.removeFromCache(d),
                    u.removeChild(r),
                    u.addChild(s),
                    u.addChild(h),
                    [2, u]
                  )
              }
            })
          })
        }),
        (t.prototype.createFieldSprite = function () {
          return i.__awaiter(this, void 0, void 0, function () {
            return i.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return [
                    4,
                    o.di
                      .get(h.TypesGame.actions.createMap)
                      .run({
                        activeStage: Number.MAX_SAFE_INTEGER,
                        data: this.model.currentContinent.data,
                        area: { width: 640, height: 640 },
                      }),
                  ]
                case 1:
                  return [2, e.sent()]
              }
            })
          })
        }),
        (t.prototype.createAvatar = function (e, t) {
          var n
          return i.__awaiter(this, void 0, void 0, function () {
            var o, s, u, l, c, d, h, p, _, C, b, w, x, T, S, L, E
            return i.__generator(this, function (A) {
              switch (A.label) {
                case 0:
                  return (
                    (o = new f.Container()),
                    (s = new f.Container()),
                    (u = new r.UserPic()),
                    (l = y.avatarRadius),
                    (u.width = y.avatarWidth),
                    (u.height = y.avatarHeight),
                    s.addChild(u),
                    t ? [4, (0, r.loadTexture)(t.photo)] : [3, 2]
                  )
                case 1:
                  ;((c = A.sent()) &&
                    ((c.textureCacheIds[0] = "user-photo-".concat(t.id)),
                    (f.utils.TextureCache[t.photo] = c)),
                    (A.label = 2))
                case 2:
                  return (
                    (d = new f.Sprite(f.utils.TextureCache["victory-framing.svg"])).anchor.set(
                      0.5,
                      1,
                    ),
                    (d.x = 0.5 * y.avatarWidth),
                    (d.y = y.avatarHeight + 40),
                    (h = new f.Sprite(f.utils.TextureCache["animation/win-rays.svg"])).anchor.set(
                      0.5,
                    ),
                    (h.blendMode = f.BLEND_MODES.OVERLAY),
                    (h.width = y.maxWidth),
                    (h.alpha = 0.6),
                    (0, r.aspectFit)({ width: 540, height: 774 }, h),
                    (h.x = 0.5 * y.avatarWidth),
                    (h.y = 0.5 * y.avatarHeight),
                    (u.user = t),
                    (p = new f.Graphics().beginFill(16777215).drawCircle(l, l, l).endFill()),
                    s.addChild(p),
                    (s.mask = p),
                    (_ = new f.BitmapText(
                      "" + e,
                      i.__assign(i.__assign({}, m), { fontName: "Helvetica" }),
                    )),
                    (C = new f.Graphics()),
                    (b = new f.Container()).addChild(C, _),
                    (b.y = y.badgeOffsetY),
                    (_.text = "" + e),
                    (w = v.color),
                    (x = v.width),
                    (T = v.height),
                    (S = v.radius),
                    C.clear().beginFill(w).drawRoundedRect(0, 0, x, T, S),
                    (0, r.centerSize)(C, _),
                    (L = a.Localize.get("level_completed_message", "ALL STAGES COMPLETED!")),
                    ((E = new f.BitmapText(
                      L,
                      i.__assign(i.__assign({}, g), { fontName: "Helvetica" }),
                    )).x = 0.5 * (y.avatarWidth - E.width)),
                    (E.y = y.subtitleOffsetY),
                    o.addChild(h),
                    o.addChild(s),
                    o.addChild(d),
                    o.addChild(E),
                    o.addChild(b),
                    f.Texture.removeFromCache(
                      null === (n = u.sprite) || void 0 === n ? void 0 : n.texture,
                    ),
                    [2, o]
                  )
              }
            })
          })
        }),
        i.__decorate(
          [
            (0, p.inject)(s.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== d.default && d.default) ? n : Object,
            ),
          ],
          t.prototype,
          "rootView",
          void 0,
        ),
        i.__decorate(
          [
            (0, p.inject)(s.TypesSocial.model),
            i.__metadata(
              "design:type",
              "function" == typeof (l = void 0 !== u.ISocial && u.ISocial) ? l : Object,
            ),
          ],
          t.prototype,
          "social",
          void 0,
        ),
        i.__decorate(
          [
            (0, p.inject)(h.TypesGame.model),
            i.__metadata(
              "design:type",
              "function" == typeof (_ = void 0 !== c.GameModel && c.GameModel) ? _ : Object,
            ),
          ],
          t.prototype,
          "model",
          void 0,
        ),
        i.__decorate(
          [
            (0, o.lazyInject)(s.Types2D.screenShotAction),
            i.__metadata(
              "design:type",
              "function" == typeof (C = void 0 !== o.Action && o.Action) ? C : Object,
            ),
          ],
          t.prototype,
          "screenshotAction",
          void 0,
        ),
        (t = i.__decorate([(0, p.injectable)()], t))
      )
    })(o.Action)
  t.GenerateShareImageAction = C
}
