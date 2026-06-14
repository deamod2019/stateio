# Restoration Status

## Current Layers

- `src-recovered/`: original extracted webpack module snapshot.
- `src-readable/`: token-cleaned readable snapshot with dependency annotations and graph reports.
- `src-cjs/`: CommonJS load-checking prototype generated from `src-readable/`.
- `src-restored/`: hand-restored semantic source modules.

## Restored Component-Key Alignment

- Gameplay entity keys for `Spawner`, `PathHolder`, `BotLogic`, `Fighter`, and `FighterGroupsSystem` now resolve through `src-restored/core`.
- Continent-level entity creation/scoring now routes `Building`, `Population`, and `FighterGroupsSystem` through `src-restored/core`.
- Gameplay ECS queries for active/all buildings now live in `src-restored/core`; `GameModel` and `InputSystem` use restored `ActiveBuildingsQuery`, while `AllBuildingsQuery` now uses restored `CapitalView`.
- Field scene lifecycle now routes through restored `FieldView`, `FieldMediator`, `DisplaySystem`, `ArrowsView`, `ArrowsMediator`, `GameModel`, and restored visual component keys.
- Visual component keys for `CapitalView`, `StateShapeView`, `TutorialFingerView`, and `FighterView` now resolve through `src-restored/core`; remaining framework keys such as Pixi, GSAP, and Inversify still stay on the CJS layer until explicitly restored.
- UI screen bindings for `TypesUI.screen.GAMEPLAY`, `TypesUI.screen.HOME`, `TypesUI.screen.LEADERBOARD`, and `TypesUI.screen.SHOP` now resolve through `src-restored/ui`.
- Leaderboard screen subcomponents now resolve through `src-restored/ui`, including tabs, board assembly, user rows, and invite-reward rows.
- Social platform data leaves now resolve through `src-restored/core`, including user-score aggregation, Yandex user wrapper, base/Yandex/Web/local user data, session metadata, cookie-data barrel exports, base/Yandex social models, and base/Yandex payments.
- Shop screen subcomponents now resolve through `src-restored/ui`, including shop preview, tab menu, item cards, and building skin tiles.
- Start screen shared action buttons now resolve through `src-restored/ui`, including invite, shop, tap-to-play, and no-ads buttons.
- Start and gameplay display leaves now resolve through `src-restored/ui`, including level title, capturing progress, user login status, boosters, booster cards, and gameplay progress indicator slices.
- UI popup bindings for `PopupType.WIN_LEVEL`, `PopupType.WIN_STAGE`, `PopupType.BATTLE_RESULTS`, `PopupType.LEVEL_COMPLETED`, `PopupType.LOSE`, `PopupType.CONFIRM`, `PopupType.GIFT`, `PopupType.OFFLINE_EARNINGS`, and `PopupType.SETTINGS` now resolve through `src-restored/ui`.
- HTML UI root plus setup, start-screen, and end-screen action bindings now resolve through `src-restored`.
- Notification actions now resolve through `src-restored/core`, including the start/finish/leave action classes, notification I18N bindings, and the SIO start-notification map/avatar image branch.
- UI root now uses restored `AlertsOverlay`, `SocialOverlay`, `PauseOverlay`, `Popups`, and `Screens` containers.
- `AlertsOverlay` now routes its status-alert view, service, alert store, item/container views, and status CSS helpers through restored UI modules.
- Restored UI modules now share `src-restored/ui/UIContext.js` for `InversifyContext`, UI hooks, `UIEvents`, and the small HTML UI barrel surface; the restored context/hooks no longer keep old `86178`, `83430`, `19562`, or central `30396` CJS fallbacks.
- Restored gameplay/core modules now import ECS primitives through `src-restored/core/ECSCore.js`; the `75111` ECS barrel is now semantic source, including `Signal`, component helpers, tags, linked components, `Entity`, `EntitySnapshot`, `Engine`, queries, and system base classes.
- Restored modules now import TypeScript runtime helpers through `src-restored/core/TSHelpers.js`; direct restored-source imports of old `70655__mod.js` have been removed.
- Restored UI modules now import class-name combining through `src-restored/ui/classNames.js`; direct restored-source imports of old `94184__mod.js` have been removed.
- Restored UI modules now import JSX vnode creation through `src-restored/ui/jsxRuntime.js`; direct restored-source imports of old `16584__mod.js` have been removed.
- Restored UI modules now route empty extracted-CSS side-effect modules through `src-restored/ui/styleSideEffects.js`; direct restored-source bare style imports have been removed.
- `UIControls` now imports shared button/icon SVG modules through `src-restored/ui/UIControlIcons.js`; direct restored-source imports of the old UI-control icon CJS modules have been removed.
- `SVGAssets` now imports shared sprite-loader SVG symbols through `src-restored/ui/SVGAssetSymbols.js`; direct restored-source imports of those old SVG asset CJS modules have been removed.
- Restored runtime modules now import scoped logging through `src-restored/core/Logger.js` and event dispatch inheritance through `src-restored/core/EventEmitter.js`; direct restored-source imports of old `68313__mod.js` and `26729__mod.js` have been removed.
- `UserScore`, `SocialModelBase`, and `SocialModelYandex` now import score/popup constants through restored `SocialAppExports`; direct restored-source imports of the old `60539__mod.js` social score barrel have been removed from those models.
- Settings/audio modules now reach the third-party Howler runtime through `src-restored/core/AudioRuntime.js`; direct restored-source Howler snapshot imports are centralized at one boundary.
- Restored UI modules now reach the third-party Preact core runtime through `src-restored/ui/preactRuntime.js`; direct restored-source Preact snapshot imports are centralized at one boundary.
- Restored core/UI modules now reach the third-party Inversify/metadata runtime through `src-restored/core/diRuntime.js`; direct restored-source metadata snapshot imports are centralized at one boundary.
- Restored display and animation modules now reach third-party PixiJS and GSAP through `src-restored/core/pixiRuntime.js`, `src-restored/core/animationRuntime.js`, and `src-restored/core/CssAnimationRuntime.js`; direct restored-source display/animation snapshot imports are centralized at named boundaries.
- Restored SVG symbol modules now reach the third-party sprite-loader runtime through `src-restored/ui/svgSpriteRuntime.js`; direct restored-source sprite runtime snapshot imports are centralized at one boundary.
- Restored core geometry modules now reach the SVG path parser through `src-restored/core/PathParserRuntime.js`; direct restored-source path-parser snapshot imports are centralized at one boundary.
- Restored setup/gameplay/payment-base modules now reach third-party Sentry through `src-restored/core/SentryRuntime.js` and `src-restored/core/SentryTracingRuntime.js`; direct restored-source Sentry snapshot imports are centralized at named boundaries.
- Restored debug startup modules now reach FPSMeter through `src-restored/core/FPSMeterRuntime.js`; direct restored-source FPSMeter snapshot imports are centralized at one boundary.
- `RuntimeContainer` now uses a restored standalone DI container plus the centralized lazy-inject helper in `src-restored/core/InjectDecoratorsRuntime.js`; the old mixed-phase runtime-container bridge has been removed from core restored paths.
- Restored backend/auth/analytics modules now reach Firebase SDKs through `src-restored/core/FirebaseAppRuntime.js`, `src-restored/core/FirebaseRemoteConfigRuntime.js`, `src-restored/core/FirebaseAuthRuntime.js`, and `src-restored/core/FirebaseAnalyticsRuntime.js`; direct restored-source Firebase snapshot imports are centralized at named boundaries.
- `src-restored/_TARGET_SCOPE_REPORT.md` now records the active user scope boundary: core gameplay plus settings are target scope, while shop, leaderboard, advertising, social-platform, payment, and Yandex adapter surfaces stay explicitly excluded unless they block core/settings behavior.

## Hand-Restored Modules

