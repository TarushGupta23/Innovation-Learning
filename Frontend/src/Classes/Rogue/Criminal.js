import { bossBaseStats, criminalBaseStats, natures, generateStats, criminalDifficultyNames } from "../../data/rogue-data";

export class Criminal {
    constructor(name, crime, description, exactIS, relatableIS, level, levelDifficulty, isBoss = false) {
        this.name = name; // name of criminal
        this.crime = crime;
        this.description = description; // description of the crime
        this.crimeIS = exactIS;
        this.similarIS = relatableIS;
        
        this.levelDifficulty = levelDifficulty;
        this.baseStats = isBoss? bossBaseStats[levelDifficulty] : criminalBaseStats[levelDifficulty];
        this.nature = natures[Math.floor(Math.random() * natures.length)];
        
        // generate random IVs (individual values) for each stat varing from 0 to 31
        this.IVs = [...new Array(4).fill(0)].map(_ => {
            return Math.floor(Math.random() * 32);
        });
        this.stats = generateStats(this.baseStats, level, this.IVs, this.nature[0], this.nature[1]);
        this.hp = this.stats[0];
        // TODO : abilitys

        this.img = ''; // image file name 

        this.generateVillanImage();
    }

    generateVillanImage() {
        this.img = '001-test';
    }

    takeDamage(damage) {
        if (damage > this.hp) damage = this.hp;
        this.hp -= Math.round(damage);
    }

    isDead() { return this.hp <= 0; }

    getStats() { return this.stats; }
    getHp() { return this.hp; }
    getMaxHP() { return this.stats[0]; }
    getName() { return this.name; }
    getBooks() { return this.books; }
    getItems() { return this.items; }
    getMoney() { return this.money; }
    getEffects() { return this.effects; }
    getDescription() { return this.description; }
    getDifficulty() { return criminalDifficultyNames[this.levelDifficulty]; }
    getNatureName() { return this.nature[2]; }
    getNatureDesc() { return this.nature[4]; }
    getImg() { return this.img; }
}

export class Boss extends Criminal {
    constructor(name, crime, description, exactIS, relatableIS, level, levelDifficulty) {
        super(name, crime, description, exactIS, relatableIS, level, levelDifficulty, true);
        this.specialAbilities = ["regenerate", "multiple attackers"];
    }
}