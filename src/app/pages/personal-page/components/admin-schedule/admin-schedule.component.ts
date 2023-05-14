import {Component, Input, OnInit} from '@angular/core'
import {BehaviorSubject, take} from "rxjs"
import {User} from "../../../../models/types/user"
import {GraphqlService} from "../../../../helpers/services/graphql.service"
import {ModalAdminScheduleComponent} from "./modal-admin-schedule/modal-admin-schedule.component"
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.scss']
})
export class AdminScheduleComponent implements OnInit {

  //TODO: поправить типизацию, отменить все подписки
  calendarData: any[] = []

  @Input() public user!: BehaviorSubject<User>

  constructor(
    private graphQlService: GraphqlService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.user.pipe(take(1)).subscribe((i: any) => {
      this.getSchedule()
    })

  }

  private getSchedule(): void {
    this.graphQlService.getAllClientsSchedules()
      // TODO: types
      .subscribe(({data}: any) => {
        this.generateCalendarData(data.getAllClients)
      })
  }

  //TODO: types
  private generateCalendarData(users: any): void {
    const nowYear = new Date().getFullYear()
    const nextMonth = new Date().getMonth() + 1
    const lastDayInMonth = new Date(nowYear, nextMonth, 0).getDate()
    const indexFirstDayInMonth = new Date(nowYear, new Date().getMonth(), 1).getDay()

    let actualDay = 1
    let actualData = 0
    for (let i = 1; i <= 42; i++) {
      if (i >= indexFirstDayInMonth && actualData < lastDayInMonth) {
        actualData++
        this.calendarData.push({data: actualData, day: actualDay, month: new Date().getMonth(), details: []})
      } else {
        this.calendarData.push({})
      }
      actualDay++
      actualDay === 8 ? actualDay = 1 : ''
    }
    users.forEach((user: any) => {
      user.schedules.forEach((schedule: any) => {
        this.calendarData.forEach((itemDay: any) => {
          if (itemDay.month === new Date(schedule.date).getMonth() && itemDay.data === new Date(schedule.date).getDate()) {
            itemDay.details.push({
              clientId: user.id,
              clientFirstName: user.first_name,
              clientLastName: user.last_name,
              ...schedule
            })
          }
        })

      })
    })
    // console.log(this.calendarData)
  }

  // TODO: types
  public openModal(itemDay: any): void {
    if (itemDay.details.length > 0) {
      this.dialog.open(ModalAdminScheduleComponent, {
        width: '500px',
        height: '550px',
        data: {data: itemDay},
      }).afterClosed().pipe(take(1)).subscribe()
    }
  }


}