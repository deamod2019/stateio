# State.io / Hogwarts Playtest 交接文档

更新时间：2026-06-14

## 这个仓库现在是什么状态

远端仓库：`https://github.com/deamod2019/stateio.git`

当前已推送到 GitHub 的基线提交：

```text
be01754 Add restored State.io sources and Hogwarts battle maps
```

这个提交包含两大类内容：

- State.io 原始资源、抓取产物、还原后的源码目录、对照测试脚本。
- 霍格沃茨主题试玩页、伏地魔决战试玩页、地图 SVG、关卡文档。

注意：在 `be01754` 之后，又继续做了一批本地玩法增强，目前仍是工作区改动，尚未提交和推送。未来如果从 GitHub 重新 clone 后看不到这些增强，说明这些改动还没有合入远端，需要回到当前机器提交或把差异迁移过去。

当前本地未提交改动主要涉及：

```text
assets/maps/Hogwarts.svg
docs/hogwarts-level-design.md
hogwarts-playtest.css
hogwarts-playtest.html
hogwarts-playtest.js
voldemort-final-battle.html
voldemort-final-battle.js
```

## 如何本地试玩

在仓库根目录启动静态服务：

```bash
python3 -m http.server 5175 --bind 127.0.0.1
```

然后打开：

```text
http://127.0.0.1:5175/hogwarts-playtest.html
http://127.0.0.1:5175/voldemort-final-battle.html
```

不要优先用 `file://` 打开外部资源版页面；历史上浏览器会因为本地文件源策略阻止 `fetch()`。霍格沃茨页已经把 SVG 内嵌到 HTML 中，可以本地打开，但以后继续开发和测试仍建议走 `http://127.0.0.1`。

## 已完成：State.io 还原部分

保留了多套源码/资源形态，目的是便于对照和继续还原：

- `capture/`：抓取到的线上 bundle、CSS、HTML。
- `src-cjs/`：CommonJS 方向恢复出的模块。
- `src-readable/`：更可读的恢复版本。
- `src-restored/`：按领域整理后的恢复版本。
- `scripts/`：恢复、拆包、生成资产、校验用脚本。
- `test/compare-*.js`：大量行为对照测试。

重要约束：

- 不要把 `src-recovered` 或历史恢复快照当作随便重构的业务源码。
- 如果继续迁移模块，优先用现有 `scripts/` 和 `test/compare-*` 做证明，不要只靠肉眼改名。

## 已完成：霍格沃茨主地图

入口：

```text
hogwarts-playtest.html
hogwarts-playtest.js
assets/maps/Hogwarts.svg
```

### 地图与地块

霍格沃茨主地图已经从装饰 SVG 改成可玩的领地战地图。现有主要地块包括：

- 霍格莫德五个地点：蜂蜜公爵、德维与班吉巫师装备店、斯宾魁奇、风雅牌巫师服装店、三把扫帚。
- 校园/城堡地点：魁地奇球场、北草坪、海格小屋、禁林、黑湖、格兰芬多塔、天文塔、霍格沃茨城堡、有求必应屋、打人柳、活动楼梯、温室、船屋、礼堂、石像防线、地牢。

地图布局原则：

- 地块不能互相覆盖。
- 城堡、黑湖、禁林、魁地奇球场等方向关系要符合常见霍格沃茨空间印象。
- 地块名称必须中文显示。
- 重要地点必须作为独立可占领节点存在，而不是只画在背景里。

### 操作

- 玩家按住蓝色己方地块，拖到相邻地块后松手出兵。
- 部队不是炮弹，而是由多个点组成的集团军队列。
- 支持暂停、开始、上一关、重开、下一关。

### 经济与扩张限制

这部分是最新本地改动，尚未提交。

- 每关开局金币：`50`。
- 玩家每次向非己方地块发起抢占行动，消耗 `15` 金币。
- 向己方地块调兵不消耗金币。
- 敌军不使用金币，也不使用咒语，只走普通出兵逻辑。

实现位置：

```text
hogwarts-playtest.js
CAPTURE_COST
send(from, to, owner)
spendCoins(...)
```

### 法术牌

法术牌只属于玩家。敌方 AI 不会购买或释放咒语。

当前法术牌：

| 法术牌 | 费用 | 效果 |
| --- | ---: | --- |
| 增援令 | 40 | 己方目标地块 +30 兵力 |
| 守护神咒 | 45 | 己方目标地块获得 10 秒护盾 |
| 飞路粉 | 35 | 从一个己方地块快速调兵到另一个己方地块 |
| 统统石化 | 35 | 敌方或中立地块 7 秒内不能增长和出兵 |
| 除你武器 | 30 | 敌方地块 9 秒内出兵数量减半 |

实现位置：

```text
ITEM_COSTS
setActiveItem(...)
canUseItemOn(...)
useActiveItem(...)
isRegionFrozen(...)
isRegionDisarmed(...)
```

### 任务链

霍格沃茨主地图已经从单任务改为三步任务链。

示例：第一关

```text
1/3 夺回活动楼梯
2/3 控制礼堂补给线
3/3 清除地牢威胁
```

实现位置：

```text
LEVELS[].missionChain
missionChain()
currentMission()
checkMission(id)
updateStrategyBar(...)
```

### 随机事件

当前随机事件：

