import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module"
import {WidgetsModule} from "../../widgets/widgets.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {HeaderStickyComponent} from './components/header-sticky/header-sticky.component';
import {AboutComponent} from './components/about/about.component';
import {LoginModalComponent} from './components/header-sticky/login-modal/login-modal.component';
import {ServicesComponent} from './components/services/services.component';
import {FirstTrainComponent} from './components/services/first-train/first-train.component';
import {ItemTrainComponent} from './components/services/item-train/item-train.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {FaqComponent} from './components/faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {FooterComponent} from './components/footer/footer.component';
import {HomeControlService} from "./home-control.service";


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeaderStickyComponent,
    AboutComponent,
    LoginModalComponent,
    ServicesComponent,
    FirstTrainComponent,
    ItemTrainComponent,
    ReviewsComponent,
    FaqComponent,
    FooterComponent,
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
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [HomeControlService]
})
export class HomeModule {
}
