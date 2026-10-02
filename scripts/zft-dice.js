const MODULE_ID = "zft-dice";
const VERSION = "1.4.2";

console.log(`[ZFT] 🎲 v${VERSION} | ZFT Dice module script loaded`);

const OLD_SYSTEM = {
  id: "zantor",
  name: "💤Zantor Old",
  presets: [
    { type: "d20",  shape: "d20", modelFile: "modules/zft-dice/assets/chanced20.glb" },
    { type: "d6",   shape: "d6",  modelFile: "modules/zft-dice/assets/chanced6.glb" },
    { type: "d8",   shape: "d8",  modelFile: "modules/zft-dice/assets/chanced8.glb" },
    { type: "d4",   shape: "d4",  modelFile: "modules/zft-dice/assets/chanced4.glb" },
    { type: "d10",  shape: "d10", modelFile: "modules/zft-dice/assets/chanced10.glb" },
    { type: "d5",   shape: "d10", modelFile: "modules/zft-dice/assets/chanced5.glb" },
    { type: "d100", shape: "d10", modelFile: "modules/zft-dice/assets/chanced10x2.glb" },
    { type: "d12",  shape: "d12", modelFile: "modules/zft-dice/assets/chanced12.glb" },
    { type: "d2",   shape: "d2",  modelFile: "modules/zft-dice/assets/2d.glb" },
    { type: "d14",  shape: "d14", modelFile: "modules/zft-dice/assets/chanced14.glb" },
    { type: "d16",  shape: "d16", modelFile: "modules/zft-dice/assets/chanced16.glb" },
    { type: "d24",  shape: "d24", modelFile: "modules/zft-dice/assets/chanced24.glb" },
    { type: "d30",  shape: "d30", modelFile: "modules/zft-dice/assets/chanced30.glb" },
    { type: "d7",   shape: "d14", modelFile: "modules/zft-dice/assets/chanced7.glb" },
    { type: "dc",   shape: "d2",  modelFile: "modules/zft-dice/assets/dc.glb" },
    { type: "df",   shape: "d6",  modelFile: "modules/zft-dice/assets/df.glb" }
  ]
};

function rangeLabels(min, max) {
  return Array.from({ length: max - min + 1 }, (_, i) => String(min + i));
}

function repeatedLabels(values, repeats = 2) {
  return Array.from({ length: repeats }, () => values).flat().map(String);
}

const REALMS_SYSTEM = {
  id: "zantor-realms",
  name: "💤Zantor's Realms",
  presets: [
    { type: "d20",  shape: "d20", labels: rangeLabels(1, 20) },
    { type: "d6",   shape: "d6",  labels: rangeLabels(1, 6) },
    { type: "d8",   shape: "d8",  labels: rangeLabels(1, 8) },
    { type: "d4",   shape: "d4",  labels: rangeLabels(1, 4) },
    { type: "d10",  shape: "d10", labels: rangeLabels(1, 10) },
    { type: "d5",   shape: "d10", labels: repeatedLabels([1, 2, 3, 4, 5], 2) },
    { type: "d100", shape: "d10", labels: ["10", "20", "30", "40", "50", "60", "70", "80", "90", "00"] },
    { type: "d12",  shape: "d12", labels: rangeLabels(1, 12) },
    { type: "d2",   shape: "d2",  modelFile: "modules/zft-dice/assets/2d.glb" },
    { type: "d14",  shape: "d14", labels: rangeLabels(1, 14) },
    { type: "d16",  shape: "d16", labels: rangeLabels(1, 16) },
    { type: "d24",  shape: "d24", labels: rangeLabels(1, 24) },
    { type: "d30",  shape: "d30", labels: rangeLabels(1, 30) },
    { type: "d7",   shape: "d14", labels: repeatedLabels([1, 2, 3, 4, 5, 6, 7], 2) },
    { type: "dc",   shape: "d2",  modelFile: "modules/zft-dice/assets/dc.glb" },
    { type: "df",   shape: "d6",  modelFile: "modules/zft-dice/assets/df.glb" }
  ]
};

const REALMS_TEXTURES = [
  {
    id: "zr_arcane_sigil",
    data: {
      name: "ZR Arcane Sigil",
      composite: "source-over",
      source: "modules/zft-dice/assets/textures/zr-arcane-sigil.webp"
    }
  },
  {
    id: "zr_runic_hexes",
    data: {
      name: "ZR Runic Hexes",
      composite: "source-over",
      source: "modules/zft-dice/assets/textures/zr-runic-hexes.webp"
    }
  },
  {
    id: "zr_relic_veins",
    data: {
      name: "ZR Relic Veins",
      composite: "source-over",
      source: "modules/zft-dice/assets/textures/zr-relic-veins.webp"
    }
  }
];

