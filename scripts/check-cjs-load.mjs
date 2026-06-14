#!/usr/bin/env node
// Smoke-check CommonJS restoration output and write a load report.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const ROOT = process.cwd();
const INPUT_DIR = process.argv[2] || "src-cjs";
const inputPath = path.resolve(ROOT, INPUT_DIR);
const localRequire = createRequire(path.join(inputPath, "__load_check__.js"));

installBrowserLikeGlobals();

const targets = [
  "70655__mod.js",
  "196_DestroyFieldAction.js",
  "15850_LoginAction.js",
  "26903_Field.js",
  "3057_SocialFlowAction.js",
  "19474_LevelStartAction.js",
  "56403_LevelRestartAction.js",
  "83042_LevelRestartActionSIO.js",
  "10274_LevelNextAction.js",
  "15872_LevelNextActionSIO.js",
  "61201_LevelEndAction.js",
  "24294_LevelEndActionSIO.js",
  "49295_PlayWithOpponentAction.js",
  "65897_PlayWithOpponentActionSIO.js",
  "99629_LevelStartActionSIO.js",
  "70055_LevelRestartAfterYandexLoginAction.js",
  "16465_ScreenShotActionSIO.js",
  "77754_ScreenshotAction.js",
  "44046_StartScreenAction.js",
  "94732_SetupUIAction.js",
  "51779_StartGameAction.js",
  "76883_UIRoot.js",
  "27588_LoadLevelAction.js",
  "47665_ShowWinPopupAction.js",
  "97586_ShowGiftPopupAction.js",
  "10379_BattleResultsPopupAction.js",
  "87460_LevelCompletedPopupAction.js",
  "35567_EndScreenAction.js",
  "12079_StageEndAction.js",
  "92287_PauseAction.js",
  "45724_GenerateShareImageAction.js",
  "70051_HTMLUIModule.js",
  "37532_GameUIModule.js",
  "7161_BackButton.js",
  "32715_CoinsIndicator.js",
  "12832_SettingsButton.js",
  "29343_UserIdLabel.js",
  "55960_Score.js",
  "17828_ScoreGroup.js",
  "41595_Avatar.js",
  "71290_AvatarPlayInGroup.js",
  "47702_AvatarGroup.js",
  "56612_Winner.js",
  "78001_UserPic.js",
  "42970_CircleAvatar.js",
  "49083_BaseScreen.js",
  "41099_Overlay.js",
  "6846_ScreenContainer.js",
  "56212_ProgressBar.js",
  "68878_Spinner.js",
  "93710_RootView.js",
  "65743_RootMediator.js",
  "952_PreloadAssetsAction.js",
  "89559__mod.js",
  "80672__mod.js",
  "90399_PIXIUIModule.js",
  "25487_View.js",
  "42182_Mediator.js",
  "38224__mod.js",
  "59795__mod.js",
  "4199__mod.js",
  "99856__mod.js",
  "47932__mod.js",
  "32956__mod.js",
  "55132__mod.js",
  "69185__mod.js",
  "20119_RootMediator.js",
  "94766_SIOPreloadAssetsAction.js",
  "55378_InviteButton.js",
  "14954_NoAdsButton.js",
  "82978_ShopButton.js",
  "53309_TapToPlayButton.js",
  "20911_LevelTitle.js",
  "10065_Capturing.js",
  "69080_UserStatusInfo.js",
  "79631_ProgressSection.js",
  "44966_ProgressIndicator.js",
  "52951_ProgressBar.js",
  "56721_Booster.js",
  "67884_Boosters.js",
  "95622_GamePlayScreen.js",
  "96648_StartScreen.js",
  "2906_LeaderboardScreen.js",
  "96087_LeaderboardButton.js",
  "41976_LeaderboardGlobalExternal.js",
  "97954_LeaderboardGlobalYandex.js",
  "43603_LeaderboardContextExternal.js",
  "92819_UserDataBase.js",
  "90050_UserDataYandex.js",
  "30945_UserDataWeb.js",
  "77499_UserDataLocalStorage.js",
  "57655_SessionData.js",
  "58670_CookieDataLocalStorage.js",
  "38889_SocialModelBase.js",
  "66423_UserScore.js",
  "59503_UserYandex.js",
  "42560_PaymentsModelBase.js",
  "61767_PaymentsModelYandex.js",
  "63895_SocialModelYandex.js",
  "14562_SocialModuleYandex.js",
  "25556_SyncYandexLeaderboardsAction.js",
  "89286_GameModuleYandex.js",
  "30326_LeaderBoardTabs.js",
  "14633_LeaderBoard.js",
  "90211_LeaderBoardItem.js",
  "23862_LeaderBoardInviteItem.js",
  "76742_ShopScreen.js",
  "44698_ShopPreview.js",
  "83643_ShopMenu.js",
  "76282_ShopItem.js",
  "83719_BuildingItem.js",
  "30851_FighterItem.js",
  "92068_ColorItem.js",
  "62415_TexturedShopItem.js",
  "37079_ShopTabHeader.js",
  "94776_Popups.js",
  "99836_Screens.js",
  "41510_AlertsOverlay.js",
  "31651_SocialOverlay.js",
  "7514_PauseOverlay.js",
  "46696_WinStagePopup.js",
  "53841_LosePopup.js",
  "78199_BattleResultsPopup.js",
  "8189_ShareLevelResultPopup.js",
  "56532_ConfirmPopup.js",
  "56184_GiftPopup.js",
  "96126_OfflineEarningsPopup.js",
  "47277_SettingsPopup.js",
  "11470_GenerateMapSpriteAction.js",
  "48115_GenerateMapShapeAction.js",
  "65370_GameState.js",
  "36596_PlayerType.js",
  "66154_SelectableFighterDataSet.js",
  "15006_ArrowsMediator.js",
  "25583_DecisionType.js",
  "26463_FighterView.js",
  "26511_Building.js",
  "26630_Population.js",
  "36637_ContinentModel.js",
  "40470_FieldMediator.js",
  "42854_FingerView.js",
  "47572_InputSystem.js",
  "51006_TutorialFingerView.js",
  "53351_CapitalView.js",
  "59474_BotCalculationLogic.js",
  "59201_CoreGameModule.js",
  "59310_FieldView.js",
  "60079_SkinManager.js",
  "71981_FighterDeathEffectAction.js",
  "80219_ArrowsView.js",
  "81717_InputManagerBase.js",
  "83847_InputManager.js",
  "88969_DisplaySystem.js",
  "10910_ArrowView.js",
  "91585_StateShapeView.js",
  "94572_GameModel.js",
];

