import {Component, Inject, OnInit} from '@angular/core'
import {HttpService} from "../../../../../helpers/services/http.service"
import {MAT_DIALOG_DATA} from "@angular/material/dialog"
import {TypePhoto} from "../../../../../models/enums/typePhoto"
import {NotificationsService} from "../../../../../helpers/services/notifications/notifications.service"
import {take} from "rxjs";

@Component({
  selector: 'app-modal-before-after-create',
  templateUrl: './modal-before-after-create.component.html',
  styleUrls: ['./modal-before-after-create.component.scss']
})
export class ModalBeforeAfterCreateComponent implements OnInit {

  //TODO: types

  TypePhoto = TypePhoto

  // fileNewPhoto!: any
  // angle!: string


  dateNewPhotos!: any

  dataForSave: any = {
    'side': {imgForTag: null, imgFile: null},
    'front': {imgForTag: null, imgFile: null},
    'back': {imgForTag: null, imgFile: null},
  }

  constructor(
    private httpService: HttpService,
    private notificationService: NotificationsService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

  ngOnInit(): void {
  }

  public setPhoto(event: any, key: 'side' | 'front' | 'back'): void {
    if (event.target!.files && event.target.files[0]) {
      this.dataForSave[key].imgForTag = new FileReader()
      this.dataForSave[key].imgFile = event.target.files[0]
      this.dataForSave[key].imgForTag.onload = () => {
        return this.dataForSave[key].imgForTag = this.dataForSave[key].imgForTag.result
      }
      this.dataForSave[key].imgForTag.readAsDataURL(this.dataForSave[key].imgFile)
    }
  }

  public saveNewPhoto(): void {
      for (const [key, value] of Object.entries(this.dataForSave)) {
        // @ts-ignore
        if (value.imgFile) {
          const dateString = Date.parse(this.dateNewPhotos.toDateString())
          let newPhotoFormData = new FormData()
          newPhotoFormData.append('id', this.data.clientId)
          // @ts-ignore
          newPhotoFormData.append('img', value.imgFile)
          newPhotoFormData.append('date', String(dateString))
          newPhotoFormData.append('angle', key)

          //TODO:  тут сделать оповещения красывые
          this.httpService.createBeforeAfter(newPhotoFormData)
            .pipe(take(1))
            .subscribe(() => {
              this.notificationService.onEventNotification('Фотография успешно сохранена')
            })
        }
      }

  }

}
