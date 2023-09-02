import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'el-video-play-icon',
  templateUrl: './video-play-icon.component.html',
  styleUrls: ['./video-play-icon.component.scss']
})
export class VideoPlayIconComponent implements OnInit {

  @Input() status!: string

  constructor() {
  }

  ngOnInit(): void {
  }

}