| Module | Restored file | Verification |
|--------|---------------|--------------|
| `70655__mod.js` | `src-restored/core/TSHelpers.js` | `node test/compare-ts-helpers.js` |
| `16584__mod.js` | `src-restored/ui/jsxRuntime.js` | `node test/compare-jsx-runtime.js` |
| `94184__mod.js` | `src-restored/ui/classNames.js` | `node test/compare-class-names.js` |
| 40 empty UI style modules | `src-restored/ui/styleSideEffects.js` | `node test/compare-style-side-effects.js` |
| 14 UI control SVG icon modules | `src-restored/ui/UIControlIcons.js` | `node test/compare-ui-control-icons.js`; `node test/compare-ui-controls.js` |
| 20 shared SVG asset symbol modules | `src-restored/ui/SVGAssetSymbols.js` | `node test/compare-svg-asset-symbols.js`; `node test/compare-localize-svg-assets.js` |
| `17797_Signal.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `79574__mod.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `33210__mod.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `71644_LinkedComponent.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `33977_LinkedComponentList.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `63017_EntitySnapshot.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `29017_Subscription.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `32492_Engine.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `99007_System.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `51997_QueryBuilder.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `14134_ReactionSystem.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `42724_IterativeSystem.js` | `src-restored/core/ECSCore.js` | `node test/compare-ecs-core.js` |
| `28696_CookieModelBase.js` | `src-restored/core/CookieModelBase.js` | `node test/compare-cookie-meta.js` |
| `56792_CookieModel.js` | `src-restored/core/CookieModel.js` | `node test/compare-cookie-meta.js` |
| `82713_MetaConfig.js` | `src-restored/core/MetaConfig.js` | `node test/compare-cookie-meta.js` |
| `36356_MetaModel.js` | `src-restored/core/MetaModel.js` | `node test/compare-cookie-meta.js` |
| `29568__mod.js` / `11414__mod.js` | `src-restored/core/PathBounds.js` | `node test/compare-sprites-pool.js` |
| `66721__mod.js` | `src-restored/core/PathParserRuntime.js` | `node test/compare-path-parser-runtime.js`; `node test/compare-sprites-pool.js` |
| `158_SpritesPool.js` | `src-restored/core/SpritesPool.js` | `node test/compare-sprites-pool.js` |
| `26630_Population.js` | `src-restored/core/Population.js` | `node test/compare-population.js` |
| `26511_Building.js` | `src-restored/core/Building.js` | `node test/compare-building.js` |
| `47572_InputSystem.js` | `src-restored/core/InputSystem.js` | `node test/compare-input-system.js` |
| `81717_InputManagerBase.js` | `src-restored/core/InputManagerBase.js` | `node test/compare-input-manager.js` |
| `83847_InputManager.js` | `src-restored/core/InputManager.js` | `node test/compare-input-manager.js` |
| `59474_BotCalculationLogic.js` | `src-restored/core/BotCalculationLogic.js` | `node test/compare-bot-calculation.js`; `node test/compare-bot-calculation-calculate.js` |
| `94572_GameModel.js` | `src-restored/core/GameModel.js` | `node test/compare-game-model.js` |
| `36637_ContinentModel.js` | `src-restored/core/ContinentModel.js` | `node test/compare-continent-model.js` |
| `39887_TimeTrack.js` | `src-restored/core/TimeTrack.js` | `node test/compare-time-track.js`; `node test/compare-continent-model.js` |
| `46697_Fighter.js` | `src-restored/core/Fighter.js` | `node test/compare-fighter.js` |
| `52057_Spawner.js` | `src-restored/core/Spawner.js` | `node test/compare-spawner.js` |
| `72257_FighterGroup.js` | `src-restored/core/FighterGroup.js` | `node test/compare-fighter-group.js` |
| `85765_FighterGroupsSystem.js` | `src-restored/core/FighterGroupsSystem.js` | `node test/compare-fighter-groups-system.js` |
| `96239_PCell.js` | `src-restored/core/PCell.js` | `node test/compare-pcell.js` |
| `99806_FighterMovementSystem.js` | `src-restored/core/FighterMovementSystem.js` | `node test/compare-fighter-movement-system.js` |
| `85126_PathHolder.js` | `src-restored/core/PathHolder.js` | `node test/compare-path-holder.js` |
| `57620_PathsGenerationSystem.js` | `src-restored/core/PathsGenerationSystem.js` | `node test/compare-paths-generation-system.js` |
| `46044_BurstWaveAction.js` | `src-restored/core/BurstWaveAction.js` | `node test/compare-burst-wave-action.js` |
| `11073_InitStageSystem.js` | `src-restored/core/InitStageSystem.js` | `node test/compare-init-stage-system.js` |
| `93972_GamePlaySystem.js` | `src-restored/core/GamePlaySystem.js` | `node test/compare-game-play-system.js` |
| `28300_PopulationSystem.js` | `src-restored/core/PopulationSystem.js` | `node test/compare-population-system.js` |
| `3565_BotLogic.js` | `src-restored/core/BotLogic.js` | `node test/compare-bot-logic.js` |
| `72063_BotsSystem.js` | `src-restored/core/BotsSystem.js` | `node test/compare-bots-system.js` |
| `71554_LevelEndSystem.js` | `src-restored/core/LevelEndSystem.js` | `node test/compare-level-end-system.js` |
| `10754_TutorialSystem.js` | `src-restored/core/TutorialSystem.js` | `node test/compare-tutorial-system.js` |
| `44802_UpdateSkinsSystem.js` | `src-restored/core/UpdateSkinsSystem.js` | `node test/compare-update-skins-system.js` |
| `62260_ActiveBuildingsQuery.js` | `src-restored/core/ActiveBuildingsQuery.js` | `node test/compare-building-queries.js` |
| `9964_AllBuildingsQuery.js` | `src-restored/core/AllBuildingsQuery.js` | `node test/compare-building-queries.js` |
| `88969_DisplaySystem.js` | `src-restored/core/DisplaySystem.js` | `node test/compare-display-system.js` |
| `60079_SkinManager.js` | `src-restored/core/SkinManager.js` | `node test/compare-skin-manager.js` |
| `36596_PlayerType.js` | `src-restored/core/PlayerType.js` | `node test/compare-core-enums.js` |
| `65370_GameState.js` | `src-restored/core/GameState.js` | `node test/compare-core-enums.js` |
| `25583_DecisionType.js` | `src-restored/core/DecisionType.js` | `node test/compare-decision-type.js` |
| `45329_BState.js` | `src-restored/core/BState.js` | `node test/compare-bstate.js` |
| `20811_GroupModel.js` | `src-restored/core/GroupModel.js` | `node test/compare-group-model.js` |
| `77875_CommandsGenerator.js` | `src-restored/core/CommandsGenerator.js` | `node test/compare-commands-generator.js` |
| `35081_BotUtility.js` | `src-restored/core/BotUtility.js` | `node test/compare-bot-utility.js` |
| `13866_BotPreset6FinalAgressive.js` | `src-restored/core/BotPresets.js` | `node test/compare-bot-presets.js` |
| `66154_SelectableFighterDataSet.js` | `src-restored/core/SelectableSkins.js` | `node test/compare-selectable-skins.js` |
| `86178__mod.js` / `8877_TypesApp.js` / `9168_TypesFlow.js` / `26883_TypesUI.js` / `62653_TypesAudio.js` / `82943_TypesAnalytics.js` / `98241_TypesNotification.js` / `32782_TypesPromo.js` | `src-restored/core/CoreTypes.js` | `node test/compare-core-types.js` |
| `95781_TypesGame.js` | `src-restored/core/TypesGame.js` | `node test/compare-types-game.js` |
| `47283_GameEvents.js` | `src-restored/core/GameEvents.js` | `node test/compare-game-events.js` |
| `82496_GameConstants.js` | `src-restored/core/GameConstants.js` | `node test/compare-game-constants.js` |
| `44365_SIOConstants.js` | `src-restored/core/SIOConstants.js` | `node test/compare-sio-constants.js` |
| `73104_TypesCore.js` | `src-restored/core/TypesCore.js` | `node test/compare-core-runtime.js` |
| `96488_EventDispatcher.js` | `src-restored/core/EventDispatcher.js` | `node test/compare-core-runtime.js` |
| `44018_GlobalEventProvider.js` | `src-restored/core/GlobalEventProvider.js` | `node test/compare-core-runtime.js` |
| `13011__mod.js` | `src-restored/core/EventDispatcher.js` + `src-restored/core/GlobalEventProvider.js` | `node test/compare-core-runtime.js` |
| `26729__mod.js` | `src-restored/core/EventEmitter.js` | `node test/compare-event-emitter.js`; `node test/compare-core-runtime.js` |
| `8734_Action.js` | `src-restored/core/Action.js` | `node test/compare-core-runtime.js` |
| `37360_LazyAction.js` | `src-restored/core/LazyAction.js` | `node test/compare-runtime-core.js` |
| `45105_ParallelAction.js` | `src-restored/core/ParallelAction.js` | `node test/compare-runtime-core.js` |
| `36889_SequenceAction.js` | `src-restored/core/SequenceAction.js` | `node test/compare-runtime-core.js` |
| `71794_WaitAction.js` | `src-restored/core/WaitAction.js` | `node test/compare-wait-action.js` |
| `29503__mod.js` | `src-restored/core/RuntimeActionExports.js` | `node test/compare-barrel-exports.js` |
| `44656__mod.js` | `src-restored/core/RuntimeCore.js` | `node test/compare-runtime-core.js` |
| `37542_ODR_BUILD_ORIGIN.js` | `src-restored/core/RuntimeCore.js` | `node test/compare-runtime-core.js` |
| `11370_CoreModule.js` | `src-restored/core/RuntimeCore.js` | `node test/compare-runtime-core.js` |
| `24473__mod.js` | `src-restored/core/RuntimeContainer.js` | `node test/compare-runtime-core.js` |
| `84879__mod.js` | `src-restored/core/InjectDecoratorsRuntime.js` | `node test/compare-runtime-container-bridges.js`; `node test/compare-runtime-core.js` |
| `47_TournamentPostScoreAction.js` | `src-restored/core/TournamentActions.js` | `node test/compare-tournament-actions.js`; `node test/compare-core-game-module.js` |
| `57503_TournamentCreateAction.js` | `src-restored/core/TournamentActions.js` | `node test/compare-tournament-actions.js`; `node test/compare-core-game-module.js` |
| `93599_TournamentShareAction.js` | `src-restored/core/TournamentActions.js` | `node test/compare-tournament-actions.js`; `node test/compare-core-game-module.js` |
| `68719__mod.js` | `src-restored/core/TournamentActions.js` | `node test/compare-tournament-actions.js`; restored tournament barrel surface |
| `25879_Random.js` | `src-restored/core/RuntimeUtils.js` | `node test/compare-runtime-utils.js` |
| `78526__mod.js` | `src-restored/core/RuntimeUtils.js` | `node test/compare-runtime-utils.js` |
| `90134_UrlParser.js` | `src-restored/core/RuntimeUtils.js` | `node test/compare-runtime-utils.js` |
| `67149_Cookie.js` | `src-restored/core/RuntimeUtils.js` | `node test/compare-runtime-utils.js` |
| `84194__mod.js` | `src-restored/core/RuntimeUtils.js` | `node test/compare-runtime-utils.js` |
| `88460_QueryableString.js` | `src-restored/core/QueryableString.js` | `node test/compare-queryable-string.js` |
| `68313__mod.js` | `src-restored/core/Logger.js` | `node test/compare-logger.js`; `node test/compare-runtime-utils.js` |
| `90505__mod.js` | `src-restored/core/SentryRuntime.js` | `node test/compare-sentry-runtime.js`; `node test/compare-setup-sentry-action.js` |
| `88183__mod.js` | `src-restored/core/SentryTracingRuntime.js` | `node test/compare-sentry-runtime.js`; `node test/compare-setup-sentry-action.js` |
| `41766_Howler.js` | `src-restored/core/AudioRuntime.js` | `node test/compare-audio-runtime.js`; `node test/compare-audio-settings-system.js` |
| `6400__mod.js` | `src-restored/ui/preactRuntime.js` | `node test/compare-preact-runtime.js` |
| `86700_MetadataReader.js` | `src-restored/core/diRuntime.js` | `node test/compare-di-runtime.js` |
| `6538_SIDES.js` | `src-restored/core/pixiRuntime.js` | `node test/compare-pixi-runtime.js` |
| `25317_SteppedEase.js` | `src-restored/core/animationRuntime.js` | `node test/compare-animation-runtime.js` |
| `10990__mod.js` | `src-restored/core/CssAnimationRuntime.js` | `node test/compare-css-animation-runtime.js`; `node test/compare-pixi-display-classes.js` |
| `79349__mod.js` | `src-restored/core/FPSMeterRuntime.js` | `node test/compare-fps-meter-runtime.js`; `node test/compare-fps-debug-module.js` |
| `83977__mod.js` | `src-restored/core/FirebaseAppRuntime.js` | `node test/compare-firebase-runtimes.js`; `node test/compare-app-backend-models.js` |
| `47135__mod.js` | `src-restored/core/FirebaseRemoteConfigRuntime.js` | `node test/compare-firebase-runtimes.js`; `node test/compare-app-backend-models.js` |
| `56467__mod.js` | `src-restored/core/FirebaseAuthRuntime.js` | `node test/compare-firebase-runtimes.js`; `node test/compare-auth-app-module.js` |
| `99261__mod.js` | `src-restored/core/FirebaseAnalyticsRuntime.js` | `node test/compare-firebase-runtimes.js`; `node test/compare-analytics-system.js` |
| `68532__mod.js` | `src-restored/core/MathUtils.js` | `node test/compare-math-utils.js` |
| `98707__mod.js` | `src-restored/core/MathUtils.js` | `node test/compare-math-utils.js` |
| `77577__mod.js` | `src-restored/core/MathUtils.js` | `node test/compare-math-utils.js` |
| `74083_UIConstants.js` | `src-restored/core/UIConstants.js` | `node test/compare-ui-constants.js` |
| `30107_PopupType.js` | `src-restored/core/PopupType.js` | `node test/compare-popup-type.js` |
| `37725__mod.js` | `src-restored/core/UIHelpers.js` | `node test/compare-ui-helpers.js` |
| `70796_Localize.js` | `src-restored/core/Localize.js` | `node test/compare-localize-svg-assets.js` |
| `86125__mod.js` | `src-restored/core/Localize.js` | `node test/compare-localize-svg-assets.js` |
| `36622_SVG.js` | `src-restored/ui/SVGAssets.js` | `node test/compare-localize-svg-assets.js` |
| `95348__mod.js` | `src-restored/ui/svgSpriteRuntime.js` | `node test/compare-svg-sprite-runtime.js` |
| `24368__mod.js` | `src-restored/ui/SettingsSVGSymbols.js` | `node test/compare-localize-svg-assets.js` |
| `39066__mod.js` | `src-restored/ui/SettingsSVGSymbols.js` | `node test/compare-localize-svg-assets.js` |
| `8928__mod.js` | `src-restored/ui/SettingsSVGSymbols.js` | `node test/compare-localize-svg-assets.js` |
| `83354__mod.js` | `src-restored/ui/SettingsSVGSymbols.js` | `node test/compare-localize-svg-assets.js` |
| `38319__mod.js` | `src-restored/core/NumberFormat.js` | `node test/compare-number-format.js` |
| `31267_AudioModel.js` | `src-restored/core/AudioModel.js` | `node test/compare-audio-settings-system.js` |
| `23416_InitAudioAction.js` | `src-restored/core/InitAudioAction.js` | `node test/compare-audio-settings-system.js` |
| `70919_PlaySoundAction.js` | `src-restored/core/PlaySoundAction.js` | `node test/compare-audio-settings-system.js` |
| `74886_PlayMusicAction.js` | `src-restored/core/PlayMusicAction.js` | `node test/compare-audio-settings-system.js` |
| `75564_AudioModule.js` | `src-restored/core/AudioModule.js` | `node test/compare-audio-settings-system.js` |
| `87195__mod.js` | `src-restored/core/AudioExports.js` | `node test/compare-audio-settings-system.js` |
| `84725_Settings.js` | `src-restored/core/Settings.js` | `node test/compare-audio-settings-system.js` |
| `53373_AnalyticsTracker.js` | `src-restored/core/AnalyticsTracker.js` | `node test/compare-analytics-system.js` |
| `97907_GTAGAnalyticsProvider.js` | `src-restored/core/GTAGAnalyticsProvider.js` | `node test/compare-analytics-system.js` |
| `23004_FirebaseAnalyticsProvider.js` | `src-restored/core/FirebaseAnalyticsProvider.js` | `node test/compare-analytics-system.js` |
| `74981_AnalyticsModule.js` | `src-restored/core/AnalyticsModule.js` | `node test/compare-analytics-system.js` |
| `32455__mod.js` | `src-restored/core/AnalyticsProvidersExports.js` | `node test/compare-analytics-system.js` |
| `73802__mod.js` | `src-restored/core/AnalyticsExports.js` | `node test/compare-analytics-system.js` |
| `19305_BootAction.js` | `src-restored/core/BootAction.js` + `src-restored/core/BootConfig.js` | `node test/compare-boot-action.js` |
| `54261_SetupSentryAction.js` | `src-restored/core/SetupSentryAction.js` | `node test/compare-setup-sentry-action.js` |
| `66920_CreateFPSMeterAction.js` | `src-restored/core/CreateFPSMeterAction.js` | `node test/compare-fps-debug-module.js` |
| `14107_DebugModule.js` | `src-restored/core/DebugModule.js` | `node test/compare-fps-debug-module.js` |
| `85162_CheatsAction.js` | `src-restored/core/CheatsAction.js` | `node test/compare-cheats-action.js`; `node test/compare-game-module-base-exports.js` |
| `57165_MainAction.js` | `src-restored/core/MainAction.js` | `node test/compare-main-action.js` |
| `55937_GameModule.js` | `src-restored/core/GameModule.js` | `node test/compare-game-module.js` |
| `44367_GameFlowModule.js` | `src-restored/core/GameFlowModule.js` | `node test/compare-game-module-base-exports.js` |
| `98931__mod.js` | `src-restored/core/GameFlowExports.js` | `node test/compare-game-module-base-exports.js` |
| `25871_GameModuleBase.js` | `src-restored/core/GameModuleBase.js` | `node test/compare-game-module-base-exports.js` |
| `89282__mod.js` | `src-restored/core/GameExports.js` | `node test/compare-game-module-base-exports.js` |
| `48616__mod.js` / `17043_ScoreEvent.js` / `10357_SocialEvents.js` | `src-restored/core/SocialAppExports.js` | `node test/compare-social-app-exports.js` |
| `97158_NotificationAction.js` | `src-restored/core/NotificationActions.js` | `node test/compare-notification-actions.js` |
| `92406_NAStart.js` | `src-restored/core/NotificationActions.js` | `node test/compare-notification-actions.js` |
| `33154_NAFinish.js` | `src-restored/core/NotificationActions.js` | `node test/compare-notification-actions.js` |
| `54799_NALeave.js` | `src-restored/core/NotificationActions.js` | `node test/compare-notification-actions.js` |
| `78346__mod.js` | `src-restored/core/NotificationActions.js` + `src-restored/core/NotificationsModule.js` | `node test/compare-notification-actions.js` |
| `70669_NotificationsModule.js` | `src-restored/core/NotificationsModule.js` | `node test/compare-notification-actions.js` |
| `44025_NAStartSIO.js` | `src-restored/core/NAStartSIO.js` | `node test/compare-na-start-sio.js`; `node test/compare-game-module.js` |
| `53351_CapitalView.js` | `src-restored/core/CapitalView.js` | `node test/compare-capital-state-shape-views.js` |
| `91585_StateShapeView.js` | `src-restored/core/StateShapeView.js` | `node test/compare-capital-state-shape-views.js` |
| `59310_FieldView.js` | `src-restored/core/FieldView.js` | `node test/compare-field-view-mediator.js` |
| `40470_FieldMediator.js` | `src-restored/core/FieldMediator.js` | `node test/compare-field-view-mediator.js` |
| `51006_TutorialFingerView.js` | `src-restored/core/TutorialFingerView.js` | `node test/compare-finger-views.js` |
| `42854_FingerView.js` | `src-restored/core/FingerView.js` | `node test/compare-finger-views.js` |
| `26463_FighterView.js` | `src-restored/core/FighterView.js` | `node test/compare-fighter-view-death-effect.js` |
| `71981_FighterDeathEffectAction.js` | `src-restored/core/FighterDeathEffectAction.js` | `node test/compare-fighter-view-death-effect.js` |
| `10910_ArrowView.js` | `src-restored/core/ArrowView.js` | `node test/compare-arrows-view-mediator.js` |
| `80219_ArrowsView.js` | `src-restored/core/ArrowsView.js` | `node test/compare-arrows-view-mediator.js` |
| `15006_ArrowsMediator.js` | `src-restored/core/ArrowsMediator.js` | `node test/compare-arrows-view-mediator.js` |
| `11470_GenerateMapSpriteAction.js` | `src-restored/core/GenerateMapSpriteAction.js` | `node test/compare-generate-map-sprite-action.js` |
| `48115_GenerateMapShapeAction.js` | `src-restored/core/GenerateMapShapeAction.js` | `node test/compare-generate-map-shape-action.js` |
| `26903_Field.js` | `src-restored/core/Field.js` | `node test/compare-field-lifecycle.js` |
| `196_DestroyFieldAction.js` | `src-restored/core/DestroyFieldAction.js` | `node test/compare-field-lifecycle.js` |
| `3057_SocialFlowAction.js` | `src-restored/core/SocialFlowAction.js` | `node test/compare-social-flow-actions.js` |
| `19474_LevelStartAction.js` | `src-restored/core/LevelStartAction.js` | `node test/compare-social-flow-actions.js` |
| `99629_LevelStartActionSIO.js` | `src-restored/core/LevelStartActionSIO.js` | `node test/compare-level-start-action-sio.js` |
| `70055_LevelRestartAfterYandexLoginAction.js` | `src-restored/core/LevelRestartAfterYandexLoginAction.js` | `node test/compare-level-restart-after-yandex-login-action.js` |
| `49295_PlayWithOpponentAction.js` | `src-restored/core/PlayWithOpponentAction.js` | `node test/compare-play-with-opponent-actions.js` |
| `65897_PlayWithOpponentActionSIO.js` | `src-restored/core/PlayWithOpponentActionSIO.js` | `node test/compare-play-with-opponent-actions.js` |
| `92287_PauseAction.js` | `src-restored/core/PauseAction.js` | `node test/compare-pause-stage-end-actions.js` |
| `12079_StageEndAction.js` | `src-restored/core/StageEndAction.js` | `node test/compare-pause-stage-end-actions.js` |
| `56403_LevelRestartAction.js` | `src-restored/core/LevelRestartAction.js` | `node test/compare-level-restart-next-actions.js` |
| `83042_LevelRestartActionSIO.js` | `src-restored/core/LevelRestartActionSIO.js` | `node test/compare-level-restart-next-actions.js` |
| `10274_LevelNextAction.js` | `src-restored/core/LevelNextAction.js` | `node test/compare-level-restart-next-actions.js` |
| `15872_LevelNextActionSIO.js` | `src-restored/core/LevelNextActionSIO.js` | `node test/compare-level-restart-next-actions.js` |
| `61201_LevelEndAction.js` | `src-restored/core/LevelEndAction.js` | `node test/compare-level-end-actions.js` |
| `24294_LevelEndActionSIO.js` | `src-restored/core/LevelEndActionSIO.js` | `node test/compare-level-end-actions.js` |
| `77754_ScreenshotAction.js` | `src-restored/core/ScreenshotAction.js` | `node test/compare-screenshot-actions.js` |
| `16465_ScreenShotActionSIO.js` | `src-restored/core/ScreenShotActionSIO.js` | `node test/compare-screenshot-actions.js` |
| `44046_StartScreenAction.js` | `src-restored/core/StartScreenAction.js` | `node test/compare-start-actions.js` |
| `94732_SetupUIAction.js` | `src-restored/core/SetupUIAction.js` | `node test/compare-setup-ui-action.js` |
| `20167__mod.js` | `src-restored/core/UIFlowActionExports.js` | `node test/compare-barrel-exports.js` |
| `51779_StartGameAction.js` | `src-restored/core/StartGameAction.js` | `node test/compare-start-actions.js` |
| `47665_ShowWinPopupAction.js` | `src-restored/core/ShowWinPopupAction.js` | `node test/compare-popup-actions.js` |
| `97586_ShowGiftPopupAction.js` | `src-restored/core/ShowGiftPopupAction.js` | `node test/compare-popup-actions.js` |
| `10379_BattleResultsPopupAction.js` | `src-restored/core/BattleResultsPopupAction.js` | `node test/compare-popup-actions.js` |
| `87460_LevelCompletedPopupAction.js` | `src-restored/core/LevelCompletedPopupAction.js` | `node test/compare-level-completed-popup-action.js` |
| `35567_EndScreenAction.js` | `src-restored/core/EndScreenAction.js` | `node test/compare-end-screen-action-html-ui.js` |
| `13137__mod.js` | `src-restored/core/LevelParser.js` | `node test/compare-level-parser.js`; `node test/compare-load-level-action.js` |
| `27588_LoadLevelAction.js` | `src-restored/core/LoadLevelAction.js` | `node test/compare-load-level-action.js` |
| `6248_SubmitContextScoreAction.js` | `src-restored/core/SubmitContextScoreAction.js` | `node test/compare-submit-context-score-action.js`; `node test/compare-core-game-module.js` |
| `45724_GenerateShareImageAction.js` | `src-restored/core/GenerateShareImageAction.js` | `node test/compare-generate-share-image-action.js` |
| `59201_CoreGameModule.js` | `src-restored/core/CoreGameModule.js` | `node test/compare-core-game-module.js` |
| `62482_BattleResults.js` | `src-restored/ui/BattleResults.js` | `node test/compare-battle-results.js`; `node test/compare-battle-results-popup.js` |
| `78199_BattleResultsPopup.js` | `src-restored/ui/BattleResultsPopup.js` | `node test/compare-battle-results-popup.js` |
| `8189_ShareLevelResultPopup.js` | `src-restored/ui/ShareLevelResultPopup.js` | `node test/compare-share-level-result-popup.js` |
| `46696_WinStagePopup.js` | `src-restored/ui/WinStagePopup.js` | `node test/compare-win-lose-popups.js` |
| `53841_LosePopup.js` | `src-restored/ui/LosePopup.js` | `node test/compare-win-lose-popups.js` |
| `56532_ConfirmPopup.js` | `src-restored/ui/ConfirmPopup.js` | `node test/compare-confirm-gift-offline-popups.js` |
| `45878_CancelButton.js` | `src-restored/ui/CancelButton.js` | `node test/compare-confirm-cancel-buttons.js`; `node test/compare-confirm-gift-offline-popups.js` |
| `62671_ConfirmButton.js` | `src-restored/ui/ConfirmButton.js` | `node test/compare-confirm-cancel-buttons.js`; `node test/compare-confirm-gift-offline-popups.js` |
| `56184_GiftPopup.js` | `src-restored/ui/GiftPopup.js` | `node test/compare-confirm-gift-offline-popups.js` |
| `73097_CapturingAnimated.js` | `src-restored/ui/CapturingAnimated.js` | `node test/compare-gift-leaves.js`; `node test/compare-confirm-gift-offline-popups.js` |
| `79147_GiftItem.js` | `src-restored/ui/GiftItem.js` | `node test/compare-gift-leaves.js`; `node test/compare-confirm-gift-offline-popups.js` |
| `96126_OfflineEarningsPopup.js` | `src-restored/ui/OfflineEarningsPopup.js` | `node test/compare-confirm-gift-offline-popups.js` |
| `11812_FileDropArea.js` | `src-restored/ui/FileDropArea.js` | `node test/compare-file-drop-area.js` |
| `7161_BackButton.js` | `src-restored/ui/BackButton.js` | `node test/compare-shared-ui-controls.js` |
| `32715_CoinsIndicator.js` | `src-restored/ui/CoinsIndicator.js` | `node test/compare-shared-ui-controls.js` |
| `46766_CoinsField.js` | `src-restored/ui/CoinsField.js` | `node test/compare-popup-buttons-coins-field.js`; `node test/compare-shared-ui-controls.js` |
| `3207__mod.js` | `src-restored/ui/Tickup.js` | `node test/compare-popup-buttons-coins-field.js` |
| `75663_ClaimButton.js` | `src-restored/ui/ClaimButton.js` | `node test/compare-popup-buttons-coins-field.js`; popup compare tests |
| `53527_ContinueButton.js` | `src-restored/ui/ContinueButton.js` | `node test/compare-popup-buttons-coins-field.js`; popup compare tests |
| `86602_NoThanksButton.js` | `src-restored/ui/NoThanksButton.js` | `node test/compare-popup-buttons-coins-field.js`; popup compare tests |
| `49071_PopupWinIndicator.js` | `src-restored/ui/PopupWinIndicator.js` | `node test/compare-popup-win-visuals.js`; popup compare tests |
| `94571_WinRays.js` | `src-restored/ui/WinRays.js` | `node test/compare-popup-win-visuals.js`; popup compare tests |
| `57103_WinStars.js` | `src-restored/ui/WinStars.js` | `node test/compare-popup-win-visuals.js`; popup compare tests |
| `39811_MultiplyArrow.js` | `src-restored/ui/MultiplyArrow.js` | `node test/compare-multiply-arrow.js` |
| `36710_MultiplyBonus.js` | `src-restored/ui/MultiplyBonus.js` | `node test/compare-multiply-bonus.js`; `node test/compare-confirm-gift-offline-popups.js` |
| `12832_SettingsButton.js` | `src-restored/ui/SettingsButton.js` | `node test/compare-shared-ui-controls.js` |
| `29343_UserIdLabel.js` | `src-restored/ui/UserIdLabel.js` | `node test/compare-shared-ui-controls.js` |
| `55960_Score.js` | `src-restored/ui/Score.js` | `node test/compare-score-components.js` |
| `17828_ScoreGroup.js` | `src-restored/ui/ScoreGroup.js` | `node test/compare-score-components.js` |
| `41595_Avatar.js` | `src-restored/ui/Avatar.js` | `node test/compare-avatar-components.js` |
| `71290_AvatarPlayInGroup.js` | `src-restored/ui/AvatarPlayInGroup.js` | `node test/compare-avatar-components.js` |
| `47702_AvatarGroup.js` | `src-restored/ui/AvatarGroup.js` | `node test/compare-avatar-group-winner.js` |
| `56612_Winner.js` | `src-restored/ui/Winner.js` | `node test/compare-avatar-group-winner.js` |
| `78001_UserPic.js` | `src-restored/core/UserPic.js` | `node test/compare-userpic-circle-avatar.js` |
| `42970_CircleAvatar.js` | `src-restored/core/CircleAvatar.js` | `node test/compare-userpic-circle-avatar.js` |
| `49083_BaseScreen.js` | `src-restored/core/BaseScreen.js` | `node test/compare-pixi-display-classes.js` |
| `41099_Overlay.js` | `src-restored/core/Overlay.js` | `node test/compare-pixi-display-classes.js` |
| `6846_ScreenContainer.js` | `src-restored/core/ScreenContainer.js` | `node test/compare-pixi-display-classes.js` |
| `56212_ProgressBar.js` | `src-restored/core/ProgressBar.js` | `node test/compare-pixi-display-classes.js` |
| `68878_Spinner.js` | `src-restored/core/Spinner.js` | `node test/compare-pixi-display-classes.js` |
| `93710_RootView.js` | `src-restored/core/RootView.js` | `node test/compare-pixi-root-preload.js` |
| `65743_RootMediator.js` | `src-restored/core/RootMediator.js` | `node test/compare-pixi-root-preload.js` |
| `952_PreloadAssetsAction.js` | `src-restored/core/PreloadAssetsAction.js` | `node test/compare-pixi-root-preload.js` |
| `89559__mod.js` | `src-restored/core/PreloadAssetsExports.js` | `node test/compare-pixi-root-preload.js` |
| `80672__mod.js` | `src-restored/core/PixiUIExports.js` | `node test/compare-pixi-ui-exports.js` |
| `90399_PIXIUIModule.js` | `src-restored/core/PIXIUIModule.js` | `node test/compare-pixi-ui-module.js` |
| `73018_AdManagerBase.js` | `src-restored/core/AdManagerBase.js` | `node test/compare-ad-system.js` |
| `45301_AdAction.js` | `src-restored/core/AdAction.js` | `node test/compare-ad-system.js` |
| `10556_AdsModule.js` | `src-restored/core/AdsModule.js` | `node test/compare-ad-system.js` |
| `68252__mod.js` | `src-restored/core/AdHelpers.js` | `node test/compare-ad-system.js` |
| `93668_HTTPRequest.js` | `src-restored/core/HTTPRequest.js` | `node test/compare-app-backend-models.js` |
| `63333_BackendModel.js` | `src-restored/core/BackendModel.js` | `node test/compare-app-backend-models.js` |
| `20383_AppModel.js` | `src-restored/core/AppModel.js` | `node test/compare-app-backend-models.js`; `node test/compare-login-action.js`; `node test/compare-social-app-exports.js` |
| `65248_AuthActionBase.js` | `src-restored/core/AuthActionBase.js` | `node test/compare-auth-app-module.js`; `node test/compare-social-app-exports.js` |
| `60320_AppModule.js` | `src-restored/core/AppModule.js` | `node test/compare-auth-app-module.js`; `node test/compare-social-app-exports.js` |
| `99794_PageModel.js` | `src-restored/core/PageModel.js` | `node test/compare-page-model.js` |
| `98109__mod.js` | `src-restored/core/AppExports.js` | `node test/compare-barrel-exports.js` |
| `4421__mod.js` | `src-restored/core/AppExports.js` | `node test/compare-barrel-exports.js` |
| `25487_View.js` | `src-restored/core/View.js` | `node test/compare-display-framework.js` |
| `42182_Mediator.js` | `src-restored/core/Mediator.js` | `node test/compare-display-framework.js` |
| `38224__mod.js` | `src-restored/core/BindMediator.js` | `node test/compare-display-framework.js` |
| `59795__mod.js` | `src-restored/core/DisplayFramework.js` | `node test/compare-display-framework.js` |
| `4199__mod.js` | `src-restored/core/TextureLoader.js` | `node test/compare-sio-pixi-root.js` |
| `99856__mod.js` | `src-restored/core/LayoutUtils.js` | `node test/compare-sio-pixi-root.js` |
| `47932__mod.js` | `src-restored/core/LayoutUtils.js` | `node test/compare-sio-pixi-root.js` |
| `32956__mod.js` | `src-restored/core/PixiCoreExports.js` | `node test/compare-sio-pixi-root.js` |
| `55132__mod.js` | `src-restored/core/SIOPixiExports.js` | `node test/compare-sio-pixi-root.js` |
| `69185__mod.js` | `src-restored/core/SIORootView.js` | `node test/compare-sio-pixi-root.js` |
| `20119_RootMediator.js` | `src-restored/core/SIORootMediator.js` | `node test/compare-sio-pixi-root.js` |
| `94766_SIOPreloadAssetsAction.js` | `src-restored/core/SIOPreloadAssetsAction.js` | `node test/compare-sio-pixi-root.js` |
| `95622_GamePlayScreen.js` | `src-restored/ui/GamePlayScreen.js` | `node test/compare-start-gameplay-screens.js` |
| `11748_DebugPanelGamePlay.js` | `src-restored/ui/DebugPanelGamePlay.js` | `node test/compare-debug-panel-gameplay.js`; `node test/compare-start-gameplay-screens.js` |
| `11617_DebugLevelPicker.js` | `src-restored/ui/DebugLevelPicker.js` | `node test/compare-debug-panel.js` |
| `39068_DebugPanelNotifications.js` | `src-restored/ui/DebugPanelNotifications.js` | `node test/compare-debug-panel.js` |
| `64920_DebugPanel.js` | `src-restored/ui/DebugPanel.js` | `node test/compare-debug-panel.js` |
| `5777_ExclamationMarkNotificator.js` | `src-restored/ui/ExclamationMarkNotificator.js` | `node test/compare-exclamation-mark-notificator.js`; `node test/compare-startscreen-buttons.js`; `node test/compare-shop-components.js` |
| `96648_StartScreen.js` | `src-restored/ui/StartScreen.js` | `node test/compare-start-gameplay-screens.js` |
| `55378_InviteButton.js` | `src-restored/ui/InviteButton.js` | `node test/compare-startscreen-buttons.js` |
| `82978_ShopButton.js` | `src-restored/ui/ShopButton.js` | `node test/compare-startscreen-buttons.js` |
| `53309_TapToPlayButton.js` | `src-restored/ui/TapToPlayButton.js` | `node test/compare-startscreen-buttons.js` |
| `14954_NoAdsButton.js` | `src-restored/ui/NoAdsButton.js` | `node test/compare-startscreen-buttons.js` |
| `20911_LevelTitle.js` | `src-restored/ui/LevelTitle.js` | `node test/compare-home-display-components.js` |
| `10065_Capturing.js` | `src-restored/ui/Capturing.js` | `node test/compare-home-display-components.js` |
| `52472_SvgCapturingProgress.js` | `src-restored/ui/SvgCapturingProgress.js` | `node test/compare-svg-capturing-progress.js`; `node test/compare-home-display-components.js` |
| `84965_FilledRects.js` | `src-restored/ui/FilledRects.js` | `node test/compare-svg-capturing-progress.js` |
| `69080_UserStatusInfo.js` | `src-restored/ui/UserStatusInfo.js` | `node test/compare-home-display-components.js` |
| `9931_Participants.js` | `src-restored/ui/Participants.js` | `node test/compare-participants.js`; `node test/compare-home-display-components.js` |
| `79631_ProgressSection.js` | `src-restored/ui/ProgressSection.js` | `node test/compare-home-display-components.js` |
| `44966_ProgressIndicator.js` | `src-restored/ui/ProgressIndicator.js` | `node test/compare-home-display-components.js` |
| `52951_ProgressBar.js` | `src-restored/ui/ProgressBar.js` | `node test/compare-home-display-components.js` |
| `56721_Booster.js` | `src-restored/ui/Booster.js` | `node test/compare-home-display-components.js` |
| `67884_Boosters.js` | `src-restored/ui/Boosters.js` | `node test/compare-home-display-components.js` |
| `15850_LoginAction.js` | `src-restored/core/LoginAction.js` | `node test/compare-login-action.js` |
| `96087_LeaderboardButton.js` | `src-restored/ui/LeaderboardButton.js` | `node test/compare-leaderboard-platform.js` |
| `2906_LeaderboardScreen.js` | `src-restored/ui/LeaderboardScreen.js` | `node test/compare-leaderboard-shop-settings-ui.js` |
| `30326_LeaderBoardTabs.js` | `src-restored/ui/LeaderBoardTabs.js` | `node test/compare-leaderboard-components.js` |
| `14633_LeaderBoard.js` | `src-restored/ui/LeaderBoard.js` | `node test/compare-leaderboard-components.js` |
| `90211_LeaderBoardItem.js` | `src-restored/ui/LeaderBoardItem.js` | `node test/compare-leaderboard-components.js` |
| `23862_LeaderBoardInviteItem.js` | `src-restored/ui/LeaderBoardInviteItem.js` | `node test/compare-leaderboard-components.js` |
| `41976_LeaderboardGlobalExternal.js` | `src-restored/core/LeaderboardGlobalExternal.js` | `node test/compare-leaderboard-platform.js` |
| `97954_LeaderboardGlobalYandex.js` | `src-restored/core/LeaderboardGlobalYandex.js` | `node test/compare-leaderboard-platform.js` |
| `43603_LeaderboardContextExternal.js` | `src-restored/core/LeaderboardContextExternal.js` | `node test/compare-leaderboard-platform.js` |
| `92819_UserDataBase.js` | `src-restored/core/UserDataBase.js` | `node test/compare-yandex-platform-adapters.js` |
| `90050_UserDataYandex.js` | `src-restored/core/UserDataYandex.js` | `node test/compare-yandex-platform-adapters.js` |
| `30945_UserDataWeb.js` | `src-restored/core/UserDataWeb.js` | `node test/compare-yandex-platform-adapters.js` |
| `77499_UserDataLocalStorage.js` | `src-restored/core/UserDataLocalStorage.js` | `node test/compare-yandex-platform-adapters.js` |
| `57655_SessionData.js` | `src-restored/core/SessionData.js` | `node test/compare-yandex-platform-adapters.js` |
| `58670_CookieDataLocalStorage.js` | `src-restored/core/CookieDataLocalStorage.js` | `node test/compare-yandex-platform-adapters.js` |
| `38889_SocialModelBase.js` | `src-restored/core/SocialModelBase.js` | `node test/compare-yandex-platform-adapters.js` |
| `66423_UserScore.js` | `src-restored/core/UserScore.js` | `node test/compare-yandex-platform-adapters.js` |
| `59503_UserYandex.js` | `src-restored/core/UserYandex.js` | `node test/compare-yandex-platform-adapters.js` |
| `42560_PaymentsModelBase.js` | `src-restored/core/PaymentsModelBase.js` | `node test/compare-yandex-platform-adapters.js` |
| `61767_PaymentsModelYandex.js` | `src-restored/core/PaymentsModelYandex.js` | `node test/compare-yandex-platform-adapters.js` |
| `63895_SocialModelYandex.js` | `src-restored/core/SocialModelYandex.js` | `node test/compare-social-model-yandex.js` |
| `14562_SocialModuleYandex.js` | `src-restored/core/SocialModuleYandex.js` | `node test/compare-social-yandex-modules.js` |
| `25556_SyncYandexLeaderboardsAction.js` | `src-restored/core/SyncYandexLeaderboardsAction.js` | `node test/compare-sync-yandex-leaderboards-action.js` |
| `89286_GameModuleYandex.js` | `src-restored/core/GameModuleYandex.js` | `node test/compare-social-yandex-modules.js` |
| `76742_ShopScreen.js` | `src-restored/ui/ShopScreen.js` | `node test/compare-leaderboard-shop-settings-ui.js` |
| `44698_ShopPreview.js` | `src-restored/ui/ShopPreview.js` | `node test/compare-shop-components.js` |
| `83643_ShopMenu.js` | `src-restored/ui/ShopMenu.js` | `node test/compare-shop-components.js` |
| `76282_ShopItem.js` | `src-restored/ui/ShopItem.js` | `node test/compare-shop-components.js` |
| `83719_BuildingItem.js` | `src-restored/ui/BuildingItem.js` | `node test/compare-shop-components.js` |
| `30851_FighterItem.js` | `src-restored/ui/FighterItem.js` | `node test/compare-shop-components.js` |
| `92068_ColorItem.js` | `src-restored/ui/ColorItem.js` | `node test/compare-shop-components.js` |
| `62415_TexturedShopItem.js` | `src-restored/ui/TexturedShopItem.js` | `node test/compare-shop-components.js` |
| `37079_ShopTabHeader.js` | `src-restored/ui/ShopTabHeader.js` | `node test/compare-shop-components.js` |
| `47277_SettingsPopup.js` | `src-restored/ui/SettingsPopup.js` | `node test/compare-leaderboard-shop-settings-ui.js` |
| `56959__mod.js` | `src-restored/ui/UIControls.js` | `node test/compare-ui-controls.js` |
| `37909_Icon.js` | `src-restored/ui/UIControls.js` | `node test/compare-ui-controls.js` |
| `8407_Button.js` | `src-restored/ui/UIControls.js` | `node test/compare-ui-controls.js` |
| `75953_ToggleControl.js` | `src-restored/ui/ToggleControl.js` | `node test/compare-ui-controls.js` |
| `73134_Graphics.js` | `src-restored/ui/Graphics.js` | `node test/compare-ui-controls.js` |
| `73793_VersionLabel.js` | `src-restored/ui/VersionLabel.js` | `node test/compare-ui-controls.js` |
| `97949_GlobalEventProviderComponent.js` | `src-restored/ui/GlobalEventProviderComponent.js` | `node test/compare-ui-context.js` |
| `49934_CrossPromoComponent.js` | `src-restored/ui/CrossPromoComponent.js` | `node test/compare-cross-promo-component.js`; `node test/compare-ui-context.js`; `node test/compare-leaderboard-shop-settings-ui.js` |
| `76702__mod.js` | `src-restored/ui/UIHooks.js` + `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `50961__mod.js` | `src-restored/ui/UIHooks.js` + `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `55854__mod.js` | `src-restored/ui/UIHooks.js` + `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `19562__mod.js` | `src-restored/ui/UIHooks.js` + `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `23649_UIEvents.js` | `src-restored/ui/UIEvents.js` + `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `22674_Claim.js` / `94872_Count.js` | `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `83430_InversifyContext.js` | `src-restored/ui/InversifyContext.js` + `src-restored/ui/UIContext.js` | `node test/compare-ui-context.js` |
| `30396__mod.js` | `src-restored/ui/preactHooks.js` | `node test/compare-preact-hooks.js`; `node test/compare-ui-context.js` |
| `37532_GameUIModule.js` | `src-restored/ui/GameUIModule.js` | `node test/compare-game-ui-module.js` |
| `70051_HTMLUIModule.js` | `src-restored/ui/HTMLUIModule.js` | `node test/compare-end-screen-action-html-ui.js` |
| `72688_SocialBanners.js` | `src-restored/ui/SocialBanners.js` | `node test/compare-social-banners.js`; `node test/compare-ui-root.js` |
| `76883_UIRoot.js` | `src-restored/ui/UIRoot.js` | `node test/compare-ui-root.js` |
| `41510_AlertsOverlay.js` | `src-restored/ui/AlertsOverlay.js` | `node test/compare-overlays.js` |
| `29518_StoreActionTypes.js` | `src-restored/ui/StatusAlertStore.js` | `node test/compare-status-alerts.js` |
| `54768__mod.js` | `src-restored/ui/StatusAlertHelpers.js` | `node test/compare-status-alerts.js` |
| `63386_StatusAlertService.js` | `src-restored/ui/StatusAlertExports.js` | `node test/compare-status-alerts.js`; `node test/compare-overlays.js` |
| `82288_StatusAlertView.js` | `src-restored/ui/StatusAlertView.js` | `node test/compare-status-alerts.js` |
| `84077_StatusAlertContainer.js` | `src-restored/ui/StatusAlertContainer.js` | `node test/compare-status-alerts.js` |
| `95252_StatusAlertItem.js` | `src-restored/ui/StatusAlertItem.js` | `node test/compare-status-alerts.js` |
| `99061_StatusAlertService.js` | `src-restored/ui/StatusAlertService.js` | `node test/compare-status-alerts.js` |
| `31651_SocialOverlay.js` | `src-restored/ui/SocialOverlay.js` | `node test/compare-overlays.js` |
| `7514_PauseOverlay.js` | `src-restored/ui/PauseOverlay.js` | `node test/compare-overlays.js` |
| `94776_Popups.js` | `src-restored/ui/Popups.js` | `node test/compare-popup-screen-containers.js` |
| `99836_Screens.js` | `src-restored/ui/Screens.js` | `node test/compare-popup-screen-containers.js` |

## Core Restoration Notes

- `Population`
  - Restored the TypeScript class shape from `__extends` output.
  - Preserved `View` inheritance and injectable behavior through restored `DecoratorHelpers.markInjectable`.
  - Replaced tslib spread/read helper output with direct spread syntax.
  - Locked behavior for display state, population labels, cap/rate settings, allocation/removal, block timestamps, and timed growth.
- `Building`
  - Restored owner transitions, active/inactive tags, component wiring, selection display, occupation resolution, start population, snapshots, and send commands.
  - Preserved original global `isNaN` semantics in `toggleActive`.
  - DI property tokens and injectable marking now go through restored `DecoratorHelpers.injectToken` / `markInjectable` without adding design metadata.
  - Locked behavior against the original module across constructor, init, inactive toggle, start owner, occupation, and snapshot scenarios.
  - Uses restored `Spawner`, `PathHolder`, `BotLogic`, `Fighter`, `CapitalView`, and `StateShapeView` component keys with lazy `BotLogic` lookup to avoid circular restored imports.
- `InputSystem`
  - Restored source selection, target hover, drag updates, multi-select add/remove timing, send-on-release, aim events, and vibration feedback.
  - Locked behavior against the original module across start, drag, release, cancel, drag-away, and multi-select scenarios.
  - Uses restored `ActiveBuildingsQuery` so pointer selection follows the restored `Spawner` component key.
- `InputManagerBase` / `InputManager`
  - Restored canvas pointer listener lifecycle, dynamic drag listener attach/remove, pointer-out cleanup, and stop/reset behavior.
  - Preserved the original `pointerup` fallthrough semantics where release calls `onDrag()`, `onEnd()`, then cleanup plus `onCancel()`.
  - `InputManager` now forwards gestures to the restored `InputSystem` class and remains bound through `TypesGame.inputManager` in `CoreGameModule`.
  - `InputManager` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__decorate` / `__metadata` helper output.
  - `ArrowsView`, `LevelStartActionSIO`, and `LevelRestartActionSIO` now use restored `InputManager` metadata.
