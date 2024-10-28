import { generateStats, initialMoney, playerBaseStats, natures } from '../../data/rogue-data';

export class Player {
    constructor(name, natureIdx, books, IVs = undefined, items = [], money = initialMoney, effects = []) {
        this.name = name;
        this.nature = natures[natureIdx];
        this.IVs = IVs || [...new Array(4).fill(0)].map(_ => Math.floor(Math.random() * 32))
        this.books = books;
        this.items = items;
        this.money = money;
        this.effects = effects;

        this.getStats = (level = 1) => generateStats(playerBaseStats, level, this.IVs, this.nature[0], this.nature[1]);
    }



    // useBook(book, criminal, standard) {
    //     if (book.hasExactStandard(standard)) {
    //         criminal.takeDamage(criminal.health); // Defeat criminal in one move
    //         console.log(`${criminal.name} defeated with exact IS: ${standard}`);
    //     } else if (book.hasRelatableStandard(standard)) {
    //         const damage = this.calculateDamage(standard);
    //         criminal.takeDamage(damage);
    //         console.log(`${criminal.name} took ${damage} damage with relatable IS: ${standard}`);
    //     } else {
    //         console.log(`No related IS found in the book.`);
    //     }
    // }

    // calculateDamage(standard) {
    //     // TODO
    //     return Math.random() * 20 + 10;
    // }

    // heal(amount) {
    //     this.health += amount;
    //     if (this.health > 100) this.health = 100;
    // }

    // // Add money to the player
    // addMoney(amount) {
    //     this.money += amount;
    // }

    // // Add an item to inventory
    // addItem(item) {
    //     this.items.push(item);
    // }
}