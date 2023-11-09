import { InventoryItem, Item } from "./Item";

export abstract class Inventory {
    protected spaceManager: InventorySpaceManager;

    constructor(spaceManager: InventorySpaceManager) {
        this.spaceManager = spaceManager;
    }

    addItems(items: Item[]) { }
}

export abstract class InventorySpaceManager {
    protected items: InventoryItem[];

    constructor() {
        this.items = [];
    }

    abstract inventoryHasSpaceForItems(inventory: Inventory, items: Item[]): boolean;
}
