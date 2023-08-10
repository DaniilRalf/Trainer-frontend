import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA} from "@angular/material/dialog"

const hoursList = {
  7: -150,
  8: -120,
  9: -90,
  10: -60,
  11: -30,
  12: 0,
  13: 30,
  14: 60,
  15: 90,
  16: 120,
  17: 150,
  18: 180,
  19: 210,
  20: 240,
}
const minutesList = {
  0: 0,
  5: 5.55,
  10: 5,
  15: 7.5,
  20: 10,
  25: 12.5,
  30: 15,
  35: 17.5,
  40: 20,
  45: 22.5,
  50: 25,
  55: 27.5,
}
const colorList = {
  0: 'rgba(255,0,0,0.28)',
  1: 'rgba(255,115,0,0.28)',
  2: 'rgba(255,251,0,0.66)',
  3: 'rgba(170,255,0,0.28)',
  4: 'rgba(0,255,178,0.28)',
  5: 'rgba(0,140,255,0.28)',
  6: 'rgba(132,0,255,0.28)',
  7: 'rgba(255,0,106,0.28)',
}

@Component({
  selector: 'app-modal-admin-schedule',
  templateUrl: './modal-admin-schedule.component.html',
  styleUrls: ['./modal-admin-schedule.component.scss']
})

export class ModalAdminScheduleComponent implements OnInit {

  public showCircle: boolean = false

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalInputData: any,
  ) { }

  ngOnInit(): void {
    this.generateDataForCircle()
  }

  private generateDataForCircle(): void {
    // TODO: types
    this.modalInputData.data.details.forEach( (itemTrain: any, index: number) => {
      //@ts-ignore
      const hoursRotate: number = hoursList[Number(itemTrain.time_start.split(':')[0])]
      //@ts-ignore
      const minutesRotate: number = minutesList[Number(itemTrain.time_start.split(':')[1])]
      /** Высчитываем на сколько необходимо вращать интервал*/
      itemTrain.rotate = hoursRotate + minutesRotate
      /** Высчитываем длину временного отрезка*/
      itemTrain.length = itemTrain.time_duration === '1:30' ? 12 : 7
      /** Задаем цвет для отрезка*/
      // @ts-ignore
      itemTrain.color = colorList[index > 8 ? 0 : index]
      this.showCircle = true
    })
  }

}
