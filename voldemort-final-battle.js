const REGION_META = {
  ForbiddenForestCamp: { name: "禁林营地", x: 175, y: 160 },
  NaginiGuard: { name: "纳吉尼护卫", x: 410, y: 154 },
  DeathEaterLine: { name: "食死徒阵线", x: 615, y: 160 },
  VoldemortRise: { name: "伏地魔本阵", x: 835, y: 190 },
  BlackLakeShore: { name: "黑湖岸", x: 196, y: 408 },
  ViaductBridge: { name: "高架桥", x: 434, y: 314 },
  AstronomyTower: { name: "天文塔", x: 620, y: 318 },
  BellTower: { name: "钟楼", x: 492, y: 462 },
  Courtyard: { name: "决战庭院", x: 680, y: 462 },
  StoneGuardians: { name: "石像防线", x: 820, y: 456 },
  GreatHallDuel: { name: "礼堂决战", x: 674, y: 600 },
  RoomExit: { name: "密道出口", x: 330, y: 620 },
  Boathouse: { name: "船屋", x: 136, y: 604 },
  FallenStaircase: { name: "坍塌楼梯", x: 510, y: 560 },
};

const ADJACENCY = {
  ForbiddenForestCamp: ["NaginiGuard", "BlackLakeShore"],
  NaginiGuard: ["ForbiddenForestCamp", "DeathEaterLine", "ViaductBridge"],
  DeathEaterLine: ["NaginiGuard", "VoldemortRise", "ViaductBridge", "AstronomyTower"],
  VoldemortRise: ["DeathEaterLine", "AstronomyTower", "StoneGuardians"],
  BlackLakeShore: ["ForbiddenForestCamp", "ViaductBridge", "Boathouse"],
  ViaductBridge: ["BlackLakeShore", "NaginiGuard", "DeathEaterLine", "AstronomyTower", "BellTower"],
  AstronomyTower: ["DeathEaterLine", "VoldemortRise", "ViaductBridge", "BellTower", "Courtyard"],
  BellTower: ["ViaductBridge", "AstronomyTower", "Courtyard", "FallenStaircase", "RoomExit"],
  Courtyard: ["AstronomyTower", "BellTower", "StoneGuardians", "GreatHallDuel"],
  StoneGuardians: ["VoldemortRise", "Courtyard", "GreatHallDuel"],
  GreatHallDuel: ["Courtyard", "StoneGuardians", "FallenStaircase", "RoomExit"],
  RoomExit: ["Boathouse", "BellTower", "FallenStaircase", "GreatHallDuel"],
  Boathouse: ["BlackLakeShore", "RoomExit"],
  FallenStaircase: ["BellTower", "RoomExit", "GreatHallDuel"],
};

const LEVELS = [
  {
    title: "第一关：守住高架桥",
    brief: "从礼堂和庭院出兵，先夺高架桥，挡住食死徒阵线。",
    aiDelay: 1800,
    coins: 70,
    mission: { target: "ViaductBridge", text: "夺回高架桥", reward: 35 },
    regions: {
      GreatHallDuel: ["player", 32],
      Courtyard: ["player", 40],
      DeathEaterLine: ["enemy", 34],
      VoldemortRise: ["enemy", 30],
      ViaductBridge: ["neutral", 14],
      StoneGuardians: ["neutral", 18],
      BellTower: ["neutral", 14],
    },
  },
  {
    title: "第二关：围剿纳吉尼",
    brief: "先拿石像防线和天文塔，稳住庭院后再夹击纳吉尼护卫。",
    aiDelay: 1800,
    coins: 75,
    mission: { target: "NaginiGuard", text: "击破纳吉尼护卫", reward: 50 },
    regions: {
      GreatHallDuel: ["player", 48],
      Courtyard: ["player", 40],
      BellTower: ["player", 24],
      NaginiGuard: ["enemy", 34],
      DeathEaterLine: ["enemy", 28],
      VoldemortRise: ["enemy", 30],
      ViaductBridge: ["neutral", 12],
      AstronomyTower: ["neutral", 12],
      StoneGuardians: ["neutral", 10],
      RoomExit: ["neutral", 10],
    },
  },
  {
    title: "第三关：礼堂终战",
    brief: "先守礼堂并抢石像防线，再夺天文塔，最后夹击伏地魔本阵。",
    aiDelay: 1650,
    coins: 85,
    mission: { target: "StoneGuardians", text: "激活石像防线", reward: 55 },
    regions: {
      GreatHallDuel: ["player", 60],
      Courtyard: ["player", 42],
      RoomExit: ["player", 30],
      VoldemortRise: ["enemy", 44],
      DeathEaterLine: ["enemy", 34],
      NaginiGuard: ["enemy", 28],
      ForbiddenForestCamp: ["enemy", 22],
      AstronomyTower: ["neutral", 14],
      StoneGuardians: ["neutral", 14],
      ViaductBridge: ["neutral", 12],
      BellTower: ["neutral", 12],
      FallenStaircase: ["neutral", 10],
    },
  },
];

