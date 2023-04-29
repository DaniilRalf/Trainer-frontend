import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, take} from "rxjs";
import {User} from "../../../../models/types/user";

@Component({
  selector: 'app-training-schedule',
  templateUrl: './training-schedule.component.html',
  styleUrls: ['./training-schedule.component.scss']
})
export class TrainingScheduleComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>
  //TODO: поправить типизацию, отменить все подписки
  calendarData: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.user.pipe(take(1)).subscribe((i: any) => {
      this.generateCalendarData(i)
    })
  }

  //TODO: типизироватьвсе нормально
  generateCalendarData(data: any) {
    const nowYear = new Date().getFullYear()
    const nextMonth = new Date().getMonth() + 1
    const lastDayInMonth = new Date(nowYear, nextMonth, 0).getDate()
    const indexFirstDayInMonth = new Date(nowYear, new Date().getMonth(), 1).getDay()

    let actualDay = 1
    let actualData = 0
    for (let i = 1; i <= 42; i++) {
        if (i >= indexFirstDayInMonth && actualData < lastDayInMonth) {
          actualData++
          this.calendarData.push({data: actualData, day: actualDay})
        } else {
          this.calendarData.push({})
        }
      actualDay++
      actualDay === 8 ? actualDay = 1 : ''
    }

    data.schedules.forEach((itemDay: any) => {
      this.calendarData.forEach(i => {
        if (new Date(itemDay.date).getDate() == i.data) {
          i.description = itemDay.description
        }
      })
    })


    console.log(this.calendarData)

  }

}
