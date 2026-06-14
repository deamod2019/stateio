const REGION_META = {
  Honeydukes: { name: "蜂蜜公爵", x: 137, y: 56 },
  DervishAndBanges: { name: "德维与班吉巫师装备店", x: 231, y: 56 },
  Spintwitches: { name: "斯宾魁奇", x: 325, y: 56 },
  GladragsWizardwear: { name: "风雅牌巫师服装店", x: 419, y: 56 },
  ThreeBroomsticks: { name: "三把扫帚", x: 513, y: 56 },
  QuidditchPitch: { name: "魁地奇球场", x: 196, y: 170 },
  NorthLawn: { name: "北草坪", x: 440, y: 166 },
  HagridHut: { name: "海格小屋", x: 646, y: 166 },
  ForbiddenForest: { name: "禁林", x: 872, y: 356 },
  BlackLake: { name: "黑湖", x: 236, y: 454 },
  GryffindorTower: { name: "格兰芬多塔", x: 486, y: 306 },
  AstronomyTower: { name: "天文塔", x: 596, y: 214 },
  HogwartsCastle: { name: "霍格沃茨城堡", x: 602, y: 330 },
  RoomOfRequirement: { name: "有求必应屋", x: 704, y: 312 },
  WhompingWillow: { name: "打人柳", x: 756, y: 424 },
  GrandStaircase: { name: "活动楼梯", x: 500, y: 450 },
  Greenhouses: { name: "温室", x: 752, y: 532 },
  Boathouse: { name: "船屋", x: 612, y: 588 },
  GreatHall: { name: "礼堂", x: 470, y: 588 },
  StoneDefenseLine: { name: "石像防线", x: 446, y: 682 },
  Dungeon: { name: "地牢", x: 300, y: 684 },
};

const ADJACENCY = {
  Honeydukes: ["DervishAndBanges", "QuidditchPitch"],
  DervishAndBanges: ["Honeydukes", "Spintwitches", "QuidditchPitch"],
  Spintwitches: ["DervishAndBanges", "GladragsWizardwear", "QuidditchPitch", "NorthLawn"],
  GladragsWizardwear: ["Spintwitches", "ThreeBroomsticks", "NorthLawn"],
  ThreeBroomsticks: ["GladragsWizardwear", "NorthLawn"],
  QuidditchPitch: ["Honeydukes", "DervishAndBanges", "Spintwitches", "NorthLawn", "BlackLake"],
  NorthLawn: ["Spintwitches", "GladragsWizardwear", "ThreeBroomsticks", "QuidditchPitch", "GryffindorTower", "HagridHut", "AstronomyTower"],
  HagridHut: ["NorthLawn", "ForbiddenForest", "RoomOfRequirement", "AstronomyTower"],
  ForbiddenForest: ["HagridHut", "WhompingWillow", "Greenhouses"],
  BlackLake: ["QuidditchPitch", "GrandStaircase", "Dungeon", "Boathouse"],
  GryffindorTower: ["NorthLawn", "AstronomyTower", "HogwartsCastle", "GrandStaircase"],
  AstronomyTower: ["NorthLawn", "HagridHut", "GryffindorTower", "HogwartsCastle", "RoomOfRequirement"],
  HogwartsCastle: ["GryffindorTower", "AstronomyTower", "RoomOfRequirement", "GrandStaircase", "WhompingWillow"],
  RoomOfRequirement: ["HogwartsCastle", "AstronomyTower", "HagridHut", "WhompingWillow"],
  WhompingWillow: ["HogwartsCastle", "RoomOfRequirement", "Greenhouses", "ForbiddenForest"],
  GrandStaircase: ["GryffindorTower", "HogwartsCastle", "GreatHall", "BlackLake", "Boathouse", "StoneDefenseLine"],
  Greenhouses: ["WhompingWillow", "Boathouse", "ForbiddenForest"],
  Boathouse: ["GrandStaircase", "GreatHall", "BlackLake", "Greenhouses", "StoneDefenseLine"],
  GreatHall: ["GrandStaircase", "Boathouse", "Dungeon", "StoneDefenseLine"],
  StoneDefenseLine: ["GrandStaircase", "GreatHall", "Boathouse", "Dungeon"],
  Dungeon: ["GreatHall", "StoneDefenseLine", "BlackLake"],
};

