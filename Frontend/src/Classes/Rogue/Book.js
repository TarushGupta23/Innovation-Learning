import { bookRarity } from "../../data/rogue-data";

export default class Book {
    constructor(name, standards = [], rarity = 0, effects = []) {
        this.name = name; // name of book : string
        this.standards = standards; // standards it contains : IS[]
        this.rarity = bookRarity[rarity]; // rarity of book : integer
        this.effects = effects;
    }

    hasExactStandard(standard) {
        return this.standards.includes(standard);
    }

    // hasRelatableStandard(standard) { 
    //     return this.standards.some(s => s.includes(standard) || s.similar(standard));
    // }
}