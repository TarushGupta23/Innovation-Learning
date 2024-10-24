export default class Book {
    constructor(name, standards, rarity, discovered = false) {
        this.name = name; // name of book : string
        this.standards = standards; // list of standards it contains : string
        this.rarity = rarity; // rarity of book : string
        this.discovered = discovered; // is the book discovered : boolean
    }

    hasExactStandard(standard) {
        return this.standards.includes(standard);
    }

    // hasRelatableStandard(standard) { 
    //     return this.standards.some(s => s.includes(standard) || s.similar(standard));
    // }
}