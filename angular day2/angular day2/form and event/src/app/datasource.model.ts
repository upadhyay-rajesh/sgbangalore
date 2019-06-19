import {Product} from "./product.model";

export class SimpleDataSource {
    private data:Product[];

    constructor() {
        this.data = new Array<Product>(
        new Product(100, "Kayak", "Watersports", 275),
        new Product(109, "Lifejacket", "Watersports", 48.95),
        new Product(104, "Soccer Ball", "Soccer", 19.50),
        new Product(105, "Corner Flags", "Soccer", 34.95),
        new Product(107, "Thinking Cap", "Chess", 16));
    }

    getData(): Product[] {
        return this.data;
    }
}
