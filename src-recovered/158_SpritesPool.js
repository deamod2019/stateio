/**
 * Webpack Module #158
 * @exports SpritesPool
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.SpritesPool = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(6538),
    a = n(86178),
    s = n(55132),
    u = i.__importDefault(n(11414)),
    l = (function () {
      function e() {
        ;((this._textures = new Map()),
          (this._shapeTextures = new Map()),
          (this._pendingShapeTextures = new Map()))
      }
      var t
      return (
        (e.prototype.fromDisplayObject = function (e, t) {
          return (
            this._textures.has(e) ||
              this._textures.set(
                e,
                this.rootView.app.renderer.generateTexture(
                  t(),
                  o.SCALE_MODES.LINEAR,
                  window.devicePixelRatio,
                ),
              ),
            new o.Sprite(this._textures.get(e))
          )
        }),
        (e.prototype.createShape = function (e, t, n) {
          return (
            void 0 === n && (n = !0),
            i.__awaiter(this, void 0, Promise, function () {
              var r, a, s
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (r = "".concat(e)),
                      this._shapeTextures.has(r) ? [3, 2] : [4, this.loadShapeTexture(t, e)]
                    )
                  case 1:
                    if ((((a = i.sent()).textureCacheIds[0] = r), !n))
                      return ((s = new o.Sprite(a)), o.Texture.removeFromCache(a), [2, s])
                    ;(this._shapeTextures.set(r, a), (i.label = 2))
                  case 2:
                    return [2, new o.Sprite(this._shapeTextures.get(r))]
                }
              })
            })
          )
        }),
        (e.prototype.loadShapeTexture = function (e, t) {
          return i.__awaiter(this, void 0, Promise, function () {
            var n
            return i.__generator(this, function (i) {
              return (
                (n = this._pendingShapeTextures.get(t) || this._loadShapeTexture(e)),
                this._pendingShapeTextures.set(t, n),
                [2, n]
              )
            })
          })
        }),
        (e.prototype._loadShapeTexture = function (e) {
          return i.__awaiter(this, void 0, Promise, function () {
            var t, n, r, a, s
            return i.__generator(this, function (l) {
              return (
                (t = i.__read((0, u.default)(e), 4)),
                (n = t[0]),
                (r = t[1]),
                (a = t[2]),
                (s = t[3]),
                (a -= n),
                (s -= r),
                [
                  2,
                  o.Texture.fromURL(
                    URL.createObjectURL(
                      new Blob(
                        [
                          '<svg xmlns="http://www.w3.org/2000/svg"\n                            width="'
                            .concat(a, '" \n                            height="')
                            .concat(s, '" \n                            viewBox="')
                            .concat(n, " ")
                            .concat(r, " ")
                            .concat(a, " ")
                            .concat(
                              s,
                              '" \n                            fill="white"> \n                            <path d="',
                            )
                            .concat(e, '" />\n                        </svg>'),
                        ],
                        { type: "image/svg+xml" },
                      ),
                    ),
                  ),
                ]
              )
            })
          })
        }),
        (e.prototype.purge = function () {
          ;(this._shapeTextures.forEach(o.Texture.removeFromCache),
            this._textures.forEach(o.Texture.removeFromCache),
            this._pendingShapeTextures.clear(),
            this._textures.clear(),
            this._shapeTextures.clear())
        }),
        i.__decorate(
          [
            (0, r.inject)(a.Types2D.rootView),
            i.__metadata(
              "design:type",
              "function" == typeof (t = void 0 !== s.RootView && s.RootView) ? t : Object,
            ),
          ],
          e.prototype,
          "rootView",
          void 0,
        ),
        (e = i.__decorate([(0, r.injectable)()], e))
      )
    })()
  t.SpritesPool = l
}
