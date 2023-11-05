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

export interface ItemQuantityManager { }

export interface ItemStackingManager { }
