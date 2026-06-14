/**
 * Webpack Module #44290
 * @exports Binding
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.Binding = undefined))
  var i = n(28421) /* 28421_TargetTypeEnum */,
    r = n(37791) /* 37791__mod */,
    o = (function () {
      function e(e, t) {
        ;((this.id = r.id()),
          (this.activated = false),
          (this.serviceIdentifier = e),
          (this.scope = t),
          (this.type = i.BindingTypeEnum.Invalid),
          (this.constraint = function (e) {
            return true
          }),
          (this.implementationType = null),
          (this.cache = null),
          (this.factory = null),
          (this.provider = null),
          (this.onActivation = null),
          (this.dynamicValue = null))
      }
      return (
        (e.prototype.clone = function () {
          var t = new e(this.serviceIdentifier, this.scope)
          return (
            (t.activated = t.scope === i.BindingScopeEnum.Singleton && this.activated),
            (t.implementationType = this.implementationType),
            (t.dynamicValue = this.dynamicValue),
            (t.scope = this.scope),
            (t.type = this.type),
            (t.factory = this.factory),
            (t.provider = this.provider),
            (t.constraint = this.constraint),
            (t.onActivation = this.onActivation),
            (t.cache = this.cache),
            t
          )
        }),
        e
      )
    })()
  t.Binding = o
}
