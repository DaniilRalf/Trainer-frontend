import {Component, Inject, OnInit} from '@angular/core';
import {HttpService} from "../../../../../services/http.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-before-after-create',
  templateUrl: './modal-before-after-create.component.html',
  styleUrls: ['./modal-before-after-create.component.scss']
})
export class ModalBeforeAfterCreateComponent implements OnInit {

  fileNewPhoto: any
  dateNewPhoto: any


  constructor(
    private httpService: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  setPhoto(event: any) {
    this.fileNewPhoto = event.target.files[0]
  }

  test() {
    const dateString = Date.parse(this.dateNewPhoto.toDateString())

    let newPhotoFormData = new FormData()
    newPhotoFormData.append('id', this.data.clientId)
    newPhotoFormData.append('img', this.fileNewPhoto)
    newPhotoFormData.append('date', String(dateString))

    // ==== тут сделать оповещения красывые
    this.httpService.createBeforeAfter(newPhotoFormData)
      .subscribe((data) => {
        console.log(data)
      })
  }

}
