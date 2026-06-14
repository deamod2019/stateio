/**
 * Webpack Module #31927
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.resolve = undefined))
  var i = n(16674) /* 16674_STACK_OVERFLOW */,
    r = n(28421) /* 28421_TargetTypeEnum */,
    o = n(85265) /* 85265__mod */,
    a = n(55800) /* 55800__mod */,
    s = n(52279) /* 52279__mod */,
    u = function (e, t, n) {
      try {
        return n()
      } catch (n) {
        throw o.isStackOverflowExeption(n)
          ? new Error(i.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString()))
          : n
      }
    },
    l = function (e) {
      return function (t) {
        t.parentContext.setCurrentRequest(t)
        var n = t.bindings,
          o = t.childRequests,
          c = t.target && t.target.isArray(),
          d = !(
            t.parentRequest &&
            t.parentRequest.target &&
            t.target &&
            t.parentRequest.target.matchesArray(t.target.serviceIdentifier)
          )
        if (c && d)
          return o.map(function (t) {
            return l(e)(t)
          })
        var h = null
        if (!t.target.isOptional() || 0 !== n.length) {
          var p = n[0],
            f = p.scope === r.BindingScopeEnum.Singleton,
            _ = p.scope === r.BindingScopeEnum.Request
          if (f && p.activated) return p.cache
          if (_ && null !== e && e.has(p.id)) return e.get(p.id)
          if (p.type === r.BindingTypeEnum.ConstantValue) ((h = p.cache), (p.activated = true))
          else if (p.type === r.BindingTypeEnum.Function) ((h = p.cache), (p.activated = true))
          else if (p.type === r.BindingTypeEnum.Constructor) h = p.implementationType
          else if (p.type === r.BindingTypeEnum.DynamicValue && null !== p.dynamicValue)
            h = u("toDynamicValue", p.serviceIdentifier, function () {
              return p.dynamicValue(t.parentContext)
            })
          else if (p.type === r.BindingTypeEnum.Factory && null !== p.factory)
            h = u("toFactory", p.serviceIdentifier, function () {
              return p.factory(t.parentContext)
            })
          else if (p.type === r.BindingTypeEnum.Provider && null !== p.provider)
            h = u("toProvider", p.serviceIdentifier, function () {
              return p.provider(t.parentContext)
            })
          else {
            if (p.type !== r.BindingTypeEnum.Instance || null === p.implementationType) {
              var g = a.getServiceIdentifierAsString(t.serviceIdentifier)
              throw new Error(i.INVALID_BINDING_TYPE + " " + g)
            }
            h = s.resolveInstance(p.implementationType, o, l(e))
          }
          return (
            "function" == typeof p.onActivation && (h = p.onActivation(t.parentContext, h)),
            f && ((p.cache = h), (p.activated = true)),
            _ && null !== e && !e.has(p.id) && e.set(p.id, h),
            h
          )
        }
      }
    }
  t.resolve = function (e) {
    return l(e.plan.rootRequest.requestScope)(e.plan.rootRequest)
  }
}
