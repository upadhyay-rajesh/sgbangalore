import { FormControl, FormGroup, Validators } from "@angular/forms";
export class ProductFormControl extends FormControl {
    label: string;
    modelProperty: string;
    constructor(label:string, property:string, value: any) {
        super(value);
        this.label = label;
        this.modelProperty = property;
    }
}
export class ProductFormGroup extends FormGroup {
    constructor() {
        super({
            name: new ProductFormControl("Name", "name",""),
			category: new ProductFormControl("Category", "category",""),
            price: new ProductFormControl("Price", "price","")
        });
    }
    get productControls(): ProductFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as ProductFormControl);
    }
}

















