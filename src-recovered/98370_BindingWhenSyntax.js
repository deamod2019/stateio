/**
 * Webpack Module #98370
 * @exports BindingWhenSyntax
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingWhenSyntax = void 0))
  var i = n(51811),
    r = n(80758),
    o = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.when = function (e) {
          return ((this._binding.constraint = e), new i.BindingOnSyntax(this._binding))
        }),
        (e.prototype.whenTargetNamed = function (e) {
          return (
            (this._binding.constraint = r.namedConstraint(e)),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenTargetIsDefault = function () {
          return (
            (this._binding.constraint = function (e) {
              return null !== e.target && !e.target.isNamed() && !e.target.isTagged()
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenTargetTagged = function (e, t) {
          return (
            (this._binding.constraint = r.taggedConstraint(e)(t)),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenInjectedInto = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return r.typeConstraint(e)(t.parentRequest)
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenParentNamed = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return r.namedConstraint(e)(t.parentRequest)
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenParentTagged = function (e, t) {
          return (
            (this._binding.constraint = function (n) {
              return r.taggedConstraint(e)(t)(n.parentRequest)
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorIs = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return r.traverseAncerstors(t, r.typeConstraint(e))
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorIs = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return !r.traverseAncerstors(t, r.typeConstraint(e))
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorNamed = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return r.traverseAncerstors(t, r.namedConstraint(e))
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorNamed = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return !r.traverseAncerstors(t, r.namedConstraint(e))
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorTagged = function (e, t) {
          return (
            (this._binding.constraint = function (n) {
              return r.traverseAncerstors(n, r.taggedConstraint(e)(t))
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorTagged = function (e, t) {
          return (
            (this._binding.constraint = function (n) {
              return !r.traverseAncerstors(n, r.taggedConstraint(e)(t))
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenAnyAncestorMatches = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return r.traverseAncerstors(t, e)
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        (e.prototype.whenNoAncestorMatches = function (e) {
          return (
            (this._binding.constraint = function (t) {
              return !r.traverseAncerstors(t, e)
            }),
            new i.BindingOnSyntax(this._binding)
          )
        }),
        e
      )
    })()
  t.BindingWhenSyntax = o
}
