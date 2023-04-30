import {Injectable} from '@angular/core'
import {MatSnackBar} from "@angular/material/snack-bar"

@Injectable({providedIn: 'root'})
export class NotificationsService {

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  // TODO: потом разбить разные оповещения на разные компоненты а не передавать в тупую как сейчас
  // TODO: это для того чтобы сделать message разными цветами

  public eventNotification(message: string): void {
    this.snackBar.open(
      message,
      'Понятно',
      {duration: 3000})
  }
}
