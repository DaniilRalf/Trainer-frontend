import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Photo} from "../../models/types/user";

@Injectable({providedIn: 'root'})
export class HttpService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAvatar(data: number): Observable<Photo> {
    return this.http.post<Photo>(`${environment.apiUrl}api/get_avatar`, {id: data})
  }

  createAvatar(data: FormData) {
    return this.http.post(`${environment.apiUrl}api/set_avatar`, data)
  }

  getItemPhotoBeforeAfter(data: number): Observable<Object> {
    return this.http.post(`${environment.apiUrl}api/get_client_item_photos`, {id: data})
  }

  // TODO: types
  createBeforeAfter(data: any) {
    return this.http.post(`${environment.apiUrl}api/set_client_photos`, data)
  }

  removePhotosGroup(data: number[]) {
    return this.http.post(`${environment.apiUrl}api/remove_client_photos_group`, data)
  }
}
