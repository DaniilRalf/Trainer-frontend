import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, retry, take} from "rxjs";
import {User} from "../../../../models/types/user";
import {HttpService} from "../../../../helpers/services/http.service";
import {environment} from "../../../../../environments/environment";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {

  env = environment

  btnGroup: {value: string, view: string}[] = [
    {value: 'allPhoto', view: 'Все фото'},
    {value: 'comparePhoto', view: 'Сравнить фото'},
  ]

  allItemPhoto?: any

  @Input() public user!: User

  constructor(
    private httpService: HttpService,
  ) { }

  //TODO:  поправить типизацию any
  ngOnInit(): void {
    this.httpService.getItemPhotoBeforeAfter(this.user.id)
      .pipe(take(1))
      .subscribe((item: any) => {
        this.allItemPhoto = item
      })
  }

  public changePhotosView(event: MatButtonToggleChange): void {

  }
}
