/**
 * Webpack Module #56792
 * @exports CookieModel, CookieModelKey
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }),
    (t.CookieModel = t.CookieModelKey = undefined))
  var i,
    r = n(70655) /* 70655__mod */,
    o = n(44656) /* 44656__mod */,
    a = n(86178) /* 86178__mod */,
    s = n(84194) /* 84194__mod */,
    u = n(44365) /* 44365_SIOConstants */,
    l = n(47283) /* 47283_GameEvents */,
    c = n(28696) /* 28696_CookieModelBase */,
    d = n(66154) /* 66154_SelectableFighterDataSet */,
    h = n(86700) /* 86700_MetadataReader */,
    p = n(36596) /* 36596_PlayerType */
  !(function (e) {
    ;((e.coins = "coins"),
      (e.bot_level = "bot_level"),
      (e.fights_passed = "fights_passed"),
      (e.wins = "wins"),
      (e.loses = "loses"),
      (e.absoluteTryNum = "absoluteTryNum"),
      (e.absoluteLevelNum = "absoluteLevelNum"),
      (e.localLevelNum = "localLevelNum"),
      (e.currentStage = "currentStage"),
      (e.playerOfflineLevel = "playerOfflineLevel"),
      (e.playerSpawnLevel = "playerSpawnLevel"),
      (e.playerStartPopulation = "playerStartPopulation"),
      (e.lastLaunch = "lastLaunch"),
      (e.timeDiff = "timeDiff"),
      (e.ctx_history = "ctx_history"),
      (e.selected_color_set_id = "selected_color_set_id"),
      (e.selected_building_id = "selected_building_id"),
      (e.selected_fighter_id = "selected_fighter_id"),
      (e.user_buildings_set = "user_buildings_set"),
      (e.user_fighter_set = "user_fighter_set"))
  })((i = t.CookieModelKey || (t.CookieModelKey = {})))
  var f = (function (e) {
    function t() {
      return (null !== e && e.apply(this, arguments)) || this
    }
    return (
      r.__extends(t, e),
      (t.prototype.getDefaultStore = function () {
        var e
        return (
          ((e = {})[i.coins] = 0),
          (e[i.bot_level] = 0),
          (e[i.fights_passed] = 0),
          (e[i.wins] = 0),
          (e[i.loses] = 0),
          (e[i.absoluteTryNum] = 0),
          (e[i.absoluteLevelNum] = 1),
          (e[i.localLevelNum] = 1),
          (e[i.currentStage] = 0),
          (e[i.playerOfflineLevel] = 1),
          (e[i.playerSpawnLevel] = 1),
          (e[i.playerStartPopulation] = 1),
          (e[i.lastLaunch] = 0),
          (e[i.timeDiff] = 0),
          (e[i.ctx_history] = "{}"),
          (e[i.selected_color_set_id] = d.UserSelectableColorsSet.BLUE),
          (e[i.selected_building_id] = 1),
          (e[i.selected_fighter_id] = 1),
          (e[i.user_buildings_set] = "[1]"),
          (e[i.user_fighter_set] = "[1]"),
          e
        )
      }),
      Object.defineProperty(t.prototype, "playerOfflineLevel", {
        get: function () {
          return this.get(i.playerOfflineLevel)
        },
        set: function (e) {
          this.set(i.playerOfflineLevel, e)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "playerSpawnLevel", {
        get: function () {
          return this.get(i.playerSpawnLevel)
        },
        set: function (e) {
          this.set(i.playerSpawnLevel, e)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "absoluteLevelNum", {
        get: function () {
          return this.get(i.absoluteLevelNum)
        },
        set: function (e) {
          this.set(i.absoluteLevelNum, e)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "absoluteTryNum", {
        get: function () {
          return this.get(i.absoluteTryNum)
        },
        set: function (e) {
          this.set(i.absoluteTryNum, e)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "coins", {
        get: function () {
          return 1 * this.get(i.coins)
        },
        set: function (e) {
          ;(this.set(i.coins, e),
            o.di
              .get(a.TypesCore.dispatcher)
              .emit(l.GameEvents.COINS_UPDATED, { coins: this.coins }))
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "playerStartPopulation", {
        get: function () {
          return this.get(i.playerStartPopulation)
        },
        set: function (e) {
          this.set(i.playerStartPopulation, e)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "currentStage", {
        get: function () {
          return this.get(i.currentStage)
        },
        set: function (e) {
          this.set(i.currentStage, e)
        },
        enumerable: false,
        configurable: true,
      }),
      (t.prototype.isEnoughCoins = function (e) {
        return this.coins - e >= 0
      }),
      Object.defineProperty(t.prototype, "fightsPassed", {
        get: function () {
          return this.get(i.fights_passed)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "botLevel", {
        get: function () {
          return this.get(i.bot_level)
        },
        enumerable: false,
        configurable: true,
      }),
      (t.prototype.spendCoins = function (e) {
        this.coins -= e
      }),
      Object.defineProperty(t.prototype, "lastLaunch", {
        get: function () {
          return this.get(i.lastLaunch)
        },
        set: function (e) {
          this.set(i.lastLaunch, e)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "timeDiff", {
        get: function () {
          return this.get(i.timeDiff)
        },
        set: function (e) {
          this.set(i.timeDiff, e)
        },
        enumerable: false,
        configurable: true,
      }),
      (t.prototype.sync = function () {
        return r.__awaiter(this, undefined, Promise, function () {
          return r.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, e.prototype.sync.call(this)]
              case 1:
                return (t.sent(), this.syncTime(), [2])
            }
          })
        })
      }),
      (t.prototype.syncTime = function () {
        var e = !this.social.inSolo,
          t = Date.now()
        ;(0 === this.lastLaunch && (this.lastLaunch = t),
          e || (this.timeDiff = t - this.lastLaunch),
          this.timeDiff >= u.SIOConstants.MAX_REWARD_CAP_IN_MS &&
            (this.timeDiff = u.SIOConstants.MAX_REWARD_CAP_IN_MS),
          e || (this.lastLaunch = t))
      }),
      (t.prototype.getContextHistory = function (e) {
        var t = this.get(i.ctx_history),
          n = {}
        try {
          n = JSON.parse(t)
        } catch (e) {
          s.log.warn("Failed to load ctx history", t)
        }
        var r = n[e].length
        return n[e][r - 1]
      }),
      (t.prototype.getContextHistories = function () {
        var e = this.get(i.ctx_history),
          t = {}
        try {
          t = JSON.parse(e)
        } catch (t) {
          s.log.warn("Failed to load ctx history", e)
        }
        return t
      }),
      (t.prototype.setContextHistory = function (e, t) {
        var n = this.get(i.ctx_history),
          r = {}
        try {
          r = JSON.parse(n)
        } catch (e) {
          s.log.warn("Failed to load ctx history")
        }
        if (r) {
          var o = r[e]
          t.c >= t.s.length - 1 && (o.length < 3 || o.shift(), o.push(t))
        }
        this.set(i.ctx_history, JSON.stringify(r))
      }),
      Object.defineProperty(t.prototype, "selectedColorSet", {
        get: function () {
          var e = this.get(i.selected_color_set_id)
          return d.SelectableColorsDataSet.filter(function (t) {
            return t.id === e
          }).map(function (e) {
            return r.__assign(r.__assign({}, e), { selected: true, stored: true })
          })[0]
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "selectedBuilding", {
        get: function () {
          var e = this
          return d.SelectableBuildingDataSet.filter(function (t) {
            return t.id === e.get(i.selected_building_id)
          }).map(function (e) {
            return r.__assign(r.__assign({}, e), { selected: true, stored: true })
          })[0]
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "selectedFighter", {
        get: function () {
          var e = this
          return d.SelectableFighterDataSet.filter(function (t) {
            return t.id === e.get(i.selected_fighter_id)
          }).map(function (e) {
            return r.__assign(r.__assign({}, e), { selected: true, stored: true })
          })[0]
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "user_buildings_set", {
        get: function () {
          return this.get(i.user_buildings_set)
        },
        enumerable: false,
        configurable: true,
      }),
      (t.prototype.getUserBuildingSet = function () {
        var e = []
        try {
          e = e.concat(
            Array.isArray(this.user_buildings_set)
              ? this.user_buildings_set
              : JSON.parse(this.user_buildings_set),
          )
        } catch (e) {
          s.log.warn("Failed to load user stored buildings")
        }
        return e
      }),
      (t.prototype.getUserFighterSet = function () {
        var e = []
        try {
          e = e.concat(
            Array.isArray(this.user_fighter_set)
              ? this.user_fighter_set
              : JSON.parse(this.user_fighter_set),
          )
        } catch (e) {
          s.log.warn("Failed to load user stored fighters")
        }
        return e
      }),
      Object.defineProperty(t.prototype, "user_fighter_set", {
        get: function () {
          return this.get(i.user_fighter_set)
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "availableColors", {
        get: function () {
          var e = this
          return d.SelectableColorsDataSet.map(function (t) {
            var n = t.id === e.get(i.selected_color_set_id)
            return r.__assign(r.__assign({}, t), { stored: true, selected: n })
          })
        },
        enumerable: false,
        configurable: true,
      }),
      (t.prototype.addUserBuilding = function (e) {
        this.addUserSet(e, i.user_buildings_set)
      }),
      (t.prototype.addUserFighter = function (e) {
        this.addUserSet(e, i.user_fighter_set)
      }),
      (t.prototype.addUserSet = function (e, t) {
        var n = this.get(t)
        try {
          var i = [].concat(Array.isArray(n) ? n : JSON.parse(n))
          ;(-1 === i.indexOf(e) && i.push(e), this.set(t, JSON.stringify(i)))
        } catch (e) {
          s.log.warn("Failed to load user stored fighters")
        }
      }),
      Object.defineProperty(t.prototype, "selected_color_set_id", {
        get: function () {
          return this.get(i.selected_color_set_id)
        },
        set: function (e) {
          e !== this.get(i.selected_color_set_id) &&
            (this.set(i.selected_color_set_id, e), this.onUserSelectableKeyChanged())
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "selected_building_id", {
        get: function () {
          return 1 * this.get(i.selected_building_id)
        },
        set: function (e) {
          e !== this.get(i.selected_building_id) &&
            (this.set(i.selected_building_id, e), this.onUserSelectableKeyChanged())
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(t.prototype, "selected_fighter_id", {
        get: function () {
          return 1 * this.get(i.selected_fighter_id)
        },
        set: function (e) {
          e !== this.get(i.selected_fighter_id) &&
            (this.set(i.selected_fighter_id, e), this.onUserSelectableKeyChanged())
        },
        enumerable: false,
        configurable: true,
      }),
      (t.prototype.onUserSelectableKeyChanged = function () {
        o.di.get(a.TypesCore.dispatcher).emit(l.GameEvents.SELECTABLE_ITEM_CHANGED)
      }),
      (t.prototype.getColorByPlayerType = function (e) {
        var t,
          n,
          i = d.GameColors.players[e]
        if (e === p.PlayerType.First)
          (null === (t = this.selectedColorSet) || undefined === t ? undefined : t.data) &&
            (i = this.selectedColorSet.data)
        else if (
          e === p.PlayerType.Second &&
          (null === (n = this.selectedColorSet) || undefined === n ? undefined : n.id)
        ) {
          var r = d.SelectableColorsDataSet.filter(function (e) {
            return e.id === d.UserSelectableColorsSet.BLUE
          })
          ;(this.selectedColorSet.id === d.UserSelectableColorsSet.BLUE &&
            (r = d.SelectableColorsDataSet.filter(function (e) {
              return e.id === d.UserSelectableColorsSet.RED
            })),
            r.length && (i = r[0].data))
        }
        return i
      }),
      (t.prototype.get = function (t) {
        var n = e.prototype.get.call(this, t)
        ;(undefined !== n && "undefined" !== n) || (n = this.getDefaultStore()[t])
        return n
      }),
      (t = r.__decorate([(0, h.injectable)()], t))
    )
  })(c.CookieModelBase)
  t.CookieModel = f
}
