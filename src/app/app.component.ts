import {Component, HostListener, OnInit} from '@angular/core';
import {StoreService} from "./helpers/services/store.service";
import {ApplicationService} from "./helpers/services/application.service";
import {Event} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Fitness coach';

  // TODO: types
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.applicationService.setWidthApp(event.currentTarget.innerWidth)
  }

  constructor(
    private applicationService: ApplicationService,
    private storeService: StoreService
  ) { }

  ngOnInit(): void {
    this.applicationService.setWidthApp(window.innerWidth)
    this.storeService.getUser();
  }
}



