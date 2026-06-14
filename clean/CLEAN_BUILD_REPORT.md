# State.io Clean Build Report

## Output

- Directory: `clean/`
- Entry: `clean/index.html`
- Script: `clean/main.clean.js`
- Assets: copied from `assets/`

## Removed / Disabled

- Yandex SDK bootstrap and Yandex-specific DI overrides
- Ads module initialization and reward/interstitial ad calls
- Payments model binding to Yandex payments
- Leaderboard initialization, sync, submit, and leaderboard screen entry points
- Shop, no-ads, invite, login, social status, cross-promo, share-image, and tournament entry points
- Reward-ad paths in boosters and win rewards
- Remote font requests from the clean CSS

## Preserved

- Core map/gameplay bundle
- Local progress persistence through localStorage-backed cookie data
- Settings popup, including sound toggle and optional vibration toggle
- Level title, coin display, capturing progress, tap-to-play flow, win/lose flow
- Local asset loading from `clean/assets/`

## Patched Webpack Modules

- 47
- 2719
- 2906
- 5183
- 6248
- 7390
- 8189
- 8207
- 9045
- 10556
- 12079
- 14562
- 14633
- 14954
- 15850
- 20383
- 23862
- 24294
- 25556
- 30326
- 31651
- 34453
- 37079
- 37725
- 41976
- 42709
- 43603
- 44698
- 45301
- 45724
- 47665
- 49934
- 52958
- 54261
- 55378
- 56184
- 56462
- 57503
- 60921
- 61767
- 62415
- 63895
- 64122
- 65021
- 68047
- 70055
- 72688
- 76282
- 76742
- 79147
- 82978
- 83643
- 87460
- 89286
- 90050
- 90190
- 90211
- 93533
- 93599
- 96087
- 96648
- 97586
- 97954

## Notes

This build is generated from `main.js` by `scripts/build-clean.mjs`. Do not edit `clean/main.clean.js` manually; edit the generator and rerun it.