const LEVELS = [
  {
    title: "第一关：夜巡入校",
    brief: "从城堡和格兰芬多塔出发，夺回活动楼梯，再压住地牢。",
    aiDelay: 1850,
    coins: 50,
    missionChain: [
      { target: "GrandStaircase", text: "夺回活动楼梯", reward: 25 },
      { target: "GreatHall", text: "控制礼堂补给线", reward: 30 },
      { target: "Dungeon", text: "清除地牢威胁", reward: 40 },
    ],
    regions: {
      HogwartsCastle: ["player", 38],
      GryffindorTower: ["player", 28],
      Dungeon: ["enemy", 36],
      ForbiddenForest: ["enemy", 30],
      GrandStaircase: ["neutral", 16],
      GreatHall: ["neutral", 22],
      RoomOfRequirement: ["neutral", 12],
      StoneDefenseLine: ["neutral", 10],
    },
  },
  {
    title: "第二关：湖岸反击",
    brief: "黑湖兵力很厚，但行动慢。先守城堡，再从船屋打开南线。",
    aiDelay: 1550,
    coins: 50,
    missionChain: [
      { target: "Boathouse", text: "占领船屋打开南线", reward: 30 },
      { target: "StoneDefenseLine", text: "激活石像防线", reward: 35 },
      { target: "BlackLake", text: "夺回黑湖岸线", reward: 45 },
    ],
    regions: {
      HogwartsCastle: ["player", 34],
      GryffindorTower: ["player", 20],
      BlackLake: ["enemy", 36],
      Dungeon: ["enemy", 30],
      ForbiddenForest: ["enemy", 34],
      Boathouse: ["neutral", 12],
      GreatHall: ["neutral", 16],
      GrandStaircase: ["neutral", 14],
      RoomOfRequirement: ["neutral", 10],
      AstronomyTower: ["neutral", 12],
      StoneDefenseLine: ["neutral", 10],
    },
  },
  {
    title: "第三关：禁林决战",
    brief: "先抢有求必应屋拿增援，再从活动楼梯和温室夹击禁林。",
    aiDelay: 1600,
    coins: 50,
    missionChain: [
      { target: "RoomOfRequirement", text: "抢下有求必应屋", reward: 35 },
      { target: "AstronomyTower", text: "占领天文塔预警", reward: 35 },
      { target: "ForbiddenForest", text: "压制禁林决战点", reward: 60 },
    ],
    regions: {
      HogwartsCastle: ["player", 52],
      GryffindorTower: ["player", 30],
      ForbiddenForest: ["enemy", 42],
      Dungeon: ["enemy", 34],
      HagridHut: ["enemy", 16],
      WhompingWillow: ["enemy", 18],
      RoomOfRequirement: ["neutral", 10],
      GrandStaircase: ["neutral", 14],
      BlackLake: ["neutral", 22],
      Greenhouses: ["neutral", 12],
      AstronomyTower: ["neutral", 10],
      StoneDefenseLine: ["neutral", 12],
    },
  },
];

const COLORS = {
  player: "#74BCFF",
  enemy: "#FF634D",
  neutral: "#A2A2A2",
};

const GROWTH = {
  Honeydukes: 1.1,
  DervishAndBanges: 1,
  Spintwitches: 1.15,
  GladragsWizardwear: 1,
  ThreeBroomsticks: 1.2,
  QuidditchPitch: 1.2,
  NorthLawn: 1,
  HagridHut: 1,
  ForbiddenForest: 0.9,
  BlackLake: 0.7,
  GryffindorTower: 0.95,
  AstronomyTower: 0.85,
  HogwartsCastle: 1,
  RoomOfRequirement: 0.9,
  WhompingWillow: 0.8,
  GrandStaircase: 1.1,
  Greenhouses: 1.05,
  Boathouse: 0.95,
  GreatHall: 1.25,
  StoneDefenseLine: 0.75,
  Dungeon: 1,
};

const COIN_RATE = {
  Honeydukes: 1.6,
  DervishAndBanges: 1.25,
  Spintwitches: 1.35,
  GladragsWizardwear: 1.25,
  ThreeBroomsticks: 3.2,
  QuidditchPitch: 1,
  GreatHall: 0.8,
  HogwartsCastle: 0.7,
};

const SPECIAL_RULES = {
  RoomOfRequirement: "首次占领：给最薄弱的两个己方地块各 +12 增援",
  QuidditchPitch: "首次占领：当前占领方获得 +100 兵力",
  ThreeBroomsticks: "持续产金币：我方占领时金币速度大幅提高",
  AstronomyTower: "天文塔预警：我方占领时提前看见敌方下一次进攻方向",
  StoneDefenseLine: "石像防线：占领方在此地块受到的伤害降低",
};

const FORECAST_LEAD_MS = 1650;
const STONE_DEFENSE_MULTIPLIER = 0.58;
const CAPTURE_COST = 15;
const EVENT_INTERVAL = 22000;

