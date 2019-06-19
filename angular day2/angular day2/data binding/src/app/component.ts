import { ApplicationRef, Component } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
	private locator = (p:Product, id:number) => p.id == id;
    private data:Product[];
    constructor(ref: ApplicationRef) {
       this.data = new Array<Product>(
        new Product(1, "Kayak", "Watersports", 275),
        new Product(2, "Lifejacket", "Watersports", 48.95),
        new Product(3, "Soccer Ball", "Soccer", 19.50),
        new Product(4, "Corner Flags", "Soccer", 34.95),
        new Product(5, "Thinking Cap", "Chess", 16));
    }
    getProductByPosition(position: number): Product {
        return this.data[position];
    }
	
	
	
	
	
	
	
    getClassesByPosition(position: number): string {
        let product = this.getProductByPosition(position);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : 
												"bg-warning");
    }
	
	
	getProduct(id: number) : Product {
        return this.data.find(p => this.locator(p, id));
    }

    saveProduct(product: Product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.data.push(product);
        } else {
            let index = this.data
                .findIndex(p => this.locator(p, product.id));
            this.data.splice(index, 1, product);
        }
    }

    deleteProduct(id: number) {
        let index = this.data.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.data.splice(index, 1);
        }
    }
	private generateID(): number {
        let candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
	
}






