/**
 * Webpack Module #4199
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.loadImage = t.loadTexture = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(6538) /* 6538_SIDES */,
    o = n(84194) /* 84194__mod */
  function a(e) {
    return i.__awaiter(this, undefined, undefined, function () {
      return i.__generator(this, function (t) {
        return [
          2,
          new Promise(function (t, n) {
            var i = new Image()
            ;((i.crossOrigin = "Anonymous"),
              (i.src = e),
              (i.onload = function () {
                t(i)
              }),
              (i.onerror = function (e) {
                n(e)
              }))
          }),
        ]
      })
    })
  }
  ;((t.loadTexture = function (e) {
    return i.__awaiter(this, undefined, undefined, function () {
      var t, n, s
      return i.__generator(this, function (i) {
        switch (i.label) {
          case 0:
            if ((t = r.utils.TextureCache[e])) return [2, t]
            i.label = 1
          case 1:
            return (i.trys.push([1, 3, , 4]), [4, a(e)])
          case 2:
            return ((n = i.sent()), [3, 4])
          case 3:
            return ((s = i.sent()), o.log.warn("loadImage", s), [3, 4])
          case 4:
            return [2, n ? r.Texture.from(n) : r.Texture.EMPTY]
        }
      })
    })
  }),
    (t.loadImage = a))
}