const COLORS = {
  player: "#74BCFF",
  enemy: "#FF634D",
  neutral: "#A2A2A2",
};

const GROWTH = {
  ForbiddenForestCamp: 0.9,
  NaginiGuard: 0.85,
  DeathEaterLine: 0.95,
  VoldemortRise: 0.8,
  BlackLakeShore: 0.7,
  ViaductBridge: 1.1,
  AstronomyTower: 0.95,
  BellTower: 1,
  Courtyard: 1.15,
  StoneGuardians: 0.9,
  GreatHallDuel: 1.2,
  RoomExit: 1,
  Boathouse: 0.85,
  FallenStaircase: 1,
};

const COIN_RATE = {
  GreatHallDuel: 1.6,
  Courtyard: 1.1,
  RoomExit: 1,
  ViaductBridge: 1.3,
  BellTower: 1,
  StoneGuardians: 0.9,
  Boathouse: 0.8,
};

const SPECIAL_RULES = {
  NaginiGuard: "首次击破：解除蛇影压制，两处薄弱地块获得 +14 增援，并削弱伏地魔本阵",
  StoneGuardians: "石像防线：占领方在此地块受到的伤害降低",
  AstronomyTower: "天文塔预警：凤凰社占领时提前看见敌方下一次进攻方向",
  RoomExit: "密道出口：首次占领触发密道增援",
  ViaductBridge: "高架桥：占领方通过高架桥的部队移动更快",
  GreatHallDuel: "礼堂决战：凤凰社占领时全线士气提升，金币和增长更高",
};

const FORECAST_LEAD_MS = 1500;
const STONE_DEFENSE_MULTIPLIER = 0.55;
const GREAT_HALL_MORALE = 1.1;

const ITEM_COSTS = {
  reinforce: 50,
  shield: 45,
  floo: 40,
};

const DEFAULT_REGION = ["neutral", 12];
const MAP_URL = "assets/maps/VoldemortFinalBattle.svg";
const MAP_PREFIX = "VFB";
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
const itemReinforce = document.querySelector("#itemReinforce");
const itemShield = document.querySelector("#itemShield");
const itemFloo = document.querySelector("#itemFloo");

let levelIndex = 0;
let state = {};
let svg;
let selected = null;
let packets = [];
let ended = false;
let lastAi = 0;
let naginiBonusUsed = false;
let roomExitBonusUsed = false;
let drag = null;
let paused = false;
let pauseStarted = 0;
let coins = 0;
let missionDone = false;
let activeItem = null;
let flooSource = null;
let enemyForecast = null;
let specialNote = "";
let specialNoteUntil = 0;

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
    const response = await fetch(MAP_URL);
    const text = await response.text();
    mapHost.innerHTML = text;
    svg = mapHost.querySelector("svg");
  }

  if (!svg) {
    throw new Error("伏地魔决战地图未能加载");
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
  return svg?.querySelector(`#${MAP_PREFIX}_${id}`);
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
  naginiBonusUsed = false;
  roomExitBonusUsed = false;
  missionDone = false;
  activeItem = null;
  flooSource = null;
  enemyForecast = null;
  specialNote = "";
  specialNoteUntil = 0;
  hideBanner();
  updatePauseButtons();
  updateStrategyBar();
  render();
}

