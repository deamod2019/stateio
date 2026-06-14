# State.io 源码还原 — 交接文档

## 一、项目概述

**State.io** 是一款领地征服策略游戏（开发商 Azur Games），部署在 Yandex Games 平台。本项目是其 Web 版本的本地化改版（中文），核心玩法为"拖拽派兵→攻占领地→全图征服"。

### 项目路径

```
/Users/deamodzhou/Documents/stateio/
```

### 技术栈

| 组件 | 技术 |
|------|------|
| 渲染引擎 | PixiJS (v6, 模块 `6538`) |
| 动画 | GSAP (模块 `25317`) |
| IoC 容器 | Inversify (模块 `86700`) |
| 音频 | Howler.js (模块 `41766`) |
| 错误追踪 | Sentry (模块 `90505`) |
| 分析 | Firebase Analytics + gtag |
| 打包 | Webpack 5 |
| 源语言 | TypeScript（编译为 ES5） |
| 架构模式 | MVC (Mediator/View) + ECS (Entity/Component/System) |

---

## 二、已完成的工作

### 2.1 自动反编译

用 acorn 解析 `main.js` (1.9MB, 单行 minified webpack bundle)，拆分为独立模块文件：

| 指标 | 数值 |
|------|------|
| 产出文件 | 607 个 `.js` 文件 |
| 有命名导出的模块 | 347 个 |
| 唯一类名 | 452 个 |
| Barrel/re-export 模块 | 259 个 |
| 产出总大小 | 4.6 MB（已 prettier 格式化） |

### 2.2 产出位置

```
/Users/deamodzhou/Documents/stateio/src-recovered/
├── _index.json          # 全部 606 个模块的 ID→文件名→导出名映射
├── _exports.json        # 类名→模块ID 的反向查找表
├── _SUMMARY.md          # 按功能分类的模块列表
├── 0000_webpack_runtime.js   # Webpack 引导代码
├── 952_PreloadAssetsAction.js # 模块示例
├── 3565_BotLogic.js
├── ...（共 607 个文件）
```

### 2.3 文件命名规则

```
{moduleId}_{PrimaryExportName}.js
```

- 有导出类名的模块：如 `46697_Fighter.js`
- 无导出（barrel 模块）：如 `550__mod.js`

### 2.4 每个文件的结构

```javascript
/**
 * Webpack Module #46697
 * @exports Fighter, TAG, TAG_DIED, DEFAULT_SIZE, NORMAL_SPEED, DISTANCE_TOLERANCE
 * @esmodule
 */
// (e/*module*/, t/*exports*/, n/*__require*/) =>
{
  "use strict"
  Object.defineProperty(t, "__esModule", { value: !0 })
  // ... 模块代码 ...
  t.Fighter = h   // 导出赋值
}
```

### 2.5 未完成的工作

以下变换尚未执行，需要后续处理：

---

## 三、待执行的 AST 变换

### 3.1 TypeScript 编译产物还原

原始 TypeScript 被 `tsc` 编译为 ES5，产生了以下模式。需要用 AST 工具（如 jscodeshift、babel、ts-morph）或正则替换还原。

#### (a) `__extends` → `class extends`

**当前**（出现 136 次）:
```javascript
var t = (function (e) {
  function t() {
    return null !== e && e.apply(this, arguments) || this
  }
  return (i.__extends(t, e), /* methods */ t)
})(ParentClass)
```

**目标**:
```javascript
class ChildClass extends ParentClass {
  constructor() { super() }
  /* methods */
}
```

#### (b) `__awaiter` / `__generator` → `async/await`

**当前**（出现 241 次）:
```javascript
t.prototype.execute = function (e) {
  return i.__awaiter(this, void 0, void 0, function () {
    return i.__generator(this, function (i) {
      switch (i.label) {
        case 0: return [4, someAsyncCall()]
        case 1: i.sent(); return [2]
      }
    })
  })
}
```

**目标**:
```javascript
async execute(e) {
  await someAsyncCall()
}
```

