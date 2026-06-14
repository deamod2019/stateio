/**
 * Webpack Module #59201
 * @exports CoreGameModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: true }), (t.CoreGameModule = undefined))
  var i = n(70655) /* 70655__mod */,
    r = n(86178) /* 86178__mod */,
    o = n(55132) /* 55132__mod */,
    a = n(44656) /* 44656__mod */,
    s = n(99629) /* 99629_LevelStartActionSIO */,
    u = n(94572) /* 94572_GameModel */,
    l = n(36637) /* 36637_ContinentModel */,
    c = n(95781) /* 95781_TypesGame */,
    d = n(86700) /* 86700_MetadataReader */,
    h = n(83847) /* 83847_InputManager */,
    p = n(81717) /* 81717_InputManagerBase */,
    f = n(40470) /* 40470_FieldMediator */,
    _ = n(15006) /* 15006_ArrowsMediator */,
    g = n(80219) /* 80219_ArrowsView */,
    m = n(10910) /* 10910_ArrowView */,
    v = n(59310) /* 59310_FieldView */,
    y = n(91585) /* 91585_StateShapeView */,
    C = i.__importDefault(n(69185) /* 69185__mod */),
    b = n(53351) /* 53351_CapitalView */,
    w = n(26630) /* 26630_Population */,
    x = n(46044) /* 46044_BurstWaveAction */,
    T = n(26511) /* 26511_Building */,
    S = n(75111) /* 75111__mod */,
    L = n(26903) /* 26903_Field */,
    E = n(52057) /* 52057_Spawner */,
    A = n(46697) /* 46697_Fighter */,
    I = n(26463) /* 26463_FighterView */,
    M = n(36356) /* 36356_MetaModel */,
    P = n(83042) /* 83042_LevelRestartActionSIO */,
    O = n(15872) /* 15872_LevelNextActionSIO */,
    R = n(20119) /* 20119_RootMediator */,
    k = n(24294) /* 24294_LevelEndActionSIO */,
    N = n(3565) /* 3565_BotLogic */,
    D = n(59474) /* 59474_BotCalculationLogic */,
    B = n(71981) /* 71981_FighterDeathEffectAction */,
    F = n(56792) /* 56792_CookieModel */,
    U = n(51006) /* 51006_TutorialFingerView */,
    G = (n(41714) /* 41714_GiftTypeReward */, n(48616) /* 48616__mod */, n(12079) /* 12079_StageEndAction */),
    j = n(65897) /* 65897_PlayWithOpponentActionSIO */,
    H = n(6248) /* 6248_SubmitContextScoreAction */,
    V = (n(44365) /* 44365_SIOConstants */, n(45724) /* 45724_GenerateShareImageAction */),
    Z = n(16465) /* 16465_ScreenShotActionSIO */,
    z = n(158) /* 158_SpritesPool */,
    Y = n(196) /* 196_DestroyFieldAction */,
    W = n(48115) /* 48115_GenerateMapShapeAction */,
    X = n(11470) /* 11470_GenerateMapSpriteAction */,
    q = n(60079) /* 60079_SkinManager */,
    K = n(97586) /* 97586_ShowGiftPopupAction */,
    $ = n(47665) /* 47665_ShowWinPopupAction */,
    J = n(87460) /* 87460_LevelCompletedPopupAction */,
    Q = n(10379) /* 10379_BattleResultsPopupAction */,
    ee = n(27588) /* 27588_LoadLevelAction */,
    te = n(51779) /* 51779_StartGameAction */,
    ne = n(68719) /* 68719__mod */
  ;((0, d.decorate)((0, d.injectable)(), S.Entity),
    (0, d.decorate)((0, d.injectable)(), p.InputManagerBase),
    (t.CoreGameModule = new d.ContainerModule(function (e, t, n, i) {
      ;(e(c.TypesGame.actions.startGame).to(te.StartGameAction),
        e(c.TypesGame.actions.giftPopup).to(K.ShowGiftPopupAction),
        e(c.TypesGame.actions.levelCompletePopup).to(J.LevelCompletedPopupAction),
        e(c.TypesGame.actions.battleResultsPopup).to(Q.BattleResultsPopupAction),
        e(c.TypesGame.actions.tournamentReShare).to(ne.TournamentShareAction),
        e(c.TypesGame.actions.tournamentCreate).to(ne.TournamentCreateAction),
        e(c.TypesGame.actions.tournamentPostScore).to(ne.TournamentPostScoreAction),
        e(c.TypesGame.actions.winPopup).to($.ShowWinPopupAction),
        e(c.TypesGame.actions.loadLevel).to(ee.LoadLevelAction),
        e(c.TypesGame.spritesPool).to(z.SpritesPool).inSingletonScope(),
        e(c.TypesGame.model).to(u.GameModel).inSingletonScope(),
        e(c.TypesGame.levelModel).to(l.ContinentModel),
        e(c.TypesGame.botLogic).to(N.BotLogic),
        e(c.TypesGame.botCalculationLogic).to(D.BotCalculationLogic),
        i(r.TypesFlow.LevelStart).to(s.LevelStartActionSIO),
        i(r.TypesFlow.LevelRestart).to(P.LevelRestartActionSIO),
        i(r.TypesFlow.LevelNext).to(O.LevelNextActionSIO),
        i(r.TypesFlow.LevelEnd).to(k.LevelEndActionSIO),
        i(r.TypesFlow.PlayWith).to(j.PlayWithOpponentActionSIO),
        e(c.TypesGame.actions.endStage).to(G.StageEndAction),
        e(c.TypesGame.actions.submitContextScore).to(H.SubmitContextScoreAction),
        e(o.ProgressBar).toSelf(),
        i(r.Types2D.rootView)
          .to(C.default)
          .inSingletonScope()
          .onActivation((0, o.bindMediator)(R.RootMediator)),
        i(r.Types2D.screenShotAction).to(Z.ScreenShotActionSIO),
        e(Y.DestroyFieldAction).toSelf(),
        e(B.FighterDeathEffectAction).toSelf(),
        e(c.TypesGame.actions.createMapPart).to(W.GenerateMapShapeAction),
        e(c.TypesGame.actions.createMap).to(X.GenerateMapSpriteAction),
        e(V.GenerateShareImageAction).toSelf(),
        e(M.MetaModel).toSelf().inSingletonScope(),
        e(c.TypesGame.cookieModel).to(F.CookieModel).inSingletonScope(),
        e(U.TutorialFingerView).toSelf(),
        e(T.Building).toSelf(),
        e(L.Field).toSelf(),
        e(E.Spawner).toSelf(),
        e(A.Fighter).toSelf(),
        e(c.TypesGame.views.fieldClass)
          .to(v.FieldView)
          .onActivation((0, o.bindMediator)(f.FieldMediator)),
        e(c.TypesGame.views.fighter).to(I.FighterView),
        e(c.TypesGame.views.state).to(b.CapitalView),
        e(c.TypesGame.views.stateShape).to(y.StateShapeView),
        e(c.TypesGame.views.population).to(w.Population),
        e(c.TypesGame.views.arrow).to(m.ArrowView),
        e(c.TypesGame.views.arrows)
          .to(g.ArrowsView)
          .onActivation((0, o.bindMediator)(_.ArrowsMediator)),
        e(c.TypesGame.actions.burst).to(x.BurstWaveAction),
        e(c.TypesGame.skinManager).to(q.SkinManager).inSingletonScope(),
        e(c.TypesGame.inputManager)
          .to(h.InputManager)
          .inSingletonScope()
          .onActivation(function (e, t) {
            return t.init(document.getElementById(a.CANVAS_ID))
          }))
    })))
}
