import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../services/store.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public activeSection: string = '';
  public userIs: string | null = '';

  constructor(
    private StoreServise:StoreService
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.userIs = this.StoreServise.getUser().username;
  }

}