const CLASSIC_RAINBOW_THEME_ID = "zr-classic-rainbow";

// Colors sampled directly from the classic die icons supplied as the visual reference.
// d2/dc and df intentionally remain on their existing legacy model materials.
const CLASSIC_RAINBOW_COLORS = {
  d4:   "#62B3FE",
  d6:   "#38D40C",
  d8:   "#F0920F",
  d10:  "#FFEA05",
  d12:  "#F7F4F8",
  d20:  "#FF0A0A",
  d100: "#9F10FE",

  // Extended palette for optional/non-classic die sizes.
  d5:   "#FFEA05",
  d7:   "#62B3FE",
  d14:  "#62B3FE",
  d16:  "#38D40C",
  d24:  "#F0920F",
  d30:  "#9F10FE"
};

const STATIC_REALMS_COLORSETS = [
  {
    name: CLASSIC_RAINBOW_THEME_ID,
    description: "ZR Classic Rainbow",
    category: "Zantor's Realms",
    foreground: "#111111",
    background: "#FFFFFF",
    outline: "#202020",
    edge: "#FFFFFF",
    texture: "none",
    material: "plastic",
    font: "Arial",
    fontScale: { d6: 1.15, d8: 1.05, d12: 1.05, d20: 0.95, d100: 0.82 },
    visibility: "visible"
  }
];

const REALMS_COLORSETS = [
  {
    name: "zr-verdigris-sigil",
    description: "ZR Verdigris Sigil",
    category: "Zantor's Realms",
    foreground: "#d3b16d",
    background: "#294845",
    outline: "#0c0a08",
    edge: "#8b7040",
    texture: "zr_arcane_sigil",
    material: "metal",
    font: "Palatino Linotype",
    fontScale: { d6: 1.15, d8: 1.05, d12: 1.05, d20: 0.95, d100: 0.82 },
    visibility: "visible"
  },
  {
    name: "zr-hexbound-slate",
    description: "ZR Hexbound Slate",
    category: "Zantor's Realms",
    foreground: "#e0d4bf",
    background: "#39464f",
    outline: "#101215",
    edge: "#98a6b3",
    texture: "zr_runic_hexes",
    material: "stone",
    font: "Palatino Linotype",
    fontScale: { d6: 1.15, d8: 1.05, d12: 1.05, d20: 0.95, d100: 0.82 },
    visibility: "visible"
  },
  {
    name: "zr-ember-relic",
    description: "ZR Ember Relic",
    category: "Zantor's Realms",
    foreground: "#e4c48e",
    background: "#5b4032",
    outline: "#16100d",
    edge: "#b27e4f",
    texture: "zr_relic_veins",
    material: "wood",
    font: "Palatino Linotype",
    fontScale: { d6: 1.15, d8: 1.05, d12: 1.05, d20: 0.95, d100: 0.82 },
    visibility: "visible"
  }
];

function hasDiceTerm(type) {
  const denominator = type.slice(1);
  return !Number.isNaN(Number(denominator)) || Boolean(CONFIG?.Dice?.terms?.[denominator]);
}

function registerStaticRealmsThemes(dice3d) {
  if (!dice3d?.addColorset) {
    console.warn(`[ZFT] ⚠️ v${VERSION} | Dice So Nice colorset API unavailable; skipping static Realms themes`);
    return;
  }

  for (const colorset of STATIC_REALMS_COLORSETS) {
    try {
      console.log(`[ZFT] 🎨 v${VERSION} | Registering colorset ${colorset.name}`);
      // addColorset performs the colorset registration synchronously before its Promise resolves.
      dice3d.addColorset(colorset);
      console.log(`[ZFT] ✅ v${VERSION} | Registered colorset ${colorset.name}`);
    } catch (error) {
      console.error(`[ZFT] ❌ v${VERSION} | Failed registering colorset ${colorset.name}`, error);
    }
  }
}

function configureRealmsMaterialProcessor(dice3d) {
  try {
    const systems = dice3d.getLoadedDiceSystems?.();
    const realmsSystem = systems?.get?.(REALMS_SYSTEM.id);

    if (!realmsSystem?.registerProcessMaterialCallback) {
      console.warn(`[ZFT] ⚠️ v${VERSION} | Realms material callback API unavailable; Classic Rainbow per-die colors disabled`);
      return;
    }

    realmsSystem.registerProcessMaterialCallback((diceType, material, appearance) => {
      if (appearance?.colorset !== CLASSIC_RAINBOW_THEME_ID) return material;

      // Preserve the existing custom coin and Fate/Fudge model materials.
      if (["d2", "dc", "df"].includes(diceType)) return material;

      const color = CLASSIC_RAINBOW_COLORS[diceType];
      if (!color || !material?.color?.set) return material;

      // Classic Rainbow uses a white/black generated face map. Tinting the material
      // colors the white die body while leaving the black labels/linework readable.
      material.color.set(color);
      material.needsUpdate = true;
      return material;
    });

    console.log(`[ZFT] 🌈 v${VERSION} | Classic Rainbow per-die color processor registered`);
  } catch (error) {
    console.error(`[ZFT] ❌ v${VERSION} | Failed configuring Classic Rainbow material processor`, error);
  }
}

