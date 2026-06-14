# First-Pass Readability Transform Report

## Summary

- Source: `src-recovered/`
- Output: `src-readable/`
- Modules processed: 606
- Metadata files copied: 4
- Replacements: `!0 -> true` 1716, `!1 -> false` 1227, `void 0 -> undefined` 2479
- Require annotations added: 2447

## Residual Checks

- Remaining `!0`: 0
- Remaining `!1`: 0
- Remaining `void 0`: 0
- Unannotated known numeric require calls `n(moduleId)`: 0

## Helper Inventory

| Helper | Files | Total occurrences |
|--------|-------|-------------------|
| `__extends` | 136 | 136 |
| `__decorate` | 127 | 261 |
| `__awaiter` | 117 | 241 |
| `__generator` | 120 | 244 |
| `__read` | 76 | 153 |
| `__spread` | 21 | 35 |
| `__spreadArray` | 21 | 34 |
| `__spreadArrays` | 1 | 1 |

## Class Inventory

| File | Exports | Parent expression(s) | `__extends` count |
|------|---------|----------------------|-------------------|
| 47_TournamentPostScoreAction.js | TournamentPostScoreAction | r.Action | 1 |
| 196_DestroyFieldAction.js | DestroyFieldAction | r.Action | 1 |
| 952_PreloadAssetsAction.js | PreloadAssetsAction | r.Action | 1 |
| 3057_SocialFlowAction.js | SocialFlowAction | r.Action | 1 |
| 5183_CookieModelYandex.js | CookieModelYandex | a.CookieModel | 1 |
| 6248_SubmitContextScoreAction.js | SubmitContextScoreAction | r.Action | 1 |
| 6846_ScreenContainer.js | ScreenContainer | n(59795) /* 59795__mod */.View | 1 |
| 7390_LevelEndActionSIOYandex.js | LevelEndActionSIOYandex | o.LevelEndActionSIO | 1 |
| 8734_Action.js | Action | n(13011) /* 13011__mod */.GlobalEventProvider | 1 |
| 10274_LevelNextAction.js | LevelNextAction, TRACK_EVENT, FREE_SOLO_ATTEMPTS | s.SocialFlowAction | 1 |
| 10379_BattleResultsPopupAction.js | BattleResultsPopupAction | r.Action | 1 |
| 10754_TutorialSystem.js | TutorialSystem | c.ReactionSystem | 1 |
| 10910_ArrowView.js | ArrowView | a.View | 1 |
| 11073_InitStageSystem.js | InitStageSystem | r.System | 1 |
| 11470_GenerateMapSpriteAction.js | GenerateMapSpriteAction | r.Action | 1 |
| 11812_FileDropArea.js | FileDropArea | o.Component | 1 |
| 12079_StageEndAction.js | StageEndAction | a.SocialFlowAction | 1 |
| 14134_ReactionSystem.js | ReactionSystem | n(99007) /* 99007_System */.System | 1 |
| 15006_ArrowsMediator.js | ArrowsMediator | r.Mediator | 1 |
| 15850_LoginAction.js | LoginAction | r.Action | 1 |
| 15872_LevelNextActionSIO.js | LevelNextActionSIO | o.LevelNextAction | 1 |
| 16465_ScreenShotActionSIO.js | ScreenShotActionSIO | a.Action | 1 |
| 19305_BootAction.js | BootAction | u.Action | 1 |
| 19474_LevelStartAction.js | LevelStartAction, TRACK_EVENT | n(3057) /* 3057_SocialFlowAction */.SocialFlowAction | 1 |
| 20119_RootMediator.js | RootMediator | r.RootMediator | 1 |
| 20383_AppModel.js | AppModel | o.BackendModel | 1 |
| 23416_InitAudioAction.js | InitAudioAction | o.Action | 1 |
| 24294_LevelEndActionSIO.js | LevelEndActionSIO | a.LevelEndAction | 1 |
| 25487_View.js | View, ADDED_TO_SCENE, REMOVED_FROM_SCENE | n(6538) /* 6538_SIDES */.Container | 1 |
| 25556_SyncYandexLeaderboardsAction.js | SyncYandexLeaderboardsAction | r.Action | 1 |
| 26463_FighterView.js | FighterView | n(6538) /* 6538_SIDES */.Container | 1 |
| 26511_Building.js | Building, ACTIVE_TAG | o.Entity | 1 |
| 26630_Population.js | Population, BLOCK_POPULATION_SECONDS, SPAWN_AMOUNT_ON_OCCUPATION | r.View | 1 |
| 26903_Field.js | Field | n(75111) /* 75111__mod */.Entity | 1 |
| 27588_LoadLevelAction.js | LoadLevelAction | r.Action | 1 |
| 28300_PopulationSystem.js | PopulationSystem | r.IterativeSystem | 1 |
| 30945_UserDataWeb.js | UserDataWeb, COOKIE_NAME | n(92819) /* 92819_UserDataBase */.UserDataBase | 1 |
| 31267_AudioModel.js | AudioModel, COOKIE_KEY, MUTE_MUSIC, MUTE_SOUNDS | r.GlobalEventProvider | 1 |
| 33154_NAFinish.js | NAFinish | r.NotificationAction | 1 |
| 35567_EndScreenAction.js | EndScreenAction | r.Action | 1 |
| 36356_MetaModel.js | MetaModel | r.GlobalEventProvider | 1 |
| 36637_ContinentModel.js | ContinentModel | r.GlobalEventProvider | 1 |
| 36889_SequenceAction.js | SequenceAction | n(8734) /* 8734_Action */.Action | 1 |
| 37360_LazyAction.js | LazyAction | n(8734) /* 8734_Action */.Action | 1 |
| 38889_SocialModelBase.js | SocialModelBase | r.EventDispatcher | 1 |
| 40470_FieldMediator.js | FieldMediator | a.Mediator | 1 |
| 41099_Overlay.js | Overlay | n(59795) /* 59795__mod */.View | 1 |
| 41976_LeaderboardGlobalExternal.js | LeaderboardGlobalExternal | r.EventDispatcher | 1 |
| 42182_Mediator.js | Mediator | n(44656) /* 44656__mod */.GlobalEventProvider | 1 |
| 42724_IterativeSystem.js | IterativeSystem | n(14134) /* 14134_ReactionSystem */.ReactionSystem | 1 |
| 42854_FingerView.js | FingerView | s.View | 1 |
| 42970_CircleAvatar.js | CircleAvatar | n(78001) /* 78001_UserPic */.UserPic | 1 |
| 43603_LeaderboardContextExternal.js | LeaderboardContextExternal | r.EventDispatcher | 1 |
| 44025_NAStartSIO.js | NAStartSIO | r.NAStart | 1 |
| 44046_StartScreenAction.js | StartScreenAction | a.Action | 1 |
| 44802_UpdateSkinsSystem.js | UpdateSkinsSystem | r.IterativeSystem | 1 |
| 45105_ParallelAction.js | ParallelAction | n(8734) /* 8734_Action */.Action | 1 |
| 45301_AdAction.js | AdAction | o.Action | 1 |
| 45724_GenerateShareImageAction.js | GenerateShareImageAction | o.Action | 1 |
| 46044_BurstWaveAction.js | BurstWaveAction | o.Action | 1 |
| 46697_Fighter.js | Fighter, TAG, TAG_DIED, DEFAULT_SIZE, NORMAL_SPEED, DISTANCE_TOLERANCE | l.Entity | 1 |
| 47572_InputSystem.js | InputSystem | r.IterativeSystem | 1 |
| 47665_ShowWinPopupAction.js | ShowWinPopupAction | r.Action | 1 |
| 48115_GenerateMapShapeAction.js | GenerateMapShapeAction | r.Action | 1 |
| 49083_BaseScreen.js | BaseScreen | n(59795) /* 59795__mod */.View | 1 |
| 49295_PlayWithOpponentAction.js | PlayWithOpponentAction | r.Action | 1 |
| 51006_TutorialFingerView.js | TutorialFingerView | s.View | 1 |
| 51779_StartGameAction.js | StartGameAction | r.Action | 1 |
| 52057_Spawner.js | Spawner, UNITS_PER_WAVE, BURST_WAVES_LEN | n(75111) /* 75111__mod */.Entity | 1 |
| 52958_SuggestAuthorizeAction.js | SuggestAuthorizeAction | r.Action | 1 |
| 53351_CapitalView.js | CapitalView | r.View | 1 |
| 54261_SetupSentryAction.js | SetupSentryAction | r.Action | 1 |
| 54799_NALeave.js | NALeave | r.NotificationAction | 1 |
| 56212_ProgressBar.js | ProgressBar | n(59795) /* 59795__mod */.View | 1 |
| 56403_LevelRestartAction.js | LevelRestartAction, TRACK_EVENT, SHOW_AD_INTERVAL, LAST_RESTART | n(3057) /* 3057_SocialFlowAction */.SocialFlowAction | 1 |
| 56792_CookieModel.js | CookieModel, CookieModelKey | c.CookieModelBase | 1 |
| 57165_MainAction.js | MainAction | o.SocialFlowAction | 1 |
| 57503_TournamentCreateAction.js | TournamentCreateAction, POST_WIDTH, POST_HEIGHT | o.Action | 1 |
| 57620_PathsGenerationSystem.js | PathsGenerationSystem | r.IterativeSystem | 1 |
| 59310_FieldView.js | FieldView | r.View | 1 |
| 59503_UserYandex.js | UserYandex | n(44656) /* 44656__mod */.EventDispatcher | 1 |
| 61201_LevelEndAction.js | LevelEndAction, TRACK_EVENT | n(3057) /* 3057_SocialFlowAction */.SocialFlowAction | 1 |
| 61767_PaymentsModelYandex.js | PaymentsModelYandex | r.PaymentsModelBase | 1 |
| 63333_BackendModel.js | BackendModel | n(93668) /* 93668_HTTPRequest */.HTTPRequest | 1 |
| 63895_SocialModelYandex.js | SocialModelYandex | s.SocialModelBase | 1 |
| 64122_InitAdManagerAction.js | InitAdManagerAction | o.Action | 1 |
| 65021_AdManagerYandex.js | AdManagerYandex | a.AdManagerBase | 1 |
| 65248_AuthActionBase.js | AuthActionBase | o.Action | 1 |
| 65743_RootMediator.js | RootMediator | s.Mediator | 1 |
| 65897_PlayWithOpponentActionSIO.js | PlayWithOpponentActionSIO | r.PlayWithOpponentAction | 1 |
| 66423_UserScore.js | UserScore | r.EventDispatcher | 1 |
| 66920_CreateFPSMeterAction.js | CreateFPSMeterAction | a.Action | 1 |
| 68047_InitAdManagerYandexAction.js | InitAdManagerYandexAction | r.InitAdManagerAction | 1 |
| 68878_Spinner.js | Spinner | n(59795) /* 59795__mod */.View | 1 |
| 69185__mod.js | (barrel) | r.RootView | 1 |
| 70055_LevelRestartAfterYandexLoginAction.js | LevelRestartAfterYandexLoginAction | n(99629) /* 99629_LevelStartActionSIO */.LevelStartActionSIO | 1 |
| 70655__mod.js | (barrel) | unresolved parent | 1 |
| 70919_PlaySoundAction.js | PlaySoundAction | o.Action | 1 |
| 71554_LevelEndSystem.js | LevelEndSystem | r.ReactionSystem | 1 |
| 71794_WaitAction.js | WaitAction | n(8734) /* 8734_Action */.Action | 1 |
| 71981_FighterDeathEffectAction.js | FighterDeathEffectAction | a.Action | 1 |
| 72063_BotsSystem.js | BotsSystem | d.IterativeSystem | 1 |
| 73018_AdManagerBase.js | AdManagerBase | r.GlobalEventProvider | 1 |
| 74886_PlayMusicAction.js | PlayMusicAction | r.Action | 1 |
| 77499_UserDataLocalStorage.js | UserDataLocalStorage | n(30945) /* 30945_UserDataWeb */.UserDataWeb | 1 |
| 77754_ScreenshotAction.js | ScreenshotAction | o.Action | 1 |
| 78001_UserPic.js | UserPic | a.View | 1 |
| 80219_ArrowsView.js | ArrowsView | r.View | 1 |
| 82288_StatusAlertView.js | StatusAlertView | unresolved parent | 1 |
| 83042_LevelRestartActionSIO.js | LevelRestartActionSIO | o.LevelRestartAction | 1 |
| 83847_InputManager.js | InputManager | r.InputManagerBase | 1 |
| 84077_StatusAlertContainer.js | StatusAlertContainer | o.Component | 1 |
| 85162_CheatsAction.js | CheatsAction | r.Action | 1 |
| 87460_LevelCompletedPopupAction.js | LevelCompletedPopupAction | o.Action | 1 |
| 88969_DisplaySystem.js | DisplaySystem | r.ReactionSystem | 1 |
| 90050_UserDataYandex.js | UserDataYandex | n(48616) /* 48616__mod */.UserDataBase | 1 |
| 90190_AuthYandexAction.js | AuthYandexAction | a.AuthActionBase | 1 |
| 91585_StateShapeView.js | StateShapeView | u.Container | 1 |
| 92287_PauseAction.js | PauseAction | r.Action | 1 |
| 92406_NAStart.js | NAStart | r.NotificationAction | 1 |
| 93533_ShareActionOk.js | ShareActionOk | r.Action | 1 |
| 93599_TournamentShareAction.js | TournamentShareAction | o.Action | 1 |
| 93710_RootView.js | RootView | n(59795) /* 59795__mod */.View | 1 |
| 93972_GamePlaySystem.js | GamePlaySystem, GamePlayEvent | d.ReactionSystem | 1 |
| 94572_GameModel.js | GameModel, LEVELS_PREDEFINED, DEFAULT_CTX_DATA | o.GlobalEventProvider | 1 |
| 94732_SetupUIAction.js | SetupUIAction | r.Action | 1 |
| 94766_SIOPreloadAssetsAction.js | SIOPreloadAssetsAction | r.PreloadAssetsAction | 1 |
| 95252_StatusAlertItem.js | StatusAlertItem | unresolved parent | 1 |
| 96488_EventDispatcher.js | EventDispatcher | n(26729) /* 26729__mod */.EventEmitter | 1 |
| 97158_NotificationAction.js | NotificationAction, IMAGES_CACHE, EMOJI, WIDTH_FULL, HEIGHT_FULL | o.Action | 1 |
| 97586_ShowGiftPopupAction.js | ShowGiftPopupAction | o.Action | 1 |
| 97949_GlobalEventProviderComponent.js | GlobalEventProviderComponent | r.Component | 1 |
| 97954_LeaderboardGlobalYandex.js | LeaderboardGlobalYandex, PREFIX | r.EventDispatcher | 1 |
| 99629_LevelStartActionSIO.js | LevelStartActionSIO | a.LevelStartAction | 1 |
| 99794_PageModel.js | PageModel | unresolved parent | 1 |
| 99806_FighterMovementSystem.js | FighterMovementSystem, FighterEvent | o.IterativeSystem | 1 |