- `BotCalculationLogic`
  - Restored the async decision calculation flow, battle-state scoring, command execution, group movement, tower/group intersection damage, burst spawning, capture resolution, population growth, and consumed last-command behavior.
  - DI property token and injectable marking now go through restored `DecoratorHelpers.injectToken` / `markInjectable` without adding design metadata.
  - Locked pure simulation behavior against the original module across scoring, spawn updates, group bursts, reinforcement, capture, move/wait execution, target reached checks, command consumption, and full `calculate()` command selection.
  - Preserved the original `calculateCommandScore()` trace loop behavior: `traceState()` is called for its shallow-object side effects, while the returned BState/timestamp is intentionally discarded.
  - Uses restored `DecisionType`, `BState`, `GroupModel`, `CommandsGenerator`, `BotUtility`, `Spawner`, `PathHolder`, and `FighterGroupsSystem` keys for active-group filtering, command enumeration, simulated move paths, battle-state snapshots, and geometry collision checks.
  - Preserves `CommandsGenerator` quirks, including per-target generator exhaustion and the defence branch's fixed max-size index groups.
- `RuntimeUtils`
  - Restored the shared `84194__mod` utility barrel plus its leaves: scoped logger export, `Random`, `UrlParser`, and `Cookie`.
  - Locked random helper edge cases, UUID generation, query parsing, cookie get/set/clear output, and export surface against the original modules.
  - Core restored modules now use this utility instead of `84194__mod` for bot timing, preset selection, skin selection, visual jitter, UUID defaults, death-effect tinting, state-machine logging, social/gameplay flow logging, boot/preload/FPS logging, tutorial/continent warnings, texture-load warnings, map-preview logging, popup continuation logging, login warnings, and user-data storage tracing.
  - Remaining restored `84194__mod` imports are intentionally left in platform-facing branches for now: ads, leaderboard, social-platform adapters, and payments.
- `Core runtime base`
  - Restored `TypesCore`, `EventDispatcher`, `GlobalEventProvider`, the base async `Action`, `LazyAction`, `ParallelAction`, `SequenceAction`, and the `RuntimeCore` barrel for module `44656`.
  - `Action` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - `GlobalEventProvider` dispatcher injection now goes through restored `DecoratorHelpers.injectProperty` plus `defineDecoratedProperty` to preserve original prototype shape.
  - Locked event dispatcher exports, listener bookkeeping, duplicate/missing listener warnings, dispatch context, one-shot listeners, action success/failure/termination behavior, and prototype surfaces against the original modules.
  - Restored the `24473` runtime container helper as `RuntimeContainer`, including a fresh `Container`, `lazyInject`, `lazyGet`, and `lazyRun`.
  - Centralized the lazy-inject decorator helper behind `src-restored/core/InjectDecoratorsRuntime.js`; `RuntimeContainer` no longer imports old module `24473` directly and no longer keeps a bridge to the old runtime container.
  - Locked the restored runtime barrel export surface, constants, `CoreModule` binding shape, independent container helper behavior, and small action behavior against the original module.
  - `RuntimeCore.di` is now an independent restored container object; mixed-phase compatibility is kept at explicitly deferred platform/shop/leaderboard branches instead of inside the core container.
  - `WaitAction`, audio actions, boot/login/setup actions, social/gameplay flow actions, pause action, popup actions, FPS/Sentry actions, preload/load-level actions, screenshot actions, field teardown, start/end-screen actions, map generation, burst spawning, fighter death effects, and start-game flow now inherit from restored `Action`.
  - Audio/settings, main boot/login/game flow, core gameplay systems, Pixi preload/root setup, and field/model lifecycle modules now import `di`, `lazyGet`, `lazyInject`, `CommonEvents`, canvas id, and asset-origin constants through `RuntimeCore`.
  - Non-commercial HTML UI routing and gameplay popup leaves now also route shared runtime access through `RuntimeCore`: `UIRoot`, `Screens`, `Popups`, `StartScreen`, `GamePlayScreen`, `LevelTitle`, `SocialOverlay`, `LosePopup`, `GiftPopup`, `LevelCompletedPopupAction`, `UIHelpers`, and `CoreGameModule`.
  - Advertising and share-image action wrappers now also route through restored `Action` / `RuntimeCore` instead of importing the old `44656` runtime barrel directly.
