import { generateStats, initialMoney, playerBaseStats, natures, startLevel } from '../../data/rogue-data';

export class Player {
    constructor(name, natureIdx, books, IVs = undefined, items = [], money = initialMoney, effects = [], hp = undefined) {
        this.name = name;
        this.nature = natures[natureIdx];
        this.IVs = IVs || [...new Array(4).fill(0)].map(_ => Math.floor(Math.random() * 32))
        this.books = books;
        this.items = items;
        this.money = money;
        this.effects = effects;
        this.getStats = (level = startLevel) => generateStats(playerBaseStats, level, this.IVs, this.nature[0], this.nature[1]);
        this.hp = hp || this.getStats(startLevel)[0];
    }

    takeDamage(damage) {
        if (damage > this.hp) damage = this.hp;
        this.hp -= damage;
    }

    isDead() {  
        return this.hp <= 0;
    }
}