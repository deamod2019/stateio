/**
 * Webpack Module #51860
 * @exports BindingToSyntax
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.BindingToSyntax = void 0))
  var i = n(16674),
    r = n(28421),
    o = n(99812),
    a = n(71325),
    s = (function () {
      function e(e) {
        this._binding = e
      }
      return (
        (e.prototype.to = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.Instance),
            (this._binding.implementationType = e),
            new o.BindingInWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toSelf = function () {
          if ("function" != typeof this._binding.serviceIdentifier)
            throw new Error("" + i.INVALID_TO_SELF_VALUE)
          var e = this._binding.serviceIdentifier
          return this.to(e)
        }),
        (e.prototype.toConstantValue = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.ConstantValue),
            (this._binding.cache = e),
            (this._binding.dynamicValue = null),
            (this._binding.implementationType = null),
            (this._binding.scope = r.BindingScopeEnum.Singleton),
            new a.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toDynamicValue = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.DynamicValue),
            (this._binding.cache = null),
            (this._binding.dynamicValue = e),
            (this._binding.implementationType = null),
            new o.BindingInWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toConstructor = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.Constructor),
            (this._binding.implementationType = e),
            (this._binding.scope = r.BindingScopeEnum.Singleton),
            new a.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toFactory = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.Factory),
            (this._binding.factory = e),
            (this._binding.scope = r.BindingScopeEnum.Singleton),
            new a.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toFunction = function (e) {
          if ("function" != typeof e) throw new Error(i.INVALID_FUNCTION_BINDING)
          var t = this.toConstantValue(e)
          return (
            (this._binding.type = r.BindingTypeEnum.Function),
            (this._binding.scope = r.BindingScopeEnum.Singleton),
            t
          )
        }),
        (e.prototype.toAutoFactory = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.Factory),
            (this._binding.factory = function (t) {
              return function () {
                return t.container.get(e)
              }
            }),
            (this._binding.scope = r.BindingScopeEnum.Singleton),
            new a.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toProvider = function (e) {
          return (
            (this._binding.type = r.BindingTypeEnum.Provider),
            (this._binding.provider = e),
            (this._binding.scope = r.BindingScopeEnum.Singleton),
            new a.BindingWhenOnSyntax(this._binding)
          )
        }),
        (e.prototype.toService = function (e) {
          this.toDynamicValue(function (t) {
            return t.container.get(e)
          })
        }),
        e
      )
    })()
  t.BindingToSyntax = s
}
