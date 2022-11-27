import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {HomeRoutingModule} from "./home-routing.module";
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HomeTitleComponent } from './home/home-title/home-title.component';
import { AboutComponent } from './about/about.component';
import { ResultComponent } from './result/result.component';
import {WidgetsModule} from "../../widgets/widgets.module";
import { ProductItemComponent } from './products/product-item/product-item.component';

import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


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
    HomeRoutingModule,
    WidgetsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
