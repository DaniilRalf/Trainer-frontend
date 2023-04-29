import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import { GraphqlService } from 'src/app/helpers/services/graphql.service';
import {User} from "../../../../models/types/user";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ModalClientDataComponent } from './modal-update-parameters-client/modal-client-data.component';

@Component({
  selector: 'app-update-parameters-client',
  templateUrl: './update-parameters-client.component.html',
  styleUrls: ['./update-parameters-client.component.scss']
})
export class UpdateParametersClientComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  ////TODO: поправить ипизацию эни
  allClients: any = [];
  displayedKey = ['first_name', 'last_name', 'username', 'parameters', 'personal', 'schedule'];


  constructor(
    public qraphqlService: GraphqlService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  //TODO: поправить типизацию data
  getAllClients() {
    this.qraphqlService.getAllClientsAllData()
    .subscribe(({data}: any) => {
      this.allClients = data.getAllClients
    })
  }

  //TODO: поправить типизацию event
  openModal(id: number, event: any, tag: string): void {
    this.dialog.open(ModalClientDataComponent, {
      width: '550px',
      maxHeight: '80vh',
      data: {eventData: event, id: id, tag: tag},
    }).afterClosed().pipe(take(1)).subscribe(result => {
      this.getAllClients()
    })
  }

}
