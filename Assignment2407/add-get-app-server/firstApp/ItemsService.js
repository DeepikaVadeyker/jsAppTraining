class ItemsService {
    constructor() {
        this.items = [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
        ];

        this.products = [
            { id: 1, name: 'product 1' },
            { id: 2, name: 'product 2' },
        ];
    }
    // Return all Items
    getAllItems() {
        return this.items;
    }

    // Return All Products
    getAllProducts() {
        return this.products;
    }
}

module.exports = ItemsService;
