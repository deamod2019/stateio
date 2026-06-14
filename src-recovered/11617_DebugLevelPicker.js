/**
 * Webpack Module #11617
 * @exports DebugLevelPicker
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.DebugLevelPicker = void 0))
  var i = n(70655),
    r = n(16584),
    o = n(44656),
    a = n(86178),
    s = n(13137),
    u = n(94572),
    l = n(95781),
    c = n(30396),
    d = n(11812),
    h = function (e) {
      return new Promise(function (t, n) {
        var i = new FileReader()
        ;(i.readAsText(e, "UTF-8"),
          (i.onload = function (e) {
            var i
            try {
              var r = null === (i = e.target) || void 0 === i ? void 0 : i.result,
                o = new window.DOMParser().parseFromString(r, "text/xml")
              t((0, s.parseLevelSVG)(o))
            } catch (e) {
              n(e)
            }
          }))
      })
    },
    p = function () {
      o.di.get(l.TypesGame.model).disposeCurrentLevel()
    }
  t.DebugLevelPicker = function () {
    var e = i.__read((0, c.useState)({}), 2)[1],
      t = (0, c.useCallback)(function () {
        return e({})
      }, []),
      n = o.di.get(l.TypesGame.model)
    return (0, r.jsxs)("div", {
      children: [
        (0, r.jsx)(
          "select",
          i.__assign(
            {
              name: "levels",
              id: "levels-picker",
              onChange: function (e) {
                var t = e.currentTarget,
                  i = t.item(t.selectedIndex),
                  r = null == i ? void 0 : i.value
                r &&
                  (r.startsWith(n.currentContinent.data.id) ||
                    (p(), o.di.get(a.TypesFlow.LevelStart).run(r)))
              },
            },
            {
              children: u.GameModel.LEVELS_PREDEFINED.concat(Object.keys(n.levels)).map(
                function (e) {
                  return (0, r.jsx)(
                    "option",
                    i.__assign(
                      { value: e, selected: e.startsWith(n.currentContinent.data.id) },
                      { children: "".concat(n.levels[e] ? "+" : "").concat(e) },
                    ),
                  )
                },
              ),
            },
          ),
        ),
        (0, r.jsx)(d.FileDropArea, {
          handleDrop: function (e) {
            if (e && e.length > 0)
              for (var n = [], r = 0; r < e.length; r++) {
                var s = e[r]
                ;(s.name.endsWith(".svg") &&
                  n.push(
                    h(s).then(function (e) {
                      var t = o.di.get(l.TypesGame.model),
                        n = o.di.get(l.TypesGame.levelModel).init(e)
                      return ((t.levels[e.id] = n), Promise.resolve(n))
                    }),
                  ),
                  Promise.all(n).then(function (e) {
                    if (1 == e.length) {
                      var n = i.__read(e, 1)[0]
                      ;(p(), o.di.get(a.TypesFlow.LevelStart).run(n.data.id))
                    }
                    t()
                  }))
              }
          },
        }),
      ],
    })
  }
}
