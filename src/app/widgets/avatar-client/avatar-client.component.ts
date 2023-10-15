import {Component, Input, OnInit} from '@angular/core'
import {environment} from "../../../environments/environment"
import {HttpService} from "../../helpers/services/http.service";
import {take} from "rxjs";
import {NotificationsService} from "../../helpers/services/notifications/notifications.service";
import moment from "moment";
import {Photo} from "../../models/types/user";

@Component({
  selector: 'el-avatar-client',
  templateUrl: './avatar-client.component.html',
  styleUrls: ['./avatar-client.component.scss']
})
export class AvatarClientComponent implements OnInit {

  env = environment

  avatarImgName = ''

  dataForSave: { imgForTag: any, imgFile: File | null } = {} as { imgForTag: any, imgFile: File | null }

  @Input() active!: boolean

  @Input() isUpdate = false

  @Input() userId!: number

  constructor(
    private httpService: HttpService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.userId && this.getAvatar()
  }

  public setPhoto(event: any): void {
    if (event.target!.files && event.target.files[0]) {
      this.dataForSave.imgForTag = new FileReader()
      this.dataForSave.imgFile = event.target.files[0]
      this.dataForSave.imgForTag.onload = () => {
        return this.dataForSave.imgForTag = this.dataForSave.imgForTag.result
      }
      this.dataForSave.imgForTag.readAsDataURL(this.dataForSave.imgFile)
    }
    this.addAvatar()
  }

  private getAvatar(): void {
    this.httpService.getAvatar(this.userId)
      .pipe(take(1))
      .subscribe((data: Photo) => {
        this.avatarImgName = data?.file_name
      })
  }

  private addAvatar(): void {
    if (this.dataForSave.imgFile) {
      let newPhotoFormData = new FormData()
      newPhotoFormData.append('id', String(this.userId))
      newPhotoFormData.append('date', String(moment().valueOf()))
      newPhotoFormData.append('img', this.dataForSave.imgFile)

      this.httpService.createAvatar(newPhotoFormData)
        .pipe(take(1))
        .subscribe(() => {
          this.notificationService.onEventNotification('Фотография успешно сохранена')
          this.avatarImgName = ''
        })
    }
  }

}