const results = targets.map((file) => loadTarget(file));
const reportPath = path.join(inputPath, "_LOAD_CHECK_REPORT.md");
fs.writeFileSync(reportPath, renderReport(results));

console.log(`Checked ${results.length} CJS targets`);
console.log(`Loaded: ${results.filter((result) => result.status === "loaded").length}`);
console.log(`Blocked: ${results.filter((result) => result.status !== "loaded").length}`);
console.log(`Report: ${path.join(INPUT_DIR, "_LOAD_CHECK_REPORT.md")}`);

function loadTarget(file) {
  try {
    const exportsObject = localRequire(`./${file}`);
    return {
      file,
      status: "loaded",
      exports: Object.keys(exportsObject).slice(0, 20),
      message: "",
    };
  } catch (error) {
    return {
      file,
      status: "blocked",
      exports: [],
      message: error?.message || String(error),
      stackHead: String(error?.stack || "").split("\n").slice(0, 6),
    };
  }
}

function installBrowserLikeGlobals() {
  const noop = function noop() {};
  const canvasContext = () => ({
    fillStyle: "",
    strokeStyle: "",
    globalAlpha: 1,
    font: "",
    textAlign: "left",
    textBaseline: "alphabetic",
    canvas: null,
    beginPath: noop,
    closePath: noop,
    clearRect: noop,
    clip: noop,
    drawImage: noop,
    fill: noop,
    fillRect: noop,
    fillText: noop,
    getImageData: () => ({ data: new Uint8ClampedArray(4), width: 1, height: 1 }),
    lineTo: noop,
    measureText: () => ({ width: 0 }),
    moveTo: noop,
    putImageData: noop,
    restore: noop,
    save: noop,
    scale: noop,
    setTransform: noop,
    stroke: noop,
    translate: noop,
  });
  const element = () => ({
    style: {},
    children: [],
    childNodes: [],
    appendChild: noop,
    insertBefore: noop,
    removeChild: noop,
    setAttribute: noop,
    getAttribute: () => null,
    getContext: (type) => (type === "2d" || type === undefined ? canvasContext() : null),
    addEventListener: noop,
    removeEventListener: noop,
    getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0 }),
  });

  globalThis.window ??= globalThis;
  globalThis.window.addEventListener ??= noop;
  globalThis.window.removeEventListener ??= noop;
  globalThis.window.dispatchEvent ??= () => true;
  globalThis.window.requestAnimationFrame ??= ((callback) => setTimeout(() => callback(Date.now()), 0));
  globalThis.window.cancelAnimationFrame ??= ((id) => clearTimeout(id));
  globalThis.self ??= globalThis;
  globalThis.navigator ??= { userAgent: "node-cjs-load-check" };
  globalThis.location ??= { href: "http://localhost/" };
  globalThis.DOMParser ??= class DOMParser {
    parseFromString() {
      return { documentElement: element() };
    }
  };
  globalThis.document ??= {
    body: element(),
    head: element(),
    documentElement: element(),
    createElement: element,
    createElementNS: element,
    getElementById: () => null,
    getElementsByTagName: () => [],
    importNode: (node) => node,
    addEventListener: noop,
    removeEventListener: noop,
  };
  globalThis.Image ??= class Image {
    constructor() {
      this.onload = null;
      this.onerror = null;
    }
  };
  globalThis.XMLHttpRequest ??= class XMLHttpRequest {};
  globalThis.WebGLRenderingContext ??= class WebGLRenderingContext {};
  installReflectMetadataShim();
}

