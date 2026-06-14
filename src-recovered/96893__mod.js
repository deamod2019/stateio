/**
 * Webpack Module #96893
 * (barrel / re‑export module)
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  n.d(t, { $2: () => a, WD: () => o, cW: () => s })
  var i,
    r = n(67597)
  function o(e) {
    return new s((t) => {
      t(e)
    })
  }
  function a(e) {
    return new s((t, n) => {
      n(e)
    })
  }
  !(function (e) {
    e[(e.PENDING = 0)] = "PENDING"
    e[(e.RESOLVED = 1)] = "RESOLVED"
    e[(e.REJECTED = 2)] = "REJECTED"
  })(i || (i = {}))
  class s {
    __init() {
      this._state = i.PENDING
    }
    __init2() {
      this._handlers = []
    }
    constructor(e) {
      ;(s.prototype.__init.call(this),
        s.prototype.__init2.call(this),
        s.prototype.__init3.call(this),
        s.prototype.__init4.call(this),
        s.prototype.__init5.call(this),
        s.prototype.__init6.call(this))
      try {
        e(this._resolve, this._reject)
      } catch (e) {
        this._reject(e)
      }
    }
    then(e, t) {
      return new s((n, i) => {
        ;(this._handlers.push([
          !1,
          (t) => {
            if (e)
              try {
                n(e(t))
              } catch (e) {
                i(e)
              }
            else n(t)
          },
          (e) => {
            if (t)
              try {
                n(t(e))
              } catch (e) {
                i(e)
              }
            else i(e)
          },
        ]),
          this._executeHandlers())
      })
    }
    catch(e) {
      return this.then((e) => e, e)
    }
    finally(e) {
      return new s((t, n) => {
        let i, r
        return this.then(
          (t) => {
            ;((r = !1), (i = t), e && e())
          },
          (t) => {
            ;((r = !0), (i = t), e && e())
          },
        ).then(() => {
          r ? n(i) : t(i)
        })
      })
    }
    __init3() {
      this._resolve = (e) => {
        this._setResult(i.RESOLVED, e)
      }
    }
    __init4() {
      this._reject = (e) => {
        this._setResult(i.REJECTED, e)
      }
    }
    __init5() {
      this._setResult = (e, t) => {
        this._state === i.PENDING &&
          ((0, r.J8)(t)
            ? t.then(this._resolve, this._reject)
            : ((this._state = e), (this._value = t), this._executeHandlers()))
      }
    }
    __init6() {
      this._executeHandlers = () => {
        if (this._state === i.PENDING) return
        const e = this._handlers.slice()
        ;((this._handlers = []),
          e.forEach((e) => {
            e[0] ||
              (this._state === i.RESOLVED && e[1](this._value),
              this._state === i.REJECTED && e[2](this._value),
              (e[0] = !0))
          }))
      }
    }
  }
}
