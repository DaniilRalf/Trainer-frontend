import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'el-avatar-client',
  templateUrl: './avatar-client.component.html',
  styleUrls: ['./avatar-client.component.scss']
})
export class AvatarClientComponent implements OnInit {

  constructor() { }

  @Input() active!: boolean

  ngOnInit(): void {
  }

}
