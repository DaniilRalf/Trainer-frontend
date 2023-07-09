import {Component, Input, OnInit} from '@angular/core'
import {BehaviorSubject, take} from "rxjs"
import {User} from "../../../../models/types/user"
import {GraphqlService} from "../../../../helpers/services/graphql.service"
import {MatDialog} from "@angular/material/dialog"
import {ModalBeforeAfterCreateComponent} from "./modal-before-after-create/modal-before-after-create.component"
import {HttpService} from "../../../../helpers/services/http.service"
import {environment} from "../../../../../environments/environment"
import {GeneratorsService} from "../../../../helpers/services/generators.service"
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-before-after-create',
  templateUrl: './before-after-create.component.html',
  styleUrls: ['./before-after-create.component.scss']
})
export class BeforeAfterCreateComponent implements OnInit {

  env = environment

  public allClients: User[] = []

  public isShowClientPhotos = false

  public showClientPhotos!: User

  @Input() public user!: BehaviorSubject<User>

  constructor(
    public generatorsService: GeneratorsService,
    private graphqlService: GraphqlService,
    private httpService: HttpService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  private getAllClients(): void {
    this.graphqlService.getAllClientsWithPhoto()
      .pipe(take(1))
      .subscribe(({data}) => {
        this.allClients = data.getAllClients
        console.log(this.allClients)
      })
  }

  public changeClientGroup(event: MatButtonToggleChange): void {
    console.log(event.value)
  }


  /** Actives of item client photos panel======================= */
  public onShowClientItem(data: User): void {
    this.isShowClientPhotos = true
    this.showClientPhotos = data
  }
  public onCloseClientItem(): void {
    this.isShowClientPhotos = false
    this.showClientPhotos = {} as User
  }
  /** Actives of item client photos panel======================= */

}
