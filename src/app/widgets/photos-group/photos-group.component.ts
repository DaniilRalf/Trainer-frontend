import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../models/types/user";
import {environment} from "../../../environments/environment";
import {HttpService} from "../../helpers/services/http.service";
import {take} from "rxjs";
import {NotificationsService} from "../../helpers/services/notifications/notifications.service";

@Component({
  selector: 'el-photos-group',
  templateUrl: './photos-group.component.html',
  styleUrls: ['./photos-group.component.scss']
})
export class PhotosGroupComponent implements OnInit {

  //TODO: types

  //TODO: пока сделал удаление группы фоток, теперь надо сделать изменние конкретных фоток

  env = environment

  public photosGroup: Record<number, any> = {}

  @Input() public removeMode = false

  @Input() photos?: Photo[]

  constructor(
    private httpService: HttpService,
    private notificationService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.generatePhotosGroup()
  }

  private generatePhotosGroup(): void {
    this.photos?.forEach((photo: Photo) => {
      if (this.photosGroup.hasOwnProperty(photo.date)) {
        this.photosGroup[photo.date][photo.angle] = photo
      } else {
        this.photosGroup[photo.date] = {}
        this.photosGroup[photo.date][photo.angle] = photo
      }
    })
  }

  //TODO по хорошему нужно перенести в основной компонент
  public removeGroupPhoto(value: any, key: string): void {
    const removePhotoIDArray = [] as number[]
    for (let [_k, v] of Object.entries(value)) {
      // @ts-ignore
      removePhotoIDArray.push(v['id'])
    }
    if (removePhotoIDArray.length > 0) {
      this.httpService.removePhotosGroup(removePhotoIDArray)
        .pipe(take(1))
        .subscribe(() => {
          // @ts-ignore
          delete this.photosGroup[key]
          this.notificationService.onEventNotification('Фотографии успешно удалены')
        })
    }
  }

}
