import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, retry} from "rxjs";
import {User} from "../../../../models/types/user";
import {HttpService} from "../../../../helpers/services/http.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {
  env = environment
  @Input() public user!: User

  allItemPhoto?: any

  dateForSelect: number[] = []

  photoBefore?: number
  photoAfter?: number

  constructor(
    private httpService: HttpService,
  ) { }

  //TODO:  поправить типизацию any
  ngOnInit(): void {
    this.httpService.getItemPhotoBeforeAfter(this.user.id)
      .subscribe((item: any) => {
        this.allItemPhoto = item
        this.generateForDisplayed()
      })
  }

  generateForDisplayed(){
    this.allItemPhoto.sort((a: any, b: any) => a.date - b.date)
    this.allItemPhoto.map((item: any) => {
      if (!this.dateForSelect.includes(item.date)) {
        this.dateForSelect.push(item.date)
      }
    })
  }

  generateForSecondSelect(){
    return this.dateForSelect
      .filter((item: number) => !!(this.photoAfter && this.photoAfter < item))
  }

  findPhoto(angle: string, date: string) {
    return this.allItemPhoto
      .find((item: any) =>
        (item.angle === angle && item.date === (date === 'after'
          ? this.photoAfter
          : this.photoBefore)))
  }
}
