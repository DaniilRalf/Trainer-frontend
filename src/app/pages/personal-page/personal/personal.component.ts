import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../../services/store.service";
import {GraphqlService} from "../../../services/graphql.service";
import {Router} from "@angular/router";
import {TabsPageEnum} from "../../../models/enums/tabs-page-enum";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, OnDestroy {
  //====зменить названия енамов ТабсЕнам
  TabsPage = TabsPageEnum;

  sidebarIs: string = 'keyboard_arrow_left'

  constructor(
    private router: Router,
    public StoreService: StoreService,
    private GraphqlService: GraphqlService
  ) { }

  //====изменить эни типизацию
  ngOnInit(): void {
    this.GraphqlService.getUserPersonalParameters(this.StoreService.getUser().username)
      .subscribe((i: any) => {
        this.StoreService.saveUserDetalization(i.data.getUserPersonalParameters)
        this.navigate();
    })
    console.log(this.StoreService.USER)
  }

  //====переделать на свич-кейс
  //====добавить роли в енамы
  navigate(){
    if(this.StoreService.USER.roleId === 1){
      this.router.navigate(['/personal', 'client-online']);
    }
    if(this.StoreService.USER.roleId === 2){
      this.router.navigate(['/personal', 'admin']);
    }
  }

  setTabsPage(itemTabs: number): void {
    this.StoreService.TabsPage = itemTabs
  }

  //====менять таб в зависимости от роли
  ngOnDestroy() {
    // this.StoreService.TabsPage = TabsPage.personalData
  }

}
