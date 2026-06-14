import fs from "node:fs";

const sourcePath = process.argv[2] || "/tmp/china-100000-full.json";
const outputPath = process.argv[3] || "assets/maps/China.svg";

const width = 1000;
const height = 720;
const padding = 44;
const simplifyTolerance = 0.85;
const boundaryStroke = "#D8D8D8";
const boundaryStrokeWidth = 1.65;
const tinyRingArea = 12;
const horizontalStretch = 1.28;
const verticalStretch = 1.03;
const denseBeltSpread = 0.18;

const startBlue = new Set(["云南省"]);
const startRed = new Set(["新疆维吾尔自治区"]);
const centerNudges = new Map([
  ["甘肃省", [-13, -13]],
  ["北京市", [0, 0]],
  ["天津市", [4, 0]],
  ["河北省", [5, 10]],
  ["上海市", [10, -7]],
  ["江苏省", [13, -8]],
  ["浙江省", [11, 8]],
  ["香港特别行政区", [10, 11]],
  ["澳门特别行政区", [-10, 12]],
  ["广东省", [-5, -7]],
]);

const geojson = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const features = geojson.features.filter((feature) => feature.properties?.name);

function eachPoint(coordinates, visit) {
  if (typeof coordinates[0] === "number") {
    visit(coordinates);
    return;
  }
  coordinates.forEach((part) => eachPoint(part, visit));
}

let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;

for (const feature of features) {
  eachPoint(feature.geometry.coordinates, ([lon, lat]) => {
    const [x, y] = rawProject([lon, lat]);
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  });
}

const scale = Math.min((width - padding * 2) / (maxX - minX), (height - padding * 2) / (maxY - minY));
const mapWidth = (maxX - minX) * scale;
const mapHeight = (maxY - minY) * scale;
const offsetX = (width - mapWidth) / 2;
const offsetY = (height - mapHeight) / 2;

function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

function rawProject([lon, lat]) {
  const lambda = degreesToRadians(lon);
  const phi = degreesToRadians(lat);
  return [lambda, Math.log(Math.tan(Math.PI / 4 + phi / 2))];
}

function distort([x, y]) {
  const centerX = width / 2;
  const centerY = height / 2;
  let nextX = centerX + (x - centerX) * horizontalStretch;
  let nextY = centerY + (y - centerY) * verticalStretch;

  const focusX = 665;
  const focusY = 360;
  const radiusX = 260;
  const radiusY = 260;
  const normalizedX = (nextX - focusX) / radiusX;
  const normalizedY = (nextY - focusY) / radiusY;
  const falloff = Math.exp(-2.2 * (normalizedX * normalizedX + normalizedY * normalizedY));
  const factor = 1 + denseBeltSpread * falloff;

  return [
    focusX + (nextX - focusX) * factor,
    focusY + (nextY - focusY) * factor,
  ];
}

function project([lon, lat]) {
  const [x, y] = rawProject([lon, lat]);
  return distort([
    offsetX + (x - minX) * scale,
    offsetY + (maxY - y) * scale,
  ]);
}

function squareDistance(point, start, end) {
  const [x, y] = point;
  const [x1, y1] = start;
  const [x2, y2] = end;
  const dx = x2 - x1;
  const dy = y2 - y1;

  if (dx === 0 && dy === 0) {
    return (x - x1) ** 2 + (y - y1) ** 2;
  }

  let t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  t = Math.max(0, Math.min(1, t));
  const px = x1 + t * dx;
  const py = y1 + t * dy;
  return (x - px) ** 2 + (y - py) ** 2;
}

