import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {LoginPageRoutingModule} from "./login-page-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {WidgetsModule} from "../../widgets/widgets.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    WidgetsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ]
})
export class LoginPageModule { }
