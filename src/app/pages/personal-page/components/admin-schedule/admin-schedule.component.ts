import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../../../models/types/user";

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.scss']
})
export class AdminScheduleComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  constructor() { }

  ngOnInit(): void {
  }

}
