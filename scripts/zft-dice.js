const MODULE_ID = "zft-dice";
const VERSION = "1.2.0";

console.log("[ZFT] 🎲 v1.2.0 | ZFT Dice module script loaded");

const DICE_PRESETS = [
  { type: "d20", modelFile: ["modules/zft-dice/assets/chanced20.glb"], system: "zantor" },
  { type: "d6", modelFile: ["modules/zft-dice/assets/chanced6.glb"], system: "zantor" },
  { type: "d8", modelFile: ["modules/zft-dice/assets/chanced8.glb"], system: "zantor" },
  { type: "d4", modelFile: ["modules/zft-dice/assets/chanced4.glb"], system: "zantor" },
  { type: "d10", modelFile: ["modules/zft-dice/assets/chanced10.glb"], system: "zantor" },
  { type: "d5", modelFile: ["modules/zft-dice/assets/chanced5.glb"], system: "zantor" },
  { type: "d100", modelFile: ["modules/zft-dice/assets/chanced10x2.glb"], system: "zantor" },
  { type: "d12", modelFile: ["modules/zft-dice/assets/chanced12.glb"], system: "zantor" },
  { type: "d2", modelFile: ["modules/zft-dice/assets/2d.glb"], system: "zantor" },
  { type: "d14", modelFile: ["modules/zft-dice/assets/chanced14.glb"], system: "zantor" },
  { type: "d16", modelFile: ["modules/zft-dice/assets/chanced16.glb"], system: "zantor" },
  { type: "d24", modelFile: ["modules/zft-dice/assets/chanced24.glb"], system: "zantor" },
  { type: "d30", modelFile: ["modules/zft-dice/assets/chanced30.glb"], system: "zantor" },
  { type: "d7", modelFile: ["modules/zft-dice/assets/chanced7.glb"], system: "zantor" },
  { type: "dc", modelFile: ["modules/zft-dice/assets/dc.glb"], system: "zantor" },
  { type: "dz", modelFile: ["modules/zft-dice/assets/dz.glb"], system: "zantor" },
  { type: "df", modelFile: ["modules/zft-dice/assets/df.glb"], system: "zantor" },
];

Hooks.once("diceSoNiceReady", (dice3d) => {
  console.log("[ZFT] 🧩 v1.2.0 | Dice So Nice ready hook received");

  if (!dice3d?.addSystem || !dice3d?.addDicePreset) {
    console.error("[ZFT] ❌ v1.2.0 | Dice So Nice API unavailable or incomplete", {
      hasDice3d: Boolean(dice3d),
      hasAddSystem: Boolean(dice3d?.addSystem),
      hasAddDicePreset: Boolean(dice3d?.addDicePreset)
    });
    return;
  }

  try {
    dice3d.addSystem(
      { id: "zantor", name: "💤Zantor Dice" },
      "force"
    );

    console.log("[ZFT] ✅ v1.2.0 | Zantor Dice system registered", {
      systemId: "zantor",
      presetCount: DICE_PRESETS.length
    });

    for (const preset of DICE_PRESETS) {
      dice3d.addDicePreset(preset);
    }

    console.log("[ZFT] ✅ v1.2.0 | Zantor Dice presets registered", {
      count: DICE_PRESETS.length,
      types: DICE_PRESETS.map(preset => preset.type)
    });
  } catch (error) {
    console.error("[ZFT] ❌ v1.2.0 | Zantor Dice registration failed", error);
  }
});
