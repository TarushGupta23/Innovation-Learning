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
        this.stats = generateStats(playerBaseStats, startLevel, this.IVs, this.nature[0], this.nature[1]);
        this.hp = hp || this.stats[0];
    }
    
    getStatsAtLevel(level) {
        return generateStats(playerBaseStats, level, this.IVs, this.nature[0], this.nature[1]);
    }
    getStats() { return this.stats; }
    getHp() { return this.hp; }
    getMaxHP() { return this.stats[0]; }
    getName() { return this.name; }
    getBooks() { return this.books; }
    getItems() { return this.items; }
    getMoney() { return this.money; }
    getEffects() { return this.effects; }
    
    takeDamage(damage) {
        if (damage > this.hp) damage = this.hp;
        this.hp -= Math.round(damage);
    }
    isDead() { return this.hp <= 0; }

    // addItem(item) { this.items.push(item); }
    // removeItem(item) { this.items.splice(this.items.indexOf(item), 1); }
    
    addMoney(money) { this.money += money; }
    removeMoney(money) { 
        if (money > this.money) return false;
        this.money -= money; 
        return true;
    }

    // addEffect(effect) { this.effects.push(effect); }
    // removeEffect(effect) { this.effects.splice(this.effects.indexOf(effect), 1); }

    levelUp(newLvl) {
        const newStats = this.getStatsAtLevel(newLvl);
        this.hp += newStats[0] - this.stats[0];
        this.stats = newStats;
    }
}