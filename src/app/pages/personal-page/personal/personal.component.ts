import {Component, OnDestroy, OnInit} from '@angular/core'
import {StoreService} from "../../../helpers/services/store.service"
import {GraphqlService} from "../../../helpers/services/graphql.service"
import {Router} from "@angular/router"
import {RoleEnum} from "../../../models/enums/role-enum"

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, OnDestroy {

  RoleEnum = RoleEnum


  sidebarIs: string = 'keyboard_arrow_left'

  constructor(
    private router: Router,
    public storeService: StoreService,
    private GraphqlService: GraphqlService
  ) {
  }

  //TODO: изменить эни типизацию
  ngOnInit(): void {
    this.GraphqlService.getItemClientAllData(this.storeService.getUser().username)
      .subscribe((i: any) => {
        this.storeService.saveUserDetalization(i.data.getUserPersonalParameters)
        this.navigate();
      })
  }

  //TODO: переделать на свич-кейс
  //TODO: добавить роли в енамы
  navigate(): void {
    if (this.storeService.USER.roleId === 1) {
      this.router.navigate(['/personal', 'client-online']);
    }
    if (this.storeService.USER.roleId === 2) {
      this.router.navigate(['/personal', 'admin']);
    }
  }

  // setTabsPage(itemTabs: number): void {
  //   this.storeService.TabsPage = itemTabs
  // }

  //TODO: менять таб в зависимости от роли
  ngOnDestroy(): void {
    // this.StoreService.TabsPage = TabsPage.personalData
  }

}
