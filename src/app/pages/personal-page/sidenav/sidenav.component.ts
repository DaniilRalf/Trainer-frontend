import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/types/user";
import {RoleEnum} from "../../../models/enums/role-enum";
import {StoreService} from "../../../helpers/services/store.service";

@Component({
  selector: 'comp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  RoleEnum = RoleEnum

  @Input() user!: User

  constructor(
    public storeService: StoreService,
  ) { }

  ngOnInit(): void {
    if (!this.storeService.tabsOnPersonalPage) {
       this.storeService.tabsOnPersonalPage = 1
    }
  }

  public setTabsOnPage(event: number): void {
    this.storeService.tabsOnPersonalPage = event
  }

}
