import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {ClientRoutingModule} from "./client-routing.module";
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeTitleComponent } from './home/home-title/home-title.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './result/result.component';
import {WidgetsModule} from "../../widgets/widgets.module";
import { ProductItemComponent } from './products/product-item/product-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    HomeTitleComponent,
    AboutComponent,
    ResultComponent,
    ProductItemComponent
  ],
    imports: [
        CommonModule,
        ClientRoutingModule,
        WidgetsModule
    ]
})
export class ClientModule { }
