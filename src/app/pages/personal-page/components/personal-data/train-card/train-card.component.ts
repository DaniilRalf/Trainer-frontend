import {Component, Input, OnInit} from '@angular/core';
import {Schedules} from "../../../../../models/types/user";
import {TrainingEnum} from "../../../../../models/enums/training-enum";
import {GeneratorsService} from "../../../../../helpers/services/generators.service";

@Component({
  selector: 'el-train-card',
  templateUrl: './train-card.component.html',
  styleUrls: ['./train-card.component.scss']
})
export class TrainCardComponent implements OnInit {

  TrainingEnum = TrainingEnum

  @Input() type!: 'button' | 'info'

  @Input() itemTrain?: Schedules & { time_end?: string, keep?: number }

  constructor(
    public generatorsService: GeneratorsService
  ) {
  }

  ngOnInit(): void {
  }

}
