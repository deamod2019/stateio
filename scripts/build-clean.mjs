#!/usr/bin/env node
import { parse } from "acorn";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "clean");
const INPUT_JS = path.join(ROOT, "main.js");
const INPUT_CSS = path.join(ROOT, "main.css");
const INPUT_ASSETS = path.join(ROOT, "assets");

const source = fs.readFileSync(INPUT_JS, "utf8");
const ast = parse(source, { ecmaVersion: 2022, sourceType: "script", ranges: true });
const modulesNode = findModulesObject(ast);

if (!modulesNode) {
  throw new Error("Could not locate webpack modules object in main.js");
}

const replacements = new Map([
  [20383, cleanAppModel()],
  [54261, emptyActionModule("SetupSentryAction")],
  [37725, cleanHelpersModule()],
  [89286, cleanGameModuleYandex()],
  [14562, cleanSocialModule()],
  [34453, nullComponentModule("CrossPromo")],
  [49934, nullComponentModule("CrossPromoComponent")],
  [96648, cleanStartScreen()],
  [24294, cleanLevelEndActionSIO()],
  [12079, cleanStageEndAction()],
  [47665, cleanShowWinPopupAction()],
  [87460, cleanLevelCompletedPopupAction()],
  [47, emptyActionModule("TournamentPostScoreAction")],
  [2719, nullComponentModule("ShareTournamentFormDebug")],
  [2906, nullComponentModule("LeaderboardScreen")],
  [5183, emptyClassModule("CookieModelYandex")],
  [6248, emptyActionModule("SubmitContextScoreAction")],
  [7390, cleanLevelEndActionSIOYandex()],
  [8189, nullComponentModule("ShareLevelResultPopup")],
  [8207, nullComponentModule("ShareComponent")],
  [9045, emptyModuleExport("AdsModuleYandex")],
  [10556, cleanAdsModule()],
  [14633, nullComponentModule("LeaderBoard")],
  [14954, nullComponentModule("NoAdsButton")],
  [15850, emptyActionModule("LoginAction")],
  [23862, nullComponentModule("LeaderBoardInviteItem")],
  [57503, emptyActionModule("TournamentCreateAction")],
  [30326, nullComponentModule("LeaderBoardTabs")],
  [31651, nullComponentModule("SocialOverlay")],
  [37079, nullComponentModule("ShopTabHeader")],
  [41976, emptyLeaderboardModule("LeaderboardGlobalExternal")],
  [42709, nullComponentModule("SuggestLoginPopup")],
  [43603, emptyLeaderboardModule("LeaderboardContextExternal")],
  [44698, nullComponentModule("ShopPreview")],
  [45301, emptyActionModule("AdAction")],
  [45724, emptyActionModule("GenerateShareImageAction")],
  [55378, nullComponentModule("InviteButton")],
  [56184, nullComponentModule("GiftPopup")],
  [56462, nullComponentModule("TournamentsDebugPanel")],
  [60921, emptyModuleExport("CrossPromoModule")],
  [61767, emptyClassModule("PaymentsModelYandex")],
  [62415, nullComponentModule("TexturedShopItem")],
  [63895, cleanSocialModelYandexAlias()],
  [64122, emptyActionModule("InitAdManagerAction")],
  [65021, emptyClassModule("AdManagerYandex")],
  [68047, emptyActionModule("InitAdManagerYandexAction")],
  [93599, emptyActionModule("TournamentShareAction")],
  [25556, emptyActionModule("SyncYandexLeaderboardsAction")],
  [70055, emptyActionModule("LevelRestartAfterYandexLoginAction")],
  [52958, emptyActionModule("SuggestAuthorizeAction")],
  [72688, nullComponentModule("SocialBanners")],
  [76282, nullComponentModule("ShopItem")],
  [76742, nullComponentModule("ShopScreen")],
  [79147, nullComponentModule("GiftItem")],
  [82978, nullComponentModule("ShopButton")],
  [83643, nullComponentModule("ShopMenu")],
  [90050, emptyClassModule("UserDataYandex")],
  [90190, emptyActionModule("AuthYandexAction")],
  [90211, nullComponentModule("LeaderBoardItem")],
  [93533, emptyActionModule("ShareActionOk")],
  [96087, nullComponentModule("LeaderboardButton")],
  [97586, emptyActionModule("ShowGiftPopupAction")],
  [97954, emptyLeaderboardModule("LeaderboardGlobalYandex")],
]);

