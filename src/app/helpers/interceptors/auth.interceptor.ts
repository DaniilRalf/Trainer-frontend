import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import {StoreService} from "../services/store.service"

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private soreService: StoreService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.soreService?.USER?.token
    if (token) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + token)
      })
    }

    return next.handle(request)
  }
}