## Helper Hotspots

### __extends

| File | Occurrences |
|------|-------------|
| 47_TournamentPostScoreAction.js | 1 |
| 196_DestroyFieldAction.js | 1 |
| 952_PreloadAssetsAction.js | 1 |
| 3057_SocialFlowAction.js | 1 |
| 5183_CookieModelYandex.js | 1 |
| 6248_SubmitContextScoreAction.js | 1 |
| 6846_ScreenContainer.js | 1 |
| 7390_LevelEndActionSIOYandex.js | 1 |
| 8734_Action.js | 1 |
| 10274_LevelNextAction.js | 1 |

### __decorate

| File | Occurrences |
|------|-------------|
| 11470_GenerateMapSpriteAction.js | 6 |
| 69185__mod.js | 6 |
| 3057_SocialFlowAction.js | 5 |
| 15850_LoginAction.js | 5 |
| 26511_Building.js | 5 |
| 45724_GenerateShareImageAction.js | 5 |
| 57503_TournamentCreateAction.js | 5 |
| 94572_GameModel.js | 5 |
| 23416_InitAudioAction.js | 4 |
| 24294_LevelEndActionSIO.js | 4 |

### __awaiter

| File | Occurrences |
|------|-------------|
| 38889_SocialModelBase.js | 12 |
| 24294_LevelEndActionSIO.js | 8 |
| 61767_PaymentsModelYandex.js | 8 |
| 63895_SocialModelYandex.js | 7 |
| 3057_SocialFlowAction.js | 6 |
| 42560_PaymentsModelBase.js | 6 |
| 63333_BackendModel.js | 5 |
| 45724_GenerateShareImageAction.js | 4 |
| 65248_AuthActionBase.js | 4 |
| 71794_WaitAction.js | 4 |

