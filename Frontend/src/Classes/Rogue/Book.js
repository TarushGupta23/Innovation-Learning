import { bookRarity } from "./Util";

export default class Book {
    constructor(name, standards, rarity, discovered = false) {
        this.name = name; // name of book : string
        this.standards = standards; // standards it contains : IS[]
        this.rarity = bookRarity[rarity]; // rarity of book : integer
        this.discovered = discovered; // is the book discovered : boolean
    }

    hasExactStandard(standard) {
        return this.standards.includes(standard);
    }

    // hasRelatableStandard(standard) { 
    //     return this.standards.some(s => s.includes(standard) || s.similar(standard));
    // }
}