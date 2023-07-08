import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {GraphqlService} from 'src/app/helpers/services/graphql.service';
import {User} from "../../../../models/types/user";
import {MatDialog} from '@angular/material/dialog';
import {ModalClientDataComponent} from './modal-update-parameters-client/modal-client-data.component';
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {ModalClientSettingsComponent} from "./modal-client-settings/modal-client-settings.component";

@Component({
  selector: 'app-update-parameters-client',
  templateUrl: './update-parameters-client.component.html',
  styleUrls: ['./update-parameters-client.component.scss']
})
export class UpdateParametersClientComponent implements OnInit {

  allClients: User[] = [];

  displayedKey = ['indicator', 'username', 'first_name', 'last_name', 'parameters', 'personal', 'schedule', 'settings'];

  @Input() public user!: BehaviorSubject<User>

  constructor(
    public graphqlService: GraphqlService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getAllClients()
  }

  //TODO: поправить типизацию data
  private getAllClients() {
    this.graphqlService.getAllClientsAllData()
      .pipe(take(1))
      .subscribe(({data}: any) => {
        this.allClients = data.getAllClients
      })
  }

  //TODO: поправить типизацию event
  public openModal(id: number, event: any, tag: string): void {
    this.dialog.open(ModalClientDataComponent, {
      width: '550px',
      maxHeight: '80vh',
      data: {eventData: event, id: id, tag: tag},
    }).afterClosed().pipe(take(1))
      .subscribe(() => this.getAllClients())
  }

  public openSettingsModal(event: User): void {
    this.dialog.open(ModalClientSettingsComponent, {
      width: '550px',
      maxHeight: '80vh',
      data: event
    }).afterClosed().pipe(take(1))
      .subscribe(() => this.getAllClients())
  }

  public changeClientGroup(event: MatButtonToggleChange): void {
    console.log(event.value)
  }

}
