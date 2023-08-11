import {Component, Input, OnInit} from '@angular/core'
import {BehaviorSubject, take} from "rxjs"
import {Schedules, User} from "../../models/types/user"
import {GraphqlService} from "../../helpers/services/graphql.service"
import {ModalAdminScheduleComponent} from "./modal-admin-schedule/modal-admin-schedule.component"
import {MatDialog} from "@angular/material/dialog"
import {TrainingEnum} from "../../models/enums/training-enum";
import {GeneratorsService} from "../../helpers/services/generators.service";

@Component({
  selector: 'el-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit {

  //TODO: посмотреть можно ли взять ключи от енама и вставить в верстку
  TrainingEnum = TrainingEnum

  public colorsIcons = ['#299DDE', '#45B26B', '#F2E186', '#EF466F', '#7B61FF', '#D2D0D8', '#FF8FCC', '#46D1EF']

  public monthEnum: {
    0: 'Январь', 1: 'Ферваль', 2: 'Март',
    3: 'Апрель', 4: 'Май', 5: 'Июнь',
    6: 'Июль', 7: 'Август', 8: 'Сентябрь',
    9: 'Октябрь', 10: 'Ноябрь', 11: 'Декабрь',
  } = {
    0: 'Январь', 1: 'Ферваль', 2: 'Март',
    3: 'Апрель', 4: 'Май', 5: 'Июнь',
    6: 'Июль', 7: 'Август', 8: 'Сентябрь',
    9: 'Октябрь', 10: 'Ноябрь', 11: 'Декабрь',
  }

  //TODO: поправить типизацию, отменить все подписки
  calendarData: {
    data: number,
    day: number,
    month: number | string,
    details: ({ clientId: number, clientFirstName: string, clientLastName: string }
      & Schedules
      & { time_end?: string, keep?: number })[]
  }[] = []

  nowMonth!: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11

  nowYear!: number

  @Input() public user!: User

  @Input() public type!: 'admin' | 'client-offline'

  constructor(
    public generatorService: GeneratorsService,
    private graphQlService: GraphqlService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getSchedule()
  }

  private getSchedule(): void {
    if (this.type === 'admin') {
      this.graphQlService.getAllClientsSchedules()
        .pipe(take(1))
        .subscribe(({data}) => {
          this.generateCalendarData(data.getAllClients)
        })
    }
    if (this.type === 'client-offline') {
      this.graphQlService.getItemClientSchedules({id: this.user.id})
        .pipe(take(1))
        .subscribe(({data}) => {
          this.generateCalendarData(data.getItemClient)
        })
    }
  }

  private generateCalendarData(users: User[] | User): void {
    this.nowYear = new Date().getFullYear()
    //@ts-ignore
    this.nowMonth = new Date().getMonth()
    const nextMonth = new Date().getMonth() + 1
    const lastDayInMonth = new Date(this.nowYear, nextMonth, 0).getDate()
    const indexFirstDayInMonth = new Date(this.nowYear, new Date().getMonth(), 1).getDay()

    let actualDay = 1
    let actualData = 0
    for (let i = 1; i <= 42; i++) {
      if (i >= indexFirstDayInMonth && actualData < lastDayInMonth) {
        actualData++
        this.calendarData.push({data: actualData, day: actualDay, month: new Date().getMonth(), details: [] as any})
      } else {
        this.calendarData.push({} as any)
      }
      actualDay++
      actualDay === 8 ? actualDay = 1 : ''
    }


    if (this.type === 'admin' && Array.isArray(users)) {
      //TODO: types
      users.forEach((user: User) => {
        user.schedules!.forEach((schedule: Schedules) => {
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
    }
    if (this.type === 'client-offline' && !Array.isArray(users)) {
      //TODO: types
      users.schedules!.forEach((schedule: Schedules) => {
        this.calendarData.forEach((itemDay: any) => {
          if (itemDay.month === new Date(schedule.date).getMonth() && itemDay.data === new Date(schedule.date).getDate()) {
            itemDay.details.push({
              clientId: users.id,
              clientFirstName: users.first_name,
              clientLastName: users.last_name,
              ...schedule,
              keep: this.generatorService.generateKeepProperty(schedule.date),
              time_end: this.generatorService.generateEndTimeProperty(schedule.time_start, schedule.time_duration)
            })
          }
        })
      })
    }
  }

  // TODO: types
  public openModal(itemDay: any): void {
    if (itemDay.details.length > 0 && this.type === 'admin') {
      this.dialog.open(ModalAdminScheduleComponent, {
        width: '500px',
        height: '550px',
        data: {data: itemDay},
      }).afterClosed().pipe(take(1)).subscribe()
    }
  }
}
