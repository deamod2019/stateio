/**
 * Webpack Module #13866
 * @exports BotPreset6FinalAgressive, BotPreset5Final, BotPreset4Hard, BotPreset3UpperMedium, BotPreset2Medium, BotPreset1Easy, BotPreset0Vegetable
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.BotPreset6FinalAgressive =
      t.BotPreset5Final =
      t.BotPreset4Hard =
      t.BotPreset3UpperMedium =
      t.BotPreset2Medium =
      t.BotPreset1Easy =
      t.BotPreset0Vegetable =
        void 0))
  var i = n(70655),
    r = function (e, t) {
      return (
        void 0 === t &&
          (t = {
            waitTimeBetweenDecisions: 1,
            traceDuration: 6,
            stepDuration: 0.5,
            forcesBalanceFactor: 1,
            buildingsBalanceFactor: 1,
            spawnBalanceFactor: 1,
            fightersInSegment: 10,
            isConsiderGroupToGroupIntersection: !1,
            commandInDecisionOrder: [0, 0],
            maxBuildingsMove: 3,
            targetReachedTimeBoost: 0,
            alivePlayerBuildingsLimit: -1,
            isForbiddenUpgrade: !1,
          }),
        i.__assign(i.__assign({}, t), e)
      )
    }
  ;((t.BotPreset0Vegetable = r({
    name: "0Vegetable",
    waitTimeBetweenDecisions: 10,
    traceDuration: 10,
    stepDuration: 0.5,
    forcesBalanceFactor: 0.2,
    buildingsBalanceFactor: 1,
    spawnBalanceFactor: 0,
    fightersInSegment: 10,
    maxBuildingsMove: 3,
    targetReachedTimeBoost: 2,
    alivePlayerBuildingsLimit: 2,
  })),
    (t.BotPreset1Easy = r({
      name: "1Easy",
      waitTimeBetweenDecisions: 12,
      traceDuration: 15,
      stepDuration: 0.5,
      forcesBalanceFactor: 0.1,
      buildingsBalanceFactor: 1,
      spawnBalanceFactor: 0,
      fightersInSegment: 10,
      maxBuildingsMove: 2,
      targetReachedTimeBoost: 2,
      alivePlayerBuildingsLimit: -1,
    })),
    (t.BotPreset2Medium = r({
      name: "2Medium",
      waitTimeBetweenDecisions: 7,
      traceDuration: 10,
      stepDuration: 0.5,
      forcesBalanceFactor: 1,
      buildingsBalanceFactor: 2,
      spawnBalanceFactor: 0,
      fightersInSegment: 10,
      maxBuildingsMove: 3,
      targetReachedTimeBoost: 2,
      alivePlayerBuildingsLimit: -1,
    })),
    (t.BotPreset3UpperMedium = r({
      name: "3UpperMedium",
      waitTimeBetweenDecisions: 5,
      traceDuration: 10,
      stepDuration: 0.25,
      forcesBalanceFactor: 1,
      buildingsBalanceFactor: 2,
      spawnBalanceFactor: 1,
      fightersInSegment: 10,
      maxBuildingsMove: 3,
      targetReachedTimeBoost: 1,
      alivePlayerBuildingsLimit: -1,
    })),
    (t.BotPreset4Hard = r({
      name: "4Hard",
      waitTimeBetweenDecisions: 5,
      traceDuration: 20,
      stepDuration: 0.2,
      forcesBalanceFactor: 0,
      buildingsBalanceFactor: 1,
      spawnBalanceFactor: 0,
      fightersInSegment: 10,
      maxBuildingsMove: 4,
      targetReachedTimeBoost: 1,
      alivePlayerBuildingsLimit: -1,
    })),
    (t.BotPreset5Final = r({
      name: "5Final",
      waitTimeBetweenDecisions: 4,
      traceDuration: 20,
      stepDuration: 0.1,
      forcesBalanceFactor: 1,
      buildingsBalanceFactor: 1,
      spawnBalanceFactor: 1,
      fightersInSegment: 10,
      maxBuildingsMove: 3,
      targetReachedTimeBoost: 0,
      alivePlayerBuildingsLimit: -1,
    })),
    (t.BotPreset6FinalAgressive = r({
      name: "6FinalAgressive",
      waitTimeBetweenDecisions: 4,
      traceDuration: 30,
      stepDuration: 0.1,
      forcesBalanceFactor: 1,
      buildingsBalanceFactor: 0,
    })))
}
