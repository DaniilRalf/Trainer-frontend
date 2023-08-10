import {Component, Input, OnInit} from '@angular/core';
import {Schedules, User} from "../../../../models/types/user";
import moment from "moment";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  public nearestTrains: (Schedules & { time_end?: string, keep?: number })[] = []

  @Input() public user!: User

  constructor() {
  }

  ngOnInit(): void {
    this.generateNearestTrains()
  }

  private generateNearestTrains(): void {
    const addEqualOnStart = (data: string) => {
      if (data.length === 1) return `0${data}`
      else return data
    }
    /** generate array with three train days */
    if (this.user.schedules && this.user.schedules?.length > 0) {
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
      /** generate end_day property */
      const splitTime = itemTrain.time_start.split(":");
      let endHours = Number(splitTime[0])
      let endMinute = Number(splitTime[1])
      if (itemTrain.time_duration === '1:00') {
        endHours++
      } else if (itemTrain.time_duration === '1:30') {
        endHours++
        endMinute += 30
      }
      if (endMinute > 60) {
        endHours++
        endMinute = endMinute - 60
      }
      itemTrain.time_end = `${addEqualOnStart(String(endHours))}:${addEqualOnStart(String(endMinute))}`
      /** generate keep property */
      const date1 = new Date(itemTrain.date);
      const date2 = new Date(moment().valueOf());
      const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime())
      const diffInDays = Math.floor(diffInMilliseconds / 86400000)
      itemTrain.keep = diffInDays + 1 || 0
    })
    this.nearestTrains.reverse()
  }


}
