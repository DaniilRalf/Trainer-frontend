import { Component, OnInit } from '@angular/core'
import {User} from "../../../models/types/user"
import {StoreService} from "../../../helpers/services/store.service"
import {BehaviorSubject} from "rxjs"

@Component({
  selector: 'app-client-online',
  templateUrl: './client-online.component.html',
  styleUrls: ['./client-online.component.scss']
})
export class ClientOnlineComponent implements OnInit {

  user = new BehaviorSubject<User>({} as User);

  constructor(
    public storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.getUserFromStore();
  }

  getUserFromStore(){
    this.user.next(this.storeService.USER)
  }

}
