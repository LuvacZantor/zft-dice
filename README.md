# ZFT Dice v1.2.0

ZFT Dice is a lightweight Foundry VTT module that adds the **Zantor Dice** custom 3D dice collection to Dice So Nice.

## Identity
- Module title: ZFT Dice
- Module ID: `zft-dice`
- Dice So Nice system: `zantor` / Zantor Dice
- Foundry target: V13
- Dice So Nice: 5.2.5+

## v1.2.0
- Renames the Foundry module from Zantor So Nice to ZFT Dice.
- Changes the module ID from `zantor-so-nice` to `zft-dice`.
- Renames the primary script to `scripts/zft-dice.js`.
- Updates every custom model path to `modules/zft-dice/assets/...`.
- Preserves the user-facing Dice So Nice system name **Zantor Dice**.
- Preserves all 17 custom dice presets and the v1.1.0 d30 model correction.
- Retains Foundry V13 and Dice So Nice dependency metadata.
- Updates all `[ZFT]` diagnostics to v1.2.0.

## Important
Because the Foundry module ID changed, remove/disable the old `zantor-so-nice` installation before enabling `zft-dice`. Do not run both copies simultaneously.

## Validation
1. Install the extracted module as `Data/modules/zft-dice/`.
2. Remove or disable the old `zantor-so-nice` module.
3. Enable ZFT Dice and Dice So Nice in a Foundry VTT V13 Build 351 test world.
4. Reload the world.
5. Verify Dice So Nice exposes **Zantor Dice**.
6. Roll the custom dice, including d30.
7. Confirm the models load without 404/path errors.

Expected console:
- `[ZFT] 🎲 v1.2.0 | ZFT Dice module script loaded`
- `[ZFT] 🧩 v1.2.0 | Dice So Nice ready hook received`
- `[ZFT] ✅ v1.2.0 | Zantor Dice system registered`
- `[ZFT] ✅ v1.2.0 | Zantor Dice presets registered`
