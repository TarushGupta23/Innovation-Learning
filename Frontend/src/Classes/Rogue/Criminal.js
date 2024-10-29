import { bossBaseStats, criminalBaseStats, natures, generateStats } from "../../data/rogue-data";

export class Criminal {
    constructor(name, crime, description, exactIS, relatableIS, level, levelDifficulty) {
        this.name = name; // name of criminal
        this.crime = crime;
        this.description = description; // description of the crime
        this.crimeIS = exactIS;
        this.similarIS = relatableIS;

        this.levelDifficulty = levelDifficulty;
        this.baseStats = criminalBaseStats[levelDifficulty];
        this.nature = natures[Math.floor(Math.random() * natures.length)];
        
        // generate random IVs (individual values) for each stat varing from 0 to 31
        this.IVs = [...new Array(4).fill(0)].map(_ => {
            return Math.floor(Math.random() * 32);
        });
        this.stats = generateStats(this.baseStats, level, this.IVs, this.nature[0], this.nature[1]);
        this.maxHp = this.stats[0];
        // TODO : abilitys
    }

    // takeDamage(damage) {
    //     this.health -= damage;
    //     if (this.health <= 0) {
    //         console.log(`${this.name} has been defeated!`);
    //     }
    // }

    // attack(player) {
    //     const damage = Math.random() * 15 + 5;
    //     player.health -= damage;
    //     console.log(`${this.name} attacked and dealt ${damage} damage to ${player.name}`);
    // }
}

export class Boss extends Criminal {
    constructor(name, crime, description, exactIS, relatableIS, level, levelDifficulty) {
        super(name, crime, description, exactIS, relatableIS, level, levelDifficulty);
        
        // set stats according to boss
        this.baseStats = bossBaseStats[levelDifficulty]; 
        this.stats = generateStats(this.baseStats, level, this.IVs, this.nature[0], this.nature[1]);
        this.specialAbilities = ["regenerate", "multiple attackers"];
    }
}