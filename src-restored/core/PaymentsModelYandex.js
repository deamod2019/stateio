/**
 * Restored source for Webpack Module #61767.
 *
 * Yandex SDK payments adapter.
 */
"use strict"

const { __awaiter, __decorate, __read } = require("./TSHelpers")
const { injectable } = require("./diRuntime")
const { log } = require("../../src-cjs/84194__mod.js")
const { PaymentsModelBase } = require("./PaymentsModelBase")

let PaymentsModelYandex = class PaymentsModelYandex extends PaymentsModelBase {
  constructor(...args) {
    super(...args)
    this._supported = false
  }

  init(config) {
    return __awaiter(this, undefined, undefined, function* initYandexPayments() {
      this._yasdk = config === null || config === undefined ? undefined : config.yasdk
      this._config = config
      if (!this.__initPendingPromise) {
        this.__initPendingPromise = __awaiter(this, undefined, undefined, function* pendingInit() {
          if (this._yasdk && !this._paymentsSDK) {
            this._paymentsSDK = yield this._yasdk.getPayments({ signed: true })
            this._supported = true
            if (this._supported) yield this.updatePurchasesAndCatalog()
          } else if (!this._catalog || (this._catalog.length === 0 && this._paymentsSDK)) {
            this._catalog = yield this.fetchCatalog()
          }
        })
      }

      let result = null
      try {
        result = yield this.__initPendingPromise
      } catch (error) {
        log.warn("failed to initialize payments", error)
      }
      delete this.__initPendingPromise
      return result
    })
  }

  updatePurchasesAndCatalog() {
    return __awaiter(this, undefined, undefined, function* updatePurchasesAndCatalog() {
      const result = __read(yield Promise.all([this.fetchCatalog(), this.fetchPurchases()]), 2)
      this._catalog = result[0]
      this._purchases = result[1]
    })
  }

  fetchCatalog() {
    return this._paymentsSDK.getCatalog()
  }

  fetchPurchases() {
    return this._paymentsSDK.getPurchases()
  }

  getById(id) {
    return this._catalog === null || this._catalog === undefined
      ? undefined
      : this._catalog.filter((item) => item.id == id)[0]
  }

  getAll() {
    return this._catalog || []
  }

  isPaid(id) {
    return !!(
      this._purchases === null || this._purchases === undefined
        ? undefined
        : this._purchases.filter((purchase) => purchase.productID == id)[0]
    )
  }

  consume(token) {
    return __awaiter(this, undefined, undefined, function* consumeYandexPurchase() {
      this.trackPurchase("consume_attempt", { token })
      try {
        yield this._paymentsSDK.consumePurchase(token)
      } catch (error) {
        log.warn("consumePurchaseAsync", error)
        this.trackPurchase("consume_failed", { error: error.code || "unknown", token })
        return false
      }
      this.trackPurchase("consume_success", { token })
      yield this.updatePurchasesAndCatalog()
      return true
    })
  }

  buy(id, consumable = false) {
    return __awaiter(this, undefined, undefined, function* buyYandexProduct() {
      const product = this.getById(id)
      if (!product) throw new Error(`Product with ${id} not found`)

      let purchase =
        this._purchases === null || this._purchases === undefined
          ? undefined
          : this._purchases.find((item) => item.productID == id)

      if (!purchase) purchase = yield this.performPurchase(product)

      if (purchase) {
        if (consumable) {
          const consumed = yield this.consume(purchase.purchaseToken)
          if (consumed) this.trackEcommerce("purchase", this.trackingPayloadFromProduct(product))
          return consumed
        }
        this.trackEcommerce("purchase", this.trackingPayloadFromProduct(product))
        yield this.updatePurchasesAndCatalog()
        return true
      }
      return false
    })
  }

  performPurchase(product) {
    return __awaiter(this, undefined, undefined, function* performYandexPurchase() {
      const itemId = product.id
      this.trackPurchase("attempt", { item_id: itemId })
      this.trackEcommerce("begin_checkout", this.trackingPayloadFromProduct(product))
      let purchase
      try {
        purchase = yield this._paymentsSDK.purchase({ id: itemId })
      } catch (error) {
        log.error(error)
        if (error.code !== "USER_INPUT") {
          this.trackPurchase("failed", { error: error.code || "unknown", item_id: itemId })
          return undefined
        }
        this.trackPurchase("cancelled", { item_id: itemId })
      }
      this.trackPurchase("made", { item_id: itemId })
      return purchase
    })
  }

  purchase(id) {
    return __awaiter(this, undefined, undefined, function* purchaseYandexProduct() {
      return this.buy(id, false)
    })
  }

  trackingPayloadFromProduct(product) {
    return {
      item_id: product.id,
      item_name: product.title,
      currency: product.priceCurrencyCode,
      value: parseInt(product.priceValue, 10),
    }
  }

  validate(data) {
    return __awaiter(this, undefined, undefined, function* validateYandexPurchase() {
      return true
    })
  }

  get purchases() {
    return this._purchases
  }

  get supported() {
    return this._supported
  }
}

PaymentsModelYandex = __decorate([injectable()], PaymentsModelYandex)

module.exports = { PaymentsModelYandex }