async function registerRealmsThemes(dice3d) {
  if (!dice3d?.addTexture || !dice3d?.addColorset) {
    console.warn(`[ZFT] ⚠️ v${VERSION} | Dice So Nice texture/colorset API unavailable; skipping Realms themes`);
    return;
  }

  for (const texture of REALMS_TEXTURES) {
    try {
      console.log(`[ZFT] 🖼️ v${VERSION} | Registering texture ${texture.id}`);
      await dice3d.addTexture(texture.id, texture.data);
      console.log(`[ZFT] ✅ v${VERSION} | Registered texture ${texture.id}`);
    } catch (error) {
      console.error(`[ZFT] ❌ v${VERSION} | Failed registering texture ${texture.id}`, error);
    }
  }

  for (const colorset of REALMS_COLORSETS) {
    try {
      console.log(`[ZFT] 🎨 v${VERSION} | Registering colorset ${colorset.name}`);
      dice3d.addColorset(colorset);
      console.log(`[ZFT] ✅ v${VERSION} | Registered colorset ${colorset.name}`);
    } catch (error) {
      console.error(`[ZFT] ❌ v${VERSION} | Failed registering colorset ${colorset.name}`, error);
    }
  }
}

function registerSystem(dice3d, system) {
  const { id, name, presets } = system;

  try {
    dice3d.addSystem({ id, name }, "force");
    console.log(`[ZFT] ✅ v${VERSION} | ${name} system registered`, {
      systemId: id,
      presetCount: presets.length
    });
  } catch (error) {
    console.error(`[ZFT] ❌ v${VERSION} | ${name} system registration failed`, error);
    return;
  }

  const registered = [];
  const skipped = [];
  const failed = [];

  for (const { shape, ...presetCore } of presets) {
    const preset = { ...presetCore, system: id };

    if (!hasDiceTerm(preset.type)) {
      skipped.push(preset.type);
      console.warn(`[ZFT] ⚠️ v${VERSION} | Skipping ${preset.type} for ${name}; Foundry DiceTerm is unavailable`, {
        type: preset.type,
        shape,
        systemId: id
      });
      continue;
    }

    try {
      console.log(`[ZFT] 🎲 v${VERSION} | Registering ${preset.type} for ${name} using ${shape}`);
      dice3d.addDicePreset(preset, shape);
      registered.push(preset.type);
      console.log(`[ZFT] ✅ v${VERSION} | Registered ${preset.type} for ${name} using ${shape}`);
    } catch (error) {
      failed.push(preset.type);
      console.error(`[ZFT] ❌ v${VERSION} | Failed registering ${preset.type} for ${name} using ${shape}`, error);
    }
  }

  if (failed.length) {
    console.error(`[ZFT] ❌ v${VERSION} | ${name} preset registration completed with failures`, {
      registered,
      skipped,
      failed,
      systemId: id
    });
    return;
  }

  console.log(`[ZFT] ✅ v${VERSION} | ${name} preset registration complete`, {
    registered,
    skipped,
    systemId: id
  });
}

Hooks.once("diceSoNiceReady", (dice3d) => {
  console.log(`[ZFT] 🧩 v${VERSION} | Dice So Nice ready hook received`);

  if (!dice3d?.addSystem || !dice3d?.addDicePreset) {
    console.error(`[ZFT] ❌ v${VERSION} | Dice So Nice API unavailable or incomplete`, {
      hasDice3d: Boolean(dice3d),
      hasAddSystem: Boolean(dice3d?.addSystem),
      hasAddDicePreset: Boolean(dice3d?.addDicePreset)
    });
    return;
  }

  try {
    dice3d.showExtraDiceByDefault?.(true);
  } catch (error) {
    console.warn(`[ZFT] ⚠️ v${VERSION} | Unable to change showExtraDice default`, error);
  }

  // Register the texture-free Classic Rainbow colorset immediately.
  registerStaticRealmsThemes(dice3d);

  // Register systems synchronously so Dice So Nice can include all custom presets
  // in its normal preload pass. Theme textures may load asynchronously afterward.
  registerSystem(dice3d, OLD_SYSTEM);
  registerSystem(dice3d, REALMS_SYSTEM);
  configureRealmsMaterialProcessor(dice3d);

  registerRealmsThemes(dice3d).catch((error) => {
    console.error(`[ZFT] ❌ v${VERSION} | Realms theme registration failed`, error);
  });
});
