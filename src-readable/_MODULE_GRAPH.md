# Module Dependency Graph

## Summary

- Source: `src-readable/`
- Modules: 606
- Dependency edges: 2429
- Modules with no outgoing dependencies: 175
- Modules with no incoming dependencies: 10

## Categories

| Category | Modules | Outgoing edges | Incoming edges |
|----------|---------|----------------|----------------|
| Ads / Analytics | 11 | 36 | 14 |
| Barrel / Re-export | 257 | 497 | 1103 |
| Bot / AI | 7 | 40 | 13 |
| Building / Population | 7 | 49 | 29 |
| ECS / Framework | 18 | 52 | 34 |
| Fighter / Combat | 12 | 99 | 36 |
| Game Flow | 31 | 250 | 76 |
| Input / Interaction | 6 | 33 | 12 |
| Map / Path | 8 | 62 | 22 |
| Other | 182 | 886 | 488 |
| Platform / Social | 30 | 164 | 46 |
| Third Party / Runtime | 6 | 43 | 505 |
| UI / Popup | 31 | 218 | 51 |

## Core Restoration Neighborhood

| Module | Category | Direct deps | Direct dependents | Key deps | Key dependents |
|--------|----------|-------------|-------------------|----------|----------------|
| 26511_Building, ACTIVE_TAG | Building / Population | 19 | 7 | 3565_BotLogic<br>6538_SIDES, SVG_SIZE, TYPES, MIME_TYPES, EMPTY, WHITE, BATCHABLE_SIZE<br>26630_Population, BLOCK_POPULATION_SECONDS, SPAWN_AMOUNT_ON_OCCUPATION<br>36596_PlayerType<br>44656__mod<br>46697_Fighter, TAG, TAG_DIED, DEFAULT_SIZE, NORMAL_SPEED, DISTANCE_TOLERANCE<br>52057_Spawner, UNITS_PER_WAVE, BURST_WAVES_LEN<br>53351_CapitalView | 10754_TutorialSystem<br>28300_PopulationSystem<br>36637_ContinentModel<br>46697_Fighter, TAG, TAG_DIED, DEFAULT_SIZE, NORMAL_SPEED, DISTANCE_TOLERANCE<br>59201_CoreGameModule<br>59474_BotCalculationLogic, Type, Owner<br>93972_GamePlaySystem, GamePlayEvent |
| 26630_Population, BLOCK_POPULATION_SECONDS, SPAWN_AMOUNT_ON_OCCUPATION | Building / Population | 4 | 8 | 6538_SIDES, SVG_SIZE, TYPES, MIME_TYPES, EMPTY, WHITE, BATCHABLE_SIZE<br>55132__mod<br>70655__mod<br>86700_MetadataReader, LazyServiceIdentifer, ContainerModule, AsyncContainerModule, TargetTypeEnum, BindingTypeEnum, BindingScopeEnum, Container, METADATA_KEY | 26511_Building, ACTIVE_TAG<br>28300_PopulationSystem<br>36637_ContinentModel<br>52057_Spawner, UNITS_PER_WAVE, BURST_WAVES_LEN<br>59201_CoreGameModule<br>59474_BotCalculationLogic, Type, Owner<br>88969_DisplaySystem<br>93972_GamePlaySystem, GamePlayEvent |
| 47572_InputSystem | Input / Interaction | 9 | 2 | 6538_SIDES, SVG_SIZE, TYPES, MIME_TYPES, EMPTY, WHITE, BATCHABLE_SIZE<br>44656__mod<br>47283_GameEvents<br>53351_CapitalView<br>62260_ActiveBuildingsQuery<br>70655__mod<br>75111__mod<br>77577__mod | 83847_InputManager<br>94572_GameModel, LEVELS_PREDEFINED, DEFAULT_CTX_DATA |
| 59474_BotCalculationLogic, Type, Owner | Bot / AI | 17 | 2 | 20811_GroupModel<br>25583_DecisionType<br>26511_Building, ACTIVE_TAG<br>26630_Population, BLOCK_POPULATION_SECONDS, SPAWN_AMOUNT_ON_OCCUPATION<br>35081_BotUtility<br>36596_PlayerType<br>45329_BState<br>52057_Spawner, UNITS_PER_WAVE, BURST_WAVES_LEN | 3565_BotLogic<br>59201_CoreGameModule |
| 94572_GameModel, LEVELS_PREDEFINED, DEFAULT_CTX_DATA | Game Flow | 31 | 26 | 196_DestroyFieldAction<br>6538_SIDES, SVG_SIZE, TYPES, MIME_TYPES, EMPTY, WHITE, BATCHABLE_SIZE<br>9964_AllBuildingsQuery<br>10754_TutorialSystem<br>11073_InitStageSystem<br>28300_PopulationSystem<br>30107_PopupType<br>36356_MetaModel | 47_TournamentPostScoreAction<br>6248_SubmitContextScoreAction<br>10379_BattleResultsPopupAction<br>11617_DebugLevelPicker<br>12079_StageEndAction<br>15006_ArrowsMediator<br>15872_LevelNextActionSIO<br>24294_LevelEndActionSIO |

