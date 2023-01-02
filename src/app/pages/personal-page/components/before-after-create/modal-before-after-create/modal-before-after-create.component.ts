import {Component, Inject, OnInit} from '@angular/core';
import {HttpService} from "../../../../../services/http.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {TypePhoto} from "../../../../../models/enums/typePhoto";

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
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  setPhoto(event: any) {
    this.fileNewPhoto = event.target.files[0]
  }

  saveNewPhoto() {
    const dateString = Date.parse(this.dateNewPhoto.toDateString())

    let newPhotoFormData = new FormData()
    newPhotoFormData.append('id', this.data.clientId)
    newPhotoFormData.append('img', this.fileNewPhoto)
    newPhotoFormData.append('date', String(dateString))
    newPhotoFormData.append('angle', this.angle)

    // ==== тут сделать оповещения красывые
    this.httpService.createBeforeAfter(newPhotoFormData)
      .subscribe((data) => {
        // console.log(data)
      })
  }

}
