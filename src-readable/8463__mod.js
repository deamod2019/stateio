/**
 * Webpack Module #8463
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { H0: () => s, wA: () => r })
  var i = n(74444) /* 74444__mod */
  class r {
    constructor(e, t, n) {
      ;((this.name = e),
        (this.instanceFactory = t),
        (this.type = n),
        (this.multipleInstances = false),
        (this.serviceProps = {}),
        (this.instantiationMode = "LAZY"),
        (this.onInstanceCreated = null))
    }
    setInstantiationMode(e) {
      return ((this.instantiationMode = e), this)
    }
    setMultipleInstances(e) {
      return ((this.multipleInstances = e), this)
    }
    setServiceProps(e) {
      return ((this.serviceProps = e), this)
    }
    setInstanceCreatedCallback(e) {
      return ((this.onInstanceCreated = e), this)
    }
  }
  const o = "[DEFAULT]"
  class a {
    constructor(e, t) {
      ;((this.name = e),
        (this.container = t),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map()))
    }
    get(e) {
      const t = this.normalizeInstanceIdentifier(e)
      if (!this.instancesDeferred.has(t)) {
        const e = new i.BH()
        if (
          (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize())
        )
          try {
            const n = this.getOrInitializeService({ instanceIdentifier: t })
            n && e.resolve(n)
          } catch (e) {}
      }
      return this.instancesDeferred.get(t).promise
    }
    getImmediate(e) {
      var t
      const n = this.normalizeInstanceIdentifier(null == e ? undefined : e.identifier),
        i = null !== (t = null == e ? undefined : e.optional) && undefined !== t && t
      if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
        if (i) return null
        throw Error(`Service ${this.name} is not available`)
      }
      try {
        return this.getOrInitializeService({ instanceIdentifier: n })
      } catch (e) {
        if (i) return null
        throw e
      }
    }
    getComponent() {
      return this.component
    }
    setComponent(e) {
      if (e.name !== this.name)
        throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`)
      if (this.component) throw Error(`Component for ${this.name} has already been provided`)
      if (((this.component = e), this.shouldAutoInitialize())) {
        if (
          (function (e) {
            return "EAGER" === e.instantiationMode
          })(e)
        )
          try {
            this.getOrInitializeService({ instanceIdentifier: o })
          } catch (e) {}
        for (const [e, t] of this.instancesDeferred.entries()) {
          const n = this.normalizeInstanceIdentifier(e)
          try {
            const e = this.getOrInitializeService({ instanceIdentifier: n })
            t.resolve(e)
          } catch (e) {}
        }
      }
    }
    clearInstance(e = o) {
      ;(this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e))
    }
    async delete() {
      const e = Array.from(this.instances.values())
      await Promise.all([
        ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
        ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
      ])
    }
    isComponentSet() {
      return null != this.component
    }
    isInitialized(e = o) {
      return this.instances.has(e)
    }
    getOptions(e = o) {
      return this.instancesOptions.get(e) || {}
    }
    initialize(e = {}) {
      const { options: t = {} } = e,
        n = this.normalizeInstanceIdentifier(e.instanceIdentifier)
      if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`)
      if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`)
      const i = this.getOrInitializeService({ instanceIdentifier: n, options: t })
      for (const [e, t] of this.instancesDeferred.entries()) {
        n === this.normalizeInstanceIdentifier(e) && t.resolve(i)
      }
      return i
    }
    onInit(e, t) {
      var n
      const i = this.normalizeInstanceIdentifier(t),
        r = null !== (n = this.onInitCallbacks.get(i)) && undefined !== n ? n : new Set()
      ;(r.add(e), this.onInitCallbacks.set(i, r))
      const o = this.instances.get(i)
      return (
        o && e(o, i),
        () => {
          r.delete(e)
        }
      )
    }
    invokeOnInitCallbacks(e, t) {
      const n = this.onInitCallbacks.get(t)
      if (n)
        for (const i of n)
          try {
            i(e, t)
          } catch (e) {}
    }
    getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
      let n = this.instances.get(e)
      if (
        !n &&
        this.component &&
        ((n = this.component.instanceFactory(this.container, {
          instanceIdentifier: ((i = e), i === o ? undefined : i),
          options: t,
        })),
        this.instances.set(e, n),
        this.instancesOptions.set(e, t),
        this.invokeOnInitCallbacks(n, e),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, e, n)
        } catch (e) {}
      var i
      return n || null
    }
    normalizeInstanceIdentifier(e = o) {
      return this.component ? (this.component.multipleInstances ? e : o) : e
    }
    shouldAutoInitialize() {
      return !!this.component && "EXPLICIT" !== this.component.instantiationMode
    }
  }
  class s {
    constructor(e) {
      ;((this.name = e), (this.providers = new Map()))
    }
    addComponent(e) {
      const t = this.getProvider(e.name)
      if (t.isComponentSet())
        throw new Error(`Component ${e.name} has already been registered with ${this.name}`)
      t.setComponent(e)
    }
    addOrOverwriteComponent(e) {
      ;(this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
        this.addComponent(e))
    }
    getProvider(e) {
      if (this.providers.has(e)) return this.providers.get(e)
      const t = new a(e, this)
      return (this.providers.set(e, t), t)
    }
    getProviders() {
      return Array.from(this.providers.values())
    }
  }
}
