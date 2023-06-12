import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header/header.component";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import { ButtonCustomComponent } from './button-custom/button-custom.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonCustomComponent
  ],
  exports: [
    HeaderComponent,
    ButtonCustomComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ]
})
export class WidgetsModule { }
