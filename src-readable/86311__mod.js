/**
 * Webpack Module #86311
 * (barrel / re‑export module)
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.getBindingDictionary = t.createMockRequest = t.plan = undefined))
  var i = n(23184) /* 23184_BindingCount */,
    r = n(16674) /* 16674_STACK_OVERFLOW */,
    o = n(28421) /* 28421_TargetTypeEnum */,
    a = n(6867) /* 6867_NON_CUSTOM_TAG_KEYS */,
    s = n(85265) /* 85265__mod */,
    u = n(55800) /* 55800__mod */,
    l = n(95228) /* 95228_Context */,
    c = n(47738) /* 47738_Metadata */,
    d = n(55314) /* 55314_Plan */,
    h = n(6e3) /* 6000__mod */,
    p = n(6748) /* 6748_Request */,
    f = n(18924) /* 18924_Target */
  function _(e) {
    return e._bindingDictionary
  }
  function g(e, t, n, o, a) {
    var s = v(n.container, a.serviceIdentifier),
      l = []
    return (
      s.length === i.BindingCount.NoBindingsAvailable &&
        n.container.options.autoBindInjectable &&
        "function" == typeof a.serviceIdentifier &&
        e.getConstructorMetadata(a.serviceIdentifier).compilerGeneratedMetadata &&
        (n.container.bind(a.serviceIdentifier).toSelf(), (s = v(n.container, a.serviceIdentifier))),
      (l = t
        ? s
        : s.filter(function (e) {
            var t = new p.Request(e.serviceIdentifier, n, o, e, a)
            return e.constraint(t)
          })),
      (function (e, t, n, o) {
        switch (t.length) {
          case i.BindingCount.NoBindingsAvailable:
            if (n.isOptional()) return t
            var a = u.getServiceIdentifierAsString(e),
              s = r.NOT_REGISTERED
            throw (
              (s += u.listMetadataForTarget(a, n)),
              (s += u.listRegisteredBindingsForServiceIdentifier(o, a, v)),
              new Error(s)
            )
          case i.BindingCount.OnlyOneBindingAvailable:
            if (!n.isArray()) return t
          case i.BindingCount.MultipleBindingsAvailable:
          default:
            if (n.isArray()) return t
            ;((a = u.getServiceIdentifierAsString(e)), (s = r.AMBIGUOUS_MATCH + " " + a))
            throw ((s += u.listRegisteredBindingsForServiceIdentifier(o, a, v)), new Error(s))
        }
      })(a.serviceIdentifier, l, a, n.container),
      l
    )
  }
  function m(e, t, n, i, a, s) {
    var u, l
    if (null === a) {
      ;((u = g(e, t, i, null, s)), (l = new p.Request(n, i, null, u, s)))
      var c = new d.Plan(i, l)
      i.addPlan(c)
    } else ((u = g(e, t, i, a, s)), (l = a.addChildRequest(s.serviceIdentifier, u, s)))
    u.forEach(function (t) {
      var n = null
      if (s.isArray()) n = l.addChildRequest(t.serviceIdentifier, t, s)
      else {
        if (t.cache) return
        n = l
      }
      if (t.type === o.BindingTypeEnum.Instance && null !== t.implementationType) {
        var a = h.getDependencies(e, t.implementationType)
        if (!i.container.options.skipBaseClassChecks) {
          var u = h.getBaseClassDependencyCount(e, t.implementationType)
          if (a.length < u) {
            var c = r.ARGUMENTS_LENGTH_MISMATCH(h.getFunctionName(t.implementationType))
            throw new Error(c)
          }
        }
        a.forEach(function (t) {
          m(e, false, t.serviceIdentifier, i, n, t)
        })
      }
    })
  }
  function v(e, t) {
    var n = [],
      i = _(e)
    return (i.hasKey(t) ? (n = i.get(t)) : null !== e.parent && (n = v(e.parent, t)), n)
  }
  ;((t.getBindingDictionary = _),
    (t.plan = function (e, t, n, i, r, o, d, h) {
      undefined === h && (h = false)
      var p = new l.Context(t),
        _ = (function (e, t, n, i, r, o) {
          var s = e ? a.MULTI_INJECT_TAG : a.INJECT_TAG,
            u = new c.Metadata(s, n),
            l = new f.Target(t, i, n, u)
          if (undefined !== r) {
            var d = new c.Metadata(r, o)
            l.metadata.push(d)
          }
          return l
        })(n, i, r, "", o, d)
      try {
        return (m(e, h, r, p, null, _), p)
      } catch (e) {
        throw (
          s.isStackOverflowExeption(e) &&
            p.plan &&
            u.circularDependencyToException(p.plan.rootRequest),
          e
        )
      }
    }),
    (t.createMockRequest = function (e, t, n, i) {
      var r = new f.Target(o.TargetTypeEnum.Variable, "", t, new c.Metadata(n, i)),
        a = new l.Context(e)
      return new p.Request(t, a, null, [], r)
    }))
}