const ITEM_COSTS = {
  reinforce: 40,
  shield: 45,
  floo: 35,
  petrify: 35,
  disarm: 30,
};

const DEFAULT_REGION = ["neutral", 12];
const mapHost = document.querySelector("#mapHost");
const playfield = document.querySelector(".playfield");
const dragLayer = document.querySelector("#dragLayer");
const dragLine = document.querySelector("#dragLine");
const dragDot = document.querySelector("#dragDot");
const troopLayer = document.querySelector("#troopLayer");
const levelTitle = document.querySelector("#levelTitle");
const levelBrief = document.querySelector("#levelBrief");
const statusBanner = document.querySelector("#statusBanner");
const prevLevel = document.querySelector("#prevLevel");
const nextLevel = document.querySelector("#nextLevel");
const restartLevel = document.querySelector("#restartLevel");
const pauseGame = document.querySelector("#pauseGame");
const startGame = document.querySelector("#startGame");
const coinCount = document.querySelector("#coinCount");
const missionText = document.querySelector("#missionText");
const missionStatus = document.querySelector("#missionStatus");
const specialStatus = document.querySelector("#specialStatus");
const eventStatus = document.querySelector("#eventStatus");
const itemReinforce = document.querySelector("#itemReinforce");
const itemShield = document.querySelector("#itemShield");
const itemFloo = document.querySelector("#itemFloo");
const itemPetrify = document.querySelector("#itemPetrify");
const itemDisarm = document.querySelector("#itemDisarm");

let levelIndex = 0;
let state = {};
let svg;
let selected = null;
let packets = [];
let ended = false;
let lastAi = 0;
let roomBonusUsed = false;
let quidditchBonusUsed = false;
let drag = null;
let paused = false;
let pauseStarted = 0;
let coins = 0;
let missionStep = 0;
let activeItem = null;
let flooSource = null;
let enemyForecast = null;
let specialNote = "";
let specialNoteUntil = 0;
let eventNote = "";
let eventNoteUntil = 0;
let nextEventAt = 0;
let activeEvent = null;
let activeEventUntil = 0;

function initialState(level) {
  const next = {};
  for (const id of Object.keys(REGION_META)) {
    const [owner, troops] = level.regions[id] || DEFAULT_REGION;
    next[id] = { owner, troops };
  }
  return next;
}

async function loadMap() {
  svg = mapHost.querySelector("svg");

  if (!svg) {
    const response = await fetch("assets/maps/Hogwarts.svg");
    const text = await response.text();
    mapHost.innerHTML = text;
    svg = mapHost.querySelector("svg");
  }

  if (!svg) {
    throw new Error("霍格沃茨地图未能加载");
  }

  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  for (const id of Object.keys(REGION_META)) {
    const group = groupFor(id);
    group?.addEventListener("pointerdown", (event) => onRegionPointerDown(event, id));
    if (SPECIAL_RULES[id]) {
      group?.classList.add("is-special-region");
      group?.setAttribute("aria-label", `${REGION_META[id].name}：${SPECIAL_RULES[id]}`);
    }
  }
}

function groupFor(id) {
  return svg?.querySelector(`#HOG_${id}`);
}

function pathFor(id) {
  return groupFor(id)?.querySelector("path");
}

function startLevel(index) {
  levelIndex = (index + LEVELS.length) % LEVELS.length;
  const level = LEVELS[levelIndex];
  levelTitle.textContent = level.title;
  levelBrief.textContent = level.brief;
  state = initialState(level);
  coins = level.coins || 60;
  selected = null;
  packets = [];
  ended = false;
  paused = false;
  pauseStarted = 0;
  roomBonusUsed = false;
  quidditchBonusUsed = false;
  missionStep = 0;
  activeItem = null;
  flooSource = null;
  enemyForecast = null;
  specialNote = "";
  specialNoteUntil = 0;
  eventNote = "";
  eventNoteUntil = 0;
  activeEvent = null;
  activeEventUntil = 0;
  nextEventAt = performance.now() + EVENT_INTERVAL * 0.7;
  hideBanner();
  updatePauseButtons();
  updateStrategyBar();
  render();
}

function onRegionPointerDown(event, id) {
  if (ended || paused) return;
  if (activeItem && canUseItemOn(activeItem, id)) {
    useActiveItem(id);
    return;
  }
  if (state[id].owner === "player") {
    beginDrag(event, id);
    return;
  }

  if (selected && adjacentTo(selected).includes(id)) {
    send(selected, id, "player");
    selected = null;
    render();
    return;
  }
}

