/**
 * Webpack Module #50867
 * @exports ReferralRewardsModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.ReferralRewardsModel = void 0))
  var i = n(70655),
    r = n(86700),
    o = n(86178),
    a = n(60539),
    s = n(44656),
    u = "pending",
    l = function (e, t, n) {
      var i
      return (
        void 0 === t && (t = 1),
        null === (i = (0, s.lazyGet)(o.TypesAnalytics.tracker)) || void 0 === i
          ? void 0
          : i.track("social_rf_" + e, t, n)
      )
    },
    c = (function () {
      function e() {
        this._items = []
      }
      var t
      return (
        (t = e),
        (e.prototype.init = function (e) {
          return (
            void 0 === e && (e = 3),
            i.__awaiter(this, void 0, void 0, function () {
              var n,
                r,
                o,
                a,
                s,
                l,
                c,
                d = this
              return i.__generator(this, function (h) {
                switch (h.label) {
                  case 0:
                    return [4, this.social.cookie.get(t.COOKIE_KEY)]
                  case 1:
                    for (
                      n = h.sent().irewards,
                        r = this.social.friends
                          .filter(function (e) {
                            return e.isNew
                          })
                          .map(function (e) {
                            return e.id
                          }),
                        this._items = n || [],
                        this.generateNext &&
                          (o = e - this._items.length) > 0 &&
                          (c = this._items).push.apply(
                            c,
                            i.__spreadArray(
                              [],
                              i.__read(
                                new Array(o).fill(0).map(function () {
                                  return { value: d.generateNext() }
                                }),
                              ),
                              !1,
                            ),
                          ),
                        a = this._items.filter(function (e) {
                          return e.rf === u
                        });
                      r.length;
                    )
                      ((s = r.pop()), (l = a.pop()) && (l.rf = s))
                    return (this.postData(), [2, this])
                }
              })
            })
          )
        }),
        (e.prototype.request = function (e) {
          return i.__awaiter(this, void 0, void 0, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.social.invite({ filters: ["NEW_PLAYERS_ONLY"], maxSize: 2 }, !0)]
                case 1:
                  return (
                    (t = n.sent()),
                    l("request_attempt"),
                    t === a.SOCIAL_POPUP.ACCEPTED
                      ? (l("request"), this._request(e, u), this.postData(!0), [2, !0])
                      : [2, !1]
                  )
              }
            })
          })
        }),
        (e.prototype.claim = function (e) {
          if (e)
            for (var t = 0; t < this._items.length; t++)
              if (this._items[t].rf === e)
                return (this._items.splice(t, 1), this.postData(), l("claim"), !0)
          return !1
        }),
        Object.defineProperty(e.prototype, "items", {
          get: function () {
            return this._items
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.getPendingItems = function () {
          return this._items
            .filter(function (e) {
              return !e.rf || e.rf === u
            })
            .sort(function (e, t) {
              return e.rf === u ? 1 : -1
            })
        }),
        (e.prototype.getAvailableItems = function () {
          return this._items.filter(function (e) {
            return !!e.rf && e.rf !== u
          })
        }),
        (e.prototype._request = function (e, t) {
          if (t && t !== u)
            for (var n = 0; n < this._items.length; n++)
              if (this._items[n].rf === t) return this._items[n]
          var i = this._items.filter(function (t) {
            return t.value === e
          })[0]
          return (
            i ? (i.rf = t) : ((i = { value: e, rf: t }), this._items.push(i)),
            this.postData(),
            i
          )
        }),
        (e.prototype.postData = function (e) {
          ;(void 0 === e && (e = !1),
            this.social.cookie.save(t.COOKIE_KEY, this._items, e ? 0 : void 0))
        }),
        (e.COOKIE_KEY = "irewards"),
        i.__decorate(
          [(0, r.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          e.prototype,
          "social",
          void 0,
        ),
        (e = t = i.__decorate([(0, r.injectable)()], e))
      )
    })()
  t.ReferralRewardsModel = c
}
