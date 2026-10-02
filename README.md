# ZFT Dice v1.2.1

ZFT Dice is a lightweight Foundry VTT module that adds the **Zantor Dice** custom 3D dice collection to Dice So Nice.

## Identity
- Module title: ZFT Dice
- Module ID: `zft-dice`
- Dice So Nice system: `zantor` / 💤Zantor Dice
- Foundry target: V13
- Dice So Nice: 5.2.5+

## v1.2.1
- Corrects custom Dice So Nice `modelFile` definitions to use string paths.
- Updates the Foundry manifest to the current `id` / `authors` structure.
- Removes obsolete module identity and placeholder update/download metadata.
- Sets the project URL to the ZFT Dice GitHub repository.
- Preserves the user-facing Dice So Nice system name **💤Zantor Dice**.
- Preserves all 17 custom dice presets and existing 3D model assets.
- Synchronizes module-facing diagnostics to v1.2.1.

## Important
Because the Foundry module ID changed in v1.2.0, remove/disable the old `zantor-so-nice` installation before enabling `zft-dice`. Do not run both copies simultaneously.

## Validation
1. Extract the package into `Data/modules/` so the final path is `Data/modules/zft-dice/`.
2. Remove or disable the old `zantor-so-nice` module.
3. Enable ZFT Dice and Dice So Nice in a Foundry VTT V13 Build 351 test world.
4. Reload the world.
5. Verify Dice So Nice exposes **💤Zantor Dice**.
6. Roll the custom dice, including d30.
7. Confirm the models load without 404/path errors.

Expected console:
- `[ZFT] 🎲 v1.2.1 | ZFT Dice module script loaded`
- `[ZFT] 🧩 v1.2.1 | Dice So Nice ready hook received`
- `[ZFT] ✅ v1.2.1 | Zantor Dice system registered`
- `[ZFT] ✅ v1.2.1 | Zantor Dice presets registered`
