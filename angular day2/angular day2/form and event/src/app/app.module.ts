import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ProductComponent } from "./component";
//import { component_switch } from "./component_switch";
import { NewContactComponent } from "./newcontact.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [ProductComponent,NewContactComponent],
    bootstrap: [ProductComponent]
})
export class AppModule {}
