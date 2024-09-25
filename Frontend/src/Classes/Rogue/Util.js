// stats:  HP, Atk, Def, Spe

const criminalBaseStats = {
    1: [58, 80, 65, 80], // total: 283
    0: [65, 90, 80, 75], // total: 310
    2: [78, 95, 80, 90], // total: 343
    3: [105, 95, 109, 100], // total: 409
}

const bossBaseStats = {
    0: [75, 100, 95, 105], // total: 375
    1: [95, 125, 90, 95], // total: 405
    2: [91, 134, 100, 110], // total: 435
    3: [106, 144, 100, 130], // total: 480
}

const playerBaseStats = [90, 95, 95, 90]; // total: 370

const natures = [
    [1, 2, 'ruthless', 'Brave', '+10% Atk, -10% Def'], 
    [1, 3, 'Bold', 'Determined', '+10% Atk, -10% Spe'], 

    [2, 1, 'Cowardly', 'Patient', '+10% Def, -10% Atk'], 
    [2, 3, 'Cautious', 'Confident', '+10% Def, -10% Spe'], 

    [3, 1, 'Greedy', 'Swift', '+10% Spe, -10% Atk'], 
    [3, 2, 'Aggressive', 'Fearless', '+10% Spe, -10% Def'],
]

const difficultyNames = ['Rookie', 'Thug', 'Gangster', 'Mafia']
export const gameDifficultyNames = ['easy', 'balanced', 'hard']

function generateStats(baseStats, level, ivs, increaseStat, decreaseStat) {
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

export { criminalBaseStats, natures, bossBaseStats, playerBaseStats, difficultyNames, generateStats }