### __generator

| File | Occurrences |
|------|-------------|
| 38889_SocialModelBase.js | 12 |
| 24294_LevelEndActionSIO.js | 8 |
| 61767_PaymentsModelYandex.js | 8 |
| 63895_SocialModelYandex.js | 7 |
| 3057_SocialFlowAction.js | 6 |
| 42560_PaymentsModelBase.js | 6 |
| 63333_BackendModel.js | 5 |
| 45724_GenerateShareImageAction.js | 4 |
| 65248_AuthActionBase.js | 4 |
| 71794_WaitAction.js | 4 |

### __read

| File | Occurrences |
|------|-------------|
| 68532__mod.js | 18 |
| 82713_MetaConfig.js | 11 |
| 35081_BotUtility.js | 9 |
| 96648_StartScreen.js | 5 |
| 98707__mod.js | 5 |
| 46697_Fighter.js | 4 |
| 10754_TutorialSystem.js | 3 |
| 26511_Building.js | 3 |
| 47277_SettingsPopup.js | 3 |
| 72063_BotsSystem.js | 3 |

### __spread

| File | Occurrences |
|------|-------------|
| 29518_StoreActionTypes.js | 3 |
| 70655__mod.js | 3 |
| 77875_CommandsGenerator.js | 3 |
| 96648_StartScreen.js | 3 |
| 5183_CookieModelYandex.js | 2 |
| 14633_LeaderBoard.js | 2 |
| 17797_Signal.js | 2 |
| 46044_BurstWaveAction.js | 2 |
| 59474_BotCalculationLogic.js | 2 |
| 94766_SIOPreloadAssetsAction.js | 2 |

