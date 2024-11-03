import Achievement from "../classes/rogue/Achievement";
import Item from "../classes/rogue/Item";

// ==================== GAME ====================
export const initialMoney = 3000;
export const maxLevel = 100;
export const startLevel = 1;
export const baseDmg = [70, 60, 50];
export const villanAtkPowers = [ 
    [40, 45, 45], // rookie for [easy, medium, hard] gamemode
    [45, 50, 50], // thug for [easy, medium, hard] gamemode
    [60, 65, 65], // gangster for [easy, medium, hard] gamemode
    [65, 70, 70], // mafia for [easy, medium, hard] gamemode
]
export const relatedBaseDmg = [10, 8, 5];
export const critDmgMultiplier = 1.7;

// ==================== STATS & NATURES ====================
// stats:  [HP, Atk, Def, Spe]
export const criminalBaseStats = {
    0: [58, 80, 65, 80], // total: 283
    1: [65, 90, 80, 75], // total: 310
    2: [78, 95, 80, 90], // total: 343
    3: [105, 95, 109, 100], // total: 409
}

export const bossBaseStats = {
    0: [75, 100, 95, 105], // total: 375
    1: [95, 125, 90, 95], // total: 405
    2: [91, 134, 100, 110], // total: 435
    3: [106, 144, 100, 130], // total: 480
}

export const playerBaseStats = [90, 95, 95, 90]; // total: 370

export const natures = [
    [1, 2, 'ruthless', 'Brave', '+10% Atk, -10% Def'], 
    [1, 3, 'Bold', 'Determined', '+10% Atk, -10% Spe'], 

    [2, 1, 'Cowardly', 'Patient', '+10% Def, -10% Atk'], 
    [2, 3, 'Cautious', 'Confident', '+10% Def, -10% Spe'], 

    [3, 1, 'Greedy', 'Swift', '+10% Spe, -10% Atk'], 
    [3, 2, 'Aggressive', 'Fearless', '+10% Spe, -10% Def'],
]

export function generateStats(baseStats, level, ivs, increaseStat, decreaseStat) {
    const stats = [];
    
    const hpStat = Math.floor(((baseStats[0] + ivs[0]) * 2 * level) / 100 + level + 10);
    stats.push(hpStat);
    
    // Atk, Def, Spe
    for (let i = 1; i < baseStats.length; i++) {
        let stat = Math.floor(((baseStats[i] + ivs[i]) * 2 * level) / 100 + 5);

        if (i === increaseStat) {
            stat = Math.floor(stat * 1.1); 
        } else if (i === decreaseStat) {
            stat = Math.floor(stat * 0.9);
        }

        stats.push(stat);
    }

    return stats;
}

// ==================== NAMES ====================
export const criminalDifficultyNames = ['Rookie', 'Thug', 'Gangster', 'Mafia']
export const gameDifficultyNames = ['easy', 'balanced', 'hard']

// ==================== BOOKS ====================
export const startBookAmt = [8, 5, 3];
export const maxBagSize = [30, 20, 15];
export const bookRarity = ['common', 'rare', 'epic']
export const initialDiscoveredBooksAmt = 10;

export function generateInitialDiscoveredBooks(maxSize) {
    let discoveredBookIdx = [];
    if (maxSize < initialDiscoveredBooksAmt) {
        discoveredBookIdx = Array.from({ length: maxSize }, (_, i) => i); // array from 0 to maxSize
        return discoveredBookIdx;
    }
    while (discoveredBookIdx.length < initialDiscoveredBooksAmt) {
        const randomIdx = Math.floor(Math.random() * maxSize);
        if (!discoveredBookIdx.includes(randomIdx)) {
            discoveredBookIdx.push(randomIdx);
        }
    }
    return discoveredBookIdx;
}

// ==================== ITEMS ====================
export const gameItemList = [
    new Item("Heal Potion", 1, "dustbin", "common", "Restores 10 HP", "player", (player) => {
        player.stats[0] += 10;
    }),
    new Item("Antidote", 1, "dustbin", "common", "Cures poison", "player", (player) => {
        player.stats[3] = 0;
    }),
    new Item("Super Potion", 1, "dustbin", "common", "Restores 20 HP", "player", (player) => {
        player.stats[0] += 20;
    }),
];

// ==================== ACHIEVEMENTS ====================
export const achievementList = [
    new Achievement("Collector's Pride", "Gather all IS books"),
    new Achievement("Easy Peasy", "Finish the game in easy mode"),
    new Achievement("Determined Adventurer", "Finish the game in medium mode"),
    new Achievement("The Undefeated", "Finish the game in hard mode"),
    new Achievement("Master of Inventory", "Use all items in the game at least once"),
    new Achievement("Epic Discoverer", "Obtain an epic book"),
    new Achievement("Gladiator", "Win the game without healing"),
    new Achievement("Untouchable", "Defeat three enemies without any health loss (hard mode)"),
    new Achievement("Sniper", "Defeat any enemy in single hit"),
    new Achievement("One-Punch Man", "Defeat any enemy in single hit (hard mode)"),
    new Achievement("Perfection", "Achieve all other achievements"),
    new Achievement("Close Call", "Defeat a boss at 1% health (at end of level)"),
    new Achievement("Treasure Hoarder", "Get a total of 1,000,000 gold"),
    new Achievement("Every Angle", "Play the game in all natures"),
    new Achievement("Hacker", "Use a CheatCode in the game (received by playing other games)"),
]

// ==================== BOOK-EFFECTS ====================
export const bookEffectList = {
    0: { id: 0, name: 'freeze', desc: 'Freezes enemy for 1 turn', func: (entity) => { entity.stats[2] = 0; } },
}

// ==================== PLAYER-EFFECTS ====================
export const gamePlayerEffectList = []