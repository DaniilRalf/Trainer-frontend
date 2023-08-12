import {Component, OnInit} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard";
import {NotificationsService} from "../../helpers/services/notifications/notifications.service";

@Component({
  selector: 'el-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private clipboard: Clipboard,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
  }

  //TODO: paste actual link
  public copyLink(): void {
    this.clipboard.copy('http://localhost:8080');
    this.notificationService.onEventNotification('Ссылка скопирована')
  }

}
