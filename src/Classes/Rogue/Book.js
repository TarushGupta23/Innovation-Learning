class Book {
    constructor(name, standards, rarity) {
        this.name = name; // name of book
        this.standards = standards; // list of standards it contains
        this.rarity = rarity; // rarity of book
    }

    hasExactStandard(standard) {
        return this.standards.includes(standard);
    }

    // hasRelatableStandard(standard) { 
    //     return this.standards.some(s => s.includes(standard) || s.similar(standard));
    // }
}