function beginDrag(event, id) {
  if (paused) return;
  event.preventDefault();
  const origin = pointForRegion(id);
  drag = {
    id,
    origin,
    x: event.clientX,
    y: event.clientY,
    moved: false,
    wasSelected: selected === id,
  };
  selected = id;
  render();
  updateDragLine(event.clientX, event.clientY);
  window.addEventListener("pointermove", onPointerMove);
  window.addEventListener("pointerup", onPointerUp);
}

function onPointerMove(event) {
  if (!drag) return;
  const distance = Math.hypot(event.clientX - drag.x, event.clientY - drag.y);
  if (distance > 8) drag.moved = true;
  updateDragLine(event.clientX, event.clientY);
}

function onPointerUp(event) {
  if (!drag) return;
  const target = regionFromPoint(event.clientX, event.clientY);
  const source = drag.id;
  const canAttack = target && target !== source && adjacentTo(source).includes(target);

  if (canAttack) {
    send(source, target, "player");
    selected = null;
  } else if (!drag.moved && target === source) {
    selected = drag.wasSelected ? null : source;
  }

  drag = null;
  clearDragLine();
  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("pointerup", onPointerUp);
  render();
}

function regionFromPoint(clientX, clientY) {
  const element = document.elementFromPoint(clientX, clientY);
  const group = element?.closest?.("[id^='HOG_']");
  if (!group) return null;
  return group.id.replace("HOG_", "");
}

function pointForRegion(id) {
  const rect = playfield.getBoundingClientRect();
  const meta = REGION_META[id];
  return {
    x: (meta.x / 1000) * rect.width,
    y: (meta.y / 720) * rect.height,
  };
}

function updateDragLine(clientX, clientY) {
  if (!drag) return;
  const rect = playfield.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  const dx = x - drag.origin.x;
  const dy = y - drag.origin.y;
  const length = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);

  dragLayer.classList.add("is-active");
  dragLine.style.left = `${drag.origin.x}px`;
  dragLine.style.top = `${drag.origin.y}px`;
  dragLine.style.width = `${length}px`;
  dragLine.style.transform = `translateY(-50%) rotate(${angle}rad)`;
  dragDot.style.left = `${x}px`;
  dragDot.style.top = `${y}px`;
}

function clearDragLine() {
  dragLayer.classList.remove("is-active");
  dragLine.style.width = "0";
}

function svgToPercent(x, y) {
  return {
    left: `${x / 10}%`,
    top: `${y / 7.2}%`,
  };
}

function formationDots(packet, progress) {
  const a = REGION_META[packet.from];
  const b = REGION_META[packet.to];
  const center = {
    x: a.x + (b.x - a.x) * progress,
    y: a.y + (b.y - a.y) * progress,
  };
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.max(1, Math.hypot(dx, dy));
  const dir = { x: dx / length, y: dy / length };
  const perp = { x: -dir.y, y: dir.x };
  const count = Math.max(4, Math.min(34, Math.round(packet.amount / 1.25)));
  const cols = Math.min(6, Math.ceil(Math.sqrt(count * 1.4)));
  const rows = Math.ceil(count / cols);
  const spacing = 15;

  return Array.from({ length: count }, (_, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const rowOffset = row - (rows - 1) / 2;
    const colOffset = col - (cols - 1) / 2;
    return {
      x: center.x - dir.x * rowOffset * spacing + perp.x * colOffset * spacing,
      y: center.y - dir.y * rowOffset * spacing + perp.y * colOffset * spacing,
    };
  });
}

function send(from, to, owner) {
  if (isRegionFrozen(from)) {
    if (owner === "player") updateStrategyBar(`${REGION_META[from].name}被石化，暂时不能出兵`);
    return false;
  }
  if (state[from].owner !== owner || state[from].troops < 2) return;
  if (owner === "player" && state[to]?.owner !== "player" && !spendCoins(CAPTURE_COST, "金币不足，无法抢地盘")) {
    return false;
  }
  const amount = Math.floor(state[from].troops / 2);
  state[from].troops -= amount;
  const a = REGION_META[from];
  const b = REGION_META[to];
  const distance = Math.hypot(a.x - b.x, a.y - b.y);
  const lakePenalty = from === "BlackLake" ? 1.2 : 1;
  packets.push({
    owner,
    amount: isRegionDisarmed(from) ? Math.ceil(amount / 2) : amount,
    from,
    to,
    start: performance.now(),
    duration: Math.max(520, distance * 3.2 * lakePenalty),
  });
  return true;
}

