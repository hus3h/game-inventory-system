import { Inventory as BaseInventory, InventorySpaceManager } from "./Inventory";
import { ItemQuantityManager, ItemStackingManager } from "./Item";

export class Inventory extends BaseInventory { }

export class InventoryFixedSpace extends InventorySpaceManager {
    slotsCount: number;

    constructor(slotsCount: number) {
        super();
        this.slotsCount = slotsCount;
    }

    inventoryHasSpaceForItems(): boolean {
        return false;
    }
}

export class InventoryInfiniteSpace extends InventorySpaceManager {
    inventoryHasSpaceForItems(): boolean {
        return true;
    }
}

export class ItemFixedQuantity implements ItemQuantityManager { }

export class ItemInfiniteQuantity implements ItemQuantityManager { }

export class ItemFixedStacking implements ItemStackingManager { }

export class ItemInfiniteStacking implements ItemStackingManager { }
