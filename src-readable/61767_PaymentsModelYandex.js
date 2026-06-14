/**
 * Webpack Module #61767
 * @exports PaymentsModelYandex
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.PaymentsModelYandex = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(48616) /* 48616__mod */,
    o = n(84194) /* 84194__mod */,
    a = n(86700) /* 86700_MetadataReader */,
    s = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._supported = false), t)
      }
      return (
        i.__extends(t, e),
        (t.prototype.init = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t,
              n,
              r = this
            return i.__generator(this, function (a) {
              switch (a.label) {
                case 0:
                  ;((this._yasdk = null == e ? undefined : e.yasdk),
                    (this._config = e),
                    this.__initPendingPromise ||
                      (this.__initPendingPromise = i.__awaiter(r, undefined, undefined, function () {
                        var e, t
                        return i.__generator(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return !this._yasdk || this._paymentsSDK
                                ? [3, 4]
                                : ((e = this), [4, this._yasdk.getPayments({ signed: true })])
                            case 1:
                              return (
                                (e._paymentsSDK = n.sent()),
                                (this._supported = true),
                                this._supported ? [4, this.updatePurchasesAndCatalog()] : [3, 3]
                              )
                            case 2:
                              ;(n.sent(), (n.label = 3))
                            case 3:
                              return [3, 6]
                            case 4:
                              return !this._catalog ||
                                (0 === this._catalog.length && this._paymentsSDK)
                                ? ((t = this), [4, this.fetchCatalog()])
                                : [3, 6]
                            case 5:
                              ;((t._catalog = n.sent()), (n.label = 6))
                            case 6:
                              return [2]
                          }
                        })
                      })),
                    (t = null),
                    (a.label = 1))
                case 1:
                  return (a.trys.push([1, 3, , 4]), [4, this.__initPendingPromise])
                case 2:
                  return ((t = a.sent()), [3, 4])
                case 3:
                  return ((n = a.sent()), o.log.warn("failed to initialize payments", n), [3, 4])
                case 4:
                  return (delete this.__initPendingPromise, [2, t])
              }
            })
          })
        }),
        (t.prototype.updatePurchasesAndCatalog = function () {
          return i.__awaiter(this, undefined, undefined, function () {
            var e, t, n
            return i.__generator(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, Promise.all([this.fetchCatalog(), this.fetchPurchases()])]
                case 1:
                  return (
                    (e = i.__read.apply(undefined, [r.sent(), 2])),
                    (t = e[0]),
                    (n = e[1]),
                    (this._catalog = t),
                    (this._purchases = n),
                    [2]
                  )
              }
            })
          })
        }),
        (t.prototype.fetchCatalog = function () {
          return this._paymentsSDK.getCatalog()
        }),
        (t.prototype.fetchPurchases = function () {
          return this._paymentsSDK.getPurchases()
        }),
        (t.prototype.getById = function (e) {
          var t
          return null === (t = this._catalog) || undefined === t
            ? undefined
            : t.filter(function (t) {
                return t.id == e
              })[0]
        }),
        (t.prototype.getAll = function () {
          return this._catalog || []
        }),
        (t.prototype.isPaid = function (e) {
          var t
          return !!(null === (t = this._purchases) || undefined === t
            ? undefined
            : t.filter(function (t) {
                return t.productID == e
              })[0])
        }),
        (t.prototype.consume = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  ;(this.trackPurchase("consume_attempt", { token: e }), (n.label = 1))
                case 1:
                  return (n.trys.push([1, 3, , 4]), [4, this._paymentsSDK.consumePurchase(e)])
                case 2:
                  return (n.sent(), [3, 4])
                case 3:
                  return (
                    (t = n.sent()),
                    o.log.warn("consumePurchaseAsync", t),
                    this.trackPurchase("consume_failed", { error: t.code || "unknown", token: e }),
                    [2, false]
                  )
                case 4:
                  return (
                    this.trackPurchase("consume_success", { token: e }),
                    [4, this.updatePurchasesAndCatalog()]
                  )
                case 5:
                  return (n.sent(), [2, true])
              }
            })
          })
        }),
        (t.prototype.buy = function (e, t) {
          var n
          return (
            undefined === t && (t = false),
            i.__awaiter(this, undefined, undefined, function () {
              var r, o, a
              return i.__generator(this, function (i) {
                switch (i.label) {
                  case 0:
                    if (!(r = this.getById(e)))
                      throw new Error("Product with ".concat(e, " not found"))
                    return (o =
                      null === (n = this._purchases) || undefined === n
                        ? undefined
                        : n.find(function (t) {
                            return t.productID == e
                          }))
                      ? [3, 2]
                      : [4, this.performPurchase(r)]
                  case 1:
                    ;((o = i.sent()), (i.label = 2))
                  case 2:
                    return o ? (t ? [4, this.consume(o.purchaseToken)] : [3, 4]) : [3, 6]
                  case 3:
                    return (
                      (a = i.sent()) &&
                        this.trackEcommerce("purchase", this.trackingPayloadFromProduct(r)),
                      [2, a]
                    )
                  case 4:
                    return (
                      this.trackEcommerce("purchase", this.trackingPayloadFromProduct(r)),
                      [4, this.updatePurchasesAndCatalog()]
                    )
                  case 5:
                    return (i.sent(), [2, true])
                  case 6:
                    return [2, false]
                }
              })
            })
          )
        }),
        (t.prototype.performPurchase = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            var t, n, r
            return i.__generator(this, function (i) {
              switch (i.label) {
                case 0:
                  ;((t = e.id),
                    this.trackPurchase("attempt", { item_id: t }),
                    this.trackEcommerce("begin_checkout", this.trackingPayloadFromProduct(e)),
                    (i.label = 1))
                case 1:
                  return (i.trys.push([1, 3, , 4]), [4, this._paymentsSDK.purchase({ id: t })])
                case 2:
                  return ((n = i.sent()), [3, 4])
                case 3:
                  return (
                    (r = i.sent()),
                    o.log.error(r),
                    "USER_INPUT" !== r.code
                      ? (this.trackPurchase("failed", { error: r.code || "unknown", item_id: t }),
                        [2])
                      : (this.trackPurchase("cancelled", { item_id: t }), [3, 4])
                  )
                case 4:
                  return (this.trackPurchase("made", { item_id: t }), [2, n])
              }
            })
          })
        }),
        (t.prototype.purchase = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (t) {
              return [2, this.buy(e, false)]
            })
          })
        }),
        (t.prototype.trackingPayloadFromProduct = function (e) {
          return {
            item_id: e.id,
            item_name: e.title,
            currency: e.priceCurrencyCode,
            value: parseInt(e.priceValue, 10),
          }
        }),
        (t.prototype.validate = function (e) {
          return i.__awaiter(this, undefined, undefined, function () {
            return i.__generator(this, function (e) {
              return (true, [2, true])
            })
          })
        }),
        Object.defineProperty(t.prototype, "purchases", {
          get: function () {
            return this._purchases
          },
          enumerable: false,
          configurable: true,
        }),
        Object.defineProperty(t.prototype, "supported", {
          get: function () {
            return this._supported
          },
          enumerable: false,
          configurable: true,
        }),
        (t = i.__decorate([(0, a.injectable)()], t))
      )
    })(r.PaymentsModelBase)
  t.PaymentsModelYandex = s
}
