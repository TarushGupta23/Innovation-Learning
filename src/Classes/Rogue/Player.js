import { generateStats, playerBaseStats } from './Util.js';

export class Player {
    constructor(name, level, natureIdx, books, items, money) {
        this.name = name;
        this.nature = natures[natureIdx];
        this.IVs = [...new Array(4).fill(0)].map(_ => {
            return Math.floor(Math.random() * 32);
        })
        this.stats = generateStats(playerBaseStats, level, this.IVs, nature[0], nature[1]);
        this.books = books;
        this.items = items;
        this.money = money;
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