function resolveArrival(packet) {
  const target = state[packet.to];
  if (target.owner === packet.owner) {
    target.troops += packet.amount;
    return;
  }

  const shielded = target.shieldUntil && performance.now() < target.shieldUntil;
  const stoneDefended = packet.to === "StoneDefenseLine" && target.owner !== "neutral";
  const shieldMultiplier = shielded ? 0.5 : 1;
  const stoneMultiplier = stoneDefended ? STONE_DEFENSE_MULTIPLIER : 1;
  const damage = Math.ceil(packet.amount * shieldMultiplier * stoneMultiplier);
  target.troops -= damage;
  if (target.troops < 0) {
    target.owner = packet.owner;
    target.troops = Math.abs(target.troops);
    applyCaptureSpecial(packet.to, packet.owner);
    checkMission(packet.to);
  }
}

function applyCaptureSpecial(id, owner) {
  const ownerName = owner === "player" ? "我方" : "敌方";

  if (id === "RoomOfRequirement" && !roomBonusUsed) {
    roomBonusUsed = true;
    applyRoomBonus(owner);
    setSpecialNote(`${ownerName}触发有求必应屋：两处薄弱地块获得增援`);
  }

  if (id === "QuidditchPitch" && !quidditchBonusUsed) {
    quidditchBonusUsed = true;
    state[id].troops += 100;
    setSpecialNote(`${ownerName}抢到魁地奇球场：获得 +100 兵力`);
  }

  if (id === "ThreeBroomsticks" && owner === "player") {
    setSpecialNote("三把扫帚开始产金币");
  }

  if (id === "AstronomyTower" && owner === "player") {
    enemyForecast = null;
    setSpecialNote("天文塔已占领：下一次敌军进攻会提前预警");
  }

  if (id === "StoneDefenseLine") {
    setSpecialNote(`${ownerName}占领石像防线：这里受到的伤害降低`);
  }
}

function applyRoomBonus(owner) {
  const owned = Object.entries(state)
    .filter(([, region]) => region.owner === owner)
    .sort((a, b) => a[1].troops - b[1].troops)
    .slice(0, 2);
  for (const [, region] of owned) region.troops += 12;
}

function update(now) {
  if (!ended && !paused) {
    updateTimedEffects(now);
    for (const [id, region] of Object.entries(state)) {
      if (region.owner !== "neutral" && !isRegionFrozen(id, now)) {
        region.troops += (GROWTH[id] || 1) * eventGrowthMultiplier() * 0.018;
      }
      if (region.owner === "player") {
        coins += (COIN_RATE[id] || 0.35) * 0.018;
      }
    }

    packets = packets.filter((packet) => {
      const progress = (now - packet.start) / packet.duration;
      if (progress >= 1) {
        resolveArrival(packet);
        return false;
      }
      return true;
    });

    handleAi(now, LEVELS[levelIndex]);

    checkEnd();
  }

  render(paused ? pauseStarted : now);
  requestAnimationFrame(update);
}

function handleAi(now, level) {
  if (enemyForecast && !isAiMoveValid(enemyForecast.from, enemyForecast.to)) {
    enemyForecast = null;
    lastAi = now - level.aiDelay;
  }

  if (enemyForecast) {
    if (now >= enemyForecast.attackAt) {
      send(enemyForecast.from, enemyForecast.to, "enemy");
      enemyForecast = null;
      lastAi = now;
    }
    return;
  }

  if (now - lastAi <= level.aiDelay) return;

  const move = chooseAiMove();
  if (!move) return;

  if (state.AstronomyTower?.owner === "player") {
    enemyForecast = {
      ...move,
      attackAt: now + FORECAST_LEAD_MS,
    };
    setSpecialNote(`天文塔预警：敌方将从${REGION_META[move.from].name}进攻${REGION_META[move.to].name}`, FORECAST_LEAD_MS + 900);
    return;
  }

  send(move.from, move.to, "enemy");
  lastAi = now;
}

function chooseAiMove() {
  const candidates = Object.entries(state)
    .filter(([id, region]) => region.owner === "enemy" && region.troops >= 10 && !isRegionFrozen(id) && adjacentTo(id).some((to) => state[to].owner !== "enemy"))
    .sort((a, b) => b[1].troops - a[1].troops);

  const [from] = candidates[0] || [];
  if (!from) return null;

  const targets = adjacentTo(from)
    .filter((id) => state[id].owner !== "enemy")
    .sort((a, b) => targetScore(b) - targetScore(a));
  const to = targets[0];
  return to ? { from, to } : null;
}

function aiMove() {
  const move = chooseAiMove();
  if (move) send(move.from, move.to, "enemy");
}

function isAiMoveValid(from, to) {
  return Boolean(
    from &&
      to &&
      state[from]?.owner === "enemy" &&
      state[from].troops >= 2 &&
      state[to]?.owner !== "enemy" &&
      adjacentTo(from).includes(to)
  );
}

