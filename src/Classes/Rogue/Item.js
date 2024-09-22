class Item {
    constructor(name, type, rarity, quantity, owner, effect) {
        this.name = name; // Name of the item (e.g., "Heal Potion")
        this.type = type; // count of uses - no of turns
        this.rarity = rarity; // rarity of item
        this.quantity = quantity; // quantity of item
        this.owner = owner; // quantity of item
        this.effect = effect; // Function that determines the item's effect
    }

    use(player, criminal) {
        this.effect(player, criminal);
    }
}
