import {Component, Input, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {User} from "../../models/types/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = '';

  public logout: string = '';

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit(): void {
    this.storeService.USER_CHANGE
      .subscribe(change => {
        change ? this.logout = 'Выйти' : this.logout = '';
      })
  }

  deleteUserData(){
    this.storeService.deleteUser();
  }

}
