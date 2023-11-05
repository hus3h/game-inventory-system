import { Inventory } from "./Inventory";

export class InventoryItem {
    inventory: Inventory;
    item: Item;
    quantity: number;
    index: number;

    constructor(inventory: Inventory, item: Item, quantity: number, index: number) {
        this.inventory = inventory;
        this.item = item;
        this.quantity = quantity;
        this.index = index;
    }
}

export interface Item {
    quantityManager: ItemQuantityManager;
    stackingManager: ItemStackingManager;
}

interface ItemQuantityManager { }

interface ItemStackingManager { }

export class ItemFixedQuantity implements ItemQuantityManager { }

export class ItemInfiniteQuantity implements ItemQuantityManager { }

export class ItemFixedStacking implements ItemStackingManager { }

export class ItemInfiniteStacking implements ItemStackingManager { }
