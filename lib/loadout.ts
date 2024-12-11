const LIGHT_WEAPONS = [
  "93R",
  "Dagger",
  "LH1",
  "M11",
  "M26 Matter",
  "Recurve Bow",
  "SH1900",
  "SR-84",
  "Sword",
  "Throwing Knives",
  "V9S",
  "XP-54",
];

const LIGHT_GADGETS = [
  "Breach Charge",
  "Flashbang",
  "Frag Grenade",
  "Gas Grenade",
  "Gatway",
  "Glitch Grenade",
  "Goo Grenade",
  "Pyro Grenade",
  "Smoke Grenade",
  "Sonar Grenade",
  "Stun Gun",
  "Thermal Bore",
  "Thermal Vision",
  "Tracking Dart",
  "Vanishing Bomb",
  "Gravity Vortex",
];

const LIGHT_ABILITIES = ["Cloaking Device", "Evasive Dash", "Grappling Hook"];

const MEDIUM_WEAPONS = [
  "AKM",
  "CL-40",
  "Dual Blades",
  "Famas",
  "FCAR",
  "Model 1887",
  "Pike-556",
  "R .357",
  "Riot Shield",
  "Cerberus 12GA",
];

const MEDIUM_GADGETS = [
  "APS Turret",
  "Data Reshaper",
  "Defibrillator",
  "Explosive Mine",
  "Flashbang",
  "Frag Grenade",
  "Gas Grenade",
  "Gas Mine",
  "Glitch Trap",
  "Goo Grenade",
  "Jump Pad",
  "Pyro Grenade",
  "Zipline",
];

const MEDIUM_ABILITIES = ["Dematerializer", "Guardian Turret", "Healing Beam"];

const HEAVY_WEAPONS = [
  ".50 Akimbo",
  "Flamethrower",
  "KS-23",
  "Lewis Gun",
  "M60",
  "MGL32",
  "SA1216",
  "Sledgehammer",
  "Spear",
  "ShAK 50",
];

const HEAVY_GADGETS = [
  "Anti-Gravity Cube",
  "Barricade",
  "C4",
  "Dome Shield",
  "Explosive Mine",
  "Flashbang",
  "Frag Grenade",
  "Gas Grenade",
  "Goo Grenade",
  "Proximity Sensor",
  "Pyro Grenade",
  "Pyro Mine",
  "RPG-7",
  "Lockbolt Launcher",
];

const HEAVY_ABILITIES = [
  "Charge 'N' Slam",
  "Goo Gun",
  "Mesh Shield",
  "Winch Claw",
];

function secureSample<T>(sequence: T[], k: number): T[] {
  const result: T[] = [];
  const seq = [...sequence];
  for (let i = 0; i < k; i++) {
    if (seq.length === 0) break;
    const index = Math.floor(Math.random() * seq.length);
    result.push(seq[index]);
    seq.splice(index, 1);
  }
  return result;
}

function randomizer(abilities: string[], gadgets: string[], weapons: string[]) {
  return {
    ability: abilities[Math.floor(Math.random() * abilities.length)],
    weapon: weapons[Math.floor(Math.random() * weapons.length)],
    gadgets: secureSample(gadgets, 3),
  };
}

export function getRandomLoadout(category?: "light" | "medium" | "heavy") {
  if (!category) {
    category = ["light", "medium", "heavy"][Math.floor(Math.random() * 3)] as
      | "light"
      | "medium"
      | "heavy";
  }

  let abilities, gadgets, weapons;

  switch (category) {
    case "light":
      abilities = LIGHT_ABILITIES;
      gadgets = LIGHT_GADGETS;
      weapons = LIGHT_WEAPONS;
      break;
    case "medium":
      abilities = MEDIUM_ABILITIES;
      gadgets = MEDIUM_GADGETS;
      weapons = MEDIUM_WEAPONS;
      break;
    case "heavy":
      abilities = HEAVY_ABILITIES;
      gadgets = HEAVY_GADGETS;
      weapons = HEAVY_WEAPONS;
      break;
  }

  const result = randomizer(abilities, gadgets, weapons);

  return { category, ...result };
}