const edits = [];
const patchedModules = [];

for (const prop of modulesNode.properties) {
  const id = Number(prop.key.value ?? prop.key.name);
  if (!replacements.has(id)) continue;
  edits.push({ start: prop.value.range[0], end: prop.value.range[1], text: replacements.get(id) });
  patchedModules.push(id);
}

let patched = applyEdits(source, edits);
patched = patchBootstrap(patched);
patched = patched.replace(/\n?\/\/# sourceMappingURL=main\.js\.map\s*$/, "");

fs.rmSync(OUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, "main.css"), cleanCss(fs.readFileSync(INPUT_CSS, "utf8")));
copyDir(INPUT_ASSETS, path.join(OUT_DIR, "assets"));
fs.writeFileSync(path.join(OUT_DIR, "main.clean.js"), patched);
fs.writeFileSync(path.join(OUT_DIR, "index.html"), cleanHtml());
fs.writeFileSync(path.join(OUT_DIR, "CLEAN_BUILD_REPORT.md"), report(patchedModules));

parse(patched, { ecmaVersion: 2022, sourceType: "script" });

console.log(`Clean build written to ${path.relative(ROOT, OUT_DIR)}/`);
console.log(`Patched modules: ${patchedModules.sort((a, b) => a - b).join(", ")}`);

function findModulesObject(node) {
  let found = null;
  walk(node, (candidate) => {
    if (found || candidate.type !== "ObjectExpression" || candidate.properties.length < 20) return;
    const first = candidate.properties[0];
    if (
      first?.key?.type === "Literal" &&
      typeof first.key.value === "number" &&
      ["ArrowFunctionExpression", "FunctionExpression"].includes(first.value?.type)
    ) {
      found = candidate;
    }
  });
  return found;
}

function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  visit(node);
  for (const key of Object.keys(node)) {
    if (key === "type" || key === "range") continue;
    const value = node[key];
    if (Array.isArray(value)) {
      for (const item of value) walk(item, visit);
    } else if (value?.type) {
      walk(value, visit);
    }
  }
}

function applyEdits(text, editsToApply) {
  let output = text;
  for (const edit of [...editsToApply].sort((a, b) => b.start - a.start)) {
    output = output.slice(0, edit.start) + edit.text + output.slice(edit.end);
  }
  return output;
}

function patchBootstrap(text) {
  const pattern =
    /\(\(\)=>\{"use strict";n\(28660\),n\(14047\);var e=n\(44656\),t=n\(89282\),i=n\(33877\),r=n\(55937\),o=n\(30107\),a=n\(42709\),s=n\(95781\),u=n\(25556\),l=n\(52958\),c=n\(86178\),d=n\(7390\),h=n\(5183\),p=n\(70055\);e\.di\.load\(t\.GameModuleBase\),e\.di\.load\(i\.GameModuleYandex\),e\.di\.load\(r\.GameModule\),e\.di\.bind\(s\.TypesGame\.actions\.suggestAuthorizeAction\)\.to\(l\.SuggestAuthorizeAction\),e\.di\.bind\(o\.PopupType\.SUGGEST_LOGIN\)\.toConstantValue\(a\.SuggestLoginPopup\),e\.di\.bind\(s\.TypesGame\.actions\.syncYandexLeaderboardsAction\)\.to\(u\.SyncYandexLeaderboardsAction\),e\.di\.bind\(s\.TypesGame\.actions\.levelRestartAfterYandexLoginAction\)\.to\(p\.LevelRestartAfterYandexLoginAction\),e\.di\.rebind\(c\.TypesFlow\.LevelEnd\)\.to\(d\.LevelEndActionSIOYandex\),e\.di\.rebind\(s\.TypesGame\.cookieModel\)\.to\(h\.CookieModelYandex\)\.inSingletonScope\(\),\(0,t\.startGame\)\(\)\}\)\(\)/;
  const replacement =
    '(()=>{"use strict";n(28660),n(14047);var e=n(44656),t=n(89282),i=n(33877),r=n(55937);e.di.load(t.GameModuleBase),e.di.load(i.GameModuleYandex),e.di.load(r.GameModule),(0,t.startGame)()})()';
  const next = text.replace(pattern, replacement);
  if (next === text) throw new Error("Could not patch webpack bootstrap Yandex bindings");
  return next;
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const sourcePath = path.join(from, entry.name);
    const targetPath = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(sourcePath, targetPath);
    else if (entry.isFile()) fs.copyFileSync(sourcePath, targetPath);
  }
}

