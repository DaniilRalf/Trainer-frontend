import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from "./pages/home-page/home.module";
import {WidgetsModule} from "./widgets/widgets.module";
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PersonalModule} from "./pages/personal-page/personal.module";
import {DirectivesModule} from "./helpers/directives/directives.module";
import {MatSnackBarModule} from "@angular/material/snack-bar";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    HomeModule,
    PersonalModule,

    WidgetsModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DirectivesModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
