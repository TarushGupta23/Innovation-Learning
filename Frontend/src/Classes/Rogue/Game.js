import { Criminal, Boss } from "./Criminal";
import Data from "../../temp-helper";
import { baseDmg, critDmgMultiplier, maxLevel, relatedBaseDmg } from "../../data/rogue-data";

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

    getVillanDamageBasePower(book, villan) {
        let power = 0
        if (book.hasExactStandard(villan.crimeIS)) {
            power += baseDmg[this.gameDifficulty];
        }
        const getCommonElements = (arr1, arr2) => arr1.filter(el => arr2.includes(el)).length;
        const c = getCommonElements(book.standards, villan.similarIS);
        power += c * relatedBaseDmg[this.gameDifficulty];
        return power;
    }

    
    calculateSimpleDamage(dmgByStats, dmgToStats, power) {
        const dmg = (2*this.level/5 + 2)*power*dmgByStats[1]/dmgToStats[2]/50 + 2
        const random = 80 + 20*Math.random();
        return dmg*random/100
        // NOTE: multiply this raw dmg by: dmg * (multiTarget? .75:1) * weatherCondition=1.5 * burnStatus(if attker is burned)=0.5
    }
    
    dealDamageToVillan(book, villan) {
        const power = this.getVillanDamageBasePower(book, villan);
        const bookDmg = this.calculateSimpleDamage(this.player.getStats(this.level), villan.stats, power);
        const isCrit = Math.random() < 0.2;
        villan.takeDamage(isCrit? bookDmg*critDmgMultiplier : bookDmg);
        return isCrit
    }
}
