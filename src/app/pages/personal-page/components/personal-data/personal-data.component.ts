import {Component, Input, OnInit} from '@angular/core';
import {Photo, Schedules, User} from "../../../../models/types/user";
import moment from "moment";
import {GeneratorsService} from "../../../../helpers/services/generators.service";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  public nearestTrains: (Schedules & { time_end?: string, keep?: number })[] = []

  @Input() public user!: User

  constructor(
    private generatorsService: GeneratorsService
  ) {
  }

  ngOnInit(): void {
    this.generateNearestTrains()
  }

  private generateNearestTrains(): void {
    /** generate array with three train days */
    if (this.user.schedules && this.user.schedules?.length) {
      this.user.schedules
        ?.sort((a, b) => b.date + a.date)
      const schedule: Schedules[] = []
      const nowDate = moment().valueOf()
      this.user.schedules.forEach((itemSchedule) => {
        if (itemSchedule.date > nowDate) {
          schedule.push(itemSchedule)
        }
      })
      for (let index = 0; index < schedule.length; index++) {
        if (index === 0 || index === 1 || index === 2) {
          this.nearestTrains.push(schedule[index])
        } else break
      }
    }
    this.nearestTrains.forEach((itemTrain) => {
      /** generate end_time property */
      itemTrain.time_end = this.generatorsService
        .generateEndTimeProperty(itemTrain.time_start, itemTrain.time_duration)
      /** generate keep property */
      itemTrain.keep = this.generatorsService.generateKeepProperty(itemTrain.date) + 1 || 0
    })
    this.nearestTrains.reverse()
  }
}