- `AdManagerBase` / `AdAction` / `AdsModule` / `AdHelpers`
  - Restored the ad manager base, ad action wrapper, DI module, and helper functions.
  - `AdManagerBase` now inherits from restored `GlobalEventProvider` and imports restored `RuntimeUtils.log`; `AdAction` now inherits from restored `Action` and routes DI metadata through restored `DecoratorHelpers`; ad helper lookups now use restored `RuntimeCore.di`.
  - Preserved unsupported default responses, throttling checks, lifecycle event dispatch, action payload parsing, reward/interstitial placement defaults, and helper DI call shape.
  - Locked throttling, manager defaults, ad-action execution branches, helper dispatch, and module bindings against the original modules.
- `WaitAction`
  - Restored the small timing action used by UI transitions and delayed flow steps.
  - Injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Locked `execute()`, `ms()`, `sec()`, `frame()`, prototype shape, and static helpers against the original module with stubbed timers/animation frames.
  - Restored modules now use this wait helper for settings close delay, start-button animation timing, popup reward/close delays, tutorial finger taps, bot command staggering, and page preload polling.
  - DI lookups now go through restored `RuntimeContainer`, with the temporary legacy bridge kept only for mixed restored/CJS compatibility.
- `MathUtils`
  - Restored shared 2D math helpers, color conversion/interpolation helpers, and fill-color owner generation from the `68532`, `98707`, and `77577` barrels.
  - Locked export shape plus geometry, rounding, approximate comparison, RGB/HSL conversion, color pale/lerp, and owner-color assignment against the original modules.
  - Core movement, path generation, bot calculation, continent owner-color generation, building/view tinting, tutorial targeting, and home booster rounding now use the restored module.
  - Preserves the original interpolation split: `math.lerp()` keeps the reversed weighted vector behavior, while `color.lerp()` uses normal channel interpolation.
- `BotPresets`
  - Restored all seven bot difficulty presets from vegetable through final aggressive.
  - Preserved default-preset inheritance, exported object order, property order, and inherited final-aggressive defaults.
  - `BotsSystem` now uses restored bot presets for start/low-level/normal AI selection.
- `GameModel`
  - Restored current-continent assignment, stage start/end, gameplay state transitions, pause/ticker handling, screenshot queueing, restart/dispose, context score submission, offline earnings, social context data, associated-user mapping, shop skin updates, and lobby/gameplay UI dispatch.
  - Preserved the original state-machine side effects, including duplicate `goToLobby()` state-change dispatch behavior.
  - Lazy DI property tokens and injectable marking now go through restored `DecoratorHelpers.lazyInjectToken` / `markInjectable` without adding design metadata.
  - Locked behavior against the original module across constructor shape, continent setup, stage start/end, pause toggling, associated users, offline rewards, context data, and screenshot retention.
  - Uses restored `FighterMovementSystem`, `PathsGenerationSystem`, and `DestroyFieldAction` for gameplay system wiring and current-field teardown.
- `ContinentModel`
  - Restored continent data parsing, stage owner derivation, building entity lazy creation, stage/total scoring, history serialization, finish-state tracking, and disposal cleanup.
  - Preserved original parsing warnings, `NaN` shape positions, default radius behavior, score formula, and `getTotalScore()` reduce semantics.
  - Uses restored `Building`, `Population`, `FighterGroupsSystem`, and `TimeTrack` for entity creation, active-force scoring, and elapsed-time tracking.
- `TimeTrack`
  - Restored the elapsed-time helper used by continent scoring, including start/stop/pause/resume state, immediate tick dispatch, and interval tick scheduling.
  - Preserved the original `resume()` behavior where `start()` resets the start timestamp after the paused offset adjustment.
  - Locked public prototype members and timer state transitions against the original module with fake clock/timer controls.
- `Fighter`
  - Restored moving unit construction, owner/source/target/path state, player color lookup, entity tagging, grid-position rounding, movement, waypoint consumption, and rotation calculation.
  - DI property token and injectable marking now go through restored `DecoratorHelpers.injectToken` / `markInjectable` without adding design metadata.
  - Locked behavior against the original module across construction, grid rounding, empty path completion, target movement, and close-waypoint shifting.
- `Spawner`
  - Restored burst spawning, target assignment, population allocation, burst action dispatch, immediate routine start, timeout scheduling, and routine cancellation.
  - Injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Preserved the original final-wave timeout behavior: a burst that drains `_targetAmount` to zero still schedules the next routine when allocation happened.
- `FighterGroup`
  - Restored burst path metadata, path length calculation, burst width/delay lookup, unit graphics initialization, fighter view attachment, engine entity insertion, active group cleanup, and death accounting.
  - Locked behavior against the original module across constructor/accessors, graphics pool usage, AddFighter, Check, and OnFighterDied.
  - Uses restored `PathHolder`, `Spawner`, and `FighterView` keys for burst width, delay, and moving-unit display components.
- `FighterGroupsSystem`
  - Restored the 100-slot static group registry, active group filtering, id wraparound, group creation, add-to-group delegation, removal, and clear.
- `PCell`
  - Restored spatial collision buckets used by fighter movement.
  - Locked owner tracking, collision pair generation, close-range threshold, and post-check clearing behavior against the original module.
- `FighterMovementSystem`
  - Restored fighter view placement/removal, per-frame movement, target occupation on arrival, grid-cell collision registration, death-effect dispatch, died tags, group death accounting, engine removal, and cleanup on system removal.
  - Locked behavior against the original module across creation/death events, arrival, movement/cell updates, collision cleanup, and system removal.
  - Uses restored `CapitalView`, `FighterView`, and `FighterDeathEffectAction` for source-capital positioning, moving-unit display lookup, and collision effects.
- `PathHolder`
  - Restored building-to-building path cache storage, lookup by building/state id, cache clearing, and spawn path width constant.
- `PathsGenerationSystem`
  - Restored one-shot path generation for all capital buildings, source/target radius trimming, left/right offset lane generation, per-building cache clearing, and self-removal from the engine.
  - Locked generated path geometry against the original module with deterministic map fixtures.
  - Uses restored `CapitalView` as the query key.
- `BurstWaveAction`
  - Restored Spawner burst expansion into FighterGroups/Fighters, alternating lane offsets, fractional final fighter amount, path lookup, missing-path aborts, and same-source-target guard.
  - DI property token and injectable marking now go through restored `DecoratorHelpers.injectToken` / `markInjectable` without adding design metadata.
  - Locked behavior against the original module across normal bursts, fractional bursts, missing holder, missing cached path, and source-equals-target scenarios.
- `InitStageSystem`
  - Restored stage building creation/reuse, engine entity insertion, past/current/future owner assignment, inactive stage toggling, shape initial-promise waiting, LEVEL_LOADED dispatch, and self-removal.
  - Locked behavior against the original module across past/current/future stage offsets.
  - Uses restored `StateShapeView` for shape initialization promises.
- `GamePlaySystem`
  - Restored per-owner free fighter counts, active building population totals, stats dispatch, win/loss detection, endStage trigger, fighter created/died event handling, and subscription cleanup.
  - Locked behavior against the original module across stats-only, win, loss, fighter free-count, and engine lifecycle scenarios.
- `PopulationSystem`
  - Restored active-building population ticks, shape view updates, and the intentionally empty entity-added handler.
  - Locked constructor predicate and update behavior against the original module.
  - Uses restored `StateShapeView` as the shape update key.
- `BotLogic`
  - Restored preset initialization, start-delay gating, decision cadence, busy-state handling, command consumption, move execution delays, and termination forwarding.
  - Preserved the original move execution behavior where matching source objects trigger `this._building.sendTo(subject)`.
  - DI property token and injectable marking now go through restored `DecoratorHelpers.injectToken` / `markInjectable` without adding design metadata.
  - Uses restored `DecisionType` for bot command branching and logging labels.
- `BotsSystem`
  - Restored bot preset selection, low-level fight fallback behavior, command id-to-entity conversion, per-entity decision execution, gameplay subscription, and bot termination cleanup.
  - Preserved the original ignored `getPrevLevel()` result in the low-level fight branch.
  - Uses restored `DecisionType` when converting simulated commands back to live entities.
- `LevelEndSystem`
  - Restored end-of-stage cleanup for active spawners and self-removal from the engine.
  - Preserved constructor-time FighterGroupsSystem clearing and now uses the restored Spawner component key.
- `TutorialSystem`
  - Restored tutorial finger creation, player-source lookup, nearest-target selection, looping GSAP drag hint, failure warnings, and removal cleanup.
  - Preserved the original lifecycle behavior where the finger entity is created before source/target validation, and GSAP timelines are not explicitly killed on system removal.
- `UpdateSkinsSystem`
  - Restored the one-shot shop-skin refresh system for entities with CapitalView or StateShapeView.
  - Locked updateAllSkins dispatch, default delta behavior, and self-removal after the refresh pass.
  - Uses restored `CapitalView` and `StateShapeView` query keys.
- `ActiveBuildingsQuery` / `AllBuildingsQuery`
  - Restored ECS query singletons for active spawn-capable buildings and all capital-view-backed buildings.
  - `ActiveBuildingsQuery` now uses restored `Spawner` so `GameModel`, `InputSystem`, and gameplay systems share the same restored component key.
  - `AllBuildingsQuery` now uses restored `CapitalView` so view-backed building lookup shares the restored component key.
- `ECSCore`
  - Restored `Signal`, component id/class helpers, tag detection, linked component detection, `LinkedComponentList`, `Entity`, `EntitySnapshot`, internal `Subscription`, `Engine`, `System`, `Query`, `QueryBuilder`, `ReactionSystem`, and `IterativeSystem` from the `75111` ECS barrel and its linked-list/subscription dependencies.
  - All restored gameplay/core modules now resolve ECS imports through `src-restored/core/ECSCore.js` instead of directly importing the old `75111__mod.js` barrel.
  - Locked entity lifecycle, query wiring, system priority ordering, message subscriptions, and clear/remove behavior against the original module.
- `CookieModelBase` / `CookieModel` / `MetaConfig` / `MetaModel`
  - Restored the core gameplay persistence/economy layer for default cookie state, sync/default saves, coin events, context history, selected cosmetics, color selection, booster costs, population caps/rates, rewards, offline earning, and upgrade mutations.
  - `GameModel`, `CoreGameModule`, `MainAction`, `SkinManager`, `CapitalView`, and `GenerateMapSpriteAction` now use restored `MetaModel` / `CookieModel` classes instead of the old CJS modules.
  - `CookieModelBase` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `CookieModel` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - `MetaModel` lazy cookie metadata now goes through restored `DecoratorHelpers.lazyInjectProperty` instead of inline TS `__metadata` helper output.
  - Preserved original `syncTime` branching, including the non-obvious `!inSolo` guard semantics from the source snapshot.
- `PathBounds` / `SpritesPool`
  - Restored SVG path bounding-box calculation plus generated Pixi display-object and shape texture caching.
  - Centralized the path-parser runtime behind `src-restored/core/PathParserRuntime.js`; `PathBounds` now uses that named boundary instead of importing old module `66721` directly.
  - `GenerateMapShapeAction`, `GenerateMapSpriteAction`, `FieldMediator`, `CapitalView`, `LevelEndActionSIO`, and `CoreGameModule` now use restored `PathBounds` / `SpritesPool`.
  - `SpritesPool` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked cache reuse, transient shape cleanup, purge behavior, and path bounds for line/quadratic/cubic path commands against the original modules.
- `DisplaySystem`
  - Restored the reaction system that attaches `Population`, `StateShapeView`, `CapitalView`, and `TutorialFingerView` components to the FieldView display layers.
  - Uses restored `Population`, `StateShapeView`, `CapitalView`, and `TutorialFingerView` component keys.
  - Locked query matching, add-to-layer behavior, missing-component skips, and parent removal behavior against the original module.
- `SkinManager`
  - Restored selected/randomized fighter and building skin assignment, gift selection, color-set overrides, available inventory filtering, and selected/stored flags.
  - Preserved original low-level default skin behavior, high-level random opponent skins, first/second player color-set swapping, and PlayerType key-index map population.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `GameModel` now imports the restored class for the skin manager dependency path.
- `CapitalView`
  - Restored capital display initialization, circle fallback, selected-building texture path, owner skin refresh, selection overlay, occupation/shake animations, active-state alpha tween, and DI metadata.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked constructor/prototype shape and behavior against the original module across fallback graphics, selected skin texture, owner/active skin changes, selection, occupied animation, shake, and activation scenarios.
- `StateShapeView`
  - Restored map-shape container initialization, async `createMapPart` action call, color/tint handling, population fill updates, owner skin refresh, active-state alpha tween, and DI metadata.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked constructor/prototype shape and behavior against the original module across async init, shape tinting, owner skin update, fill calculation, and active-state scenarios.
- `FieldView`
  - Restored field display layer construction for labels, map, capitals, fighters, shapes, and injected arrows.
  - Preserved the original on-added child order: map contains shapes/fighters/capitals/labels, and arrows stay as a direct field child.
  - Uses restored `ArrowsView` metadata for the injected arrows layer.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
- `FieldMediator`
  - Restored DisplaySystem registration, level-loaded fade-in, restart/state/resize listeners, state-to-focus routing, map bounds calculation, camera scale/position tweening, building active toggles, and rendering-system removal.
  - Uses restored `DisplaySystem` and `GameModel` while preserving CJS base mediator/root framework, GSAP, game constants, and path-bounds utility.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked behavior against the original module across field layer ordering, initialization, rendering-system reuse, level-loaded callbacks, state routing, map bounds, focus tween parameters, building toggles, and destroy cleanup.
- `TutorialFingerView`
  - Restored gameplay tutorial finger sprite injection, anchor/position setup, hold/release/tap animation helpers, tween cancellation, and `WaitAction.ms` pause behavior.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `TutorialSystem` and `DisplaySystem` now use the restored tutorial finger component key.
- `FingerView`
  - Restored the generic UI finger view with the original base-UI `View` inheritance, injected finger sprite, hold/release/tap animation helpers, and timeout-based tap pause.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked both finger view classes against the original modules across prototype shape, onAdded sprite attachment, hold/release tween sequence, and tap sequencing.
- `FighterView`
  - Restored the moving-unit display component as a Pixi `Container` subclass.
  - `FighterGroup` and `FighterMovementSystem` now use the restored fighter view component key.
- `FighterDeathEffectAction`
  - Restored skull collision effect placement, random color choice, width/scale setup, midpoint positioning, upward fade/scale tween sequence, field-layer attachment, and parent cleanup callback.
  - Uses restored `FighterView` so collision effects can read restored fighter display positions.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked behavior against the original module across fighter-pair processing and tween/field side effects.
- `ArrowView`
  - Restored the single drag-aim arrow display object, including shaft/tip graphics, child ordering, length visibility threshold, shaft height adjustment, and rotation calculation.
- `ArrowsView`
  - Restored source-building arrow creation, DI lookup of arrow views, arrow map lifecycle, target-priority handling, pointer fallback update, hide/remove behavior, and bulk direction updates.
  - Uses restored `CapitalView` when looking up source positions.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
- `ArrowsMediator`
  - Restored AIM event wiring from global gameplay events to `ArrowsView` methods.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked arrow view geometry, arrow lifecycle, and mediator event routing against the original modules.
- `GenerateMapSpriteAction`
  - Restored stage/state map preview sprite generation, state-shape creation via `createMapPart`, capital marker drawing through `SpritesPool`, player/neutral skin-color selection, aspect-fit scaling, RenderTexture merge rendering, texture-cache cleanup, and debug logging.
  - Preserved the original `Action.run()` data dependency where `getPlayerColor()` reads `this.data.activeStage`.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked behavior against the original module across aspect scaling, direct state sprite construction, active-stage color selection, area-constrained merge rendering, and no-area local-bounds rendering.
- `GenerateMapShapeAction`
  - Restored SVG path shape rendering for state parts, including path-bound positioning, multi-shape minimum-bound normalization, Pixi renderer texture generation, empty-shape fallback, and optional texture-cache cleanup.
  - `GenerateMapSpriteAction` now uses the restored class in DI metadata while `StateShapeView` continues to request the action through the existing `createMapPart` token.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked behavior against the original module across empty/missing shapes, multi-shape relative placement, renderer parameters, and `keepCache: false` cleanup.
- `Field`
  - Restored the field ECS entity wrapper and `init()` field-id assignment.
  - Locked constructor inheritance shape, `init()` return value, and `_fieldId` behavior against the original module.
- `DestroyFieldAction`
  - Restored field-instance teardown from the DI container, including optional field lookup, parent removal, and unconditional unbind when the token is bound.
  - `GameModel.disposeCurrentLevel()` now resolves the restored action class.
  - Locked bound, unbound, and null-field cleanup behavior against the original module.
- `SocialFlowAction`
  - Restored the shared social/gameplay flow action base: debug logging, ad gating, launch/afterLaunch sequencing, fire-and-forget push dispatch, async push dispatch, banner display, and FTUE-prefixed analytics tracking.
  - Now inherits from the restored base `Action`, resolves shared runtime lookups through restored `RuntimeCore`, and imports restored `RuntimeUtils.log` instead of the old `84194__mod` utility barrel.
  - Social, ad-action, game-config, and ad-manager DI metadata now goes through restored `DecoratorHelpers` instead of inline TS `__metadata` helper output.
  - Locked ad skip/show behavior, execute order, push helper behavior, banner display, and tracking side effects against the original module.
- `Score` / `ScoreGroup`
  - Restored the shared score display atoms, including optional string/custom icons, forwarded props, score-content wrapper, and `ScoreGroup.Icon` / `ScoreGroup.Score` static helpers.
  - Now use native object rest/spread and direct object props instead of TS `__rest` / `__assign` helper output.
  - Locked icon/no-icon/custom-icon and group-container vnode output against the original modules.
- `Avatar` / `AvatarPlayInGroup`
  - Restored shared avatar leaves on top of the restored score atom, including image/placeholder rendering, play-with button wrapper, zero-score badge behavior, play-in group score handling, and `AvatarPlayInGroup.Avatar` list-item helper.
  - Now use native object rest/spread and direct object props instead of TS `__rest` / `__assign` helper output.
  - Preserved original quirks: standalone `Avatar` displays score `0`, while `AvatarPlayInGroup` hides falsy group scores.
  - Locked placeholder/image/play-button/group/list-item vnode output against the original modules.
- `AvatarGroup` / `Winner`
  - Restored remaining shared avatar presentation leaves, including avatar-group container, item, separator icon, avatar forwarding helper, and winner frame composition.
  - Now use native object rest/spread and direct object props instead of TS `__rest` / `__assign` helper output.
  - `ShareLevelResultPopup` now imports the restored `Winner` component.
  - Locked avatar-group wrapper/item/separator/avatar helper and winner vnode output against the original modules.
- `UserPic` / `CircleAvatar`
  - Restored Pixi avatar display classes, including placeholder background setup, async user-photo texture loading, sprite replacement, circular mask/background drawing, configurable background color, and masked image recentering.
  - `GenerateShareImageAction` now imports the restored `UserPic` class for composed share images.
  - `UserPic` now imports restored `TextureLoader.loadTexture`.
  - `UserPic` class metadata now goes through restored `DecoratorHelpers.applyClassMetadata` instead of inline TS `__metadata` helper output.
  - Locked constructor structure, user-photo updates, circle mask/background, and image-load layout behavior against the original modules.
