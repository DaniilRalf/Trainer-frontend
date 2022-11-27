import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../../../models/types/user";

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.component.html',
  styleUrls: ['./before-after.component.scss']
})
export class BeforeAfterComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  constructor() { }

  ngOnInit(): void {
  }

}
