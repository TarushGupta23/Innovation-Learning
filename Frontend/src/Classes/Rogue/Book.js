export default class Book {
    constructor(name, standards = [], rarity = 0, effects = []) {
        this.name = name; // name of book : string
        this.standards = standards; // ids of standards it contains : string[]
        this.rarity = rarity; // rarity of book : integer
        this.effects = effects;
    }

    hasExactStandard(standard) {
        return this.standards.includes(standard);
    }

    // hasRelatableStandard(standard) { 
    //     return this.standards.some(s => s.includes(standard) || s.similar(standard));
    // }
}