function installReflectMetadataShim() {
  const store = new WeakMap();

  function targetStore(target) {
    if (!store.has(target)) store.set(target, new Map());
    return store.get(target);
  }

  function metadataKey(propertyKey) {
    return propertyKey === undefined ? "__target__" : String(propertyKey);
  }

  Reflect.defineMetadata ??= function defineMetadata(key, value, target, propertyKey) {
    const byProperty = targetStore(target);
    const prop = metadataKey(propertyKey);
    if (!byProperty.has(prop)) byProperty.set(prop, new Map());
    byProperty.get(prop).set(key, value);
  };

  Reflect.hasOwnMetadata ??= function hasOwnMetadata(key, target, propertyKey) {
    return targetStore(target).get(metadataKey(propertyKey))?.has(key) || false;
  };

  Reflect.hasMetadata ??= Reflect.hasOwnMetadata;

  Reflect.getOwnMetadata ??= function getOwnMetadata(key, target, propertyKey) {
    return targetStore(target).get(metadataKey(propertyKey))?.get(key);
  };

  Reflect.getMetadata ??= Reflect.getOwnMetadata;

  Reflect.getMetadataKeys ??= function getMetadataKeys(target, propertyKey) {
    return Array.from(targetStore(target).get(metadataKey(propertyKey))?.keys() || []);
  };

  Reflect.getOwnMetadataKeys ??= Reflect.getMetadataKeys;

  Reflect.metadata ??= function metadata(key, value) {
    return function metadataDecorator(target, propertyKey) {
      Reflect.defineMetadata(key, value, target, propertyKey);
    };
  };
}

function renderReport(results) {
  return [
    "# CommonJS Load Check Report",
    "",
    "## Summary",
    "",
    `- Source: \`${INPUT_DIR}/\``,
    `- Targets checked: ${results.length}`,
    `- Loaded: ${results.filter((result) => result.status === "loaded").length}`,
    `- Blocked by runtime environment or unresolved side effects: ${results.filter((result) => result.status !== "loaded").length}`,
    "",
    "## Results",
    "",
    "| File | Status | Exports / Message |",
    "|------|--------|-------------------|",
    ...results.map((result) => {
      const detail =
        result.status === "loaded" ? result.exports.join(", ") || "(no enumerable exports)" : result.message;
      return `| ${result.file} | ${result.status} | ${escapePipes(detail)} |`;
    }),
    "",
    "## Blocked Stacks",
    "",
    ...results
      .filter((result) => result.status !== "loaded")
      .flatMap((result) => [
        `### ${result.file}`,
        "",
        "```text",
        ...(result.stackHead || []),
        "```",
        "",
      ]),
  ].join("\n");
}

function escapePipes(value) {
  return String(value).replace(/\|/g, "\\|");
}
