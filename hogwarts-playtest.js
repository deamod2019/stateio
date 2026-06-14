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
  HogwartsCastle: { name: "霍格沃茨城堡", x: 602, y: 330 },
  RoomOfRequirement: { name: "有求必应屋", x: 704, y: 312 },
  WhompingWillow: { name: "打人柳", x: 756, y: 424 },
  GrandStaircase: { name: "活动楼梯", x: 500, y: 450 },
  Greenhouses: { name: "温室", x: 752, y: 532 },
  Boathouse: { name: "船屋", x: 612, y: 588 },
  GreatHall: { name: "礼堂", x: 470, y: 588 },
  Dungeon: { name: "地牢", x: 300, y: 684 },
};

const ADJACENCY = {
  Honeydukes: ["DervishAndBanges", "QuidditchPitch"],
  DervishAndBanges: ["Honeydukes", "Spintwitches", "QuidditchPitch"],
  Spintwitches: ["DervishAndBanges", "GladragsWizardwear", "QuidditchPitch", "NorthLawn"],
  GladragsWizardwear: ["Spintwitches", "ThreeBroomsticks", "NorthLawn"],
  ThreeBroomsticks: ["GladragsWizardwear", "NorthLawn"],
  QuidditchPitch: ["Honeydukes", "DervishAndBanges", "Spintwitches", "NorthLawn", "BlackLake"],
  NorthLawn: ["Spintwitches", "GladragsWizardwear", "ThreeBroomsticks", "QuidditchPitch", "GryffindorTower", "HagridHut"],
  HagridHut: ["NorthLawn", "ForbiddenForest", "RoomOfRequirement"],
  ForbiddenForest: ["HagridHut", "WhompingWillow", "Greenhouses"],
  BlackLake: ["QuidditchPitch", "GrandStaircase", "Dungeon", "Boathouse"],
  GryffindorTower: ["NorthLawn", "HogwartsCastle", "GrandStaircase"],
  HogwartsCastle: ["GryffindorTower", "RoomOfRequirement", "GrandStaircase", "WhompingWillow"],
  RoomOfRequirement: ["HogwartsCastle", "HagridHut", "WhompingWillow"],
  WhompingWillow: ["HogwartsCastle", "RoomOfRequirement", "Greenhouses", "ForbiddenForest"],
  GrandStaircase: ["GryffindorTower", "HogwartsCastle", "GreatHall", "BlackLake", "Boathouse"],
  Greenhouses: ["WhompingWillow", "Boathouse", "ForbiddenForest"],
  Boathouse: ["GrandStaircase", "GreatHall", "BlackLake", "Greenhouses"],
  GreatHall: ["GrandStaircase", "Boathouse", "Dungeon"],
  Dungeon: ["GreatHall", "BlackLake"],
};

const LEVELS = [
  {
    title: "第一关：夜巡入校",
    brief: "从城堡和格兰芬多塔出发，夺回活动楼梯，再压住地牢。",
    aiDelay: 1850,
    coins: 70,
    mission: { target: "GrandStaircase", text: "占领活动楼梯", reward: 35 },
    regions: {
      HogwartsCastle: ["player", 38],
      GryffindorTower: ["player", 28],
      Dungeon: ["enemy", 36],
      ForbiddenForest: ["enemy", 30],
      GrandStaircase: ["neutral", 16],
      GreatHall: ["neutral", 22],
      RoomOfRequirement: ["neutral", 12],
    },
  },
  {
    title: "第二关：湖岸反击",
    brief: "黑湖兵力很厚，但行动慢。先守城堡，再从船屋打开南线。",
    aiDelay: 1550,
    coins: 75,
    mission: { target: "Boathouse", text: "占领船屋打开南线", reward: 40 },
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
    },
  },
  {
    title: "第三关：禁林决战",
    brief: "先抢有求必应屋拿增援，再从活动楼梯和温室夹击禁林。",
    aiDelay: 1600,
    coins: 80,
    mission: { target: "RoomOfRequirement", text: "抢下有求必应屋", reward: 60 },
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
  HogwartsCastle: 1,
  RoomOfRequirement: 0.9,
  WhompingWillow: 0.8,
  GrandStaircase: 1.1,
  Greenhouses: 1.05,
  Boathouse: 0.95,
  GreatHall: 1.25,
  Dungeon: 1,
};

