import {Component, Input, OnInit} from '@angular/core';
import {Photo} from "../../../../../models/types/user";

@Component({
  selector: 'el-photos-group',
  templateUrl: './photos-group.component.html',
  styleUrls: ['./photos-group.component.scss']
})
export class PhotosGroupComponent implements OnInit {

  @Input() photos?: Photo[]

  constructor() { }

  ngOnInit(): void {
    console.log(this.photos)
  }

}
