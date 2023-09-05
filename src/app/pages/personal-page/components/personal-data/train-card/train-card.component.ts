import {Component, Input, OnInit} from '@angular/core';
import {Schedules} from "../../../../../models/types/user";
import {TrainingEnum} from "../../../../../models/enums/training-enum";
import {GeneratorsService} from "../../../../../helpers/services/generators.service"
import {StoreService} from "../../../../../helpers/services/store.service";

@Component({
  selector: 'el-train-card',
  templateUrl: './train-card.component.html',
  styleUrls: ['./train-card.component.scss']
})
export class TrainCardComponent implements OnInit {

  //TODO: delete
  TrainingEnum = TrainingEnum

  @Input() type!: 'button' | 'info'

  @Input() itemTrain?: Schedules & { time_end?: string, keep?: number }

  constructor(
    public generatorsService: GeneratorsService,
    public storeService: StoreService,
  ) {
  }

  ngOnInit(): void {
  }

  public navigate(): void {
    /** to open schedule page */
    this.storeService.tabsOnPersonalPage = 2
  }

}
