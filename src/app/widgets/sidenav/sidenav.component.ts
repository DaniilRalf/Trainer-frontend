import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/types/user";
import {RoleEnum} from "../../models/enums/role-enum";
import {StoreService} from "../../helpers/services/store.service";
import {Router} from "@angular/router";
import {UntilDestroy} from "@ngneat/until-destroy";
import {interval, skip, Subscription} from "rxjs";
import moment from "moment";
import {ApplicationService} from "../../helpers/services/application.service";

@UntilDestroy({checkProperties: true})
@Component({
  selector: 'comp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public RoleEnum = RoleEnum

  public time!: string

  public windowDesktop!: boolean

  private subscription: Subscription = new Subscription()

  public adminMenuList: { label: string, icon: string, index: number }[] = [
    {label: 'Мой график', icon: 'calendar_today', index: 1},
    {label: 'Детализация по клиентам', icon: 'assessment', index: 2},
    {label: 'Питание клиентов', icon: 'fastfood', index: 3},
    {label: 'Фото клиентов До/После', icon: 'add_a_photo', index: 4},
    {label: 'Создать клиента', icon: 'person_add', index: 5},
  ]

  @Input() user!: User

  constructor(
    public applicationService: ApplicationService,
    public storeService: StoreService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.windowDesktop = this.storeService.sidenavStatus

    if (!this.storeService.tabsOnPersonalPage) {
      this.storeService.tabsOnPersonalPage = 1
    }

    this.subscription = interval(1000)
      .subscribe(() => this.time = moment().format('HH:mm'))

    this.subscription.add(
      this.applicationService.getWidthApp()
        .pipe(skip(1))
        .subscribe((data: number) => {
          if (data > 1000) {
            this.windowDesktop = true
            this.storeService.sidenavStatus = true
          } else {
            this.windowDesktop = false
            this.storeService.sidenavStatus = false
          }
        })
    )
  }

  public setTabsOnPage(event: number): void {
    this.storeService.tabsOnPersonalPage = event
  }

  public changeWindowSize(): void {
    this.windowDesktop = !this.windowDesktop
    this.storeService.sidenavStatus = this.windowDesktop
  }

  public onLogout(): void {
    this.storeService.deleteUser();
    this.router.navigate(['home']).then()
  }

  public onMainPage(): void {
    this.router.navigate(['home']).then()
  }

}