function targetScore(id) {
  const ownerScore = state[id].owner === "player" ? 40 : 10;
  const specialScore = id === "GrandStaircase" || id === "RoomOfRequirement" || id === "AstronomyTower" ? 10 : 0;
  const easyTargetScore = 24 - state[id].troops;
  return ownerScore + easyTargetScore + specialScore;
}

function checkEnd() {
  const hasEnemy = Object.values(state).some((region) => region.owner === "enemy");
  const hasPlayer = Object.values(state).some((region) => region.owner === "player");

  if (!hasEnemy) {
    ended = true;
    updatePauseButtons();
    showBanner(levelIndex === LEVELS.length - 1 ? "全部关卡完成" : "通关，点下一关继续");
  } else if (!hasPlayer) {
    ended = true;
    updatePauseButtons();
    showBanner("失守，点重开再试");
  }
}

function render(now = performance.now()) {
  if (!svg) return;
  updateStrategyBar();

  for (const [id, region] of Object.entries(state)) {
    const path = pathFor(id);
    if (path) path.setAttribute("fill", COLORS[region.owner]);
    const group = groupFor(id);
    group?.classList.toggle("is-selected", selected === id);
    group?.classList.toggle("is-target", Boolean(selected && adjacentTo(selected).includes(id)));
    group?.classList.toggle("is-owned-special", Boolean(SPECIAL_RULES[id] && region.owner === "player"));
  }

  troopLayer.innerHTML = "";
  if (enemyForecast && state.AstronomyTower?.owner === "player") {
    renderForecastLine(enemyForecast);
  }

  for (const [id, region] of Object.entries(state)) {
    const meta = REGION_META[id];
    const marker = document.createElement("div");
    const shielded = region.shieldUntil && now < region.shieldUntil;
    const fortified = id === "StoneDefenseLine" && region.owner !== "neutral";
    const frozen = isRegionFrozen(id, now);
    const disarmed = isRegionDisarmed(id, now);
    marker.className = `troop ${region.owner}${shielded ? " shielded" : ""}${fortified ? " fortified" : ""}${frozen ? " frozen" : ""}${disarmed ? " disarmed" : ""}`;
    marker.dataset.regionId = id;
    const position = svgToPercent(meta.x, meta.y);
    marker.style.left = position.left;
    marker.style.top = position.top;
    marker.textContent = Math.max(0, Math.floor(region.troops));
    troopLayer.append(marker);
  }

  for (const packet of packets) {
    const progress = Math.min(1, (now - packet.start) / packet.duration);
    for (const point of formationDots(packet, progress)) {
      const marker = document.createElement("div");
      marker.className = `army-dot ${packet.owner}`;
      const position = svgToPercent(point.x, point.y);
      marker.style.left = position.left;
      marker.style.top = position.top;
      troopLayer.append(marker);
    }
  }
}

function renderForecastLine(forecast) {
  const a = pointForRegion(forecast.from);
  const b = pointForRegion(forecast.to);
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const line = document.createElement("div");
  line.className = "forecast-line";
  line.style.left = `${a.x}px`;
  line.style.top = `${a.y}px`;
  line.style.width = `${Math.hypot(dx, dy)}px`;
  line.style.transform = `translateY(-50%) rotate(${Math.atan2(dy, dx)}rad)`;
  troopLayer.append(line);
}

function setActiveItem(item) {
  if (ended || paused) return;
  activeItem = activeItem === item ? null : item;
  flooSource = null;
  selected = null;
  updateStrategyBar();
  render();
}

function useActiveItem(id) {
  if (!canUseItemOn(activeItem, id)) {
    updateStrategyBar("法术牌只能由玩家按规则使用");
    return;
  }
  if (activeItem === "reinforce") {
    if (!spendCoins(ITEM_COSTS.reinforce, "金币不足，不能使用增援令")) return;
    state[id].troops += 30;
    clearActiveItem();
  } else if (activeItem === "shield") {
    if (!spendCoins(ITEM_COSTS.shield, "金币不足，不能使用守护神咒")) return;
    state[id].shieldUntil = performance.now() + 10000;
    clearActiveItem();
  } else if (activeItem === "floo") {
    if (!flooSource) {
      flooSource = id;
      selected = id;
      updateStrategyBar("选择飞路粉目标");
      render();
      return;
    }
    if (flooSource !== id && state[flooSource]?.owner === "player") {
      if (!spendCoins(ITEM_COSTS.floo, "金币不足，不能使用飞路粉")) return;
      send(flooSource, id, "player");
    }
    clearActiveItem();
  } else if (activeItem === "petrify") {
    if (!spendCoins(ITEM_COSTS.petrify, "金币不足，不能使用统统石化")) return;
    state[id].freezeUntil = performance.now() + 7000;
    setSpecialNote(`${REGION_META[id].name}被统统石化：7秒内不能增长和出兵`);
    clearActiveItem();
  } else if (activeItem === "disarm") {
    if (!spendCoins(ITEM_COSTS.disarm, "金币不足，不能使用除你武器")) return;
    state[id].disarmUntil = performance.now() + 9000;
    setSpecialNote(`${REGION_META[id].name}被除你武器：下一段时间出兵减半`);
    clearActiveItem();
  }
  render();
}