- `PixiUIExports`
  - Restored the 2D/Pixi barrel around `UserPic`, `CircleAvatar`, `BaseScreen`, `FingerView`, `Overlay`, `ScreenContainer`, Pixi `ProgressBar`, and `Spinner`.
  - The barrel no longer keeps 2D/Pixi display-class CJS fallbacks; all exported display classes now route through `src-restored/core`.
  - Removed the old `80672__mod` compatibility base from the restored barrel; `PIXIUIModule` now decorates Pixi classes directly with `injectable()` and no longer depends on old barrel load order for `Reflect.decorate` side effects.
- `BaseScreen` / `Overlay` / `ScreenContainer` / Pixi `ProgressBar` / `Spinner`
  - Restored the base screen transition hooks, overlay blur/unblur fade flow, screen swapping/resizing container, rounded Pixi progress bar, and lazy-injected spinner sprite.
  - Centralized the GSAP CSS animation runtime behind `src-restored/core/CssAnimationRuntime.js`; `Overlay` now uses that named boundary instead of importing old module `10990` directly.
  - `Spinner` lazy sprite metadata now goes through restored `DecoratorHelpers.lazyInjectProperty` instead of inline TS `__metadata` helper output.
  - Preserved original default durations, `renderable`/`visible`/`interactive` state changes, GSAP target calls, delayed spinner fade-in, and manual rotation timeout scheduling.
  - Locked public prototypes and behavioral scenarios against the original modules in `node test/compare-pixi-display-classes.js`.
- `RootView` / `RootMediator`
  - Restored root Pixi view sizing plus the root mediator's Pixi `Application` creation, canvas config, stage attachment, window resize listener, renderer resize, and root view resize forwarding.
  - Preserved original config values, including `CANVAS_ID`, `window.devicePixelRatio`, antialias/legacy flags, and the unresolved `RootView.BACKGROUND_COLOR` value.
  - `RootMediator` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Locked root resize and mediator initialize/resize behavior against the original modules with a Pixi test double in `node test/compare-pixi-root-preload.js`.
- `PreloadAssetsAction` / `PreloadAssetsExports`
  - Restored the image preload action and barrel export: svg/jpg/png filtering, asset-origin path transform, Pixi `Loader.add/load`, optional progress callback, trace logging, and DI sprite-factory binding with optional data prefix.
  - Now inherits from the restored base `Action` while preserving original asset-origin constants and DI binding behavior.
  - Injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Preserved original filtering behavior where extensions are matched exactly and case-sensitively against `svg`, `jpg`, and `png`.
  - Locked preload filtering, progress, path transform, logging, and binding behavior against the original modules in `node test/compare-pixi-root-preload.js`.
- `View` / `Mediator` / `bindMediator` / `DisplayFramework`
  - Restored the display framework base layer: Pixi view lifecycle propagation, mediator activation on scene add, child add/remove scene event forwarding, mediator view-listener tracking, one-shot listener wrappers, listener cleanup, debug binding helpers, and the Inversify mediator activation helper.
  - Migrated restored Pixi display classes plus `PIXIUIModule` and `CoreGameModule` mediator activation calls to the restored display framework.
  - `View` class metadata now goes through restored `DecoratorHelpers.applyClassMetadata` instead of inline TS `__metadata` helper output.
  - Locked lifecycle propagation, mediator listener bookkeeping, destroy cleanup, activation helper behavior, and barrel exports against the original modules in `node test/compare-display-framework.js`.
- `TextureLoader` / `LayoutUtils`
  - Restored image/texture loading helpers and layout helpers from the Pixi/SIO barrel: cached texture return, anonymous image loading, load failure fallback to `Texture.EMPTY`, centering, aspect-fit, and aspect-fill sizing.
  - Locked cache, image-load, layout, and barrel re-export behavior against the original modules in `node test/compare-sio-pixi-root.js`.
- `PixiCoreExports` / `SIOPixiExports`
  - Restored the `32956` core Pixi barrel and `55132` State.io Pixi barrel by composing restored display framework, root classes, Pixi UI classes, texture loader, preload action, and layout helpers.
  - Migrated restored modules that still depended directly on `55132` for `View`, `Mediator`, `RootView`, `loadTexture`, `aspectFit`, and `centerSize`.
- `SIORootView` / `SIORootMediator` / `SIOPreloadAssetsAction`
  - Restored the State.io root view composition, resize layout, screen transition helper, background overlay, State.io resize dispatching mediator, bitmap font setup, preload asset list assembly, progress-model updates, notification texture resolution, root activation, and spinner display.
  - `CoreGameModule`, `LevelStartActionSIO`, `LevelRestartActionSIO`, `ScreenShotActionSIO`, and `GenerateShareImageAction` now reference restored SIO root classes.
  - `SIORootView` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `SIOPreloadAssetsAction` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked SIO root layout, mediator resize dispatch, SIO preload, and SIO Pixi barrel behavior against the original modules in `node test/compare-sio-pixi-root.js`.
- `PIXIUIModule`
  - Restored Pixi DI bindings and now routes `Types2D.screenContainer`, `Types2D.overlay`, `Types2D.finger`, `Types2D.preloadAssetsAction`, `Types2D.screenShotAction`, `Types2D.spinner`, `Types2D.userPic`, `Types2D.circleAvatar`, and `Types2D.rootView` through restored modules.
  - Uses restored `bindMediator` from `DisplayFramework` for root view activation.
- `LevelStartAction`
  - Restored the generic level-start flow: constructor defaults, score-session reset, banner attempt, start-screen action dispatch, optional social-context wait, and start notification push.
  - `LevelStartActionSIO` now extends the restored base class while preserving its platform-specific launch/load behavior.
  - Injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Locked constructor, launch, no-wait beforeLaunch, and context-wait beforeLaunch behavior against the original module.
- `LevelStartActionSIO`
  - Restored the SIO level-start flow: current-level disposal, context-data lookup, loaded-level reuse, loading overlay/spinner state, async level data fetch, field instance creation/binding, root attachment, continent initialization, platform start notification, input start, and solo/gameplay state transition.
  - Preserved original platform quirks: `sendPush()` is disabled in this subclass, and `super.launch()` is called without forwarding the level id.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked behavior against the original module across data/context/default loading paths, solo lobby launch, non-solo stage launch, and disabled push behavior.
- `LevelRestartAfterYandexLoginAction`
  - Restored the Yandex post-login level restart action as the no-ad SIO level-start subclass.
  - Preserved original inheritance of `beforeLaunch`, `launch`, and disabled `sendPush()` from `LevelStartActionSIO`, with only `needToShowAD()` overridden to `false`.
  - Locked prototype shape, inheritance, and ad-gate behavior against the original module.
- `PlayWithOpponentAction` / `PlayWithOpponentActionSIO`
  - Restored opponent/social session launch behavior for accepted and declined popup outcomes.
  - Preserved the original platform difference: generic flow calls `social.playWith(opponent, true)`, while SIO calls `social.playWith(opponent, false)`.
  - Restored SIO post-start `model.startStage()` behavior and now binds `TypesFlow.PlayWith` to the restored SIO subclass.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
- `PauseAction`
  - Restored the global pause action as an injectable `Action` subclass.
  - Locked default `true` and explicit `false` dispatch payload behavior against the original module.
- `StageEndAction`
  - Restored solo win/loss and social win/loss end-of-stage branches, including score-session update, absolute try count increment, tournament score post, popup dispatches, reward calculation, gift popup, battle-results popup, and next-level flow.
  - DI metadata for the next-level action now points at restored `Action` instead of the CJS base.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Preserved the original no-ad gate by returning `false` from `needToShowAD()`.
  - `CoreGameModule` now binds `TypesGame.actions.endStage` to the restored class.
- `LevelRestartAction` / `LevelRestartActionSIO`
  - Restored restart ad timing, score reset, start-screen dispatch, static restart timestamp refresh, SIO UI reset, and model restart delegation.
  - `LevelRestartAction` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - `LevelRestartActionSIO` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked restart ad-gate timing, launch side effects, UI cleanup, and CoreGameModule binding target against the original modules.
- `LevelNextAction` / `LevelNextActionSIO`
  - Restored opponent replay, accepted/cancelled invite handling, free solo fallback, level-start wait flag propagation, cookie sync, same-continent stage advance, field teardown/recreate path, and post-context gameplay participant refresh.
  - `LevelNextAction` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `LevelNextActionSIO` uses restored `DestroyFieldAction` and dispatches restored gameplay participant refresh semantics while preserving original async fire-and-forget context listener behavior.
  - `LevelNextActionSIO` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked solo/opponent/invite branches, `gotoNextLevel()` branches, `playNextSolo()`, context-change dispatch, and CoreGameModule binding target against the original modules.
- `LevelEndAction` / `LevelEndActionSIO`
  - Restored generic win/loss detection, score submission, finish push, end-screen dispatch, leaderboard accessors, and win/loss analytics tracking.
  - Restored SIO end-of-level counters, reward-ad cleanup, tournament score/update/create hooks, solo and social win popup chains, lose popup, next-level transition, leaderboard score submission, and asset purge.
  - `LevelEndAction` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - `LevelEndActionSIO` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked generic victory rules, submit/track paths, SIO win/lose branches, popup helpers, score submission, and CoreGameModule binding target against the original modules.
- `SubmitContextScoreAction`
  - Restored the end-of-stage context score submission action, including context-id and solo guards, `me.scoreContext + 1` score calculation, current-continent history payload, and missing-leaderboard tolerance.
  - Now imports restored `Action`, `RuntimeCore.lazyGet`, `CoreTypes`, `TypesGame`, and `GameModel` metadata.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty`, while `defineDecoratedProperty` preserves the original TS-decorator prototype shape.
  - Locked submit, solo skip, missing-context skip, missing-adapter skip, prototype shape, and CoreGameModule binding target against the original module.
- `GenerateShareImageAction`
  - Restored the level-completed share-image composition path: generated map sprite creation, avatar/photo texture preparation, victory frame/rays, score badge, localized subtitle, avatar render texture overlay, texture-cache cleanup, and renderer base64 extraction.
  - Now imports restored `Action` / `RuntimeCore.di`, uses native object spread for bitmap text styles, and routes DI/lazy-DI metadata through restored `DecoratorHelpers`.
  - Locked create-map payloads, avatar display composition, screenshot overlay/render flow, and execute extraction against the original module.
- `ScreenshotAction` / `ScreenShotActionSIO`
  - Restored generic and State.io screenshot extraction through Pixi `RenderTexture`, `Matrix`, `Sprite`, and renderer `extract.base64()`.
  - Preserved generic half-scale behavior and SIO `imageScale` option with default `0.5`.
  - Preserved the platform difference where SIO removes the generated render texture from Pixi's cache after extraction.
  - `ScreenshotAction` now imports restored `RootView` metadata.
  - Screenshot action DI metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `CoreGameModule` now rebinds `Types2D.screenShotAction` to the restored SIO class.
- `StartScreenAction`
  - Restored the start-screen routing action that dispatches HOME when that UI screen is bound, otherwise dispatches GAMEPLAY.
  - Injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Locked both HOME-bound and fallback branches against the original module.
- `StartGameAction`
  - Restored start-game sequencing: show bot popup, run level-next flow, and perform the banner-controller lazy lookup.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `CoreGameModule` now binds `TypesGame.actions.startGame` to the restored class.
- `ShowWinPopupAction`
  - Restored win-popup payload creation, including reward coins, optional stage score fallback, continuation callback, reward-ad flag, and caller-provided prop overrides.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Now uses native object spread for popup prop overrides instead of TS `__assign` helper output.
  - Locked popup dispatch and post-continuation debug logging against the original module.
- `ShowGiftPopupAction`
  - Restored gift-popup payload creation, including captured/total stage progress, optional skin-manager gift lookup, continuation callback, and `PopupType.GIFT` dispatch.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked both skin-manager-bound and unbound reward branches against the original module.
- `BattleResultsPopupAction`
  - Restored battle-results popup dispatch with default `win = true`, explicit lose-flag handling, continuation callback wait, and post-continuation debug logging.
  - Preserved injected `model` and `social` metadata even though the execute path does not read those services directly.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `CoreGameModule` now binds `TypesGame.actions.battleResultsPopup` to the restored class.
- `LevelCompletedPopupAction`
  - Restored level-completed popup payload creation, score rounding through unary `+scoreSession.toFixed()`, platform-specific share-image skipping for `ya`/`vk`/`gd`, continuation callback wait, and debug logging.
  - Preserved the original share-image generation behavior where `generateImage(levelName, points)` ignores `levelName` and runs `GenerateShareImageAction` with `{ points }`.
  - Now resolves `GenerateShareImageAction` through restored `RuntimeCore.di`.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked successful image generation, platform skip, and generation-failure warning behavior against the original module.
  - `CoreGameModule` now binds `TypesGame.actions.levelCompletePopup` to the restored class.
- `LoadLevelAction`
  - Restored map SVG loading through `GAME_SCRIPT_ORIGIN` / `ODR_BUILD_ORIGIN`, filename suffix handling, DOMParser invocation, and `parseLevelSVG` delegation.
  - Now inherits from the restored base `Action` and delegates to restored `LevelParser` while preserving original map-asset origin resolution.
  - Preserved original filename coercion quirks, including missing input becoming `undefined.svg`.
  - Preserved original fetch-error wrapping through `new Error(error)`.
  - `CoreGameModule` now binds `TypesGame.actions.loadLevel` to the restored class.
- `LevelParser`
  - Restored SVG map parsing for continent id, loose states, stage groups, center circles/ellipses, radius, fill color, and path shape collection.
  - Preserved the original fallback that wraps loose states into a single stage when no explicit stages exist, plus lexicographic stage sorting.
  - Locked staged and fallback SVG-like DOM fixtures against the original parser.
- `EndScreenAction`
  - Restored end-screen routing for group leaderboard, win screen, solo game-over rematch, and non-solo game-over without a rematch.
  - Preserved leaderboard `onClose` behavior that reruns `LevelStart`.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked dispatch payloads and random-opponent lookup behavior against the original module.
  - `HTMLUIModule` now binds `TypesUI.endScreenAction` to the restored class.
- `SetupUIAction`
  - Restored HTML UI root rendering through Preact `h/render`, explicit/default container selection, root DI binding, social-platform class tagging, and VK ODR class tagging.
  - Now inherits from the restored base `Action` while preserving original DI root binding and lazy UI-root class injection.
  - DI and lazy UI-root metadata now go through restored `DecoratorHelpers.injectProperty` / `lazyInjectProperty` instead of inline TS `__metadata` helper output.
  - Preserved the original default target lookup through `document.getElementById(CANVAS_ID).parentElement`.
  - Locked render/ref/DI/classList side effects against the original module across explicit container, default container, VK ODR, and missing-base scenarios.
  - `HTMLUIModule` now binds `TypesUI.setupAction` to the restored class.
- `BattleResultsPopup`
  - Restored the social battle-results popup view, including default lose-branch semantics when `win` is absent, coin display, localized title text, detailed continent/stage label, leaderboard payload, continue/try-again branches, popup close dispatch, and continuation callback forwarding.
  - Now imports restored `UIConstants.popup` timing values and the restored `BattleResults` list component.
  - Now uses direct vnode props instead of TS `__assign` helper output.
  - Locked rendered vnode structure and click-handler side effects against the original module across win, lose, and missing-`win` scenarios.
- `BattleResults`
  - Restored the battle-results ranking list used inside the stage-results popup, including current-player history lookup, context leaderboard extra-data parsing, missing-history fallback, per-stage scoring, finished-level total scoring, and rank assignment.
  - Now imports restored `SocialAppExports.ScoreType`, `TypesGame`, `MathUtils`, `UIContext`, and restored `LeaderBoardItem`.
  - Now uses native object spread and direct vnode props instead of TS `__assign` helper output.
  - Locked stage sorting, finished-level sorting, default `isLevelFinished` behavior, fallback history shape, and rendered row payloads against the original module.
- `ShareLevelResultPopup`
  - Restored the level-completed sharing popup view, including coin display, localized completion title, winner/rays/stars composition, last-screenshot preview, share component visibility, no-thanks/continue branches, and popup close flow.
  - Preserved the original close sequence: set popup invisible, wait `UIConstants.coinsIndicator.updateDelay`, emit popup close, then call optional continuation callback.
  - Now imports restored `UIConstants` timing values.
  - Now uses direct vnode props instead of TS `__assign` helper output.
  - Locked rendered vnode structure and close/share side effects against the original module across share-image, empty-image, and missing-image scenarios.
- `WinStagePopup`
  - Restored the stage/level win reward popup view, including default prop handling, coin bar, localized title/subtitle, cup/rays/stars animation branch, base reward timing hook, rewarded-ad claim branch, no-thanks interstitial path, coin payout, popup close dispatch, and continuation callback forwarding.
  - Preserved the original continuation values: no-thanks closes with `false`, direct continue closes with `true`, and rewarded-ad claim updates `adViewed` only after `AdResponse.PLAYED`.
  - Now imports restored `UIConstants` timing values and restored `UIHelpers.showReward/showAd`.
  - Now routes local `useState` / `useEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now uses direct vnode props and state object spread instead of TS `__assign` helper output.
  - Locked rendered vnode structure and click-handler side effects against the original module across claim, reward-ad, continue, and disabled-reward scenarios.
- `LosePopup`
  - Restored the lose reward popup view, including delayed visible state hook, consolation coin payout, localized title, optional lose animation, popup close dispatch, and `TypesFlow.LevelNext` lazy-run continuation.
  - Now imports restored `UIConstants` timing values.
  - Now resolves the next-level action through restored `RuntimeCore.lazyGet`.
  - Now routes local `useState` / `useEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now uses direct object props and state object spread instead of TS `__assign` helper output.
  - Locked rendered vnode structure and continue side effects against the original module across animated and non-animated scenarios.
- `ConfirmPopup`
  - Restored the exit-confirmation popup view, including localized title/body, confirm/cancel button callbacks, visibility effect, and cross-promo delay.
  - Now imports restored `UIConstants.popup` timing values.
  - Now imports restored `CancelButton` and `ConfirmButton`; the confirm button preserves click-sound-before-callback behavior while the cancel button keeps original prop passthrough.
  - `ConfirmPopup` now uses direct vnode props instead of TS `__assign` helper output.
  - `CancelButton` and `ConfirmButton` now use direct object props instead of TS `__assign` helper output while preserving prop override order.
  - Locked rendered vnode structure, button icon rendering, confirm click sound ordering, and both callback return paths against the original module.
- `GiftPopup`
  - Restored the gift fill-box popup view, including captured-progress animation, gift preview gating, rewarded-ad skin collection, skip-ad path, continuation callback, and `TypesFlow.LevelNext` fallback.
  - Preserved original close behavior where popup close first performs a no-op state copy and then emits `UIEvents.POPUP` with `id: null`.
  - Now imports restored `UIConstants` timing values and restored `UIHelpers.showReward/showAd`.
  - Now resolves the next-level action through restored `RuntimeCore.lazyGet`.
  - Now imports restored `CapturingAnimated` and `GiftItem` leaves for capture tweening, gift placeholder rendering, and building/fighter reward preview tiles.
  - `GiftItem` now uses direct vnode props instead of TS `__assign` helper output.
  - `CapturingAnimated` now routes local `useState` / `useLayoutEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `CapturingAnimated` now uses native array destructuring instead of TS `__read` helper output.
  - Now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now uses direct vnode props and state object spread instead of TS `__assign` helper output.
  - Locked rendered vnode structure, building/fighter reward side effects, no-thanks path, animation-complete state update, gift preview branches, and unfinished-level continue flow against the original module.
