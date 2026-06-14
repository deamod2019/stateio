/**
 * Webpack Module #50867
 * @exports ReferralRewardsModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.ReferralRewardsModel = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86700) /* 86700_MetadataReader */,
    o = n(86178) /* 86178__mod */,
    a = n(60539) /* 60539__mod */,
    s = n(44656) /* 44656__mod */,
    u = "pending",
    l = function (e, t, n) {
      var i
      return (
        undefined === t && (t = 1),
        null === (i = (0, s.lazyGet)(o.TypesAnalytics.tracker)) || undefined === i
          ? undefined
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
            undefined === e && (e = 3),
            i.__awaiter(this, undefined, undefined, function () {
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
                              false,
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
          return i.__awaiter(this, undefined, undefined, function () {
            var t
            return i.__generator(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.social.invite({ filters: ["NEW_PLAYERS_ONLY"], maxSize: 2 }, true)]
                case 1:
                  return (
                    (t = n.sent()),
                    l("request_attempt"),
                    t === a.SOCIAL_POPUP.ACCEPTED
                      ? (l("request"), this._request(e, u), this.postData(true), [2, true])
                      : [2, false]
                  )
              }
            })
          })
        }),
        (e.prototype.claim = function (e) {
          if (e)
            for (var t = 0; t < this._items.length; t++)
              if (this._items[t].rf === e)
                return (this._items.splice(t, 1), this.postData(), l("claim"), true)
          return false
        }),
        Object.defineProperty(e.prototype, "items", {
          get: function () {
            return this._items
          },
          enumerable: false,
          configurable: true,
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
          ;(undefined === e && (e = false),
            this.social.cookie.save(t.COOKIE_KEY, this._items, e ? 0 : undefined))
        }),
        (e.COOKIE_KEY = "irewards"),
        i.__decorate(
          [(0, r.inject)(o.TypesSocial.model), i.__metadata("design:type", Object)],
          e.prototype,
          "social",
          undefined,
        ),
        (e = t = i.__decorate([(0, r.injectable)()], e))
      )
    })()
  t.ReferralRewardsModel = c
}
