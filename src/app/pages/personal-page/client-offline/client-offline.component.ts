import {Component, OnInit} from '@angular/core'
import {User} from "../../../models/types/user"
import {StoreService} from "../../../helpers/services/store.service"

@Component({
  selector: 'app-client-online',
  templateUrl: './client-offline.component.html',
  styleUrls: ['./client-offline.component.scss']
})
export class ClientOfflineComponent implements OnInit {

  user!: User

  constructor(
    public storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
    this.getUserFromStore()
  }

  private getUserFromStore(): void {
    this.user = this.storeService.USER
  }

}