- `OfflineEarningsPopup`
  - Restored the offline earnings popup view, including default time/reward props, multiplier selection, rewarded-ad state transition, coin payout, cookie sync, popup close dispatch, and optional animation branch.
  - Preserved original no-thanks behavior where the close routine is launched after the interstitial without awaiting it in the click handler.
  - Now imports restored `UIConstants` timing values and restored `UIHelpers.showReward/showAd`.
  - Now imports restored `MultiplyBonus`, including the static gauge path table and restored arrow component.
  - Now routes local `useState` / `useEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now uses direct vnode props and state object spread instead of TS `__assign` helper output.
  - Locked rendered vnode structure, multiplier pause, reward-ad claim, no-thanks, and continue payout side effects against the original module.
- `BackButton` / `CoinsIndicator` / `SettingsButton` / `UserIdLabel`
  - Restored shared UI controls used by restored screens and popups.
  - `BackButton` and `SettingsButton` preserve click-sound-before-callback behavior and tolerate missing callbacks.
  - `BackButton` and `SettingsButton` now import restored `UIHelpers.playUIClickSound`.
  - `SettingsButton` now uses direct object props instead of TS `__assign` helper output while preserving the same rendered vnode shape.
  - `BackButton` and `UserIdLabel` now use direct object props instead of TS `__assign` helper output while preserving the same rendered vnode shape.
  - `CoinsIndicator` preserves its initial total default, `COINS_UPDATED` and `YANDEX_SYNC` listeners, restored `CoinsField` forwarding, and coin icon rendering.
  - `CoinsIndicator` now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `CoinsIndicator` now uses native array destructuring and direct object props instead of TS `__read` / `__assign` helper output.
  - `UserIdLabel` preserves `TypesSocial.model` injection and `user id: <id>` rendering.
  - `GamePlayScreen`, `StartScreen`, `LeaderboardScreen`, `ShopScreen`, `SettingsPopup`, and coin-bearing popups now import these restored controls.
  - Locked button click branches, event-driven coin updates, injected user id rendering, and vnode structure against the original modules.
- `CoinsField` / `Tickup`
  - Restored the animated coin-count leaf and its shared tick-up tween helper.
  - `CoinsField` now uses restored `NumberFormat.getFontClassByDigits`, restored `UIConstants.coinsIndicator`, and restored `Tickup`.
  - `CoinsField` now routes local `useState` / `useLayoutEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `CoinsField` now uses native array destructuring and direct object props instead of TS `__read` / `__assign` helper output.
  - Locked default/disabled tickup paths, digit-class forwarding, state update callback shape, and GSAP tween/cleanup calls against the original modules.
- `ClaimButton` / `ContinueButton` / `NoThanksButton`
  - Restored the common popup action buttons used by gift, offline-earnings, win/lose, battle-results, and share-result popups.
  - Buttons now consume restored `Localize`, restored `UIHelpers.playUIClickSound`, restored `SVGAssets`, and restored `UIContext.Button` / `visibilityEffect`.
  - Preserved original click behavior where callbacks are invoked after the UI click sound but their return values are not forwarded.
  - `ClaimButton`, `ContinueButton`, and `NoThanksButton` now use native array destructuring and direct object props instead of TS `__read` / `__assign` helper output.
  - Locked reward/plain claim rendering, video/coin icon branches, continue/no-thanks labels, delayed invisible class behavior, and click side effects against the original modules.
- `PopupWinIndicator` / `WinRays` / `WinStars`
  - Restored the shared win-popup visual leaves used by offline earnings, win/lose, and share-result popups.
  - `PopupWinIndicator` now consumes restored `CoinsField`, restored `SVGAssets`, and restored popup coin-update timing.
  - `WinRays` and `WinStars` now consume restored `SVGAssets` instead of the old SVG barrel.
  - `PopupWinIndicator` and `WinRays` now use direct vnode props instead of TS `__assign` helper output.
  - `WinStars` now uses direct object props instead of TS `__assign` helper output.
  - Locked default/zero coin totals, popup coin tickup duration, wrapper classes, and SVG child selection against the original modules.
- `MultiplyArrow` / `MultiplyBonus`
  - Restored the interactive multiplier arrow, including GSAP progress tweening, pause cleanup, multiplier band selection, and polar-position transform.
  - Restored the `MultiplyBonus` static SVG gauge as a reviewed path-data table and routed `OfflineEarningsPopup` through it.
  - `MultiplyArrow` now routes local `useState` / `useLayoutEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `MultiplyArrow` now uses native array destructuring and direct state object spread instead of TS `__read` / `__assign` helper output.
  - `MultiplyBonus` now uses direct vnode props and object spread instead of TS `__assign` helper output.
  - Locked arrow tween/update behavior, multiplier thresholds, gauge vnode structure, and the absence of old `36710` / `39811` module loading in the restored entry.
- `GamePlayScreen`
  - Restored the gameplay overlay screen with the original back-button exit path through `di.get(TypesGame.model).exitTheGame()` and participant progress bar forwarding.
  - Preserved debug side-effect imports and fixed child ordering.
  - Now resolves `TypesGame.model` through restored `RuntimeCore.di`.
  - Now imports restored `ProgressBar`; the screen-level comparison keeps that child mocked, while `compare-home-display-components.js` covers participant forwarding, stats listener registration, skin-color mapping, and SVG progress section rendering.
  - Now imports restored `DebugPanelGamePlay` for the gameplay debug stage/level end controls, while the screen-level comparison keeps that side-effect mocked.
  - Now uses direct vnode props instead of TS `__assign` helper output.
  - Locked rendered vnode structure and back-button side effects against the original module.
- `DebugPanelGamePlay`
  - Restored the gameplay debug controls for displaying the current continent id and ending the current stage or level.
  - Preserved original button labels and `endStage(false)`, `endStage(true)`, and `endStage(true, true)` callback payloads.
  - Now uses direct object props instead of TS `__assign` helper output.
  - Locked vnode structure, DI/current-continent lookup, and button click side effects against the original module.
- `FileDropArea`
  - Restored the small debug file-drop component as a native class extending the restored Preact runtime `Component`.
  - Preserved dragenter/dragleave/dragover/drop listener registration, drag-state counter behavior, file handoff, clearData call, and inline style override order.
  - Now uses native class inheritance, object spread, and direct vnode props instead of TS `__extends` / `__assign` helper output.
  - Locked mount/unmount listener wiring, drag/drop side effects, render style merging, and ref forwarding against the original module.
- `Participants` / `ProgressBar` / `ProgressIndicator` / `ProgressSection`
  - Restored the gameplay participant progress strip, including `GameEvents.STATS_UPDATED` listener registration, participant row forwarding, owner-color lookup, cumulative progress offsets, and SVG section transforms.
  - `ProgressBar` now imports restored `Participants`; the avatar strip preserves photo rendering and placeholder-avatar fallback.
  - `ProgressBar` now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Preserved the original misspelled `itemsToDiplay` prop and `class` prop on the root progress-bar div.
  - Now use native array destructuring and direct object props instead of TS `__read` / `__assign` helper output.
  - Locked rendered vnode structure, stats listener side effects, avatar photo/placeholder branches, and progress section transform styles against the original modules.
- `StartScreen`
  - Restored the home/start screen view, including injected game/social/skin/cookie services, initial authorization/stage state, visibility effect, offline-earnings popup gate, settings popup, capturing progress, platform-specific invite/leaderboard visibility, shop routing, tap-to-play flow, boosters, and login recovery.
  - Preserved the module-scope offline-earnings guard, `ScoreType.GLOBAL` leaderboard payload, `playUIClickSound()` before shop routing, and post-login `LevelRestartAfterYandexLoginAction` lazy-run path.
  - Now resolves start/restart flow actions through restored `RuntimeCore.lazyGet`.
  - Now routes local `useState` / `useEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now imports restored `UIHelpers.playUIClickSound` for the shop-route click feedback.
  - Now imports restored `LeaderboardButton`, `InviteButton`, `ShopButton`, `TapToPlayButton`, `NoAdsButton`, `LevelTitle`, `Capturing`, `Boosters`, and `UserStatusInfo`; the screen-level comparison keeps those children mocked, while focused component tests cover their behavior and vnode structure.
  - Now uses native array spread, direct object props, and state object spread instead of TS `__read` / `__spreadArray` / `__assign` helper output.
  - Locked rendered vnode structure and interaction side effects against the original module across gameplay, default social platform, Yandex, and Game Distribution scenarios.
- `LevelTitle` / `Capturing` / `UserStatusInfo`
  - Restored home-screen level label, capturing progress card, and login-status prompt.
  - `Capturing` now imports restored `SvgCapturingProgress`, and the progress SVG now uses restored `FilledRects` for both background and captured-stage segments.
  - Preserved lazy model lookup, fallback level dash, default capture/stage/gift props, social injection side effect, localized login text, and non-returning login click handler.
  - `LevelTitle` now resolves the game model through restored `RuntimeCore.lazyGet`.
  - `LevelTitle`, `Capturing`, and `SvgCapturingProgress` now use direct object props instead of TS `__assign` helper output.
  - `UserStatusInfo` now uses direct object props instead of TS `__assign` helper output.
  - Locked default/supplied rendering branches, capture SVG geometry/mask structure, and login click side effect against the original modules.
- `InviteButton` / `ShopButton` / `TapToPlayButton` / `NoAdsButton`
  - Restored the remaining home-screen action buttons around social invite, shop entry, animated start, and no-ads purchase.
  - Preserved invite sound/social-popup/level-start ordering, shop notification marker rendering, tap-to-play delayed state transitions, and no-ads SVG output.
  - `InviteButton` now imports restored `RuntimeCore.di` and `UIHelpers.playUIClickSound`, and uses native `async` click flow instead of TS helper state-machine output.
  - `TapToPlayButton` now imports restored `UIConstants.tapToPlayButton` timing values.
  - `TapToPlayButton` now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `TapToPlayButton` now uses native array destructuring, object spread, and `async` click flow instead of TS helper state-machine output while preserving prop override order.
  - Locked accepted/cancelled invite branches, shop notification branches, tap-to-play wait sequence, callback forwarding, and rendered vnode structure against the original modules.
