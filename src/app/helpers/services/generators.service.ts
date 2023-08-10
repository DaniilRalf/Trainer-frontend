import {Injectable} from '@angular/core'
import moment from "moment/moment";
import {TrainingEnum} from "../../models/enums/training-enum";

@Injectable({providedIn: 'root'})
export class GeneratorsService {

  TrainingEnum = TrainingEnum

  constructor() {
  }

  /** Schedule================================ */
  public generateEndTimeProperty(dateStart: string, duration: string): string {
    const splitTime = dateStart.split(":");
    let endHours = Number(splitTime[0])
    let endMinute = Number(splitTime[1])
    if (duration === '1:00') {
      endHours++
    } else if (duration === '1:30') {
      endHours++
      endMinute += 30
    }
    if (endMinute > 60) {
      endHours++
      endMinute = endMinute - 60
    }
    return `${this.addEqualOnStart(String(endHours))}:${this.addEqualOnStart(String(endMinute))}`
  }

  public generateKeepProperty(date: number): number {
    const date1 = new Date(date)
    const date2 = new Date(moment().valueOf())
    const diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime())
    return  Math.floor(diffInMilliseconds / 86400000)
  }

  public generateCardName(data: string): string {
    // @ts-ignore
    return this.TrainingEnum[data]
  }

  private addEqualOnStart(data: string) {
    if (data.length === 1) return `0${data}`
    else return data
  }
  /** END-Schedule============================ */
}
