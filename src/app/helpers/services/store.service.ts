import { Injectable } from '@angular/core';
import {User} from "../../models/types/user";
import {BehaviorSubject} from "rxjs";
import {RoleEnum} from "../../models/enums/role-enum";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  public USER: User = {} as User;
  public USER_CHANGE = new BehaviorSubject<boolean>(false)

  //TODO: change on enum
  public TabsPage: number = this.USER.roleId === RoleEnum.user ? 1 : 5;

  constructor() { }

  saveUser(data: User): void {
    this.USER = data
    localStorage.setItem('user', JSON.stringify(data))
    this.USER_CHANGE.next(true)
  }

  getUser(): User {
    const userFromLocalStorage: User = JSON.parse(localStorage.getItem('user')  || '')
    this.USER.id = userFromLocalStorage.id
    this.USER.roleId = userFromLocalStorage.roleId
    this.USER.token = userFromLocalStorage.token
    this.USER.username = userFromLocalStorage.username
    this.USER.first_name = userFromLocalStorage.first_name
    this.USER.last_name = userFromLocalStorage.last_name
    this.USER.username ? this.USER_CHANGE.next(true) : this.USER_CHANGE.next(false);
    return this.USER
  }

  deleteUser(): void {
    this.USER = {} as User
    this.USER_CHANGE.next(false)
    localStorage.removeItem('user')
  }

  saveUserDetalization(data: User): void {
    this.USER.parameters = data.parameters;
    this.USER.personal = data.personal;
    this.USER.schedules = data.schedules
  }

}
