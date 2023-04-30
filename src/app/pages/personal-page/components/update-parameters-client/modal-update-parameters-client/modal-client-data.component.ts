import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormControl, FormGroup, Validators} from "@angular/forms"
import {GraphqlService} from 'src/app/helpers/services/graphql.service'
import {MatCalendarCellClassFunction} from "@angular/material/datepicker"
import {TrainingEnum} from "../../../../../models/enums/training-enum"
import {take} from "rxjs"
import {NotificationsService} from "../../../../../helpers/services/notifications/notifications.service"
import {GenderEnum} from "../../../../../models/enums/gender-enum"
import moment from "moment"

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
  public onRemoveParameter(inputData: string):void {
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
  public test(inputData: {
    birth_day: number | string,
    start_train: number | string,
    gender: number,
    height: string,
  }):void {
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
    console.log('==================')
    console.log(data)
    console.log('==================')
    this.qraphqlService.updatePersonalClient(data)
      .pipe(take(1))
      .subscribe(() => {
        // TODO: types
        this.notificationService.eventNotification('Персональные данные клиента обновлены')
      })
  }
  /** Personal-data==================================================*/










  isSelected: MatCalendarCellClassFunction<any> = (cellDate) => {
    const date =
      cellDate.getFullYear() +
      "-" +
      ("00" + (cellDate.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + cellDate.getDate()).slice(-2);
    return this.daysSelected.includes(date) ? "test" : '';
  };


  // TODO: types
  select(event: any, calendar: any) {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    const index = this.daysSelected.findIndex(x => x == date);
    if (index < 0) this.daysSelected.push(date);
    else this.daysSelected.splice(index, 1);
    calendar.updateTodaysDate();
  }

  // TODO: заменить типизацию эни
  createTrainingDays() {
    // TODO: после того как расписание добавляектся снимать выделение со дней
    let schedules: any = []
    this.daysSelected.forEach((itemDate: string) => {
      schedules.push({
        date: Date.parse(itemDate),
        description: this.trainSelected
      })
    })
    const data = {
      id: Number(this.data.id),
      schedules: schedules
    }
    console.log(data)
    this.qraphqlService.createTrainingDays(data).subscribe({
      next: (v: any) => {
        // console.log(v)
      },
      error: (e: any) => {
        console.dir(e.networkError || e)
      },
    })
    this.daysSelected = []
    this.trainSelected = null
  }

}