function simplifyRing(points, tolerance) {
  const closed = points.length > 1 && points[0][0] === points.at(-1)[0] && points[0][1] === points.at(-1)[1];
  const working = closed ? points.slice(0, -1) : points.slice();

  if (working.length <= 4) return points;

  const keep = new Array(working.length).fill(false);
  keep[0] = true;
  keep[working.length - 1] = true;
  const stack = [[0, working.length - 1]];
  const threshold = tolerance * tolerance;

  while (stack.length) {
    const [first, last] = stack.pop();
    let maxDistance = 0;
    let index = first;

    for (let i = first + 1; i < last; i += 1) {
      const distance = squareDistance(working[i], working[first], working[last]);
      if (distance > maxDistance) {
        index = i;
        maxDistance = distance;
      }
    }

    if (maxDistance > threshold) {
      keep[index] = true;
      stack.push([first, index], [index, last]);
    }
  }

  const simplified = working.filter((_, index) => keep[index]);
  if (simplified.length < 3) return points;
  if (closed) simplified.push(simplified[0]);
  return simplified;
}

function ringsFor(feature) {
  const { type, coordinates } = feature.geometry;
  const polygons = type === "Polygon" ? [coordinates] : coordinates;
  return polygons.flatMap((polygon) => polygon.slice(0, 1));
}

function ringArea(points) {
  let area = 0;
  for (let i = 0; i < points.length - 1; i += 1) {
    area += points[i][0] * points[i + 1][1] - points[i + 1][0] * points[i][1];
  }
  return Math.abs(area / 2);
}

function centroid(points) {
  let twiceArea = 0;
  let x = 0;
  let y = 0;

  for (let i = 0; i < points.length - 1; i += 1) {
    const cross = points[i][0] * points[i + 1][1] - points[i + 1][0] * points[i][1];
    twiceArea += cross;
    x += (points[i][0] + points[i + 1][0]) * cross;
    y += (points[i][1] + points[i + 1][1]) * cross;
  }

  if (Math.abs(twiceArea) < 1) {
    const average = points.reduce((sum, point) => [sum[0] + point[0], sum[1] + point[1]], [0, 0]);
    return [average[0] / points.length, average[1] / points.length];
  }

  return [x / (3 * twiceArea), y / (3 * twiceArea)];
}

function pathFromRing(points) {
  const [first, ...rest] = points;
  const start = `M${first[0].toFixed(1)} ${first[1].toFixed(1)}`;
  const lines = rest.map(([x, y]) => `L${x.toFixed(1)} ${y.toFixed(1)}`);
  return `${start}${lines.join("")}Z`;
}

function idFor(feature) {
  return `${feature.properties.adcode}-${feature.properties.name}`;
}

function fillFor(feature) {
  const name = feature.properties.name;
  if (startBlue.has(name)) return "#74BCFF";
  if (startRed.has(name)) return "#FF634D";
  return "#A2A2A2";
}

const stateGroups = features.map((feature, index) => {
  let projectedRings = ringsFor(feature)
    .map((ring) => ring.map(project))
    .map((ring) => simplifyRing(ring, simplifyTolerance))
    .filter((ring) => ring.length >= 4);
  const largestRing = projectedRings.reduce((best, ring) => (ringArea(ring) > ringArea(best) ? ring : best), projectedRings[0]);

  projectedRings = projectedRings.filter((ring) => ring === largestRing || ringArea(ring) >= tinyRingArea);
  const center = centroid(largestRing);
  const [nudgeX, nudgeY] = centerNudges.get(feature.properties.name) || [0, 0];
  const [cx, cy] = [center[0] + nudgeX, center[1] + nudgeY];
  const id = idFor(feature);
  const path = projectedRings.map(pathFromRing).join("");
  const radius = ["香港特别行政区", "澳门特别行政区"].includes(feature.properties.name)
    ? 2.5
    : ["北京市", "天津市", "上海市"].includes(feature.properties.name)
      ? 4.5
      : 7;

  return `      <g id="${id}">
        <path id="${id}_2" fill-rule="evenodd" clip-rule="evenodd" d="${path}" fill="${fillFor(feature)}" stroke="${boundaryStroke}" stroke-width="${boundaryStrokeWidth}" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
        <g id="Centre_${index + 1}"><circle id="Centre_${feature.properties.adcode}" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${radius}" fill="white"/></g>
      </g>`;
});

const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="China">
    <g id="Stage1">
${stateGroups.join("\n")}
    </g>
  </g>
</svg>
`;

fs.writeFileSync(outputPath, svg);
console.log(`wrote ${outputPath} from ${features.length} named GeoJSON features`);