- `Boosters` / `Booster`
  - Restored the home-screen booster row and individual booster cards, including FTUE disabled gate, Yandex coin sync listener, coin-update refresh, paid upgrade callbacks, free rewarded-ad branch, one-minute reward-ad throttle, and localized card labels.
  - Preserved module-scope initial FTUE flag, `BoosterType` string values, `toFixedString` default-count formatting, price sorting for free-ad selection, and sound-only-when-enabled click behavior.
  - `Boosters` now routes local `useState` / `useEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `Booster` now uses direct vnode props and optional chaining instead of TS `__assign` helper output.
  - `Boosters` now uses native array destructuring, object spread, direct vnode props, and `async` booster click handlers instead of TS `__read` / `__assign` / `__awaiter` helper output.
  - Locked enabled/disabled booster clicks, paid and free upgrade branches, listener/effect registration, state update payloads, icon selection, and rendered vnode structure against the original modules.
- `LeaderboardButton`
  - Restored the home-screen leaderboard button, including social-model injection, blue leaderboard button styling, UI click sound, optional authorization prompt, Yandex leaderboard sync, and final screen-route callback.
  - Preserved original behavior where a missing `onClick` skips all side effects, and authorization falls back to `suggestAuthorizeAction.run()` only when `userAuthorized` is explicitly false and `authorizeUser` exists.
  - Now imports restored `RuntimeCore.lazyGet` and `UIHelpers.playUIClickSound`, and uses native `async` click flow instead of TS helper state-machine output.
  - Locked button vnode props, sound/suggest/sync ordering, missing-callback branch, and final callback behavior against the original module.
- `LeaderboardScreen`
  - Restored leaderboard screen rendering, including gameplay/social injections, top-bar back navigation, coin indicator, coin-update listener, and `LeaderBoardTabs` prop forwarding.
  - Preserved original unused social-model injection and ignored local coin state read.
  - Now imports restored `LeaderBoardTabs`; the screen-level comparison keeps that child mocked, while `compare-leaderboard-components.js` covers the restored leaderboard subtree.
  - Locked rendered vnode structure, coin event state update, and back-button side effects against the original module.
- `LeaderBoardTabs` / `LeaderBoard`
  - Restored the leaderboard tab wrapper and board assembly, including reward-model lookups, score-source selection, descending score sort, rank assignment, and invite-reward row append.
  - Preserved original nullable reward-model fallbacks and the available-reward lookup by `rf === user.id`.
  - Locked tab prop forwarding, user row ordering, reward propagation, pending invite state, and invite row append behavior against the original modules.
- `LeaderBoardItem`
  - Restored user row rendering, including current-user/disabled class modifiers, rankable-user rank lookup, avatar/score display, solo-vs-social score icon branch, reward claim button, and play-with button.
  - Preserved original click-return behavior where reward claim starts async work without returning the promise, while invite request remains awaited by the button callback.
  - Locked reward claim side effects, coin update, Yandex play-button hiding, rank font-class lookup, and social leaderboard cup branch against the original module.
- `LeaderBoardInviteItem`
  - Restored invite reward row rendering, disabled pending state, localized pending/invite labels, coin reward display, reward request, context-change restart flag, and level-start rerun.
  - Locked pending and request-success branches against the original module.
- `LeaderboardGlobalExternal` / `LeaderboardGlobalYandex` / `LeaderboardContextExternal`
  - Restored global external scores API adapter, Yandex leaderboard adapter, and context leaderboard scores API adapter.
  - These adapters now inherit from restored `EventDispatcher`, use restored `RuntimeCore` for `CommonEvents`, `di`, `lazyGet`, and lazy DI metadata, import restored `RuntimeUtils.log`, and use restored `AppModel` metadata.
  - Preserved `EventDispatcher` inheritance, decorator metadata, `CommonEvents.UPDATED` emits, external app-model request payloads, Yandex friend-user construction, leaderboard record updates, score-submit guards, and solo-context skips.
  - Locked sync, submit, app request, score update, Yandex player-entry refresh, emitted events, error/skip branches, and cast leaderboard-entry accessors against the original modules.
- `UserDataBase` / `UserDataYandex` / `UserDataWeb` / `UserDataLocalStorage`
  - Restored delayed write throttling, cache-backed reads, erase semantics, Yandex player `getData`/`setData` integration, cookie-backed web storage, localStorage-backed storage, log traces, unsupported-player warnings, and last-sync updates.
  - Preserved original delayed-write behavior where timeout writes do not refresh `lastSaveCall`, web string values are written without JSON quoting, and localStorage parse failures return the raw stored string.
  - Now import restored `RuntimeUtils.log` instead of the old `84194__mod` utility barrel.
  - `UserDataBase`, `UserDataYandex`, and `UserDataWeb` now use native `async` methods instead of TS `__awaiter` state-machine output while preserving DI decoration.
  - `UserDataBase`, `UserDataYandex`, `UserDataWeb`, and `UserDataLocalStorage` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Locked base cache flow, Yandex player read/write payloads, cookie JSON payloads, key-prefix localStorage reads/writes, and storage-error logging against the original modules.
- `SessionData` / `CookieDataLocalStorage`
  - Restored session metadata incrementing, friends fallback, first-time-user flag, and cookie-data barrel exports.
  - Preserved original `parseInt(..., 10) || 0` session handling and direct adapter alias exports.
  - Locked session initialization, `ftue`, raw data return, exported keys, and alias identity against the original modules.
- `SocialModelBase`
  - Restored the no-op base social model, including session construction, pause-overlay default, fallback popup results, default user/context/friends getters, and decorator metadata.
  - Social popup constants now come from restored `SocialAppExports` instead of the old `60539` score/popup barrel.
  - Now extends restored `EventDispatcher`, uses native async no-op methods, and routes cookie/payments/dummy-user DI through restored decorator helpers instead of old `44656` / TS helper output.
  - Preserved original default async return values and the `me` getter pointing to the lazy dummy user.
  - Locked no-op method returns, session defaults, social flags, platform getter, and dummy-user getter behavior against the original module.
- `UserScore` / `UserYandex`
  - Restored session/context/global score aggregation, score-updated/increased emits, leaderboard entry lookup, Yandex raw-player identity/photo accessors, and score-session forwarding.
  - `UserYandex` now extends restored `EventDispatcher` and uses restored decorator helpers for its score-store injection instead of old `44656` / TS helper output.
  - Preserved original `update()` truthy fallback semantics and score max filtering over non-NaN values.
  - Locked score aggregation, flush behavior, Yandex user accessors, and raw leaderboard record lookup against the original modules.
- `PaymentsModelBase` / `PaymentsModelYandex`
  - Restored analytics/ecommerce tracking, remote validation, Yandex payments SDK initialization, catalog/purchase refresh, purchase/consume flows, tracking payload generation, and support flag handling.
  - Preserved original Yandex purchase cancellation branch and validation default behavior.
  - Locked payment base defaults, analytics payloads, purchase records, consumable/non-consumable branches, and Yandex SDK calls against the original modules.
- `SocialModelYandex`
  - Restored the concrete Yandex social model on top of restored `SocialModelBase`, including SDK capture, locale/tld detection, user-data refresh, authorization dialog flow, friend lookup, leaderboard sync reconciliation, and Yandex game switching.
  - Score-type constants now come from restored `SocialAppExports` instead of the old `60539` score/popup barrel.
  - Now imports restored `RuntimeCore.di` and `RuntimeUtils.log`, uses native async methods, and routes page/leaderboard DI metadata through restored `DecoratorHelpers`.
  - Preserved original `AUTHORIZATION_STATE_CHANGED` emission semantics, dummy-user fallback after player lookup failures, `Localize.defaultLocale` assignment, and global/context leaderboard score backfill behavior.
  - Locked lifecycle, locale mapping, authorization, friend lookup, switch-game URL, and leaderboard synchronization branches against the original module.
- `SyncYandexLeaderboardsAction`
  - Restored the Yandex leaderboard synchronization action, including optional authorization, social leaderboard refresh, and best-known-score backfill to the global leaderboard.
  - Now inherits from restored `Action`; social DI metadata goes through restored `DecoratorHelpers`, and the leaderboard service lookup uses restored `RuntimeCore.di` at submit time.
  - Preserved original timing of `scoreGlobal` / `scoreSession` reads and the `false` return when authorization is missing or denied.
  - Locked missing-authorizer, denied-authorizer, submit, and no-submit branches against the original module.
- `LoginAction`
  - Restored app login bootstrap behavior, including Firebase-backed model initialization, provider/host payload assembly, game-entry analytics tracking, and auth-action dispatch.
  - Now imports restored `AppModel` metadata instead of the old CJS module.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Preserved original no-Firebase warning branch, optional ref-source tracking, and `ftue_` event-name prefixing.
  - Locked initialization, warning-only, default entry, ref entry, and ftue-ref entry branches against the original module.
- `HTTPRequest` / `BackendModel` / `AppModel`
  - Restored the shared backend request layer, including JSON fetch wrapping, default payload merging, authorization header forwarding, Firebase initialization, remote-config activation, backend host lookup, and `__BACKEND_HOST__` override handling.
  - `BackendModel` now uses native object spread for request payload composition instead of TS `__assign` helper output.
  - `BackendModel` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Firebase app and remote-config SDK access is centralized through `src-restored/core/FirebaseAppRuntime.js` and `src-restored/core/FirebaseRemoteConfigRuntime.js`; `AppModel` no longer imports old modules `83977` or `47135` directly.
  - `SocialAppExports` now lazy-exports restored `AppModel`; `LoginAction` consumes the restored class metadata while Firebase/remote-config SDK barrels remain treated as third-party dependencies.
  - Locked request construction, payload/header behavior, default host normalization, remote-config rejection handling, public prototype members, and authorization fallback against the original modules.
- `AuthActionBase` / `AppModule`
  - Restored the base auth action and app DI module, including player identity lookup, backend token request/retry flow, Firebase custom-token sign-in, profile-image loading, and page/model/login bindings.
  - Firebase Auth SDK access is centralized through `src-restored/core/FirebaseAuthRuntime.js`; `AuthActionBase` no longer imports old module `56467` directly.
  - Model DI metadata now goes through restored `DecoratorHelpers.injectProperty`, while `defineDecoratedProperty` preserves the original prototype member shape.
  - `SocialAppExports` now lazy-exports restored `AuthActionBase` and restored `AppModule`; Firebase Auth remains a third-party CJS SDK dependency.
  - Locked auth success, retry, missing-token, Firebase error, profile-image load/failure, prototype shape, binding order, singleton scopes, and restored binding targets against the original modules.
- `SocialModuleYandex` / `GameModuleYandex`
  - Restored Yandex social and platform game binding modules.
  - `SocialModuleYandex` preserves original binding order, singleton scopes, user/cookie/payments/userScore bindings, dummy-user dynamic factory, and now routes cookie/payments/user/userScore/model plus `TypesSocial.leaderboardGlobal` / `TypesSocial.leaderboardContext` to restored adapters.
  - `GameModuleYandex` preserves original `di.load()` sequence and auth-action binding while loading restored `SocialModuleYandex`, and now invokes the restored `RuntimeCore.di` bridge instead of importing the old `44656` runtime barrel directly.
  - Locked binding topology, restored target substitutions, dummy-user factory caching, and game-module load/auth binding behavior against the original modules.
- `ShopScreen`
  - Restored shop screen rendering, including top-bar back navigation, coin indicator, `ShopPreview`, `ShopMenu`, and unmount-time shop refresh.
  - Now imports restored `ShopPreview` and `ShopMenu`; the screen-level comparison keeps those children mocked, while `compare-shop-components.js` covers the restored shop subtree.
  - Locked rendered vnode structure, back-button side effect, and effect cleanup behavior against the original module.
- `ShopMenu`
  - Restored shop tab generation, localized tab headers, notification flags for unstored items, module-scope current tab tracking, selected item refresh state, and reward-ad unlock flow.
  - Preserved original behavior where unstored fighter/building clicks start the reward flow without returning the promise, and stored color clicks only select when the color is already stored.
  - Locked generated tabs, header clicks, stored item selection, reward unlock side effects, and cookie mutations against the original module.
- `ShopPreview`
  - Restored selected fighter/building/color preview state, selectable-item event refresh, image/object texture updates, SVG fill updates, animation intensity switching, and listener cleanup.
  - Preserved original ref ordering, state SVG paths, selected-color CSS lookup, and animationstart/animationiteration class manipulation.
  - Locked rendered vnode structure, DOM update side effects, event callback state refresh, animation listener registration, intensity changes, and cleanup behavior against the original module.
- `ShopItem` / `BuildingItem`
  - Restored generic shop card rendering for color, building, and fighter entries, including visibility effect, selected overlay class, video reward badge, and nested skin preview components.
  - Restored building tile wrapper around `TexturedShopItem`; `BuildingItem` now imports the restored textured media renderer.
  - `BuildingItem` now uses direct vnode props instead of TS `__assign` helper output.
  - Locked color/building/fighter branches, click forwarding, stored-price visibility, and building texture props against the original modules.
- `FighterItem` / `ColorItem` / `TexturedShopItem` / `ShopTabHeader`
  - Restored fighter triple-cell skin tile, color swatch rendering, image/object textured media renderer, and tab header notification marker.
  - Preserved `TexturedShopItem` object `onLoad` behavior that recolors embedded SVG content from `playerColor[0]`, plus default image rendering through `assets/<textureUrl>`.
  - `FighterItem` now imports restored `preactHooks` and uses direct vnode props instead of the old React-hook barrel and TS `__assign` helper output.
  - `ShopItem`, `BuildingItem`, and `ShopMenu` now import these restored leaves.
  - Locked image/object branches, SVG color application, fighter repeated-cell structure, color background style, tab click forwarding, and notification rendering against the original modules.
- `SettingsPopup`
  - Restored settings popup rendering, including backdrop/back-button close flow, vibration toggle, sound toggle, cross-promo/version labels, user id label, and audio-event listener registration.
  - Now imports the restored `AudioModel` event constants and restored `UIConstants.popup` timing values, so the settings popup's sound toggle and animation timing are tied to restored modules instead of CJS barrels.
  - Now routes local `useState` / `useCallback` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Replaced TS `__assign` helper output with direct props objects throughout the popup while preserving the original local toggle component identity.
  - Preserved original listener callbacks that return the refresh function rather than invoking it immediately, plus the minified internal toggle component identity used in vnode output.
  - Locked rendered vnode structure, toggle side effects, popup close timing, and no-vibration-manager branch against the original module.
- `UIConstants`
  - Restored the shared UI constants and `ShopType` enum object, including tap-to-play timing, coin update timing, popup timing, booster configs, and shop tab defaults.
  - `SettingsPopup`, restored reward/result popups, and confirmation/share popups now consume restored popup/coin timing; `Boosters` now consumes restored booster configs; `TapToPlayButton` now consumes restored tap-to-play timing.
  - Locked export order and full constant payload against the original module.
- `TypesGame`
  - Restored the `TypesGame` DI token table as semantic source for module `95781`, including gameplay, action, bot, and view injection keys.
  - Restored core/UI modules now import `TypesGame` from `src-restored/core`; the restored module seeds the old module cache so remaining CJS consumers resolve the same Symbol identities during the mixed phase.
  - Locked export order, token object identity, action/view key order, and nested token shape against the original module.
- `PopupType`
  - Restored the shared popup type constants, including `PopupType.SETTINGS` used by the settings entry button and `GameUIModule` binding.
  - Restored modules that dispatch or bind popups now import `PopupType` from `src-restored/core`.
  - Locked export order and all popup string values against the original module.
- `GameEvents`
  - Restored shared game event constants for resize, gameplay state, level lifecycle, aim indicators, coin updates, and selectable-item changes.
  - Restored UI/core modules now import `GameEvents` from `src-restored/core`.
  - Locked export order and all event string values against the original module.
- `GameConstants`
  - Restored gameplay UI/layout constants used for start-screen camera focus and level-completed screenshot composition.
  - `FieldMediator` and `GenerateShareImageAction` now import `GameConstants` from `src-restored/core`.
  - Locked export order and full nested constant payload against the original module.
- `SIOConstants`
  - Restored State.io placement, reward, banner, offline-earnings, and reward-ad tracking constants, including the mutable `REWARD_AD_PLAYED` map.
  - `FieldMediator`, `GameModel`, `LevelEndActionSIO`, `Boosters`, and `WinStagePopup` now import `SIOConstants` from `src-restored/core`.
  - Locked export order, scalar values, empty placement object, independent reward-ad map shape, and reward-ad map side effects against the original module.
- `UIHelpers`
  - Restored shared UI helper exports from module `37725`: rankable-user guard, interstitial/reward helper calls, sound action lazy lookup, and `playUIClickSound()`.
  - Now resolves ad and sound actions through restored `RuntimeCore`.
  - `SettingsPopup`, `SettingsButton`, `BackButton`, `Booster`, `Boosters`, `LeaderBoardItem`, `StartScreen`, `InviteButton`, `LeaderboardButton`, and restored reward popups now consume restored helper behavior.
  - Locked export order, rankability checks, ad helper dispatch shape, sound lazy-get/no-action branches, and click sound id against the original module.
- `Localize`
  - Restored the localization template registry, default-locale normalization, language/region lookup, fallback order, and `86125` barrel surface.
  - `BootAction`, settings/gameplay UI, popup views, and remaining platform-facing restored modules now consume `src-restored/core/Localize`.
  - Seeds the old `70796` / `86125` module-cache entries with the restored class when they have not already been loaded, while keeping mixed-phase mock compatibility for focused tests.
  - Locked legacy-barrel identity, missing-key fallbacks, default templates, single-language localization, region disambiguation, English default fallback, and browser-language normalization against the original module.
- `SVGAssets`
  - Restored the shared SVG/image asset barrel, including `Images`, `SVG`, and raw `win_rays`, cancel, confirm, and no-ads icon exports.
  - Restored 20 shared sprite-loader SVG symbol modules into `src-restored/ui/SVGAssetSymbols.js`, generated from `src-readable` by `scripts/recover-svg-assets.mjs`.
  - The generated symbols preserve original runtime `id`, `viewBox`, `content`, `stringify()`, `toString()`, `destroy()`, and optional sprite-store registration behavior.
  - Restored settings-specific SVG sprite symbols (`Settings`, `Sounds`, `Music`, `Vibrate`) into `src-restored/ui/SettingsSVGSymbols.js`, generated from `src-readable` by `scripts/recover-settings-svg-symbols.mjs`.
  - Centralized the third-party sprite-loader runtime behind `src-restored/ui/svgSpriteRuntime.js`; generated symbol modules and their recovery scripts now use that named boundary instead of importing old module `95348` directly.
  - Settings UI now consumes restored local SVG symbols instead of old CJS icon modules `24368`, `39066`, `8928`, and `83354`.
  - Locked settings/sound/music/vibrate icon ids, shared SVG export shape, and image asset vnode output against the original modules.
  - Settings controls, back/coins buttons, score/popup leaves, and gameplay reward UI now import icon assets from `src-restored/ui/SVGAssets`.
  - The SVG render helper now uses restored `UIContext.Graphics` directly; focused UI tests mock `src-restored/ui/SVGAssets.js` explicitly when they need a narrowed SVG surface.
  - Locked export keys, representative icon vnode payloads, image paths, and raw symbol ids against the original module.
- `UIControls`
  - Restored the shared icon map, `Icon`, `Button`, and button type/shape constants used by settings controls, score/avatar leaves, and the UI barrel.
  - Restored the common `ToggleControl` leaf as `src-restored/ui/ToggleControl.js`; `UIContext` exports that restored module instead of keeping the old logic inline.
  - `ToggleControl` now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Restored the shared `Graphics` SVG helper as `src-restored/ui/Graphics.js`; `UIContext`, `SVGAssets`, and `UIControls` now reach the restored helper through the UI barrel path.
  - `ToggleControl` and `Graphics` now use native array destructuring and direct object props instead of TS helper output.
  - Restored the settings-visible `VersionLabel` leaf as `src-restored/ui/VersionLabel.js`, including FB SDK version suffix and localhost version fallback.
  - `VersionLabel` now uses direct object props instead of TS `__assign` helper output while preserving the original `class` prop.
  - `Icon` and `Button` now use native object rest/spread and direct object props instead of TS `__rest` / `__assign` helper output while preserving prop override order.
  - `UIContext`, `Score`, `ScoreGroup`, `Avatar`, and `AvatarGroup` now consume restored shared controls instead of importing old `37909_Icon.js` or defining Button/Toggle/Graphics/VersionLabel leaves inline.
  - Preserves the original SVG module wrapper shape passed into `Graphics`, so inline and sprite-use rendering keep the same payload as the webpack module.
  - Locked icon map keys, representative icon vnode payloads, inline/sprite Graphics rendering, button constants, string/custom-icon Button rendering, ToggleControl state/click behavior, and VersionLabel platform/version text against the original modules.
- `NumberFormat`
  - Restored shared numeric label helpers from module `38319`: digit-count CSS class selection and decimal-string truncation.
  - `Booster`, `Boosters`, and `LeaderBoardItem` now import these restored helpers instead of the CJS module.
  - Locked export order, falsy value handling, custom digit thresholds, numeric/string input handling, and custom separator truncation against the original module.
- `AudioModel` / `InitAudioAction` / `PlaySoundAction` / `PlayMusicAction` / `AudioModule`
  - Restored the settings-relevant audio state chain: persisted sound/music mute flags, background music activation, pause/ad blocking, sound-effect playback, Howl config initialization, and DI bindings.
  - Preserved original cookie key/event constants, background howl loop listener behavior, music fade duration scaling, sound-muted `-1` return path, and audio barrel export order.
  - `AudioModel` lazy howl injection and cookie DI metadata now go through restored `DecoratorHelpers.lazyInjectProperty` / `injectProperty` instead of inline TS `__metadata` helper output.
  - `InitAudioAction` and `PlaySoundAction` DI metadata now go through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - Locked audio model state transitions, sound/music action behavior, init path normalization, module bindings, and `Settings` constants against the original modules.
- `AnalyticsTracker` / analytics providers / `AnalyticsModule`
  - Restored the analytics fan-out tracker, GTAG provider, Firebase provider, analytics DI module, and analytics barrels.
  - `AnalyticsTracker` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - Firebase Analytics SDK access is centralized through `src-restored/core/FirebaseAnalyticsRuntime.js`; `FirebaseAnalyticsProvider` no longer imports old module `99261` directly.
  - `FirebaseAnalyticsProvider` now uses native object spread for `track -> logEvent` payload construction instead of TS `__assign` helper output.
  - `BootAction` now registers the restored `GTAGAnalyticsProvider`, and `GameModuleBase` now loads the restored `AnalyticsModule`.
  - Locked provider add/remove, event/value/payload normalization, GTAG dispatch, Firebase `track -> logEvent` payload shape, analytics binding topology, and barrel export order against the original modules.
- `BootAction`
  - Restored the top-level boot control flow: game config binding, analytics provider registration, template action, i18n templates, bus/login/assets preloading, social/game initialization, UI setup, async assets/ad post-processing, referral-reward init, main action, and background music activation.
  - Extracted the large boot config literal into `BootConfig.js`; the comparison test captures the original module's runtime config and deep-compares it with the restored config.
  - Page/social DI metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline `inject` / `__metadata` output.
  - Locked boot execution order, lazy action dispatches, page progress update, localizations, ad system-start timestamp, and restored `TypesFlow.boot` binding against the original module.
- `SetupSentryAction`
  - Restored the startup Sentry setup action: config lookup, environment stamping, BrowserTracing integration, trace sample rate, scope processor registration, and culprit/stack-frame filename rewriting.
  - Sentry SDK and tracing imports are now centralized through `src-restored/core/SentryRuntime.js` and `src-restored/core/SentryTracingRuntime.js`; `BootAction`, `BurstWaveAction`, and `PaymentsModelBase` share the same named Sentry boundary.
  - Sentry init options now use native object spread instead of TS `__assign` helper output while preserving decorator metadata.
  - DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `GameModuleBase` and `GameExports` now route `SetupSentryAction` through `src-restored/core`.
  - Locked initialized Sentry options, no-config branch, scope event-processor registration, and release-relative path normalization against the original module.
- `CreateFPSMeterAction` / `DebugModule`
  - Restored the optional startup FPS meter path: default debug settings, `FPSMeter` presence guard, canvas-relative DOM insertion, `show()`, one immediate `tick()`, and animation-frame loop scheduling.
  - Centralized the FPSMeter global installer behind `src-restored/core/FPSMeterRuntime.js`; `CreateFPSMeterAction` now uses that named side-effect boundary instead of importing old module `79349` directly.
  - `CreateFPSMeterAction` injectable marking now goes through restored `DecoratorHelpers.markInjectable`.
  - `DebugModule` now binds `fspMeterAction` to the restored `CreateFPSMeterAction`, and `GameExports` exports the restored action.
  - Locked debug binding topology, default/custom/no-meter branches, DOM calls, log call, meter constructor options, and frame scheduling against the original modules.
- `MainAction` / `GameModule`
  - Restored the launch path that initializes `TypesSocial.vibrationManager`, syncs cookies, conditionally waits for leaderboard sync, refreshes skins, and starts the level.
  - `MainAction` DI property metadata now goes through restored `DecoratorHelpers.injectProperty` instead of inline TS `__metadata` helper output.
  - `GameModule` keeps the original SIO module load order and routes `TypesFlow.mainAction`, `TypesNotification.start`, and preload bindings through restored targets while preserving original binding topology.
  - Locked solo/non-solo launch ordering, vibration initialization, cookie sync, skin refresh, level-start dispatch, and game-module binding topology against the original modules.
- `NotificationAction` / `NotificationsModule` / `NAStartSIO`
  - Restored start/finish/leave notification actions, payload construction, localized text substitution, image loading/cache behavior, and notification DI bindings.
  - Restored the SIO start-notification image branch that composes the current continent map sprite, 1200x627 background, circular avatar mask/ring, and renderer base64 extraction.
  - Notification and SIO-start DI metadata now goes through restored `DecoratorHelpers` instead of inline TS `__decorate` / `__metadata` helper output.
  - `SocialAppExports` now lazy-exports the restored notification actions/module, and `GameModule` rebinds `TypesNotification.start` to restored `NAStartSIO`.
  - Locked notification payload/text/image-cache behavior, finish-result I18N key selection, module binding topology, SIO map/avatar image composition, and fallback image behavior against the original modules.
- `GameFlowModule` / `GameModuleBase` / game barrels
  - Restored the base flow binding module and top-level game barrels, routing already-restored flow actions, `Settings`, and `GameModuleBase` through `src-restored`.
  - `GameFlowExports` now exports restored `CheatsAction` instead of re-exporting old `85162_CheatsAction.js`.
  - `GameModuleBase` now loads restored `AudioModule`, `AnalyticsModule`, `SetupSentryAction`, `DebugModule`, and `GameFlowModule` while preserving original core/app loading behavior and `template.action` lazy side effects.
  - Locked flow binding topology, game barrel export order, base module loading order, `startGame()` boot dispatch, and lazy sentry/FPS action behavior against the original modules.
- `CheatsAction`
  - Restored the debug shortcut action for registering two/three/four-finger touch callbacks and shift/alt pointer callbacks on the game canvas.
  - Preserved original fallback behavior where missing second/third callbacks reuse earlier callbacks.
  - Locked missing-canvas behavior, listener registration, touch callback routing, pointer callback routing, and export/prototype shape against the original module.
- `GameUIModule`
  - Restored the UI screen/popup binding module topology, with all current top-level screen and popup targets now routed through `src-restored/ui`.
  - `TypesUI.screen.GAMEPLAY` now binds to the restored `GamePlayScreen` view.
  - `TypesUI.screen.HOME` now binds to the restored `StartScreen` view.
  - `TypesUI.screen.LEADERBOARD` now binds to the restored `LeaderboardScreen` view.
  - `TypesUI.screen.SHOP` now binds to the restored `ShopScreen` view.
  - `PopupType.WIN_LEVEL` and `PopupType.WIN_STAGE` now bind to the restored `WinStagePopup` view.
  - `PopupType.BATTLE_RESULTS` now binds to the restored `BattleResultsPopup` view.
  - `PopupType.LEVEL_COMPLETED` now binds to the restored `ShareLevelResultPopup` view.
  - `PopupType.LOSE` now binds to the restored `LosePopup` view.
  - `PopupType.CONFIRM` now binds to the restored `ConfirmPopup` view.
  - `PopupType.GIFT` now binds to the restored `GiftPopup` view.
  - `PopupType.OFFLINE_EARNINGS` now binds to the restored `OfflineEarningsPopup` view.
  - `PopupType.SETTINGS` now binds to the restored `SettingsPopup` view.
  - Locked UI binding order and binding tokens against the original module, allowing only restored popup targets to change.
- `HTMLUIModule`
  - Restored the HTML UI action binding module topology.
  - `TypesUI.uiRootClass` now binds to the restored `UIRoot` component.
  - `TypesUI.setupAction` now binds to the restored `SetupUIAction` class.
  - `TypesUI.startScreenAction` now binds to the restored `StartScreenAction` class.
  - `TypesUI.endScreenAction` now binds to the restored `EndScreenAction` class.
  - Locked binding order and tokens against the original module, allowing only restored action targets to change.
- `UIRoot`
  - Restored the HTML UI root component with the original Inversify provider and fixed child layer order.
  - Preserved root child ordering: alerts overlay, social overlay, pause overlay, popups, screens, and social banners.
  - Uses restored `AlertsOverlay`, `SocialOverlay`, `PauseOverlay`, `Popups`, `Screens`, and `SocialBanners` containers for UI routing and overlays.
  - Now provides the DI container from restored `RuntimeCore` instead of importing `44656__mod.js` directly.
  - Now uses direct object props instead of TS `__assign` helper output.
  - Locked rendered vnode structure against the original module.
- `SocialBanners`
  - Restored the optional root-level custom banner slot, including `TypesUI.customComponent.SOCIAL_BANNERS` lazy lookup and empty return when no custom component is bound.
  - Locked bound and unbound rendering behavior against the original module.
- `UIContext`
  - Restored the shared HTML UI context/barrel surface from `83430_InversifyContext.js`, including `InversifyContext`, `useInjection`, `useEventListener`, `visibilityEffect`, `UIEvents`, button constants, and the small shared UI components.
  - Restored the `InversifyContext` root and `UIEvents` constants as independent modules, with `UIContext` preserving the original barrel surface.
  - Restored the hook barrel modules `76702`, `50961`, `55854`, and `19562` as `src-restored/ui/UIHooks.js`, while preserving the `UIContext` export surface.
  - Restored the local Preact hooks runtime from `30396` as `src-restored/ui/preactHooks.js`; `UIHooks` now consumes this local runtime instead of importing the old hook barrel.
  - `UIHooks` now also exposes the basic React hook facade used by restored settings/start/popup UI (`useState`, `useCallback`, `useEffect`, and `useLayoutEffect`).
  - `UIHooks.visibilityEffect` now uses native array destructuring instead of TS `__read` helper output.
  - Removed the old `86178`, `83430`, `19562`, and central `30396` fallback imports from restored `UIContext`/`UIHooks`; hook compatibility now stays inside restored code via the local `useLayoutEffect`/`useEffect` adapter.
  - `UIContext` now uses native array destructuring, object rest/spread, and direct object props instead of TS `__read` / `__rest` / `__assign` helper output.
  - Restored `GlobalEventProviderComponent` and `CrossPromoComponent` as independent modules and kept the shared settings/popup barrel routed through restored UI code.
  - `GlobalEventProviderComponent` dispatcher lazy injection now goes through restored `DecoratorHelpers.lazyInjectToken` while preserving the original optional try/catch boundary.
  - `CrossPromoComponent` preserves normal and ODR asset-origin handling while remaining a presentational leaf; the broader cross-promo module stays deferred.
  - Restored modules now import UI hooks/events from `src-restored/ui/UIContext.js`; unresolved commercial/platform leaves still remain deferred or are exposed through leaf-level fallbacks where needed.
  - Uses lazy getters for component/action exports so the barrel can load in focused tests without pulling unrelated platform branches.
  - Locked export keys, restored context/event module identity, UI event values, button constants, hook dispatcher/timer behavior, direct `Count` / `Claim` / `ShareComponent` vnode output, `HTMLUIModule` identity, event-provider listener lifecycle, and Preact hook runtime scenarios against the original module.
  - Updated focused popup/screen/control comparison tests to mock restored `UIContext` directly where they intentionally isolate component behavior from the shared hook implementation.
- `AlertsOverlay`
  - Restored custom alert routing, ad-start dimming, ad-ended reward failure/no-fill/cancelled messages, status-alert removal, and status-alert view rendering.
  - Now imports the restored status-alert compatibility barrel instead of old `63386_StatusAlertService.js`.
  - Now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now uses direct vnode props and state object spread instead of TS `__assign` helper output.
  - Preserved original default custom-alert type (`info`) and reward-only ad-ended alert behavior.
  - Locked event subscription callbacks, status-alert service calls, localized ad messages, state updates, and rendered vnode structure against the original module.
- `StatusAlert`
  - Restored the transient alert subsystem: store action constants/reducer, service singleton, UUID generation, view subscription, container mapping, item animation/close behavior, text normalization, default options, and CSS variant helpers.
  - Split shared default options into `StatusAlertOptions.js` to preserve webpack-style circular behavior safely in readable CommonJS.
  - Store/service/container/item now use native array spread, object spread, and direct vnode props instead of TS `__read` / `__spreadArray` / `__assign` helper output.
  - Locked helper mappings, store dispatch/subscribe behavior, service payloads, barrel export shape, container/item vnode structure, item lifecycle timers, and view subscription cleanup against the original modules.
- `SocialOverlay`
  - Restored social model lazy lookup, show/hide event subscription, cleanup unsubscription, and active CSS state rendering.
  - Now resolves the social model through restored `RuntimeCore`.
  - Now routes local `useState` / `useEffect` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Preserved original behavior where no social model skips effect registration and renders from local state only.
  - Locked rendered vnode structure and social event side effects against the original module.
- `PauseOverlay`
  - Restored pause-state event listener, social `showPauseOverlay` gate, localized title, hidden CSS state, and click-to-run `TypesSocial.pauseAction` with `false`.
  - Now resolves pause events/actions through restored `RuntimeCore`.
  - Now routes local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - Now uses direct object props instead of TS `__assign` helper output.
  - Preserved original behavior where disabling `showPauseOverlay` skips the pause listener but keeps click resume available.
  - Locked rendered vnode structure, event callback state updates, and click side effects against the original module.
- `Popups` / `Screens`
  - Restored event-driven UI route containers for popup and screen changes.
  - Now resolve routed popup/screen components through restored `RuntimeCore`.
  - Now route local `useState` usage through restored `UIHooks` instead of importing the old React hooks barrel directly.
  - `Popups` and `Screens` now use native object spread for route-state updates instead of TS `__assign` helper output.
  - Preserved hook state initialization, listener registration with empty dependency arrays, `lazyGet(id)` component resolution, and current-component rendering via Preact `h`.
  - Locked listener registration, state setter payloads, null route handling, and current-component rendering against the original modules.
- `CoreGameModule`
  - Restored the main gameplay DI module and migrated available gameplay bindings to restored classes while preserving original binding order, tokens, singleton scopes, and mediator activations.
  - Now reads `CANVAS_ID` through restored `RuntimeCore` for input manager activation.
  - Tournament action bindings now resolve through restored `TournamentActions` instead of importing the old `68719` barrel.
  - Restored bindings now cover `StartGameAction`, `ShowWinPopupAction`, `ShowGiftPopupAction`, `BattleResultsPopupAction`, `LevelCompletedPopupAction`, `LoadLevelAction`, `SubmitContextScoreAction`, `LevelStartActionSIO`, `LevelRestartActionSIO`, `LevelNextActionSIO`, `LevelEndActionSIO`, `PlayWithOpponentActionSIO`, `StageEndAction`, `ScreenShotActionSIO`, `GameModel`, `ContinentModel`, bot logic/calculation, field lifecycle, field/arrow/state views, map generation/share actions, burst action, skin manager, input manager, and gameplay entity classes.
  - Locked binding topology against the original module with a registry recorder and verified 42 key tokens resolve to restored targets.
- `TournamentActions`
  - Restored the Facebook tournament post-score, create, and share actions plus the `68719` barrel export surface.
  - Preserved FB-only guards, score/history payload ordering, tournament image extraction timing, warning branches, static post image dimensions, and DI metadata.
  - Locked class shape, non-FB fallbacks, post/create/share payloads, and `CoreGameModule` restored binding targets against the original modules.
- `DecoratorHelpers`
  - Added a readable decorator wrapper for DI property injection and `design:type` metadata.
  - Loads `RuntimeCore.lazyInject` lazily inside lazy-injection wrappers so root classes such as `Action` can use `markInjectable` without creating a RuntimeCore import cycle.
  - Preserves TypeScript `__metadata` no-op behavior when `Reflect.metadata` is unavailable.
  - Adds `defineDecoratedProperty` for modules whose original TS decorator output defines a visible prototype property.
  - Adds `injectToken` and `lazyInjectToken` for original decorator sites that did not emit design metadata.
  - `UserPic` and `View` now use `applyClassMetadata` for class-level `design:paramtypes` metadata.
  - `AudioModel` and `Spinner` now use `lazyInjectProperty` for lazy sprite/howl injection.
  - The boot/auth/user-data/SIO-root/UI-event-provider/notification cleanup batches also route `BootAction`, `AuthActionBase`, `SIORootMediator`, `UserDataBase`, `UserDataYandex`, `UserDataWeb`, `UserDataLocalStorage`, `GlobalEventProviderComponent`, `NotificationAction`, `NAStart`, `NAFinish`, `NALeave`, and `NAStartSIO` through these wrappers, clearing the remaining non-commercial core decorator residue.
  - `Action`, `WaitAction`, `StartScreenAction`, `RootMediator`, `RootView`, `PageModel`, `BackendModel`, `HTTPRequest`, `CreateFPSMeterAction`, `PreloadAssetsAction`, `LevelStartAction`, `LevelEndAction`, `PauseAction`, `ScreenContainer`, `BaseScreen`, `ContinentModel`, `PCell`, `Mediator`, `CircleAvatar`, `ProgressBar`, `EventDispatcher`, `GlobalEventProvider`, `Field`, `DestroyFieldAction`, `LoadLevelAction`, `ArrowView`, `Overlay`, `CheatsAction`, `AppModel`, `GTAGAnalyticsProvider`, `FirebaseAnalyticsProvider`, `AnalyticsTracker`, `PlayMusicAction`, `LevelRestartAction`, `CookieModel`, `BurstWaveAction`, `EndScreenAction`, `SetupSentryAction`, `LoginAction`, `StartGameAction`, `MainAction`, `LevelStartActionSIO`, `LevelRestartActionSIO`, `LevelNextAction`, `LevelNextActionSIO`, `PlayWithOpponentAction`, `PlayWithOpponentActionSIO`, `StageEndAction`, `LevelEndActionSIO`, `SubmitContextScoreAction`, `ShowWinPopupAction`, `ShowGiftPopupAction`, `BattleResultsPopupAction`, `LevelCompletedPopupAction`, `Building`, `GameModel`, `BotLogic`, `BotCalculationLogic`, `Fighter`, `Spawner`, `Population`, `CookieModelBase`, `MetaModel`, `SkinManager`, `SpritesPool`, `StateShapeView`, `CapitalView`, `FieldView`, `FieldMediator`, `SIORootView`, `SIOPreloadAssetsAction`, `ArrowsView`, `ArrowsMediator`, `FingerView`, `TutorialFingerView`, `InputManager`, `SetupUIAction`, `GenerateMapSpriteAction`, `GenerateMapShapeAction`, `FighterDeathEffectAction`, `ScreenshotAction`, `ScreenShotActionSIO`, `InitAudioAction`, and `PlaySoundAction` now use `injectProperty` / `lazyInjectProperty` / `injectToken` / `lazyInjectToken` / `markInjectable` instead of inline TS decorator helper output.
  - Locked the migrated classes with targeted action, DI binding, component-key, and view/system comparisons.
- `TSHelpers`
  - Restored the TypeScript runtime helper barrel from `70655__mod.js`, including class inheritance, object spread/rest, decorators/metadata, async/generator helpers, iterable spread helpers, module import helpers, and private-field helpers.
  - All restored `core` and `ui` modules now import `__assign`, `__read`, `__spreadArray`, `__awaiter`, `__generator`, `__decorate`, `__metadata`, and related helpers from `src-restored/core/TSHelpers.js` instead of the old CJS snapshot.
  - Locked export surface and representative helper behavior against the original module with `node test/compare-ts-helpers.js`.
- `classNames`
  - Restored the class-name combiner from `94184__mod.js`, preserving string/number passthrough, recursive array flattening, truthy object-key selection, and custom `toString()` handling.
  - All restored UI modules now import `classNames` from `src-restored/ui/classNames.js` instead of the old CJS snapshot.
  - Locked export/default identity and representative input cases against the original module with `node test/compare-class-names.js`.
- `jsxRuntime`
  - Restored the JSX vnode runtime wrapper from `16584__mod.js`, preserving `Fragment`, shared `jsx`/`jsxs`/`jsxDEV` identity, `ref` extraction, key/source/self fields, default-prop filling, vnode id sequencing, and Preact `options.vnode` hook dispatch.
  - All restored UI modules now import `jsxRuntime` from `src-restored/ui/jsxRuntime.js` instead of the old CJS snapshot.
  - Locked export surface and representative vnode behavior against the original module with `node test/compare-jsx-runtime.js`.
- `styleSideEffects`
  - Restored 40 empty extracted-CSS side-effect modules as `src-restored/ui/styleSideEffects.js`, preserving their runtime-empty export behavior while making the style boundary explicit.
  - All restored UI bare style imports now route through the local marker instead of directly loading empty CJS snapshot modules.
  - Locked the original modules' empty export shape and local marker behavior with `node test/compare-style-side-effects.js`.
- `UIControlIcons`
  - Restored the 14 SVG string modules used by `UIControls` into `src-restored/ui/UIControlIcons.js`, generated from `src-readable` by `scripts/recover-ui-control-icons.mjs`.
  - Preserved the original `__importStar(svgString)` module shape, including enumerable string-index properties and the `default` SVG string, so existing `Graphics` vnode payloads remain identical.
  - Locked SVG string equality and button/icon rendering behavior with `node test/compare-ui-control-icons.js` and `node test/compare-ui-controls.js`.

## Residual CJS Boundary

- `scripts/report-restoration-residuals.mjs` regenerates `src-restored/_RESIDUAL_CJS_REPORT.md` from the current restored source and status table.
- Current restored-module residuals are classified as compatibility cache seeds, third-party runtime boundaries, or deferred commercial/platform surfaces; no residual is currently marked `needs review`. The latest report shows 35 restored-module residual references, 6 external/runtime CJS references, and 7 direct old hook references.
- The actionable residual count is currently 0; remaining classified boundaries are 3 compatibility cache seeds, 0 mixed-phase legacy bridge references, 16 third-party runtime boundaries, and 23 deferred commercial/platform references.
- Direct old React-hook barrel references are now limited to deferred shop/leaderboard/skin surfaces.
- The report intentionally separates external runtime snapshot imports, such as Pixi/GSAP/Inversify/Sentry/Howler, Preact core, FPS/debug helpers, and remaining image/platform assets, from hand-restored module regressions.

## Restoration Scope Audit

- `scripts/report-restoration-scope.mjs` regenerates `src-restored/_RESTORATION_SCOPE_REPORT.md` from `src-readable/` plus the hand-restored module table above.
- Current scope report covers 606 readable webpack modules and 357 hand-restored module ids.
- Unrestored class/decorator/async helper residue is currently limited to 12 modules: 11 deferred commercial/platform modules and 1 third-party/runtime boundary (`51389_Container.js` / Inversify container).
- Actionable needs-review modules are currently 0; modules outside the hand-restored set are classified as constant/utility leaves, style/asset boundaries, deferred commercial/platform modules, or third-party/runtime boundaries.

## Verification Chain

- `node scripts/recover-readable.mjs`
- `node scripts/build-module-graph.mjs`
- `node scripts/recover-cjs.mjs`
- `node scripts/recover-ui-control-icons.mjs`
- `node scripts/recover-svg-assets.mjs`
- `node scripts/check-cjs-load.mjs`
- `node scripts/report-restoration-residuals.mjs`
- `node scripts/report-restoration-scope.mjs`
- `node test/compare-ts-helpers.js`
- `node test/compare-jsx-runtime.js`
- `node test/compare-class-names.js`
- `node test/compare-style-side-effects.js`
- `node test/compare-ui-control-icons.js`
- `node test/compare-svg-asset-symbols.js`
- `node test/compare-component-keys.js`
- `node test/compare-arrows-view-mediator.js`
- `node test/compare-population.js`
- `node test/compare-building.js`
- `node test/compare-building-queries.js`
- `node test/compare-continent-model.js`
- `node test/compare-display-system.js`
- `node test/compare-capital-state-shape-views.js`
- `node test/compare-display-framework.js`
- `node test/compare-pixi-display-classes.js`
- `node test/compare-pixi-root-preload.js`
- `node test/compare-sio-pixi-root.js`
- `node test/compare-field-view-mediator.js`
- `node test/compare-finger-views.js`
- `node test/compare-input-system.js`
- `node test/compare-input-manager.js`
- `node test/compare-decision-type.js`
- `node test/compare-bstate.js`
- `node test/compare-bot-calculation.js`
- `node test/compare-bot-calculation-calculate.js`
- `node test/compare-commands-generator.js`
- `node test/compare-bot-utility.js`
- `node test/compare-bot-presets.js`
- `node test/compare-game-model.js`
- `node test/compare-fighter.js`
- `node test/compare-spawner.js`
- `node test/compare-fighter-group.js`
- `node test/compare-group-model.js`
- `node test/compare-fighter-view-death-effect.js`
- `node test/compare-fighter-groups-system.js`
- `node test/compare-generate-map-sprite-action.js`
- `node test/compare-generate-map-shape-action.js`
- `node test/compare-screenshot-actions.js`
- `node test/compare-start-actions.js`
- `node test/compare-setup-ui-action.js`
- `node test/compare-popup-actions.js`
- `node test/compare-level-completed-popup-action.js`
- `node test/compare-load-level-action.js`
- `node test/compare-end-screen-action-html-ui.js`
- `node test/compare-ui-context.js`
- `node test/compare-preact-hooks.js`
- `node test/compare-localize-svg-assets.js`
- `node test/compare-ui-controls.js`
- `node test/compare-ui-root.js`
- `node test/compare-overlays.js`
- `node test/compare-status-alerts.js`
- `node test/compare-popup-screen-containers.js`
- `node test/compare-battle-results.js`
- `node test/compare-battle-results-popup.js`
- `node test/compare-share-level-result-popup.js`
- `node test/compare-win-lose-popups.js`
- `node test/compare-confirm-cancel-buttons.js`
- `node test/compare-confirm-gift-offline-popups.js`
- `node test/compare-gift-leaves.js`
- `node test/compare-multiply-arrow.js`
- `node test/compare-multiply-bonus.js`
- `node test/compare-shared-ui-controls.js`
- `node test/compare-debug-panel-gameplay.js`
- `node test/compare-start-gameplay-screens.js`
- `node test/compare-startscreen-buttons.js`
- `node test/compare-participants.js`
- `node test/compare-svg-capturing-progress.js`
- `node test/compare-home-display-components.js`
- `node test/compare-leaderboard-shop-settings-ui.js`
- `node test/compare-cross-promo-component.js`
- `node test/compare-social-banners.js`
- `node test/compare-types-game.js`
- `node test/compare-game-events.js`
- `node test/compare-game-constants.js`
- `node test/compare-sio-constants.js`
- `node test/compare-core-runtime.js`
- `node test/compare-wait-action.js`
- `node test/compare-runtime-utils.js`
- `node test/compare-math-utils.js`
- `node test/compare-ui-constants.js`
- `node test/compare-popup-type.js`
- `node test/compare-ui-helpers.js`
- `node test/compare-number-format.js`
- `node test/compare-audio-settings-system.js`
- `node test/compare-analytics-system.js`
- `node test/compare-boot-action.js`
- `node test/compare-setup-sentry-action.js`
- `node test/compare-fps-debug-module.js`
- `node test/compare-cheats-action.js`
- `node test/compare-app-backend-models.js`
- `node test/compare-auth-app-module.js`
- `node test/compare-main-action.js`
- `node test/compare-game-module.js`
- `node test/compare-tournament-actions.js`
- `node test/compare-notification-actions.js`
- `node test/compare-na-start-sio.js`
- `node test/compare-game-module-base-exports.js`
- `node test/compare-leaderboard-components.js`
- `node test/compare-leaderboard-platform.js`
- `node test/compare-yandex-platform-adapters.js`
- `node test/compare-social-yandex-modules.js`
- `node test/compare-shop-components.js`
- `node test/compare-game-ui-module.js`
- `node test/compare-generate-share-image-action.js`
- `node test/compare-social-flow-actions.js`
- `node test/compare-play-with-opponent-actions.js`
- `node test/compare-pause-stage-end-actions.js`
- `node test/compare-level-restart-next-actions.js`
- `node test/compare-level-end-actions.js`
- `node test/compare-field-lifecycle.js`
- `node test/compare-level-start-action-sio.js`
- `node test/compare-core-game-module.js`
- `node test/compare-submit-context-score-action.js`
- `node test/compare-pcell.js`
- `node test/compare-fighter-movement-system.js`
- `node test/compare-path-holder.js`
- `node test/compare-paths-generation-system.js`
- `node test/compare-burst-wave-action.js`
- `node test/compare-init-stage-system.js`
- `node test/compare-game-play-system.js`
- `node test/compare-population-system.js`
- `node test/compare-skin-manager.js`
- `node test/compare-bot-logic.js`
- `node test/compare-bots-system.js`
- `node test/compare-level-end-system.js`
- `node test/compare-tutorial-system.js`
- `node test/compare-update-skins-system.js`
- `node scripts/report-target-restoration-scope.mjs`

## Next Priority Modules

1. Preserve the target-scope boundary in `src-restored/_TARGET_SCOPE_REPORT.md`: core gameplay and settings should stay fully restored with comparison proof.
2. Keep old runtime imports in deferred advertising/share/leaderboard/payments/shop/Yandex adapter branches unless a shared core dependency requires touching them.
3. Defer ads, social-platform adapters, payments, shop, and leaderboard-specific cleanup unless they block core gameplay or settings.
