import {Component, Input, OnInit} from '@angular/core'
import {StoreService} from "../../helpers/services/store.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logout: boolean = false

  @Input() title: string = ''
  @Input() darkStyle: boolean = false

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.USER_CHANGE
      .subscribe(change => {
        change ? this.logout = true : this.logout = false;
      })
  }

  deleteUserData(){
    this.storeService.deleteUser();
  }

}