function spendCoins(cost, message = "金币不足") {
  if (coins < cost) {
    updateStrategyBar(message);
    return false;
  }
  coins -= cost;
  return true;
}

function clearActiveItem() {
  activeItem = null;
  flooSource = null;
  selected = null;
  updateStrategyBar();
}

function checkMission(id) {
  const mission = currentMission();
  if (!mission || id !== mission.target || state[id].owner !== "player") return;
  missionStep += 1;
  coins += mission.reward;
  const done = missionStep >= missionChain().length;
  updateStrategyBar(done ? `任务链完成 +${mission.reward}` : `完成 +${mission.reward}`);
}

function missionChain() {
  const level = LEVELS[levelIndex] || {};
  return level.missionChain || (level.mission ? [level.mission] : []);
}

function currentMission() {
  return missionChain()[missionStep];
}

function canUseItemOn(item, id) {
  const owner = state[id]?.owner;
  if (item === "reinforce" || item === "shield") return owner === "player";
  if (item === "floo") return owner === "player";
  if (item === "petrify") return owner !== "player";
  if (item === "disarm") return owner === "enemy";
  return false;
}

function adjacentTo(id) {
  const routes = new Set(ADJACENCY[id] || []);
  if (activeEvent === "movingStairs" && (id === "GrandStaircase" || id === "Greenhouses" || id === "RoomOfRequirement")) {
    if (id === "GrandStaircase") {
      routes.add("Greenhouses");
      routes.add("RoomOfRequirement");
    } else {
      routes.add("GrandStaircase");
    }
  }
  return Array.from(routes);
}

function isRegionFrozen(id, now = performance.now()) {
  return Boolean(state[id]?.freezeUntil && now < state[id].freezeUntil);
}

function isRegionDisarmed(id, now = performance.now()) {
  return Boolean(state[id]?.disarmUntil && now < state[id].disarmUntil);
}

function eventGrowthMultiplier() {
  return activeEvent === "dementors" ? 0.72 : 1;
}

function updateTimedEffects(now) {
  if (activeEvent && now >= activeEventUntil) {
    activeEvent = null;
    setEventNote("随机事件结束");
  }
  if (now >= nextEventAt) triggerRandomEvent(now);
}

function triggerRandomEvent(now) {
  const events = ["phoenix", "dementors", "movingStairs", "coinCache"];
  const event = events[Math.floor(Math.random() * events.length)];
  if (event === "phoenix") {
    const target = weakestOwnedRegion("player");
    if (target) {
      state[target].troops += 18;
      setEventNote(`凤凰福克斯出现：${REGION_META[target].name} +18`);
    }
  } else if (event === "dementors") {
    activeEvent = "dementors";
    activeEventUntil = now + 10000;
    setEventNote("摄魂怪来袭：全场兵力增长暂时变慢");
  } else if (event === "movingStairs") {
    activeEvent = "movingStairs";
    activeEventUntil = now + 12000;
    setEventNote("活动楼梯移动：临时连通温室和有求必应屋");
  } else if (event === "coinCache") {
    coins += 20;
    setEventNote("发现学院补给：金币 +20");
  }
  nextEventAt = now + EVENT_INTERVAL + Math.random() * 9000;
}

function weakestOwnedRegion(owner) {
  return Object.entries(state)
    .filter(([, region]) => region.owner === owner)
    .sort((a, b) => a[1].troops - b[1].troops)[0]?.[0];
}

function setEventNote(text, duration = 5200) {
  eventNote = text;
  eventNoteUntil = performance.now() + duration;
  updateStrategyBar();
}

