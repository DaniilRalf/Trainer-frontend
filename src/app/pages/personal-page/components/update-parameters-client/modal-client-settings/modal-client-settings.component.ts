import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {User} from "../../../../../models/types/user";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {GraphqlService} from "../../../../../helpers/services/graphql.service";
import {NotificationsService} from "../../../../../helpers/services/notifications/notifications.service";
import {take} from "rxjs";

@Component({
  selector: 'modal-client-settings',
  templateUrl: './modal-client-settings.component.html',
  styleUrls: ['./modal-client-settings.component.scss']
})
export class ModalClientSettingsComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private graphqlService: GraphqlService,
    private notificationService: NotificationsService,
  ) { }

  onChangeActiveClient(event: MatSlideToggleChange): void {
    this.data.is_active = event.checked
    this.graphqlService.updateActiveClient({id: this.data.id, active: event.checked})
      .pipe(take(1))
      .subscribe(() => {
        this.notificationService.onEventNotification('Активность клиента изменена')
      })
  }

}
