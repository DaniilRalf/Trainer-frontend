import {Component, OnInit} from '@angular/core'
import {StoreService} from "../../helpers/services/store.service"
import {GraphqlService} from "../../helpers/services/graphql.service"
import {Router} from "@angular/router"
import {RoleEnum} from "../../models/enums/role-enum";
import {User} from "../../models/types/user";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  public user!: User

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
        this.user = this.storeService.USER
        this.navigate();
      })
  }

  private navigate(): void {
    switch (this.storeService.USER.roleId) {
      case RoleEnum.user :
        this.router.navigate(['/personal', 'client-online']);
        break
      case RoleEnum.admin :
        this.router.navigate(['/personal', 'admin']);
        break
    }
  }

}