function updateStrategyBar(note = "") {
  const chain = missionChain();
  const mission = currentMission();
  if (coinCount) coinCount.textContent = Math.floor(coins);
  if (missionText) missionText.textContent = mission ? `${missionStep + 1}/${chain.length} ${mission.text}` : "已完成";
  if (missionStatus) {
    missionStatus.textContent = note || (mission ? `奖励 +${mission.reward}，占地 -${CAPTURE_COST}` : "任务链完成");
  }
  if (specialStatus) {
    specialStatus.textContent = currentSpecialStatus();
  }
  if (eventStatus) {
    eventStatus.textContent = currentEventStatus();
  }
  const itemButtons = [
    [itemReinforce, "reinforce", ITEM_COSTS.reinforce],
    [itemShield, "shield", ITEM_COSTS.shield],
    [itemFloo, "floo", ITEM_COSTS.floo],
    [itemPetrify, "petrify", ITEM_COSTS.petrify],
    [itemDisarm, "disarm", ITEM_COSTS.disarm],
  ];
  for (const [button, item, cost] of itemButtons) {
    if (!button) continue;
    button.disabled = ended || paused || coins < cost;
    button.classList.toggle("is-active", activeItem === item);
  }
}

function currentEventStatus() {
  const now = performance.now();
  if (eventNote && now < eventNoteUntil) return eventNote;
  if (activeEvent === "dementors") return "摄魂怪影响中：增长变慢";
  if (activeEvent === "movingStairs") return "楼梯移动中：出现临时路线";
  return "随机事件待触发";
}

function currentSpecialStatus() {
  const now = performance.now();
  if (specialNote && now < specialNoteUntil) return specialNote;
  if (enemyForecast && state.AstronomyTower?.owner === "player") {
    return `天文塔预警：${REGION_META[enemyForecast.from].name} → ${REGION_META[enemyForecast.to].name}`;
  }

  const active = [];
  if (state.ThreeBroomsticks?.owner === "player") active.push("三把扫帚产金币");
  if (state.AstronomyTower?.owner === "player") active.push("天文塔待预警");
  if (state.StoneDefenseLine?.owner === "player") active.push("石像防线防守中");
  return active.join(" / ") || "抢特殊地块改变战局";
}

function setSpecialNote(text, duration = 3600) {
  specialNote = text;
  specialNoteUntil = performance.now() + duration;
}

function pauseGameFlow() {
  if (ended || paused) return;
  paused = true;
  pauseStarted = performance.now();
  selected = null;
  activeItem = null;
  flooSource = null;
  enemyForecast = null;
  drag = null;
  clearDragLine();
  window.removeEventListener("pointermove", onPointerMove);
  window.removeEventListener("pointerup", onPointerUp);
  showBanner("已暂停");
  updatePauseButtons();
  updateStrategyBar();
}

function resumeGameFlow() {
  if (ended || !paused) return;
  const pausedFor = performance.now() - pauseStarted;
  for (const packet of packets) packet.start += pausedFor;
  if (enemyForecast) enemyForecast.attackAt += pausedFor;
  if (activeEventUntil > pauseStarted) activeEventUntil += pausedFor;
  if (nextEventAt > pauseStarted) nextEventAt += pausedFor;
  if (eventNoteUntil > pauseStarted) eventNoteUntil += pausedFor;
  if (specialNoteUntil > pauseStarted) specialNoteUntil += pausedFor;
  for (const region of Object.values(state)) {
    if (region.shieldUntil && region.shieldUntil > pauseStarted) region.shieldUntil += pausedFor;
    if (region.freezeUntil && region.freezeUntil > pauseStarted) region.freezeUntil += pausedFor;
    if (region.disarmUntil && region.disarmUntil > pauseStarted) region.disarmUntil += pausedFor;
  }
  lastAi += pausedFor;
  paused = false;
  pauseStarted = 0;
  hideBanner();
  updatePauseButtons();
  updateStrategyBar();
}

function updatePauseButtons() {
  if (pauseGame) pauseGame.disabled = paused || ended;
  if (startGame) startGame.disabled = !paused || ended;
}

function showBanner(text) {
  statusBanner.textContent = text;
  statusBanner.hidden = false;
}

function hideBanner() {
  statusBanner.hidden = true;
}

prevLevel.addEventListener("click", () => startLevel(levelIndex - 1));
nextLevel.addEventListener("click", () => startLevel(levelIndex + 1));
restartLevel.addEventListener("click", () => startLevel(levelIndex));
pauseGame?.addEventListener("click", pauseGameFlow);
startGame?.addEventListener("click", resumeGameFlow);
itemReinforce?.addEventListener("click", () => setActiveItem("reinforce"));
itemShield?.addEventListener("click", () => setActiveItem("shield"));
itemFloo?.addEventListener("click", () => setActiveItem("floo"));
itemPetrify?.addEventListener("click", () => setActiveItem("petrify"));
itemDisarm?.addEventListener("click", () => setActiveItem("disarm"));

loadMap().then(() => {
  startLevel(0);
  requestAnimationFrame(update);
});
