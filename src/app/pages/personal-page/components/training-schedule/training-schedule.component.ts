import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../../../models/types/user";

@Component({
  selector: 'app-training-schedule',
  templateUrl: './training-schedule.component.html',
  styleUrls: ['./training-schedule.component.scss']
})
export class TrainingScheduleComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  constructor() { }

  ngOnInit(): void {
  }

}
