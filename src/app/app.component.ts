import { Component, OnInit } from '@angular/core';
import {StoreService} from "./services/store.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Alina trainer';

  constructor(
    private storeService: StoreService
  ) { }

  // ==== убрать все console.log
  ngOnInit(): void {
    this.storeService.getUser();
  }
}



