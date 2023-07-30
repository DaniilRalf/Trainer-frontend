import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Feed, User} from "../../../../../models/types/user";
import {GraphqlService} from "../../../../../helpers/services/graphql.service";
import {NotificationsService} from "../../../../../helpers/services/notifications/notifications.service";
import {take} from "rxjs";

@Component({
  selector: 'modal-admin-feed-settings',
  templateUrl: './admin-feed-settings.component.html',
  styleUrls: ['./admin-feed-settings.component.scss']
})
export class AdminFeedSettingsComponent implements OnInit {

  feedInfo: Feed = {} as Feed

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private graphqlService: GraphqlService,
    private notificationService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.feedInfo = this.data.feed ? this.data.feed : {} as Feed
  }

  public saveFeedInfo(): void {
    this.graphqlService.updateFeedClient({
      id: this.data.id,
      feed: this.feedInfo
    }).pipe(take(1))
      .subscribe(() => {
        this.notificationService.onEventNotification('Информация по питанию изменена')
      })
  }

}