### __spreadArray

| File | Occurrences |
|------|-------------|
| 29518_StoreActionTypes.js | 3 |
| 77875_CommandsGenerator.js | 3 |
| 96648_StartScreen.js | 3 |
| 5183_CookieModelYandex.js | 2 |
| 14633_LeaderBoard.js | 2 |
| 17797_Signal.js | 2 |
| 46044_BurstWaveAction.js | 2 |
| 59474_BotCalculationLogic.js | 2 |
| 70655__mod.js | 2 |
| 94766_SIOPreloadAssetsAction.js | 2 |

### __spreadArrays

| File | Occurrences |
|------|-------------|
| 70655__mod.js | 1 |

## Priority Manual Modules

| Module | File | Remaining helpers | Notes |
|--------|------|-------------------|-------|
| Building | 26511_Building.js | __extends:1, __decorate:5, __read:3, __spread:1, __spreadArray:1 | extends o.Entity |
| Population | 26630_Population.js | __extends:1, __decorate:1, __read:1, __spread:1, __spreadArray:1 | extends r.View |
| InputSystem | 47572_InputSystem.js | __extends:1 | extends r.IterativeSystem |
| BotCalculationLogic | 59474_BotCalculationLogic.js | __decorate:2, __awaiter:3, __generator:3, __read:2, __spread:2, __spreadArray:2 | no class parent detected |
| GameModel | 94572_GameModel.js | __extends:1, __decorate:5, __awaiter:4, __generator:4, __read:1 | extends o.GlobalEventProvider |
