export default class Item {
    constructor(name, uses, img, rarity, description, owner, effect) {
        this.name = name; // Name of the item (e.g., "Heal Potion")
        this.uses = uses; // count of uses or no of turns its effect lasts
        this.rarity = rarity; // rarity of item
        this.description = description; // desctiption of item
        this.owner = owner; // owner of item
        this.effect = effect; // Function that determines the item's effect
        this.img = img; // img file name
    }

    use(player, criminal) {
        this.effect(player, criminal);
    }
}