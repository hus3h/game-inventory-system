import { InventoryItem, Item } from "./Item";

export abstract class Inventory {
    protected spaceManager: InventorySpaceManager;
    protected items: InventoryItem[];

    constructor(spaceManager: InventorySpaceManager, items: InventoryItem[]) {
        this.items = items;
        this.spaceManager = spaceManager;
    }

    addItems(items: Item[]) { }
}

export interface InventorySpaceManager {
    inventoryHasSpaceForItems(inventory: Inventory, items: Item[]): boolean;
}
