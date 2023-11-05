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
        return this.spaceManager.hasSpaceForItems(items);
    }
}

abstract class InventorySpaceManager {
    abstract hasSpaceForItems(items: Item[]): boolean;
}

export class InventoryInfiniteSpace extends InventorySpaceManager {
    hasSpaceForItems(): boolean {
        return true;
    }
}

export class InventoryFixedSpace extends InventorySpaceManager {
    slotsCount: number;

    constructor(slotsCount: number) {
        super();
        this.slotsCount = slotsCount;
    }

    hasSpaceForItems(): boolean {
        return false;
    }
}
