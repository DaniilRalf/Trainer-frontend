import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'el-select-activity-client',
  templateUrl: './select-activity-client.component.html',
  styleUrls: ['./select-activity-client.component.scss']
})
export class SelectActivityClientComponent implements OnInit {

  @Input() btnGroup!: {value: string, view: string}[]

  @Output() changeClientGroupEmitter: EventEmitter<MatButtonToggleChange> = new EventEmitter<MatButtonToggleChange>()

  constructor() { }

  ngOnInit(): void {
  }

  public changeClientGroup(event: MatButtonToggleChange): void {
    this.changeClientGroupEmitter.emit(event)
  }
}
