import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {User} from "../../../../models/types/user";
import {GraphqlService} from "../../../../services/graphql.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalBeforeAfterCreateComponent} from "./modal-before-after-create/modal-before-after-create.component";
import {HttpService} from "../../../../services/http.service";

@Component({
  selector: 'app-before-after-create',
  templateUrl: './before-after-create.component.html',
  styleUrls: ['./before-after-create.component.scss']
})
export class BeforeAfterCreateComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  // ==== поправить типизацию any
  allClients: any = [];

  // ==== сортировать фотки по дате
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

  //====поправить типизацию data
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
      // console.log(result);
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
