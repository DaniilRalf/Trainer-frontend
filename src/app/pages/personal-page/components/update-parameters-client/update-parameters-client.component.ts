import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { GraphqlService } from 'src/app/services/graphql.service';
import {User} from "../../../../models/types/user";

@Component({
  selector: 'app-update-parameters-client',
  templateUrl: './update-parameters-client.component.html',
  styleUrls: ['./update-parameters-client.component.scss']
})
export class UpdateParametersClientComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  //====поправить ипизацию эни
  allClients: any = [];
  displayedKey = ['first_name', 'last_name', 'username', 'parameters', 'personal'];


  constructor(
    public qraphqlService: GraphqlService,
  ) { }

  ngOnInit(): void {
    this.getAllClients()
  }

  //====поправить типизацию data
  getAllClients() {
    this.qraphqlService.getAllClients()
    .subscribe(({data}: any) => {
      this.allClients = data.getAllClients
      console.log(data);
    })
  }

}
