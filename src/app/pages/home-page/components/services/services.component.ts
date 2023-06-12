import { Component, OnInit } from '@angular/core';
import {TrainTypeEnum} from "./train-type.enum";
import ServicesData from "../../../../../assets/data.json"

@Component({
  selector: 'comp-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  TrainTypeEnum = TrainTypeEnum
  ServicesData = ServicesData

  constructor() { }

  ngOnInit(): void {
  }

}