- 凤凰福克斯出现：最薄弱的己方地块 +18。
- 摄魂怪来袭：全场兵力增长短时间变慢。
- 活动楼梯移动：临时连通活动楼梯、温室、有求必应屋。
- 发现学院补给：金币 +20。

实现位置：

```text
EVENT_INTERVAL
triggerRandomEvent(now)
activeEvent
adjacentTo(id)
eventGrowthMultiplier()
```

### 特殊地块

当前特殊地块机制：

- 有求必应屋：首次占领给最薄弱的两个己方地块各 +12。
- 魁地奇球场：第一个占领方获得 +100 本地兵力。
- 三把扫帚：玩家占领后持续产金币。
- 天文塔：玩家占领后，提前显示敌方下一次进攻方向，并画红色虚线。
- 石像防线：占领方在该地块受到的伤害降低。

实现位置：

```text
SPECIAL_RULES
applyCaptureSpecial(id, owner)
handleAi(now, level)
renderForecastLine(...)
```

## 已完成：伏地魔决战地图

入口：

```text
voldemort-final-battle.html
voldemort-final-battle.js
assets/maps/VoldemortFinalBattle.svg
```

伏地魔决战地图目前已有 3 个关卡，并已加入特殊地块机制。

当前特殊地块：

- 纳吉尼护卫：首次击破后，两处薄弱地块 +14，并削弱伏地魔本阵。
- 石像防线：占领方在该地块受到的伤害降低。
- 天文塔：凤凰社占领后，提前显示敌方下一次进攻方向。
- 密道出口：首次占领触发密道增援。
- 高架桥：占领方通过高架桥的部队移动更快。
- 礼堂决战：凤凰社占领时全线士气提升，增长更高。

注意：霍格沃茨主地图的“法术牌、任务链、每次抢地扣金币、随机事件”尚未同步到伏地魔决战地图。下一步如果要统一玩法，应优先把这四个系统抽成可复用逻辑，避免两份 JS 继续复制粘贴。

## 当前正在做 / 尚未完成

最新方向是把试玩从“普通领地战”推进到“资源受限的战役玩法”：

1. 已在霍格沃茨主地图完成法术牌。
2. 已在霍格沃茨主地图完成三步任务链。
3. 已在霍格沃茨主地图加入抢地金币消耗：开局 50，每次抢非己方地块 -15。
4. 已在霍格沃茨主地图加入随机事件。
5. 已明确规则：敌军不能使用咒语。
6. 伏地魔决战已经有特殊地块，但尚未同步上述 4 个新系统。

## 建议下一步

优先级建议：

1. 提交并推送当前本地改动，避免未来从 GitHub clone 时丢失。
2. 把通用玩法逻辑抽成小模块，例如 `economy`, `items`, `missions`, `events`, `aiForecast`。
3. 将霍格沃茨主地图的新系统同步到伏地魔决战地图。
4. 做一次关卡平衡测试，重点观察：
   - 50 初始金币是否太少。
   - 每次抢地 15 金币是否让节奏过慢。
   - 三把扫帚产金币是否过强。
   - 统统石化和除你武器是否过便宜。
   - 第三关是否仍然过难。
5. 如果要继续做大，可以加入通关评分、永久升级、英雄单位。

## 验证方式

语法检查：

```bash
node --check hogwarts-playtest.js
node --check voldemort-final-battle.js
```

页面检查：

```text
http://127.0.0.1:5175/hogwarts-playtest.html
http://127.0.0.1:5175/voldemort-final-battle.html
```

已验证过的关键点：

- 霍格沃茨页控制台无错误。
- 初始金币为 50。
- 玩家抢非己方地块会扣 15 金币。
- 统统石化可以冻结敌方/中立地块。
- 除你武器可以让敌方出兵减半。
- 任务链会从 1/3 推进到 2/3。
- 随机事件可以触发并显示在事件栏。
- 敌方 AI 只会普通出兵，不会使用法术牌。

## 重要文件索引

```text
HANDOFF.md                         当前交接文档
docs/hogwarts-level-design.md      霍格沃茨地图设计与机制说明
hogwarts-playtest.html             霍格沃茨试玩页面，内嵌 SVG
hogwarts-playtest.js               霍格沃茨主玩法逻辑
hogwarts-playtest.css              两张试玩图共用样式
assets/maps/Hogwarts.svg           霍格沃茨外部 SVG 版本
voldemort-final-battle.html        伏地魔决战试玩页面
voldemort-final-battle.js          伏地魔决战玩法逻辑
assets/maps/VoldemortFinalBattle.svg 伏地魔决战外部 SVG
src-cjs/                           CommonJS 还原模块
src-readable/                      可读恢复版本
src-restored/                      分领域整理后的恢复源码
scripts/                           还原和校验脚本
test/                              对照验证脚本
```

## 给未来接手者的提醒

- 先看 `git status`，因为当前玩法增强可能还没推送。
- 如果远端只有 `be01754`，说明后续玩法增强不在 GitHub 上。
- 不要直接重写地图 SVG；地图地块必须和 `REGION_META`、`ADJACENCY`、中心点一致。
- 不要让敌军使用玩家法术牌，这是当前设计约束。
- 如果新增玩法，优先保持“能试玩、能解释、能验证”，不要只加概念说明。
