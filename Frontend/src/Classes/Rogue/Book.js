export default class Book {
    constructor(name, standards, rarity, discovered = false) {
        this.name = name; // name of book
        this.standards = standards; // list of standards it contains
        this.rarity = rarity; // rarity of book
        this.discovered = discovered; // is the book discovered
    }

    hasExactStandard(standard) {
        return this.standards.includes(standard);
    }

    // hasRelatableStandard(standard) { 
    //     return this.standards.some(s => s.includes(standard) || s.similar(standard));
    // }
}