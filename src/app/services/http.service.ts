import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPhotoBeforeAfter(data: number): Observable<Object> {
    return this.http.post('http://localhost:4300/api/get_client_photos', {id: data})
  }

  getItemPhotoBeforeAfter(data: number): Observable<Object> {
    return this.http.post('http://localhost:4300/api/get_client_item_photos', {id: data})
  }

  // ==== вынестти урлы в енвацйромент
  // ==== изменить типизацию эни
  createBeforeAfter(data: any) {
    return this.http.post('http://localhost:4300/api/set_client_photos', data)
  }
}
