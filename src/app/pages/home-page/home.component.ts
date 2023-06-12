import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../helpers/services/store.service";
import {HomeControlService} from "./home-control.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userIs: string | null = ''

  constructor(
    private storeService: StoreService,
    private homeScrollService: HomeControlService,
  ) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser(): void {
    this.userIs = this.storeService.getUser().username
  }

  public scroll(elem: HTMLElement): void {
    this.homeScrollService.scroll(elem)
  }

}
