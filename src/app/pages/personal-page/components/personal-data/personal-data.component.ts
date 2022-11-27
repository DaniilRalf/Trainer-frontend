import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/types/user";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  constructor() { }

  ngOnInit(): void {
  }

}