function cleanCss(css) {
  return css.replace(/@font-face\s*\{[^}]*fonts\.gstatic\.com[^}]*\}\s*/g, "");
}

function cleanHelpersModule() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.playUIClickSound=t.playSound=t.showReward=t.showAd=t.isRankableUser=void 0;var i=n(70655),r=n(44656),o=n(86178);t.isRankableUser=function(){return false};t.showAd=function(){return Promise.resolve(o.AdResponse.NOT_SUPPORTED)};t.showReward=function(){return Promise.resolve(o.AdResponse.NOT_SUPPORTED)};t.playSound=function(e){return i.__awaiter(void 0,void 0,void 0,function(){var t;return i.__generator(this,function(n){return[2,null===(t=(0,r.lazyGet)(o.TypesAudio.soundAction))||void 0===t?void 0:t.run(e)]})})};t.playUIClickSound=function(){(0,t.playSound)("click_ui")}}`;
}

function cleanGameModuleYandex() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.GameModuleYandex=void 0;var i=n(44656),r=n(86700),o=n(14562),a=n(48616);t.GameModuleYandex=new r.ContainerModule(function(){i.di.load(a.AdsModule,o.SocialModuleYandex)})}`;
}

function cleanSocialModule() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.SocialModuleYandex=void 0;var i=n(86178),r=n(48616),o=n(86700),a=n(77499),s=n(38889),u=n(59503);t.SocialModuleYandex=new o.ContainerModule(function(e){var t;e(i.TypesSocial.model).to(s.SocialModelBase).inSingletonScope(),e(i.TypesSocial.cookie).to(a.UserDataLocalStorage).inSingletonScope(),e(i.TypesSocial.payments).to(r.PaymentsModelBase),e(i.TypesSocial.user).to(u.UserYandex),e(i.TypesSocial.userScore).to(r.UserScore),e(i.TypesSocial.dummyUser).toDynamicValue(function(n){return t||(t=n.container.get(i.TypesSocial.user),t.init({getUniqueID:function(){return"local-player"},getID:function(){return"local-player"},getName:function(){return"Player"},getPhoto:function(){return""}})),t})})}`;
}

function nullComponentModule(exportName) {
  return `(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.${exportName}=void 0;t.${exportName}=function(){return null}}`;
}

function emptyModuleExport(exportName) {
  return `(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.${exportName}=void 0;t.${exportName}={}}`;
}

function cleanAdsModule() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.AdsModule=void 0;var i=n(86700),r=n(86178),o=n(45301),a=n(73018),s=n(64122);t.AdsModule=new i.ContainerModule(function(e){e(r.TypesAds.adAction).to(o.AdAction),e(r.TypesAds.manager).to(a.AdManagerBase).inSingletonScope(),e(r.TypesAds.initAction).to(s.InitAdManagerAction)})}`;
}

function emptyClassModule(exportName) {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.${exportName}=void 0;var i=n(70655),r=n(86700),o=function(){function e(){}return e=i.__decorate([(0,r.injectable)()],e)}();t.${exportName}=o}`;
}

function emptyLeaderboardModule(exportName) {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.${exportName}=void 0;var i=n(70655),r=n(86700),o=function(){function e(){}return e.prototype.sync=function(){return Promise.resolve()},e.prototype.submit=function(){return Promise.resolve()},e.prototype.getEntries=function(){return Promise.resolve([])},e=i.__decorate([(0,r.injectable)()],e)}();t.${exportName}=o}`;
}

