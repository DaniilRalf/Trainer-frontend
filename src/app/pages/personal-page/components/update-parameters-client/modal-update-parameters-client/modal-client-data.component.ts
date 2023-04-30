import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {GraphqlService} from 'src/app/helpers/services/graphql.service'
import {MatCalendarCellClassFunction} from "@angular/material/datepicker"
import {TrainingEnum} from "../../../../../models/enums/training-enum"
import {take} from "rxjs"
import {NotificationsService} from "../../../../../helpers/services/notifications/notifications.service"
import {GenderEnum} from "../../../../../models/enums/gender-enum"

@Component({
  selector: 'app-modal-update-parameters-client',
  templateUrl: './modal-client-data.component.html',
  styleUrls: ['./modal-client-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalClientDataComponent implements OnInit {

  GenderEnum = GenderEnum
  TrainingEnum = TrainingEnum

  createPersonalForm!: FormGroup

  // TODO: types
  daysSelected: any[] = []
  daySelectedDetails: any = {}
  trainSelected: string | null = null

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private qraphqlService: GraphqlService,
    private notificationService: NotificationsService,
  ) {
  }

  ngOnInit(): void {
    this.formBuildCreatePersonal()
    console.log(this.data)
  }

  public changeTag(tag: string): void {
    this.data.tag = tag
  }

  public getToString(event: any): string {
    return event.toString()
  }

  /** Parameters=====================================================*/
  public formBuildCreatePersonal(): void {
    this.createPersonalForm = new FormGroup({
      weight: new FormControl('123', [
        Validators.required,
      ]),
      shoulder_bust: new FormControl('123', [
        Validators.required,
      ]),
      shoulder_girth: new FormControl('123', [
        Validators.required,
      ]),
      shoulder_hips: new FormControl('123', [
        Validators.required,
      ]),
      shoulder_hip: new FormControl('123', [
        Validators.required,
      ]),
      date_metering: new FormControl('1668621600000', [
        Validators.required,
      ]),
    })
  }

  /** Create new item Parameter for user*/
  public onCreateParameter() {
    const data = {
      id: Number(this.data.id),
      parameters: {
        event: 'add',
        weight: Number(this.createPersonalForm.value.weight),
        shoulder_bust: Number(this.createPersonalForm.value.shoulder_bust),
        shoulder_girth: Number(this.createPersonalForm.value.shoulder_girth),
        shoulder_hips: Number(this.createPersonalForm.value.shoulder_hips),
        shoulder_hip: Number(this.createPersonalForm.value.shoulder_hip),
        date_metering: Date.parse(this.createPersonalForm.value.date_metering),
      }
    }
    this.qraphqlService.eventWithParameterClient(data)
      .pipe(take(1))
      .subscribe(() => {
        this.notificationService.eventNotification('Параметры клиента сохранены')
      })
  }

  /** Update item Parameter*/
  public onUpdateParameter(inputData: {
    id: string | null,
    shoulder_bust: string | null,
    shoulder_girth: string | null,
    shoulder_hip: string | null,
    shoulder_hips: string | null,
    weight: string | null,
  }) {
    const data = {
      id: Number(this.data.id),
      parameters: {
        event: 'update',
        id: Number(inputData.id),
        weight: Number(inputData.weight),
        shoulder_bust: Number(inputData.shoulder_bust),
        shoulder_girth: Number(inputData.shoulder_girth),
        shoulder_hips: Number(inputData.shoulder_hips),
        shoulder_hip: Number(inputData.shoulder_hip),
      }
    }
    this.qraphqlService.eventWithParameterClient(data)
      .pipe(take(1))
      .subscribe(() => {
        this.notificationService.eventNotification('Параметры клиента изменены')
      })
  }

  /** Remove item Parameter*/
  public onRemoveParameter(inputData: string): void {
    const data = {
      id: Number(inputData),
      parameters: {
        event: 'remove',
      }
    }
    this.qraphqlService.eventWithParameterClient(data)
      .pipe(take(1))
      .subscribe(() => {
        // TODO: types
        this.data.eventData = this.data.eventData.filter((item: any) => item.id !== inputData)
        this.notificationService.eventNotification('Параметры клиента удалены')
      })
  }

  /** Parameters=====================================================*/


  /** Personal-data==================================================*/
  public onUpdatePersonal(inputData: {
    birth_day: number | string,
    start_train: number | string,
    gender: number,
    height: string,
  }): void {
    const data = {
      id: Number(this.data.eventData.id),
      birth_day: typeof inputData.birth_day === 'string'
        ? Date.parse(inputData.birth_day)
        : inputData.birth_day,
      start_train: typeof inputData.start_train === 'string'
        ? Date.parse(inputData.start_train)
        : inputData.start_train,
      gender: Number(inputData.gender),
      height: Number(inputData.height),
    }
    this.qraphqlService.updatePersonalClient(data)
      .pipe(take(1))
      .subscribe(() => {
        // TODO: types
        this.notificationService.eventNotification('Персональные данные клиента обновлены')
      })
  }

  /** Personal-data==================================================*/


  /** Schedules======================================================*/
  public isSelected: MatCalendarCellClassFunction<any> = (cellDate) => {
    const date =
      cellDate.getFullYear() +
      "-" +
      ("00" + (cellDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + cellDate.getDate()).slice(-2);
    return this.daysSelected.includes(date) ? "active_date" : '';
  };

  // TODO: types
  public select(event: any, calendar: any) {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2)
    const index = this.daysSelected.findIndex(x => x == date)
    if (index < 0) this.daysSelected.push(date)
    else this.daysSelected.splice(index, 1)
    calendar.updateTodaysDate()
    this.generateFieldForSchedules()
  }

  private generateFieldForSchedules(): void {
    const daySelectedDetailsNew: any = {}
    this.daysSelected.forEach((itemDate: string) => {
      daySelectedDetailsNew[Date.parse(itemDate)] = {time_start: '', time_duration: '', description: ''}
    })
    this.daySelectedDetails = daySelectedDetailsNew
  }

  public createTrainingDays() {
    let schedules: { date: number, description: string, time_start: string, time_duration: string }[] = []
    for (let [key, value] of Object.entries(this.daySelectedDetails)) {
      schedules.push({
        date: Number(key),
        // @ts-ignore
        description: value['description'] || '',
        // @ts-ignore
        time_start: value['time_start'] || '',
        // @ts-ignore
        time_duration: value['time_duration'] || '',
      })
    }
    const data = {
      id: Number(this.data.id),
      schedules: schedules
    }
    this.qraphqlService.createTrainingDays(data).subscribe(() => {
      this.notificationService.eventNotification('Тренировочные дни успешно сохранены')
      this.daysSelected = []
      this.daySelectedDetails = {}
      this.trainSelected = null
    })
  }

  /** Schedules======================================================*/


}