function onRegionPointerDown(event, id) {
  if (ended || paused) return;
  if (activeItem && state[id].owner === "player") {
    useActiveItem(id);
    return;
  }
  if (state[id].owner === "player") {
    beginDrag(event, id);
    return;
  }

  if (selected && ADJACENCY[selected].includes(id)) {
    send(selected, id, "player");
    selected = null;
    render();
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
  const canAttack = target && target !== source && ADJACENCY[source].includes(target);

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
  const group = element?.closest?.(`[id^='${MAP_PREFIX}_']`);
  if (!group) return null;
  return group.id.replace(`${MAP_PREFIX}_`, "");
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
  if (state[from].owner !== owner || state[from].troops < 2) return;
  const amount = Math.floor(state[from].troops / 2);
  state[from].troops -= amount;
  const a = REGION_META[from];
  const b = REGION_META[to];
  const distance = Math.hypot(a.x - b.x, a.y - b.y);
  const bridgeBoost = (from === "ViaductBridge" || to === "ViaductBridge") && state.ViaductBridge?.owner === owner ? 0.78 : 1;
  packets.push({
    owner,
    amount,
    from,
    to,
    start: performance.now(),
    duration: Math.max(460, distance * 3.2 * bridgeBoost),
  });
}

function resolveArrival(packet) {
  const target = state[packet.to];
  if (target.owner === packet.owner) {
    target.troops += packet.amount;
    return;
  }

  const shielded = target.shieldUntil && performance.now() < target.shieldUntil;
  const stoneDefended = packet.to === "StoneGuardians" && target.owner !== "neutral";
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
  const ownerName = owner === "player" ? "凤凰社" : "伏地魔阵营";

  if (id === "NaginiGuard" && owner === "player" && !naginiBonusUsed) {
    naginiBonusUsed = true;
    applyBonus(owner, 14);
    if (state.VoldemortRise?.owner === "enemy") {
      state.VoldemortRise.troops = Math.max(1, state.VoldemortRise.troops - 12);
    }
    setSpecialNote("纳吉尼护卫被击破：两处薄弱地块 +14，伏地魔本阵 -12");
  }

  if (id === "RoomExit" && owner === "player" && !roomExitBonusUsed) {
    roomExitBonusUsed = true;
    state.RoomExit.troops += 18;
    applyBonus(owner, 10);
    setSpecialNote("密道出口打开：出口 +18，两处薄弱地块 +10");
  }

  if (id === "StoneGuardians") {
    setSpecialNote(`${ownerName}控制石像防线：此处受到伤害降低`);
  }

  if (id === "AstronomyTower" && owner === "player") {
    enemyForecast = null;
    setSpecialNote("天文塔已占领：敌方下一次进攻会提前预警");
  }

  if (id === "ViaductBridge") {
    setSpecialNote(`${ownerName}控制高架桥：通过高架桥的部队移动更快`);
  }

  if (id === "GreatHallDuel" && owner === "player") {
    setSpecialNote("礼堂决战已稳住：凤凰社全线士气提升");
  }
}

function applyBonus(owner, amount) {
  const owned = Object.entries(state)
    .filter(([, region]) => region.owner === owner)
    .sort((a, b) => a[1].troops - b[1].troops)
    .slice(0, 2);
  for (const [, region] of owned) region.troops += amount;
}

function update(now) {
  if (!ended && !paused) {
    for (const [id, region] of Object.entries(state)) {
      if (region.owner !== "neutral") {
        const morale = region.owner === "player" && state.GreatHallDuel?.owner === "player" ? GREAT_HALL_MORALE : 1;
        region.troops += (GROWTH[id] || 1) * morale * 0.018;
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
    .filter(([id, region]) => region.owner === "enemy" && region.troops >= 10 && ADJACENCY[id].some((to) => state[to].owner !== "enemy"))
    .sort((a, b) => b[1].troops - a[1].troops);

  const [from] = candidates[0] || [];
  if (!from) return null;

  const targets = ADJACENCY[from]
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
      ADJACENCY[from]?.includes(to)
  );
}

function targetScore(id) {
  const ownerScore = state[id].owner === "player" ? 42 : 10;
  const keyScore = id === "Courtyard" || id === "GreatHallDuel" || id === "ViaductBridge" || id === "AstronomyTower" ? 12 : 0;
  return ownerScore + keyScore + (24 - state[id].troops);
}

function checkEnd() {
  const hasEnemy = Object.values(state).some((region) => region.owner === "enemy");
  const hasPlayer = Object.values(state).some((region) => region.owner === "player");

  if (!hasEnemy) {
    ended = true;
    updatePauseButtons();
    showBanner(levelIndex === LEVELS.length - 1 ? "伏地魔被击败" : "通关，点下一关继续");
  } else if (!hasPlayer) {
    ended = true;
    updatePauseButtons();
    showBanner("防线崩溃，点重开再试");
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
    group?.classList.toggle("is-target", Boolean(selected && ADJACENCY[selected].includes(id)));
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
    const fortified = id === "StoneGuardians" && region.owner !== "neutral";
    marker.className = `troop ${region.owner}${shielded ? " shielded" : ""}${fortified ? " fortified" : ""}`;
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
  if (activeItem === "reinforce") {
    if (!spendCoins(ITEM_COSTS.reinforce)) return;
    state[id].troops += 30;
    clearActiveItem();
  } else if (activeItem === "shield") {
    if (!spendCoins(ITEM_COSTS.shield)) return;
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
      if (!spendCoins(ITEM_COSTS.floo)) return;
      send(flooSource, id, "player");
    }
    clearActiveItem();
  }
  render();
}

function spendCoins(cost) {
  if (coins < cost) return false;
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
  const mission = LEVELS[levelIndex].mission;
  if (!mission || missionDone || id !== mission.target || state[id].owner !== "player") return;
  missionDone = true;
  coins += mission.reward;
  updateStrategyBar();
}

function updateStrategyBar(note = "") {
  const mission = LEVELS[levelIndex]?.mission;
  if (coinCount) coinCount.textContent = Math.floor(coins);
  if (missionText) missionText.textContent = mission?.text || "无";
  if (missionStatus) {
    missionStatus.textContent = missionDone ? `完成 +${mission.reward}` : note || "未完成";
  }
  if (specialStatus) {
    specialStatus.textContent = currentSpecialStatus();
  }
  const itemButtons = [
    [itemReinforce, "reinforce", ITEM_COSTS.reinforce],
    [itemShield, "shield", ITEM_COSTS.shield],
    [itemFloo, "floo", ITEM_COSTS.floo],
  ];
  for (const [button, item, cost] of itemButtons) {
    if (!button) continue;
    button.disabled = ended || paused || coins < cost;
    button.classList.toggle("is-active", activeItem === item);
  }
}

function currentSpecialStatus() {
  const now = performance.now();
  if (specialNote && now < specialNoteUntil) return specialNote;
  if (enemyForecast && state.AstronomyTower?.owner === "player") {
    return `天文塔预警：${REGION_META[enemyForecast.from].name} → ${REGION_META[enemyForecast.to].name}`;
  }

  const active = [];
  if (state.GreatHallDuel?.owner === "player") active.push("礼堂士气提升");
  if (state.ViaductBridge?.owner === "player") active.push("高架桥快速行军");
  if (state.AstronomyTower?.owner === "player") active.push("天文塔待预警");
  if (state.StoneGuardians?.owner === "player") active.push("石像防线防守中");
  if (state.RoomExit?.owner === "player" && roomExitBonusUsed) active.push("密道增援已触发");
  return active.join(" / ") || "抢特殊地块改变终战节奏";
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
  for (const region of Object.values(state)) {
    if (region.shieldUntil && region.shieldUntil > pauseStarted) region.shieldUntil += pausedFor;
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

loadMap().then(() => {
  startLevel(0);
  requestAnimationFrame(update);
});
