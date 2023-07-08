import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private _widthAppObs: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  constructor() { }

  public setWidthApp(data: number) {
    this._widthAppObs.next(data)
  }

  public getWidthApp(): Observable<number> {
    return this._widthAppObs.asObservable()
  }
}
