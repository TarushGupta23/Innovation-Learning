import { Criminal, Boss } from "./Criminal";
import Data from "../../temp-helper";
import { maxLevel } from "../../data/rogue-data";

export default class Game {
    constructor(player, level, gameDifficulty) {
        this.player = player; // Player
        this.level = level; // int
        this.gameDifficulty = gameDifficulty; // int
    }

    generateLevelDifficulty() {
        const difficultyScale = this.level / maxLevel;
    
        const chances = [
            { level: 0, chance: (20 * (1 - difficultyScale) + 10) * (1 - this.gameDifficulty*0.2) },
            { level: 1, chance: (15 * (1 - difficultyScale) + 10) * (1 - this.gameDifficulty*0.1) },
            { level: 2, chance: (10 * difficultyScale + 10) * (1 + this.gameDifficulty*0.1) },
            { level: 3, chance: (5 * difficultyScale + 10) * (1 + this.gameDifficulty*0.2) }
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

    generateLevel() {
        const lvlDifficulty = this.generateLevelDifficulty();
        let villan = (this.level % 10 != 0) ? 
            new Criminal(Data.name, Data.crime, Data.description, Data.exactIS, Data.relatableIS, this.level, lvlDifficulty) : 
            new Boss(Data.name, Data.crime, Data.description, Data.exactIS, Data.relatableIS, this.level, lvlDifficulty);
        return villan;
    }
}