function emptyActionModule(exportName) {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.${exportName}=void 0;var i=n(44656),r=n(70655),o=n(86700),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.execute=function(){return Promise.resolve()},t=r.__decorate([(0,o.injectable)()],t)}(i.Action);t.${exportName}=a}`;
}

function cleanAppModel() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.AppModel=void 0;var i=n(70655),r=n(86700),o=n(63333),a=n(84194),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i.__extends(t,e),t.prototype.init=function(e){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){return this._defaultPayload||(this._defaultPayload={}),this._defaultPayload.app_id=e&&e.appId||"local-clean",this._defaultPayload.sn=e&&e.provider||"local",this._defaultHost="",a.log.info("defaultHost","local-clean"),[2]})})},t.prototype.getAuthorizationHeader=function(){return""},Object.defineProperty(t.prototype,"firebaseApp",{get:function(){return void 0},enumerable:false,configurable:true}),Object.defineProperty(t.prototype,"defaultEndpoint",{get:function(){return""},enumerable:false,configurable:true}),Object.defineProperty(t.prototype,"remoteConfig",{get:function(){return void 0},enumerable:false,configurable:true}),t.prototype.getDefaultRemoteConfig=function(){return{backend:"",payments_backend_url:""}},t=i.__decorate([(0,r.injectable)()],t)}(o.BackendModel);t.AppModel=s}`;
}

function cleanSocialModelYandexAlias() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.SocialModelYandex=void 0;var i=n(38889);t.SocialModelYandex=i.SocialModelBase}`;
}

function cleanLevelEndActionSIOYandex() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.LevelEndActionSIOYandex=void 0;var i=n(24294);t.LevelEndActionSIOYandex=i.LevelEndActionSIO}`;
}

function cleanStartScreen() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.StartScreen=void 0;var i=n(70655),r=n(16584),o=n(86125),a=n(44656),s=n(86178),u=n(83430),l=n(95781),c=n(10065),d=n(20911),h=n(32715),p=n(12832),f=n(53309),_=i.__importDefault(n(94184)),g=n(30107);n(56635);t.StartScreen=function(){var e=(0,u.useInjection)(l.TypesGame.model),t=(0,u.useInjection)(s.TypesCore.dispatcher),n=i.__read((0,u.visibilityEffect)(),2),m=n[0],v=n[1];return(0,r.jsxs)("div",i.__assign({className:(0,_.default)("screen","screen__start")},{children:[(0,r.jsxs)("div",i.__assign({className:(0,_.default)("screen-top",{invisible:m})},{children:[(0,r.jsx)("div",i.__assign({className:(0,_.default)("container","top-bar")},{children:(0,r.jsxs)("div",i.__assign({className:(0,_.default)("container","top-bar")},{children:[(0,r.jsx)(p.SettingsButton,{onClick:function(){return t.emit(u.UIEvents.POPUP,{id:g.PopupType.SETTINGS})}}),(0,r.jsx)(d.LevelTitle,{}),(0,r.jsx)(h.CoinsIndicator,{total:e.cookie.coins,className:(0,_.default)("coins-indicator","coins-indicator_filled")})]}))})),(0,r.jsx)(c.Capturing,{captured:e.currentContinent.stageLevel/e.currentContinent.totalStages,title:o.Localize.get("ui-menu-capturing","CAPTURING"),stages:e.currentContinent.totalStages,showGift:false})]})),(0,r.jsx)(f.TapToPlayButton,{onDown:function(){return v(true)},onClick:function(){var t;return null===(t=(0,a.lazyGet)(l.TypesGame.actions.startGame))||void 0===t?void 0:t.run()}}),(0,r.jsx)("div",{className:(0,_.default)("screen-bottom",{invisible:m})})]}))}}`;
}

function cleanLevelEndActionSIO() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.LevelEndActionSIO=void 0;var i=n(70655),r=n(44656),o=n(86178),a=n(98931),s=n(83430),u=n(94572),l=n(95781),c=n(30107),d=n(86700),h=n(158),p=n(65370),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n,a,_;return i.__extends(t,e),t.prototype.launch=async function(e){var t,n=this.model,r=n.meta;n.cookie.absoluteTryNum++;if(e){n.cookie.absoluteLevelNum++;await this.popupWin();await this.levelNext.run();n.state=p.GameState.LOBBY}else this.dispatch(s.UIEvents.POPUP,{id:c.PopupType.LOSE,props:{coins:r.getReward()*r.loseMultiplier}});null===(t=this.assets)||void 0===t||t.purge()},t.prototype.popupWin=async function(){var e;await(null===(e=r.di.get(l.TypesGame.actions.winPopup))||void 0===e?void 0:e.run({id:c.PopupType.WIN_LEVEL,props:{showRewardAd:false}}))},t.prototype.submitScore=function(){this.social.me.scoreSession=this.model.currentContinent.getTotalScore();return Promise.resolve()},t.prototype.needToShowAD=function(){return false},i.__decorate([(0,d.inject)(l.TypesGame.model),i.__metadata("design:type","function"==typeof(n=void 0!==u.GameModel&&u.GameModel)?n:Object)],t.prototype,"model",void 0),i.__decorate([(0,d.inject)(l.TypesGame.spritesPool),i.__metadata("design:type","function"==typeof(a=void 0!==h.SpritesPool&&h.SpritesPool)?a:Object)],t.prototype,"assets",void 0),i.__decorate([(0,d.inject)(o.TypesFlow.LevelNext),i.__metadata("design:type","function"==typeof(_=void 0!==r.Action&&r.Action)?_:Object)],t.prototype,"levelNext",void 0),t=i.__decorate([(0,d.injectable)()],t)}(a.LevelEndAction);t.LevelEndActionSIO=f}`;
}

