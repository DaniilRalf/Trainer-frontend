import { Component, OnInit } from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../../../models/types/user";
import {TabsPageEnum} from "../../../models/enums/tabs-page-enum";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  TabsPage = TabsPageEnum

  user = new BehaviorSubject<User>({} as User);

  constructor(
    public StoreService: StoreService,
  ) { }

  ngOnInit(): void {
    this.getUserFromStore();
  }

  getUserFromStore(): void{
    this.user.next(this.StoreService.USER)
  }

}
