import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {User} from "../../../../models/types/user";
import {GraphqlService} from "../../../../helpers/services/graphql.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalBeforeAfterCreateComponent} from "./modal-before-after-create/modal-before-after-create.component";
import {HttpService} from "../../../../helpers/services/http.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-before-after-create',
  templateUrl: './before-after-create.component.html',
  styleUrls: ['./before-after-create.component.scss']
})
export class BeforeAfterCreateComponent implements OnInit {
  env = environment
  @Input() public user!: BehaviorSubject<User>

  //TODO:  поправить типизацию any
  allClients: any = [];

  //TODO:  сортировать фотки по дате
  allPhotos: any = []

  hideToggle = false

  constructor(
    private graphqlService: GraphqlService,
    private httpService: HttpService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  getAllClients(): void {
    this.graphqlService.getAllClientsWithPhoto()
      .subscribe(({data}: any) => {
        this.allClients = data.getAllClients
        console.log(this.allClients)
      })
  }

  openModal(clientId: number): void {
    this.dialog.open(ModalBeforeAfterCreateComponent, {
      width: '550px',
      data: {clientId},
    }).afterClosed().pipe(take(1)).subscribe(result => {
      this.getAllClients()
      this.onCloseOpenItemPanel()
    });
  }

  onCloseOpenItemPanel(): void {
    this.hideToggle = false
  }
  openedItemPanel(id: number) {
    this.httpService.getAllPhotoBeforeAfter(id)
      .subscribe(item => {
        this.allPhotos = item
      })
  }

}
