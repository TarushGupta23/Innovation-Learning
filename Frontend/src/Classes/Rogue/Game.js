import { Criminal } from "./Criminal";
import Data from "../../temp-helper";

class Game {
    constructor(player, level) {
        this.player = player;
        this.level = level;
    }

    generateLevelDifficulty(level) {
        const maxLevel = 100;
    
        const difficultyScale = level / maxLevel;
    
        const chances = [
            { level: 0, chance: 20 * (1 - difficultyScale) + 10 },
            { level: 1, chance: 15 * (1 - difficultyScale) + 10 },
            { level: 2, chance: 10 * difficultyScale + 10 },
            { level: 3, chance: 5 * difficultyScale + 10 }
        ];
        
        // Normalize chances to ensure they sum to 100%
        const totalChance = chances.reduce((sum, d) => sum + d.chance, 0);
        chances.forEach(d => d.chance = d.chance / totalChance);
    
        // Generate random number between 0 and 1
        const randomValue = Math.random();
    
        // Accumulate probabilities and choose difficulty
        let accumulatedProbability = 0;
        for (const difficulty of chances) {
            accumulatedProbability += difficulty.chance;
            if (randomValue <= accumulatedProbability) {
                return difficulty.level;
            }
        }
    
        return 0;  // Fallback in case no difficulty is selected
    }

    generateLevel(level) {
        const lvlDifficulty = this.generateLevelDifficulty(level);
        let villan = (level % 10 != 0) ? new Criminal(Data.name, Data.crime, Data.description, Data.exactIS, Data.relatableIS, level, lvlDifficulty) : new Boss(Data.name, Data.crime, Data.description, Data.exactIS, Data.relatableIS, level, lvlDifficulty);
        const lvlDifficultyName = difficultyNames[lvlDifficulty];
        
        console.log(`Generated game level ${level} started with difficulty: ${lvlDifficulty} and villan: `, villan);
    }

    playLevel(level) {
        // const lvlDifficulty = this.generateLevelDifficulty(level);
        // let villan = (level % 10 != 0) ? new Criminal(Data.name, Data.crime, Data.description, Data.exactIS, Data.relatableIS, level, lvlDifficulty) : new Boss(Data.name, Data.crime, Data.description, Data.exactIS, Data.relatableIS, level, lvlDifficulty);

        
    }
}
