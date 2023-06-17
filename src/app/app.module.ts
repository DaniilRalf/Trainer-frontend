import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {HomeModule} from "./pages/home-page/home.module"
import {WidgetsModule} from "./widgets/widgets.module"
import {GraphQLModule} from './graphql.module'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {PersonalModule} from "./pages/personal-page/personal.module"
import {DirectivesModule} from "./helpers/directives/directives.module"
import {MatSnackBarModule} from "@angular/material/snack-bar"
import {NgCircleProgressModule} from "ng-circle-progress"
import {ErrorInterceptor} from "./helpers/interceptors/error.interceptor"
import {LoginPageModule} from "./pages/login-page/login-page.module";


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
    LoginPageModule,

    WidgetsModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DirectivesModule,
    MatSnackBarModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
