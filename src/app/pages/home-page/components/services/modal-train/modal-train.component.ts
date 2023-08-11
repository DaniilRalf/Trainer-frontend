import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TrainTypeEnum} from "../../../../../models/enums/train-type.enum";

@Component({
  selector: 'app-modal-train',
  templateUrl: './modal-train.component.html',
  styleUrls: ['./modal-train.component.scss']
})
export class ModalTrainComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      description: string,
      price: number,
      trainDuration: string,
      trainPeriod: string,
      trainQuantity: string,
      include: string[],
    } & TrainTypeEnum,
    private dialogRef: MatDialogRef<ModalTrainComponent>
  ) {
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  public modalClose(): void {
    this.dialogRef.close()
  }

}