function cleanStageEndAction() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.StageEndAction=void 0;var i=n(70655),r=n(44656),o=n(86178),a=n(98931),s=n(83430),u=n(94572),l=n(95781),c=n(30107),d=n(86700),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n,a;return i.__extends(t,e),t.prototype.launch=async function(e){e=!!e;var t=this.model,n=t.meta,r=t.cookie,o=t.currentContinent;r.absoluteTryNum++;this.social.me.scoreSession=Math.round(o.getTotalScore());if(e)await this.winSolo();else this.dispatch(s.UIEvents.POPUP,{id:c.PopupType.LOSE,props:{coins:n.getReward()*n.loseMultiplier}})},t.prototype.winSolo=async function(){var e;await(null===(e=r.di.get(l.TypesGame.actions.winPopup))||void 0===e?void 0:e.run({id:c.PopupType.WIN_STAGE,props:{showRewardAd:false}}));await this.levelNext.run()},t.prototype.needToShowAD=function(){return false},i.__decorate([(0,d.inject)(l.TypesGame.model),i.__metadata("design:type","function"==typeof(n=void 0!==u.GameModel&&u.GameModel)?n:Object)],t.prototype,"model",void 0),i.__decorate([(0,d.inject)(o.TypesFlow.LevelNext),i.__metadata("design:type","function"==typeof(a=void 0!==r.Action&&r.Action)?a:Object)],t.prototype,"levelNext",void 0),t=i.__decorate([(0,d.injectable)()],t)}(a.SocialFlowAction);t.StageEndAction=h}`;
}

function cleanShowWinPopupAction() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.ShowWinPopupAction=void 0;var i=n(70655),r=n(44656),o=n(83430),a=n(84194),s=n(94572),u=n(95781),l=n(86700),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n;return i.__extends(t,e),t.prototype.execute=function(e){return i.__awaiter(this,void 0,Promise,function(){var t,n=this;return i.__generator(this,function(r){switch(r.label){case 0:return[4,new Promise(function(t){var r,a=i.__assign({coins:n.model.meta.getReward(),scoreStage:(null===(r=n.model.currentContinent)||void 0===r?void 0:r.getStageScore())||0,onContinue:t,showRewardAd:false},null==e?void 0:e.props);n.dispatch(o.UIEvents.POPUP,{id:e.id,props:a})})];case 1:return t=r.sent(),a.log.debug("win reward collected",t),[2]}})})},i.__decorate([(0,l.inject)(u.TypesGame.model),i.__metadata("design:type","function"==typeof(n=void 0!==s.GameModel&&s.GameModel)?n:Object)],t.prototype,"model",void 0),t=i.__decorate([(0,l.injectable)()],t)}(r.Action);t.ShowWinPopupAction=c}`;
}

function cleanLevelCompletedPopupAction() {
  return `(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:true}),t.LevelCompletedPopupAction=void 0;var i=n(70655),r=n(84194),o=n(44656),a=n(86700),s=n(95781),u=n(94572),l=n(83430),c=n(30107),d=n(86178),h=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}var n;return i.__extends(t,e),t.prototype.execute=function(){return i.__awaiter(this,void 0,Promise,function(){var e,t=this;return i.__generator(this,function(n){switch(n.label){case 0:return e=this.model.currentContinent.data.id,[4,new Promise(function(n){t.dispatch(l.UIEvents.POPUP,{id:c.PopupType.LEVEL_COMPLETED,props:{levelName:e,points:+t.social.me.scoreSession.toFixed(),onContinue:n}})})];case 1:return n.sent(),r.log.debug("LevelCompletedPopupAction continued"),[2]}})})},i.__decorate([(0,a.inject)(s.TypesGame.model),i.__metadata("design:type","function"==typeof(n=void 0!==u.GameModel&&u.GameModel)?n:Object)],t.prototype,"model",void 0),i.__decorate([(0,a.inject)(d.TypesSocial.model),i.__metadata("design:type",Object)],t.prototype,"social",void 0),t=i.__decorate([(0,a.injectable)()],t)}(o.Action);t.LevelCompletedPopupAction=h}`;
}

