import {ChangeDetectorRef, Component, NgZone, OnInit, ViewChild} from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import {SwiperComponent} from "swiper/angular";

/** install Swiper components */
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-modal-certificates',
  templateUrl: './modal-certificates.component.html',
  styleUrls: ['./modal-certificates.component.scss']
})
export class ModalCertificatesComponent implements OnInit {

  @ViewChild('swiperRef', {static: false}) swiperRef?: SwiperComponent

  constructor() {
  }

  ngOnInit() {
  }

  thumbsSwiper: any;

}