> ⚠️ `__generator` 的状态机还原是最复杂的变换，建议用 [ts-decompiler](https://github.com/nicolo-ribaudo/tc39-proposal-await-dictionary) 或手动逐函数还原。

#### (c) `__decorate` → TypeScript 装饰器

**当前**（出现 261 次）:
```javascript
i.__decorate(
  [(0, u.injectable)()],
  t
)
i.__decorate(
  [(0, u.inject)(s.TypesGame.botCalculationLogic),
   i.__metadata("design:type", Object)],
  t.prototype, "_logic", void 0
)
```

**目标**:
```typescript
@injectable()
class BotLogic {
  @inject(TypesGame.botCalculationLogic)
  private _logic: BotCalculationLogic
}
```

#### (d) `__read` / `__spread` → 解构/展开

**当前**:
```javascript
var _a = i.__read(someArray, 2), x = _a[0], y = _a[1]
```

**目标**:
```javascript
const [x, y] = someArray
```

#### (e) `void 0` → `undefined`

**当前**: `void 0 === e && (e = 1)`  
**目标**: `if (e === undefined) e = 1`  
（或更好：`e = e ?? 1`）

#### (f) `!0` / `!1` → `true` / `false`

全局替换即可。

---

### 3.2 Webpack 模块引用还原

当前模块间引用使用数字 ID：
```javascript
var r = n(84194)   // n 是 __webpack_require__
var o = n(44656)
```

需要用 `_exports.json` 查找表替换为可读引用：
```javascript
var r = require("./84194_Random")   // 或直接用类名
var o = require("./44656_Core")
```

**查找表位置**: `src-recovered/_exports.json`

关键模块 ID 对照：

| 模块 ID | 实际内容 | 说明 |
|---------|---------|------|
| `70655` | tslib (`__extends`, `__awaiter` 等) | TypeScript 运行时辅助 |
| `86700` | Inversify (`injectable`, `inject`, `Container`) | IoC 容器 |
| `6538` | PixiJS (`Sprite`, `Container`, `Graphics`, `Ticker`) | 渲染引擎 |
| `25317` | GSAP (`gsap`, `Sine`) | 动画库 |
| `41766` | Howler.js (`Howl`, `Howler`) | 音频库 |
| `44656` | Core (`di`, `Action`, `GlobalEventProvider`, `lazyInject`) | 应用核心 |
| `84194` | Utils (`log`, `Random`) | 工具函数 |
| `86178` | Types (所有 `TypesXxx` 的集合) | IoC 注入令牌 |
| `95781` | `TypesGame` | 游戏相关注入令牌 |
| `75111` | ECS (`Engine`, `Entity`, `System`, `Query`) | 实体组件系统 |

---

### 3.3 变量名还原

Webpack 模块函数的参数被缩短为单字母：

| 缩短名 | 实际含义 |
|--------|---------|
| `e` (第1参数) | `module` |
| `t` (第2参数) | `exports` |
| `n` (第3参数) | `__webpack_require__` |
| `i` (通常第1个 require) | `tslib` (模块 70655) |
| `r`, `o`, `a`, `s`, `u`... | 后续 require 的模块，按文件头部顺序 |

函数内部的局部变量也被缩短（`e`, `t`, `n` 等被复用），需要根据上下文手动命名。

---

## 四、核心游戏模块清单

### 4.1 游戏主循环

| 文件 | 类名 | 职责 |
|------|------|------|
| `94572_GameModel.js` | GameModel | 游戏主模型，管理状态机/关卡/大陆 |
| `65370_GameState.js` | GameState | 状态枚举 (GAMEPLAY/WIN_STAGE/WIN_CONTINENT/LOOSE/LOBBY) |
| `93972_GamePlaySystem.js` | GamePlaySystem | 游戏主循环 System（ECS） |
| `82496_GameConstants.js` | GameConstants | 游戏常量 |
| `47283_GameEvents.js` | GameEvents | 事件名称常量 |

### 4.2 AI 系统

| 文件 | 类名 | 职责 |
|------|------|------|
| `59474_BotCalculationLogic.js` | BotCalculationLogic | **核心 AI 决策算法**（最大文件，20KB） |
| `3565_BotLogic.js` | BotLogic | AI 逻辑封装（初始化/决策/执行） |
| `35081_BotUtility.js` | BotUtility | AI 效用函数 |
| `72063_BotsSystem.js` | BotsSystem | AI 系统（ECS System） |
| `77875_CommandsGenerator.js` | CommandsGenerator | AI 指令生成器 |
| `13866_BotPreset6FinalAgressive.js` | BotPreset0~6 | 7 级 AI 难度预设 |
| `25583_DecisionType.js` | DecisionType | AI 决策类型枚举 |

### 4.3 战斗/单位

| 文件 | 类名 | 职责 |
|------|------|------|
| `46697_Fighter.js` | Fighter | 战士实体（位置/路径/移速/颜色） |
| `99806_FighterMovementSystem.js` | FighterMovementSystem | 战士移动系统 |
| `85765_FighterGroupsSystem.js` | FighterGroupsSystem | 战士编组系统 |
| `72257_FighterGroup.js` | FighterGroup | 战士组 |
| `26463_FighterView.js` | FighterView | 战士渲染视图 |
| `52057_Spawner.js` | Spawner | 单位生成器 |

### 4.4 领地/建筑

| 文件 | 类名 | 职责 |
|------|------|------|
| `26511_Building.js` | Building | **领地节点实体**（兵力/所有者/发送） |
| `83719_BuildingItem.js` | BuildingItem | 节点 UI 项 |
| `26630_Population.js` | Population | **产兵逻辑** |
| `28300_PopulationSystem.js` | PopulationSystem | 产兵系统（ECS） |
| `10065_Capturing.js` | Capturing | 占领逻辑 |
| `73097_CapturingAnimated.js` | CapturingAnimated | 占领动画 |

### 4.5 地图

| 文件 | 类名 | 职责 |
|------|------|------|
| `36637_ContinentModel.js` | ContinentModel | 大陆/地图模型（解析 SVG） |
| `91585_StateShapeView.js` | StateShapeView | 省/州形状渲染 |
| `48115_GenerateMapShapeAction.js` | GenerateMapShapeAction | 从 SVG 生成地图形状 |
| `11470_GenerateMapSpriteAction.js` | GenerateMapSpriteAction | 生成地图精灵 |
| `57620_PathsGenerationSystem.js` | PathsGenerationSystem | 路径生成系统 |
| `85126_PathHolder.js` | PathHolder | 路径数据 |

### 4.6 输入/交互

| 文件 | 类名 | 职责 |
|------|------|------|
| `47572_InputSystem.js` | InputSystem | **拖拽输入系统**（核心交互） |
| `83847_InputManager.js` | InputManager | 输入管理器 |
| `80219_ArrowsView.js` | ArrowsView | 箭头连线视图 |
| `10910_ArrowView.js` | ArrowView | 单条箭头 |

### 4.7 关卡流程

| 文件 | 类名 | 职责 |
|------|------|------|
| `27588_LoadLevelAction.js` | LoadLevelAction | 加载关卡 |
| `99629_LevelStartActionSIO.js` | LevelStartActionSIO | State.io 关卡开始 |
| `24294_LevelEndActionSIO.js` | LevelEndActionSIO | 关卡结束处理 |
| `15872_LevelNextActionSIO.js` | LevelNextActionSIO | 下一关 |
| `83042_LevelRestartActionSIO.js` | LevelRestartActionSIO | 重玩 |
| `11073_InitStageSystem.js` | InitStageSystem | 初始化阶段系统 |

### 4.8 预定义地图列表

在 `GameModel.js` 第 395-411 行，硬编码了 13 张地图：

```
United-States.svg, China.svg, Africa.svg, UK.svg,
EuropeanUnion.svg, Italy.svg, Arabic.svg, Central-Asia.svg,
Japan.svg, China,Russia,Korea,Japan.svg, Korea.svg,
China-Oceania-Australia.svg, United-States2.svg
```

但本地 `assets/maps/` 只有 `China.svg` 和 `United-States.svg`。

---

## 五、ECS 架构说明

游戏使用 **Entity-Component-System** 架构（模块 `75111`）：

```
Engine (32492)
  ├── Entity (63017) — 基础实体（Building, Fighter 继承它）
  ├── System (99007) — 基础系统
  │    ├── IterativeSystem (42724) — 遍历实体的系统
  │    ├── ReactionSystem (14134) — 响应式系统
  │    └── 具体系统:
  │         ├── GamePlaySystem
  │         ├── PopulationSystem
  │         ├── BotsSystem
  │         ├── InputSystem
  │         ├── FighterMovementSystem
  │         ├── PathsGenerationSystem
  │         ├── InitStageSystem
  │         ├── LevelEndSystem
  │         └── TutorialSystem
  └── Query (51997) — 实体查询
       ├── ActiveBuildingsQuery (62260)
       └── AllBuildingsQuery (9964)
```

---

## 六、推荐的后续工作顺序

### 第一步：简单全局替换（正则即可）
```
!0  →  true
!1  →  false
void 0  →  undefined
```

### 第二步：用 `_exports.json` 生成 require 注释
在每个文件的 `n(moduleId)` 调用旁边添加注释标注实际模块名。

### 第三步：`__extends` 还原为 class 语法
这是最有价值的 AST 变换，影响 136 个类定义。

### 第四步：手动还原核心模块
按优先级手动阅读和重命名变量：
1. `Building.js` — 理解节点数据结构
2. `Population.js` — 理解产兵机制
3. `InputSystem.js` — 理解拖拽交互
4. `BotCalculationLogic.js` — 理解 AI 决策
5. `GameModel.js` — 理解状态机和关卡流程

### 第五步（可选）：`__awaiter/__generator` 还原
逐函数将状态机代码还原为 async/await。工作量大但可读性提升显著。

---

## 七、工具建议

| 用途 | 工具 |
|------|------|
| AST 变换 | [jscodeshift](https://github.com/facebook/jscodeshift) 或 [babel](https://babeljs.io/) 自定义插件 |
| TS 逆编译 | [unminify](https://github.com/nicolo-ribaudo/babel-plugin-unminify) babel 插件 |
| 代码浏览 | VS Code + 打开 `src-recovered/` 目录 |
| 依赖图可视化 | 用 `_index.json` 解析 `n(moduleId)` 调用，生成 Mermaid/Graphviz 图 |

---

## 八、注意事项

- 原始源码**不公开**，无 Source Map，因此无法 100% 还原
- 局部变量名（`e,t,n,i,r,o,a,s,u,l,c,d,h,p,f`）需根据语义手动命名
- 注释和 TypeScript 类型信息已永久丢失
- 第三方库代码（PixiJS、GSAP、Inversify、Howler 等）占包体约 40-50%，无需还原
- `SIO` 后缀的类（如 `LevelEndActionSIO`）是 State.io 专有逻辑，`Yandex` 后缀是平台适配层
