import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'el-button-custom',
  templateUrl: './button-custom.component.html',
  styleUrls: ['./button-custom.component.scss']
})
export class ButtonCustomComponent implements OnInit {

  @Input() text!: string

  @Input() type!: 'flat' | 'stoked'

  @Input() color?: string
  @Input() bgColor?: string
  @Input() icon?: string

  constructor() { }

  ngOnInit(): void {
  }

}