function cleanHtml() {
  return `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no,width=device-width,height=device-height" />
    <title>State.io Clean</title>
    <link rel="stylesheet" href="main.css" />
    <style>
      html, body { margin: 0; width: 100%; height: 100%; overflow: hidden; background: #000; touch-action: none; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; }
      #game-root, #game-canvas { position: absolute; inset: 0; width: 100%; height: 100%; touch-action: none; }
    </style>
  </head>
  <body>
    <div id="game-root"><canvas id="game-canvas"></canvas></div>
    <script>
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function () {};
      window.__diffbus = { ready: true, loaded: 0, params: {} };

      (() => {
        let forwarding = false;
        function pointFromEvent(event) {
          const touch = event.changedTouches && event.changedTouches[0];
          return { x: touch ? touch.clientX : event.clientX, y: touch ? touch.clientY : event.clientY };
        }
        function forwardHtmlButton(event) {
          if (forwarding) return;
          const point = pointFromEvent(event);
          let button = null;
          for (const candidate of document.querySelectorAll("button")) {
            if (candidate.disabled) continue;
            const rect = candidate.getBoundingClientRect();
            const inside = point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
            if (inside) {
              button = candidate;
              break;
            }
          }
          if (!button) return;
          event.preventDefault();
          event.stopImmediatePropagation();
          forwarding = true;
          button.click();
          window.setTimeout(() => { forwarding = false; }, 0);
        }
        document.addEventListener("pointerup", forwardHtmlButton, true);
        document.addEventListener("mouseup", forwardHtmlButton, true);
        document.addEventListener("touchend", forwardHtmlButton, true);
      })();

      (() => {
        function prepareCanvasInput() {
          const canvas = document.querySelector("#game-canvas");
          if (!canvas || canvas.dataset.inputPrepared) return;
          canvas.dataset.inputPrepared = "true";
          canvas.style.touchAction = "none";
          canvas.style.userSelect = "none";
          canvas.addEventListener("pointerdown", (event) => {
            canvas.focus?.();
            if (canvas.setPointerCapture) {
              try { canvas.setPointerCapture(event.pointerId); } catch {}
            }
          });
          canvas.addEventListener("pointerup", (event) => {
            if (canvas.releasePointerCapture) {
              try { canvas.releasePointerCapture(event.pointerId); } catch {}
            }
          });
        }
        window.addEventListener("DOMContentLoaded", prepareCanvasInput);
        new MutationObserver(prepareCanvasInput).observe(document.documentElement, { childList: true, subtree: true });
      })();
    </script>
    <script defer src="main.clean.js"></script>
  </body>
</html>
`;
}

function report(moduleIds) {
  return `# State.io Clean Build Report

## Output

- Directory: \`clean/\`
- Entry: \`clean/index.html\`
- Script: \`clean/main.clean.js\`
- Assets: copied from \`assets/\`

## Removed / Disabled

- Yandex SDK bootstrap and Yandex-specific DI overrides
- Ads module initialization and reward/interstitial ad calls
- Payments model binding to Yandex payments
- Leaderboard initialization, sync, submit, and leaderboard screen entry points
- Shop, no-ads, invite, login, social status, cross-promo, share-image, and tournament entry points
- Reward-ad paths in boosters and win rewards
- Remote font requests from the clean CSS

## Preserved

- Core map/gameplay bundle
- Local progress persistence through localStorage-backed cookie data
- Settings popup, including sound toggle and optional vibration toggle
- Level title, coin display, capturing progress, tap-to-play flow, win/lose flow
- Local asset loading from \`clean/assets/\`

## Patched Webpack Modules

${moduleIds.sort((a, b) => a - b).map((id) => `- ${id}`).join("\n")}

## Notes

This build is generated from \`main.js\` by \`scripts/build-clean.mjs\`. Do not edit \`clean/main.clean.js\` manually; edit the generator and rerun it.
`;
}
