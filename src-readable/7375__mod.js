/**
 * Webpack Module #7375
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/) =>
{
  ;("use strict")
  Object.defineProperty(t, "__esModule", { value: true })
  var n = Symbol.for("INJECTION")
  function i(e, t, i, r) {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: true,
      get: function () {
        return (
          r && !Reflect.hasMetadata(n, this, t) && Reflect.defineMetadata(n, i(), this, t),
          Reflect.hasMetadata(n, this, t) ? Reflect.getMetadata(n, this, t) : i()
        )
      },
      set: function (e) {
        Reflect.defineMetadata(n, e, this, t)
      },
    })
  }
  ;((t.makePropertyInjectDecorator = function (e, t) {
    return function (n) {
      return function (r, o) {
        i(
          r,
          o,
          function () {
            return e.get(n)
          },
          t,
        )
      }
    }
  }),
    (t.makePropertyInjectNamedDecorator = function (e, t) {
      return function (n, r) {
        return function (o, a) {
          i(
            o,
            a,
            function () {
              return e.getNamed(n, r)
            },
            t,
          )
        }
      }
    }),
    (t.makePropertyInjectTaggedDecorator = function (e, t) {
      return function (n, r, o) {
        return function (a, s) {
          i(
            a,
            s,
            function () {
              return e.getTagged(n, r, o)
            },
            t,
          )
        }
      }
    }),
    (t.makePropertyMultiInjectDecorator = function (e, t) {
      return function (n) {
        return function (r, o) {
          i(
            r,
            o,
            function () {
              return e.getAll(n)
            },
            t,
          )
        }
      }
    }))
}
