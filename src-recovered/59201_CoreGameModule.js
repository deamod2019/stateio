/**
 * Webpack Module #59201
 * @exports CoreGameModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.CoreGameModule = void 0))
  var i = n(70655),
    r = n(86178),
    o = n(55132),
    a = n(44656),
    s = n(99629),
    u = n(94572),
    l = n(36637),
    c = n(95781),
    d = n(86700),
    h = n(83847),
    p = n(81717),
    f = n(40470),
    _ = n(15006),
    g = n(80219),
    m = n(10910),
    v = n(59310),
    y = n(91585),
    C = i.__importDefault(n(69185)),
    b = n(53351),
    w = n(26630),
    x = n(46044),
    T = n(26511),
    S = n(75111),
    L = n(26903),
    E = n(52057),
    A = n(46697),
    I = n(26463),
    M = n(36356),
    P = n(83042),
    O = n(15872),
    R = n(20119),
    k = n(24294),
    N = n(3565),
    D = n(59474),
    B = n(71981),
    F = n(56792),
    U = n(51006),
    G = (n(41714), n(48616), n(12079)),
    j = n(65897),
    H = n(6248),
    V = (n(44365), n(45724)),
    Z = n(16465),
    z = n(158),
    Y = n(196),
    W = n(48115),
    X = n(11470),
    q = n(60079),
    K = n(97586),
    $ = n(47665),
    J = n(87460),
    Q = n(10379),
    ee = n(27588),
    te = n(51779),
    ne = n(68719)
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
