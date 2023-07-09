import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'el-select-activity-client',
  templateUrl: './select-activity-client.component.html',
  styleUrls: ['./select-activity-client.component.scss']
})
export class SelectActivityClientComponent implements OnInit {

  constructor() { }

  @Output() changeClientGroupEmitter: EventEmitter<MatButtonToggleChange> = new EventEmitter<MatButtonToggleChange>()

  ngOnInit(): void {
  }

  public changeClientGroup(event: MatButtonToggleChange): void {
    this.changeClientGroupEmitter.emit(event)
  }
}
