import {Component, Inject, OnInit} from '@angular/core'
import {HttpService} from "../../../../../helpers/services/http.service"
import {MAT_DIALOG_DATA} from "@angular/material/dialog"
import {TypePhoto} from "../../../../../models/enums/typePhoto"
import {NotificationsService} from "../../../../../helpers/services/notifications/notifications.service"

@Component({
  selector: 'app-modal-before-after-create',
  templateUrl: './modal-before-after-create.component.html',
  styleUrls: ['./modal-before-after-create.component.scss']
})
export class ModalBeforeAfterCreateComponent implements OnInit {

  fileNewPhoto!: any
  dateNewPhoto!: any
  angle!: string
  TypePhoto = TypePhoto


  constructor(
    private httpService: HttpService,
    private notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  public setPhoto(event: any): void {
    this.fileNewPhoto = event.target.files[0]
  }

  public saveNewPhoto(): void {
    if (!this.fileNewPhoto || !this.dateNewPhoto || !this.angle) {
      this.notificationService.onEventNotification('Необходимы выбрать фото и заполнить все поля')
    } else {

      const dateString = Date.parse(this.dateNewPhoto.toDateString())

      let newPhotoFormData = new FormData()
      newPhotoFormData.append('id', this.data.clientId)
      newPhotoFormData.append('img', this.fileNewPhoto)
      newPhotoFormData.append('date', String(dateString))
      newPhotoFormData.append('angle', this.angle)

      //TODO:  тут сделать оповещения красывые
      this.httpService.createBeforeAfter(newPhotoFormData)
        .subscribe((data) => {
          // console.log(data)
          this.notificationService.onEventNotification('Фотография успешно сохранена')
        })

    }
  }

}
