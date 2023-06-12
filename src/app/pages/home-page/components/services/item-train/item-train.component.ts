import {Component, Input, OnInit} from '@angular/core';

import {TrainTypeEnum} from "../train-type.enum";

@Component({
  selector: 'comp-item-train',
  templateUrl: './item-train.component.html',
  styleUrls: ['./item-train.component.scss']
})
export class ItemTrainComponent implements OnInit {

  TrainTypeEnum = TrainTypeEnum

  @Input() title!: string
  @Input() description!: string
  @Input() serviceType!: TrainTypeEnum
  @Input() price!: number

  constructor() { }

  ngOnInit(): void {
  }

}
