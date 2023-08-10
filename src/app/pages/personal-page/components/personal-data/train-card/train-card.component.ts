import {Component, Input, OnInit} from '@angular/core';
import {Schedules} from "../../../../../models/types/user";
import {TrainingEnum} from "../../../../../models/enums/training-enum";

@Component({
  selector: 'el-train-card',
  templateUrl: './train-card.component.html',
  styleUrls: ['./train-card.component.scss']
})
export class TrainCardComponent implements OnInit {

  TrainingEnum = TrainingEnum

  @Input() type!: 'button' | 'info'

  @Input() itemTrain?: Schedules & { time_end?: string, keep?: number }

  constructor() {
  }

  ngOnInit(): void {
  }

  public generateCardName(data: string): string {
    // @ts-ignore
    return TrainingEnum[data]
  }

}
