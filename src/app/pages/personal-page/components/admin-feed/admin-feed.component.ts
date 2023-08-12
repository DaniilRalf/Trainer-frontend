import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {GraphqlService} from "../../../../helpers/services/graphql.service";
import {MatDialog} from "@angular/material/dialog";
import {User} from "../../../../models/types/user";
import {MatButtonToggleChange} from "@angular/material/button-toggle";
import {
  ModalClientSettingsComponent
} from "../update-parameters-client/modal-client-settings/modal-client-settings.component";
import {AdminFeedSettingsComponent} from "./admin-feed-settings/admin-feed-settings.component";

@Component({
  selector: 'comp-admin-feed',
  templateUrl: './admin-feed.component.html',
  styleUrls: ['./admin-feed.component.scss']
})
export class AdminFeedComponent implements OnInit {

  allClients: User[] = []

  displayedKey = ['indicator', 'username', 'first_name', 'last_name', 'protein', 'fat', 'carbohydrates', 'recommendation']

  btnGroup: {value: string, view: string}[] = [
    {value: 'all', view: 'Все'},
    {value: 'active', view: 'Активные'},
    {value: 'noactive', view: 'Неактивные'},
  ]

  @Input() public user!: BehaviorSubject<User>

  constructor(
    public graphqlService: GraphqlService,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this.getAllClients()
  }

  private getAllClients() {
    this.graphqlService.getAllClientsFeed()
      .pipe(take(1))
      .subscribe(({data}) => {
        this.allClients = data.getAllClients
      })
  }

  public openSettingsModal(event: User): void {
    this.dialog.open(AdminFeedSettingsComponent, {
      width: '550px',
      maxHeight: '80vh',
      data: event
    }).afterClosed().pipe(take(1))
      .subscribe(() => this.getAllClients())
  }

  public changeClientGroup(event: MatButtonToggleChange): void {
  }

}