## Most Dependencies

| Module | Category | Direct deps |
|--------|----------|-------------|
| 59201_CoreGameModule | Other | 57 |
| 94572_GameModel, LEVELS_PREDEFINED, DEFAULT_CTX_DATA | Game Flow | 31 |
| 36622_SVG, Images | Other | 27 |
| 96648_StartScreen | Game Flow | 24 |
| 46696_WinStagePopup | Other | 21 |
| 96126_OfflineEarningsPopup | Other | 21 |
| 56184_GiftPopup | UI / Popup | 20 |
| 26511_Building, ACTIVE_TAG | Building / Population | 19 |
| 86700_MetadataReader, LazyServiceIdentifer, ContainerModule, AsyncContainerModule, TargetTypeEnum, BindingTypeEnum, BindingScopeEnum, Container, METADATA_KEY | Third Party / Runtime | 19 |
| 86939__mod | Barrel / Re-export | 19 |
| 88183__mod | Barrel / Re-export | 18 |
| 56959__mod | Barrel / Re-export | 17 |
| 59474_BotCalculationLogic, Type, Owner | Bot / AI | 17 |
| 90505__mod | Third Party / Runtime | 17 |
| 8189_ShareLevelResultPopup | Other | 16 |
| 67884_Boosters | Other | 16 |
| 37532_GameUIModule | Game Flow | 15 |
| 53841_LosePopup | Other | 15 |
| 11470_GenerateMapSpriteAction | Map / Path | 14 |
| 40470_FieldMediator | Other | 14 |

## Most Dependents

| Module | Category | Direct dependents |
|--------|----------|-------------------|
| 70655__mod | Third Party / Runtime | 308 |
| 86700_MetadataReader, LazyServiceIdentifer, ContainerModule, AsyncContainerModule, TargetTypeEnum, BindingTypeEnum, BindingScopeEnum, Container, METADATA_KEY | Third Party / Runtime | 145 |
| 44656__mod | Barrel / Re-export | 125 |
| 86178__mod | Barrel / Re-export | 123 |
| 16584__mod | Barrel / Re-export | 94 |
| 95781_TypesGame | Other | 68 |
| 94184__mod | Barrel / Re-export | 63 |
| 83430_InversifyContext | Other | 52 |
| 84194__mod | Barrel / Re-export | 48 |
| 30396__mod | Barrel / Re-export | 36 |
| 48616__mod | Barrel / Re-export | 36 |
| 6538_SIDES, SVG_SIZE, TYPES, MIME_TYPES, EMPTY, WHITE, BATCHABLE_SIZE | Third Party / Runtime | 33 |
| 86125__mod | Barrel / Re-export | 28 |
| 94572_GameModel, LEVELS_PREDEFINED, DEFAULT_CTX_DATA | Game Flow | 26 |
| 87854__mod | Barrel / Re-export | 24 |
| 95348__mod | Barrel / Re-export | 24 |
| 36622_SVG, Images | Other | 21 |
| 55132__mod | Barrel / Re-export | 20 |
| 75111__mod | Barrel / Re-export | 19 |
| 6867_NON_CUSTOM_TAG_KEYS, POST_CONSTRUCT, DESIGN_PARAM_TYPES, PARAM_TYPES, TAGGED_PROP, TAGGED, MULTI_INJECT_TAG, INJECT_TAG, OPTIONAL_TAG, UNMANAGED_TAG, NAME_TAG, NAMED_TAG | Other | 18 |
