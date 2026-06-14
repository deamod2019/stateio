/**
 * Webpack Module #36356
 * @exports MetaModel
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.MetaModel = void 0))
  var i = n(70655),
    r = n(44656),
    o = n(36596),
    a = n(95781),
    s = n(86700),
    u = n(56792),
    l = n(82713),
    c = (function (e) {
      function t() {
        var t = (null !== e && e.apply(this, arguments)) || this
        return ((t._metaConfig = new l.MetaConfig()), (t.loseMultiplier = 0.2), t)
      }
      var n
      return (
        i.__extends(t, e),
        (t.prototype.getReward = function (e) {
          return (
            void 0 === e && (e = this.cookie.absoluteLevelNum),
            this._metaConfig.GetLevelFinishReward(e)
          )
        }),
        (t.prototype.getBuildingPopulationLimit = function (e) {
          return e == o.PlayerType.Neutral
            ? this._metaConfig.GetNeutralCap(this.cookie.absoluteLevelNum)
            : this._metaConfig.GetCommonCap(this.cookie.absoluteLevelNum)
        }),
        (t.prototype.getPopulationRate = function (e) {
          return e == o.PlayerType.Neutral
            ? this._metaConfig.GetNeutralRate(this.cookie.absoluteLevelNum)
            : e == o.PlayerType.First
              ? this.getPlayerGenerationRate(this.cookie.playerSpawnLevel)
              : this.getBotGenerationRate(this.cookie.absoluteLevelNum)
        }),
        (t.prototype.getPlayerGenerationRate = function (e) {
          return this._metaConfig.GetGenerationSpeed(e)
        }),
        (t.prototype.getBotGenerationRate = function (e) {
          var t = this._metaConfig.GetBotUpgradeLevelsCap(e)
          return this._metaConfig.GetGenerationSpeed(t)
        }),
        (t.prototype.getStartPopulation = function (e) {
          switch (e) {
            case o.PlayerType.Neutral:
              return this._metaConfig.GetNeutralStartPopulation(this.cookie.absoluteLevelNum)
            case o.PlayerType.First:
              return this.getPlayerStartPopulation(this.cookie.playerStartPopulation)
          }
          return this.getBotStartPopulation(this.cookie.absoluteLevelNum)
        }),
        (t.prototype.getPlayerStartPopulation = function (e) {
          return this._metaConfig.GetStartPopulation(e)
        }),
        (t.prototype.getBotStartPopulation = function (e) {
          var t = this._metaConfig.GetBotUpgradeLevelsCap(e)
          return this._metaConfig.GetStartPopulation(t)
        }),
        (t.prototype.getStartPopulationCost = function () {
          return this._metaConfig.GetBoosterCost(this.cookie.playerStartPopulation)
        }),
        (t.prototype.getPopulationRateCost = function () {
          return this._metaConfig.GetBoosterCost(this.cookie.playerSpawnLevel)
        }),
        (t.prototype.getOfflineEarningCost = function () {
          return this._metaConfig.GetBoosterCost(this.cookie.playerOfflineLevel)
        }),
        (t.prototype.getNextStartPopulation = function (e) {
          return e == o.PlayerType.Neutral
            ? this._metaConfig.GetNeutralStartPopulation(this.cookie.playerStartPopulation + 1)
            : e == o.PlayerType.First
              ? this.getPlayerStartPopulation(this.cookie.playerStartPopulation + 1)
              : this.getBotStartPopulation(this.cookie.absoluteLevelNum + 1)
        }),
        (t.prototype.getNextPopulationRate = function (e) {
          return e == o.PlayerType.Neutral
            ? this._metaConfig.GetNeutralRate(this.cookie.playerStartPopulation + 1)
            : e == o.PlayerType.First
              ? this.getPlayerGenerationRate(this.cookie.playerSpawnLevel + 1)
              : this.getBotGenerationRate(this.cookie.absoluteLevelNum + 1)
        }),
        (t.prototype.getNextOfflineEarning = function () {
          return this._metaConfig.GetOfflineEarning(this.cookie.playerOfflineLevel + 1)
        }),
        (t.prototype.getOfflineEarning = function () {
          return this._metaConfig.GetOfflineEarning(this.cookie.playerOfflineLevel)
        }),
        (t.prototype.increaseStartPopulation = function () {
          var e = this._metaConfig.GetBoosterCost(this.cookie.playerStartPopulation)
          this.cookie.isEnoughCoins(e) &&
            (this.cookie.playerStartPopulation++, this.cookie.spendCoins(e), this.upgraded())
        }),
        (t.prototype.increaseStartPopulationFree = function () {
          ;(this.cookie.playerStartPopulation++, this.upgradedForFree(), this.upgraded())
        }),
        (t.prototype.increaseSpawn = function () {
          var e = this._metaConfig.GetBoosterCost(this.cookie.playerSpawnLevel)
          this.cookie.isEnoughCoins(e) &&
            (this.cookie.playerSpawnLevel++, this.cookie.spendCoins(e), this.upgraded())
        }),
        (t.prototype.increaseSpawnFree = function () {
          ;(this.cookie.playerSpawnLevel++, this.upgradedForFree(), this.upgraded())
        }),
        (t.prototype.increaseOffline = function () {
          var e = this._metaConfig.GetBoosterCost(this.cookie.playerOfflineLevel)
          this.cookie.isEnoughCoins(e) &&
            (this.cookie.playerOfflineLevel++, this.cookie.spendCoins(e), this.upgraded())
        }),
        (t.prototype.increaseOfflineFree = function () {
          ;(this.cookie.playerOfflineLevel++, this.upgradedForFree(), this.upgraded())
        }),
        (t.prototype.upgradedForFree = function () {}),
        (t.prototype.upgraded = function () {}),
        (t.prototype.getPlayerGenerationRateValue = function (e) {
          return this._metaConfig.GetGenerationSpeed(e)
        }),
        i.__decorate(
          [
            (0, r.lazyInject)(a.TypesGame.cookieModel),
            i.__metadata(
              "design:type",
              "function" == typeof (n = void 0 !== u.CookieModel && u.CookieModel) ? n : Object,
            ),
          ],
          t.prototype,
          "cookie",
          void 0,
        ),
        (t = i.__decorate([(0, s.injectable)()], t))
      )
    })(r.GlobalEventProvider)
  t.MetaModel = c
}
