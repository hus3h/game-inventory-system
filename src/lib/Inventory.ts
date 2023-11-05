import { InventoryItem, Item } from "./Item";

export class Inventory {
    protected spaceManager: InventorySpaceManager;
    protected items: InventoryItem[];

    constructor(spaceManager: InventorySpaceManager, items: InventoryItem[]) {
        this.items = items;
        this.spaceManager = spaceManager;
    }

    addItems(items: Item[]) { }

    hasSpaceForItems(items: Item[]) {
        return this.spaceManager.inventoryHasSpaceForItems(this, items);
    }
}

export interface InventorySpaceManager {
    inventoryHasSpaceForItems(inventory: Inventory, items: Item[]): boolean;
}

export class InventoryInfiniteSpace implements InventorySpaceManager {
    inventoryHasSpaceForItems(): boolean {
        return true;
    }
}

export class InventoryFixedSpace implements InventorySpaceManager {
    slotsCount: number;

    constructor(slotsCount: number) {
        this.slotsCount = slotsCount;
    }

    inventoryHasSpaceForItems(): boolean {
        return false;
    }
}
