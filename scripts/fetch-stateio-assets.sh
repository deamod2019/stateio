#!/usr/bin/env bash
set -euo pipefail

base="https://app-191972.games.s3.yandex.net/191972/7oo5b5sa97uxzzwsovif1dsu76rmfj2d_brotli/assets"

mkdir -p assets/buildings assets/fighters assets/animation assets/sounds assets/maps

fetch() {
  local path="$1"
  curl -fsSL "${base}/${path}" -o "assets/${path}"
}

fetch "Notification.png"
fetch "spinner.svg"
fetch "skull.svg"
fetch "finger.svg"
fetch "animation/win-rays.svg"
fetch "victory-framing.svg"
fetch "gift-icon.svg"
fetch "sounds/track.mp3"

maps=(
  "United-States.svg"
  "Latin-America.svg"
  "Africa.svg"
  "UK.svg"
  "EuropeanUnion.svg"
  "Italy.svg"
  "Arabic.svg"
  "Central-Asia.svg"
  "Japan.svg"
  "China,Russia,Korea,Japan.svg"
  "Korea.svg"
  "China-Oceania-Australia.svg"
  "United-States2.svg"
)

for map in "${maps[@]}"; do
  fetch "maps/${map}"
done

for i in $(seq 1 33); do
  fetch "buildings/${i}.svg"
done

for i in $(seq 1 30); do
  fetch "fighters/${i}.svg"
done
