import { Injectable } from '@angular/core';
import {User} from "../models/types/user";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  //==== сделаю отдельную сущьность под клиентов и она будет имплементироваться
  //==== от интерфейса Юзеров, это для того чтобы админ получал полные данные
  //==== и все, логику вызова всех данных оставлю в общем компоненте

  public USER: User = {} as User;
  public USER_CHANGE = new BehaviorSubject<boolean>(false)

  //====изменить табы на енамы
  public TabsPage: number = this.USER.roleId === 1 ? 1 : 5;

  constructor() { }

  saveUser(data: User){
    this.USER.roleId = data.roleId
    this.USER.token = data.token
    this.USER.username = data.username
    this.USER.first_name = data.first_name
    this.USER.last_name = data.last_name
    localStorage.setItem('roleId', String(data.roleId));
    localStorage.setItem('token', String(data.token));
    localStorage.setItem('username', String(data.username));
    localStorage.setItem('first_name', String(data.first_name));
    localStorage.setItem('last_name', String(data.last_name));
    this.USER_CHANGE.next(true);
  }

  getUser() {
    this.USER.roleId = Number(localStorage.getItem('roleId'));
    this.USER.token = localStorage.getItem('token');
    this.USER.username = localStorage.getItem('username');
    this.USER.first_name = localStorage.getItem('first_name');
    this.USER.last_name = localStorage.getItem('last_name');
    this.USER.username ? this.USER_CHANGE.next(true) : this.USER_CHANGE.next(false);
    return this.USER
  }

  deleteUser() {
    this.USER = {} as User;
    localStorage.removeItem('roleId');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    this.USER_CHANGE.next(false);
  }

  saveUserDetalization(data: User){
    this.USER.parameters = data.parameters;
    this.USER.personal = data.personal;
    this.USER.schedules = data.schedules
  }

}
