import {Component} from '@angular/core';

import { Model } from "./repository.model";
import { Product } from "./product.model";

import { Router} from '@angular/router';

@Component({
	 selector: "app",
  templateUrl: './newcontact.html' ,
  
})
export class NewContactComponent{
model: Model = new Model();
private pp1:Product[];

constructor() {
        
        this.pp1 = new Array<Product>();
}

getProducts(): Product[] {
        return this.model.getProducts();
    }
	
	
	getSearch(): Product[] {
        return this.pp1;
    }
    
onInsert(cname:string,mail:string,ph:number){
  let p:Product={name:cname,category:mail,price:ph};
  this.model.saveProduct(p);
 
   }
   
 onSearch(cname:string,mail:string){
    this.model.getProducts().forEach(p => {if((p.name==cname)&&(p.category==mail)){this.pp1.push(p)}});
    }
}



