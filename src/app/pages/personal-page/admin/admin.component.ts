import { Component, OnInit } from '@angular/core'
import {StoreService} from "../../../helpers/services/store.service"
import {BehaviorSubject} from "rxjs"
import {User} from "../../../models/types/user"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user = new BehaviorSubject<User>({} as User);

  constructor(
    public storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.getUserFromStore();
  }

  private getUserFromStore(): void{
    this.user.next(this.storeService.USER)
  }

}

