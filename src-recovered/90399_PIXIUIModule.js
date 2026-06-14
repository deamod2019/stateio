/**
 * Webpack Module #90399
 * @exports PIXIUIModule
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  ;("use strict")
  ;(Object.defineProperty(t, "__esModule", { value: !0 }), (t.PIXIUIModule = void 0))
  var i = n(6538),
    r = n(86700),
    o = n(86178),
    a = n(77754),
    s = n(80672),
    u = n(89559),
    l = n(93710),
    c = n(59795),
    d = n(65743)
  ;((0, r.decorate)((0, r.injectable)(), i.utils.EventEmitter),
    (0, r.decorate)((0, r.injectable)(), i.Container),
    (0, r.decorate)((0, r.injectable)(), i.DisplayObject),
    (0, r.decorate)((0, r.injectable)(), i.Sprite),
    (t.PIXIUIModule = new r.ContainerModule(function (e, t, n, r) {
      ;(e(o.Types2D.screenContainer).to(s.ScreenContainer),
        e(o.Types2D.overlay).to(s.Overlay),
        e(o.Types2D.finger).to(s.FingerView),
        e(o.Types2D.preloadAssetsAction).to(u.PreloadAssetsAction),
        e(o.Types2D.screenShotAction).to(a.ScreenshotAction),
        e(o.Types2D.blackSquareGraphics).toDynamicValue(function () {
          return new i.Graphics().beginFill(0).drawRect(0, 0, 10, 10).endFill()
        }),
        e(o.Types2D.whiteSquareGraphics).toDynamicValue(function () {
          return new i.Graphics().beginFill(16777215).drawRect(0, 0, 10, 10).endFill()
        }),
        e(o.Types2D.spinner).to(s.Spinner),
        e(o.Types2D.userPic).to(s.UserPic),
        e(o.Types2D.circleAvatar).to(s.CircleAvatar),
        e(o.Types2D.rootView)
          .to(l.RootView)
          .inSingletonScope()
          .onActivation((0, c.bindMediator)(d.RootMediator)))
    })))
}
