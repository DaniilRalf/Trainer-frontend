import {Injectable} from '@angular/core'

@Injectable({providedIn: 'root'})
export class GeneratorsService {

  constructor() {
  }

  //TODO: delete

  generateNumberType(data: string | number | unknown): number {
    return Number(data)
  }

  generateArrayType(data: any): any[] {
    return data
  }
}
