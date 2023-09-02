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
import {ServicesComponent} from './components/services/services.component';
import {FirstTrainComponent} from './components/services/first-train/first-train.component';
import {ItemTrainComponent} from './components/services/item-train/item-train.component';
import {ReviewsComponent} from './components/reviews/reviews.component';
import {FaqComponent} from './components/faq/faq.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {FooterComponent} from './components/footer/footer.component';
import {HomeControlService} from "./home-control.service";
import { ModalTrainComponent } from './components/services/modal-train/modal-train.component';
import { ModalCertificatesComponent } from './components/about/modal-certificates/modal-certificates.component';
import {SwiperModule} from "swiper/angular"
import {VgCoreModule, VgOverlayPlayModule} from "ngx-videogular";
import { VideoPlayIconComponent } from './components/reviews/video-play-icon/video-play-icon.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HeaderStickyComponent,
    AboutComponent,
    ServicesComponent,
    FirstTrainComponent,
    ItemTrainComponent,
    ReviewsComponent,
    FaqComponent,
    FooterComponent,
    ModalTrainComponent,
    ModalCertificatesComponent,
    VideoPlayIconComponent,
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
    MatExpansionModule,
    SwiperModule,
    VgCoreModule,
    VgOverlayPlayModule,
  ],
  providers: [HomeControlService]
})
export class HomeModule {
}
