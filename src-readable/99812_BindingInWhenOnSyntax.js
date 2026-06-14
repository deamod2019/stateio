/**
 * Webpack Module #99812
 * @exports BindingInWhenOnSyntax
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.BindingInWhenOnSyntax = undefined))
  var i = n(83366) /* 83366_BindingInSyntax */,
    r = n(51811) /* 51811_BindingOnSyntax */,
    o = n(98370) /* 98370_BindingWhenSyntax */,
    a = (function () {
      function e(e) {
        ;((this._binding = e),
          (this._bindingWhenSyntax = new o.BindingWhenSyntax(this._binding)),
          (this._bindingOnSyntax = new r.BindingOnSyntax(this._binding)),
          (this._bindingInSyntax = new i.BindingInSyntax(e)))
      }
      return (
        (e.prototype.inRequestScope = function () {
          return this._bindingInSyntax.inRequestScope()
        }),
        (e.prototype.inSingletonScope = function () {
          return this._bindingInSyntax.inSingletonScope()
        }),
        (e.prototype.inTransientScope = function () {
          return this._bindingInSyntax.inTransientScope()
        }),
        (e.prototype.when = function (e) {
          return this._bindingWhenSyntax.when(e)
        }),
        (e.prototype.whenTargetNamed = function (e) {
          return this._bindingWhenSyntax.whenTargetNamed(e)
        }),
        (e.prototype.whenTargetIsDefault = function () {
          return this._bindingWhenSyntax.whenTargetIsDefault()
        }),
        (e.prototype.whenTargetTagged = function (e, t) {
          return this._bindingWhenSyntax.whenTargetTagged(e, t)
        }),
        (e.prototype.whenInjectedInto = function (e) {
          return this._bindingWhenSyntax.whenInjectedInto(e)
        }),
        (e.prototype.whenParentNamed = function (e) {
          return this._bindingWhenSyntax.whenParentNamed(e)
        }),
        (e.prototype.whenParentTagged = function (e, t) {
          return this._bindingWhenSyntax.whenParentTagged(e, t)
        }),
        (e.prototype.whenAnyAncestorIs = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorIs(e)
        }),
        (e.prototype.whenNoAncestorIs = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorIs(e)
        }),
        (e.prototype.whenAnyAncestorNamed = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
        }),
        (e.prototype.whenAnyAncestorTagged = function (e, t) {
          return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
        }),
        (e.prototype.whenNoAncestorNamed = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorNamed(e)
        }),
        (e.prototype.whenNoAncestorTagged = function (e, t) {
          return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
        }),
        (e.prototype.whenAnyAncestorMatches = function (e) {
          return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
        }),
        (e.prototype.whenNoAncestorMatches = function (e) {
          return this._bindingWhenSyntax.whenNoAncestorMatches(e)
        }),
        (e.prototype.onActivation = function (e) {
          return this._bindingOnSyntax.onActivation(e)
        }),
        e
      )
    })()
  t.BindingInWhenOnSyntax = a
}
