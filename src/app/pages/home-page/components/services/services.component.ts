import {Component, OnInit} from '@angular/core';
import {TrainTypeEnum} from "../../../../models/enums/train-type.enum";
import ServicesData from "../../../../../assets/services-data.json"
import {MatDialog} from "@angular/material/dialog";
import {take} from "rxjs";
import {ModalTrainComponent} from "./modal-train/modal-train.component";

@Component({
  selector: 'comp-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  TrainTypeEnum = TrainTypeEnum

  ServicesData: any = ServicesData

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  public openModelTrainCard(data: Object, type: TrainTypeEnum): void {
    this.dialog.open(ModalTrainComponent, {
      width: '550px',
      maxHeight: '80vh',
      data: {...data, type},
    }).afterClosed().pipe(take(1)).subscribe()
  }

}
