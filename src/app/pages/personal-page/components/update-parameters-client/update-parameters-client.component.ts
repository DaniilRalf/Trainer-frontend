import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../../../models/types/user";

@Component({
  selector: 'app-update-parameters-client',
  templateUrl: './update-parameters-client.component.html',
  styleUrls: ['./update-parameters-client.component.scss']
})
export class UpdateParametersClientComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  constructor() { }

  ngOnInit(): void {
  }

}
