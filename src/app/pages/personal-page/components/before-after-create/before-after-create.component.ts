import {Component, Input, OnInit} from '@angular/core'
import {BehaviorSubject, take} from "rxjs"
import {User} from "../../../../models/types/user"
import {GraphqlService} from "../../../../helpers/services/graphql.service"
import {MatDialog} from "@angular/material/dialog"
import {ModalBeforeAfterCreateComponent} from "./modal-before-after-create/modal-before-after-create.component"
import {HttpService} from "../../../../helpers/services/http.service"
import {environment} from "../../../../../environments/environment"
import {GeneratorsService} from "../../../../helpers/services/generators.service"

@Component({
  selector: 'app-before-after-create',
  templateUrl: './before-after-create.component.html',
  styleUrls: ['./before-after-create.component.scss']
})
export class BeforeAfterCreateComponent implements OnInit {

  env = environment

  //TODO:  поправить типизацию any
  allClients: any = [];

  hideToggle = false

  allPhotos: any = {}

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
      .subscribe(({data}: any) => {
        this.allClients = data.getAllClients
      })
  }

  public openModal(clientId: number): void {
    this.dialog.open(ModalBeforeAfterCreateComponent, {
      width: '550px',
      data: {clientId},
    }).afterClosed().pipe(take(1)).subscribe(() => {
      this.getAllClients()
      this.onCloseOpenItemPanel()
    })
  }

  private onCloseOpenItemPanel(): void {
    this.hideToggle = false
  }

  public openedItemPanel(id: number) {
    this.allPhotos = {} /** очищаем обьект актуальных фоток*/
    this.httpService.getAllPhotoBeforeAfter(id)
      .subscribe(item => {
        this.generateGroupsPhoto(item)
      })
  }

  // TODO: types
  private generateGroupsPhoto(inputData: any): void {
    inputData.forEach((itemData: any) => {
      if (this.allPhotos[itemData.date]) {
        this.allPhotos[itemData.date].push(itemData)
      } else {
        this.allPhotos[itemData.date] = []
        this.allPhotos[itemData.date].push(itemData)
      }
    })
  }

}