const COIN_RATE = {
  Honeydukes: 1.6,
  DervishAndBanges: 1.25,
  Spintwitches: 1.35,
  GladragsWizardwear: 1.25,
  ThreeBroomsticks: 1.8,
  QuidditchPitch: 1,
  GreatHall: 0.8,
  HogwartsCastle: 0.7,
};

const ITEM_COSTS = {
  reinforce: 50,
  shield: 45,
  floo: 40,
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
let roomBonusUsed = false;
let quidditchBonusUsed = false;
let drag = null;
let paused = false;
let pauseStarted = 0;
let coins = 0;
let missionDone = false;
let activeItem = null;
let flooSource = null;

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
  missionDone = false;
  activeItem = null;
  flooSource = null;
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
  if (state[from].owner !== owner || state[from].troops < 2) return;
  const amount = Math.floor(state[from].troops / 2);
  state[from].troops -= amount;
  const a = REGION_META[from];
  const b = REGION_META[to];
  const distance = Math.hypot(a.x - b.x, a.y - b.y);
  const lakePenalty = from === "BlackLake" ? 1.2 : 1;
  packets.push({
    owner,
    amount,
    from,
    to,
    start: performance.now(),
    duration: Math.max(520, distance * 3.2 * lakePenalty),
  });
}

function resolveArrival(packet) {
  const target = state[packet.to];
  if (target.owner === packet.owner) {
    target.troops += packet.amount;
    return;
  }

  const shielded = target.shieldUntil && performance.now() < target.shieldUntil;
  const damage = shielded ? Math.ceil(packet.amount / 2) : packet.amount;
  target.troops -= damage;
  if (target.troops < 0) {
    target.owner = packet.owner;
    target.troops = Math.abs(target.troops);
    if (packet.to === "RoomOfRequirement" && packet.owner === "player" && !roomBonusUsed) {
      roomBonusUsed = true;
      applyRoomBonus(packet.owner);
    }
    if (packet.to === "QuidditchPitch" && !quidditchBonusUsed) {
      quidditchBonusUsed = true;
      target.troops += 100;
    }
    checkMission(packet.to);
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
    for (const [id, region] of Object.entries(state)) {
      if (region.owner !== "neutral") {
        region.troops += (GROWTH[id] || 1) * 0.018;
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

    const level = LEVELS[levelIndex];
    if (now - lastAi > level.aiDelay) {
      lastAi = now;
      aiMove();
    }

    checkEnd();
  }

  render(paused ? pauseStarted : now);
  requestAnimationFrame(update);
}

function aiMove() {
  const candidates = Object.entries(state)
    .filter(([id, region]) => region.owner === "enemy" && region.troops >= 10 && ADJACENCY[id].some((to) => state[to].owner !== "enemy"))
    .sort((a, b) => b[1].troops - a[1].troops);

  const [from] = candidates[0] || [];
  if (!from) return;

  const targets = ADJACENCY[from]
    .filter((id) => state[id].owner !== "enemy")
    .sort((a, b) => targetScore(b) - targetScore(a));
  const to = targets[0];
  if (to) send(from, to, "enemy");
}

function targetScore(id) {
  const ownerScore = state[id].owner === "player" ? 40 : 10;
  return ownerScore + (24 - state[id].troops) + (id === "GrandStaircase" || id === "RoomOfRequirement" ? 10 : 0);
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
    group?.classList.toggle("is-target", Boolean(selected && ADJACENCY[selected].includes(id)));
  }

  troopLayer.innerHTML = "";
  for (const [id, region] of Object.entries(state)) {
    const meta = REGION_META[id];
    const marker = document.createElement("div");
    const shielded = region.shieldUntil && now < region.shieldUntil;
    marker.className = `troop ${region.owner}${shielded ? " shielded" : ""}`;
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
