/**
 * Webpack Module #18924
 * @exports Target
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Target = undefined))
  var i = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    r = n(37791) /* 37791__mod */,
    o = n(47738) /* 47738_Metadata */,
    a = n(88460) /* 88460_QueryableString */,
    s = (function () {
      function e(e, t, n, s) {
        ;((this.id = r.id()),
          (this.type = e),
          (this.serviceIdentifier = n),
          (this.name = new a.QueryableString(t || "")),
          (this.metadata = new Array()))
        var u = null
        ;("string" == typeof s
          ? (u = new o.Metadata(i.NAMED_TAG, s))
          : s instanceof o.Metadata && (u = s),
          null !== u && this.metadata.push(u))
      }
      return (
        (e.prototype.hasTag = function (e) {
          for (var t = 0, n = this.metadata; t < n.length; t++) {
            if (n[t].key === e) return true
          }
          return false
        }),
        (e.prototype.isArray = function () {
          return this.hasTag(i.MULTI_INJECT_TAG)
        }),
        (e.prototype.matchesArray = function (e) {
          return this.matchesTag(i.MULTI_INJECT_TAG)(e)
        }),
        (e.prototype.isNamed = function () {
          return this.hasTag(i.NAMED_TAG)
        }),
        (e.prototype.isTagged = function () {
          return this.metadata.some(function (e) {
            return i.NON_CUSTOM_TAG_KEYS.every(function (t) {
              return e.key !== t
            })
          })
        }),
        (e.prototype.isOptional = function () {
          return this.matchesTag(i.OPTIONAL_TAG)(true)
        }),
        (e.prototype.getNamedTag = function () {
          return this.isNamed()
            ? this.metadata.filter(function (e) {
                return e.key === i.NAMED_TAG
              })[0]
            : null
        }),
        (e.prototype.getCustomTags = function () {
          return this.isTagged()
            ? this.metadata.filter(function (e) {
                return i.NON_CUSTOM_TAG_KEYS.every(function (t) {
                  return e.key !== t
                })
              })
            : null
        }),
        (e.prototype.matchesNamedTag = function (e) {
          return this.matchesTag(i.NAMED_TAG)(e)
        }),
        (e.prototype.matchesTag = function (e) {
          var t = this
          return function (n) {
            for (var i = 0, r = t.metadata; i < r.length; i++) {
              var o = r[i]
              if (o.key === e && o.value === n) return true
            }
            return false
          }
        }),
        e
      )
    })()
  t.Target = s
}
