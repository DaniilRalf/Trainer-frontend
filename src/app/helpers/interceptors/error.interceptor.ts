import {Injectable} from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http'
import {catchError, Observable, of, tap} from 'rxjs'
import {NotificationsService} from "../services/notifications/notifications.service"
import {Router} from "@angular/router";
import {StoreService} from "../services/store.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private storeService: StoreService,
    private notificationService: NotificationsService,
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      tap((res: any) => {
        /** отлавливаем ошибки GraphQL*/
        if (res?.body?.errors) {
          // console.log(res?.body?.errors)
          // const codeError = res?.body?.errors[0].message.extensions.code
          const messageError = res?.body?.errors[0].message
          this.notificationService.onEventNotification(messageError)
        }
        return res
      }),
      /** отлавливаем кастомные ошибки*/
      catchError((err: HttpErrorResponse, caught): Observable<any> => {
        switch (err.status) {
          case 403:
            this.notificationService.onEventNotification('Необходима авторизация')
            this.router.navigate(['/login']).then()
            this.storeService.deleteUser()
            break
        }
        return of(null)
      })
    )
  }
}
