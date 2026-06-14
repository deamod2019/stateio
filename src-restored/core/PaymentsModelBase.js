/**
 * Restored source for Webpack Module #42560.
 *
 * Base payment model and analytics helpers.
 */
"use strict"

const { __awaiter, __decorate } = require("./TSHelpers")
const Sentry = require("./SentryRuntime")
const { injectable } = require("./diRuntime")
const { log } = require("../../src-cjs/84194__mod.js")
const { lazyGet } = require("../../src-cjs/44656__mod.js")
const { TypesAnalytics } = require("./CoreTypes")

function postJson(url, payload) {
  return __awaiter(undefined, undefined, undefined, function* postJsonRequest() {
    try {
      const response = yield fetch(url, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      return yield response.json()
    } catch (error) {
      log.warn(error)
    }
    return {}
  })
}

let PaymentsModelBase = class PaymentsModelBase {
  init() {
    return __awaiter(this, undefined, undefined, function* initPaymentsModelBase() {})
  }

  getById(id) {}

  getAll() {
    return []
  }

  isPaid(id) {
    return false
  }

  consume(token) {
    return __awaiter(this, undefined, undefined, function* consumePaymentsModelBase() {
      return false
    })
  }

  purchase(id) {
    return __awaiter(this, undefined, undefined, function* purchasePaymentsModelBase() {
      return false
    })
  }

  buy(id, consumable = false) {
    return __awaiter(this, undefined, undefined, function* buyPaymentsModelBase() {
      throw new Error("Method not implemented.")
    })
  }

  get supported() {
    return false
  }

  validateRemotely(url, payload) {
    return __awaiter(this, undefined, undefined, function* validateRemotely() {
      let valid = true
      try {
        const response = yield postJson(url, payload)
        this.trackPurchase("validate", response.success)
        valid = !!response.success
      } catch (error) {
        Sentry.captureException(error)
      }
      return valid
    })
  }

  viewItems(items) {
    log.warn("viewItems not implemented")
  }

  trackEcommerce(eventName, payload) {
    this.trackEvent(eventName, {
      currency: payload.currency,
      value: payload.value,
      items: [{ item_id: payload.item_id, item_name: payload.item_id, price: payload.value }],
    })
  }

  trackPurchase(eventName, payload) {
    this.trackEvent(eventName, payload, 1, "purchase_")
  }

  trackEvent(eventName, payload, value = 1, prefix = "") {
    const tracker = lazyGet(TypesAnalytics.tracker)
    if (tracker === null || tracker === undefined) return
    tracker.track(`${prefix}${eventName}`, value, payload)
  }
}

PaymentsModelBase = __decorate([injectable()], PaymentsModelBase)

module.exports = { PaymentsModelBase }
