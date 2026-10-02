# ZFT Dice v1.4.2

Custom Dice So Nice dice systems for Foundry VTT.

## Dice Presets

- `💤Zantor Old` preserves the original baked GLB dice.
- `💤Zantor's Realms` is the modern theme-driven dice system.

## Zantor's Realms Themes

- `Classic Rainbow`
  - d4 blue `#62B3FE`
  - d6 green `#38D40C`
  - d8 orange `#F0920F`
  - d10 yellow `#FFEA05`
  - d12 ivory/white `#F7F4F8`
  - d20 red `#FF0A0A`
  - d100 purple `#9F10FE`
  - optional extra die sizes extend the same palette
  - coin/d2, `dc`, and `df` intentionally retain their existing model materials
- `ZR Verdigris Sigil`
- `ZR Hexbound Slate`
- `ZR Ember Relic`

The Classic Rainbow base colors were sampled directly from the supplied classic dice-icon reference.

## v1.4.2

- Adds the `Classic Rainbow` theme under `💤Zantor's Realms`.
- Uses one Realms system and one selectable DSN Theme while assigning a fixed color by die type.
- Keeps the existing Zantor Old set unchanged.
- Keeps coin and Fate/Fudge model visuals unchanged.
- Retains the v1.4.1 synchronous preset registration fix.

## Install

For testing, remove the existing `Data/modules/zft-dice` folder and extract this package fresh so the final path is `Data/modules/zft-dice/`. Then use `Ctrl + F5`.
