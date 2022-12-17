import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GraphqlService} from 'src/app/services/graphql.service';
import {MatCalendarCellClassFunction} from "@angular/material/datepicker";
import {TrainingEnum} from "../../../../../models/enums/training-enum";

@Component({
  selector: 'app-modal-client-data',
  templateUrl: './modal-client-data.component.html',
  styleUrls: ['./modal-client-data.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalClientDataComponent implements OnInit {
  createForm!: FormGroup;


  TrainingEnum = TrainingEnum
  daysSelected: any[] = [];
  trainSelected: string | null = null



  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public qraphqlService: GraphqlService,
  ) { }

  ngOnInit(): void {
    this.formBuildCreate();
    console.log(this.data)
  }

  public formBuildCreate(): void {
    this.createForm = new FormGroup({
      weight: new FormControl('123',[
        Validators.required,
      ]),
      shoulder_bust: new FormControl('123',[
        Validators.required,
      ]),
      shoulder_girth: new FormControl('123',[
        Validators.required,
      ]),
      shoulder_hips: new FormControl('123',[
        Validators.required,
      ]),
      shoulder_hip: new FormControl('123',[
        Validators.required,
      ]),
      date_metering: new FormControl('1668621600000',[
        Validators.required,
      ]),
    });
  }

  onCreateParameter(){
    const data = {
      id: Number(this.data.id),
      parameters: {
        weight: Number(this.createForm.value.weight),
        shoulder_bust: Number(this.createForm.value.shoulder_bust),
        shoulder_girth: Number(this.createForm.value.shoulder_girth),
        shoulder_hips: Number(this.createForm.value.shoulder_hips),
        shoulder_hip: Number(this.createForm.value.shoulder_hip),
        date_metering: Number(this.createForm.value.date_metering),
      }
    }
    this.qraphqlService.createParametersClient(data).subscribe({
      next: (v: any) => {
        console.log(v)
      },
      error: (e: any) => {
        console.dir(e.networkError || e)
      },
    })
  }

  changeTag(tag: string) {
    this.data.tag = tag
  }




  isSelected: MatCalendarCellClassFunction<any> = (cellDate) => {
      const date =
        cellDate.getFullYear() +
        "-" +
        ("00" + (cellDate.getMonth() + 1)).slice(-2) +
        "-" +
        ("00" + cellDate.getDate()).slice(-2);
      return this.daysSelected.includes(date) ? "test" : '';
  };

  select(event: any, calendar: any) {
    const date =
      event.getFullYear() +
      "-" +
      ("00" + (event.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + event.getDate()).slice(-2);
    const index = this.daysSelected.findIndex(x => x == date);
    if (index < 0) this.daysSelected.push(date);
    else this.daysSelected.splice(index, 1);
    calendar.updateTodaysDate();

    console.log(this.trainSelected)
    console.log(this.daysSelected)
  }

  // ====заменить типизацию эни
  createTrainingDays() {
    let schedules: any = []
    this.daysSelected.forEach((itemDate: string) => {
      schedules.push({
          date: Date.parse(itemDate),
          description: this.trainSelected
      })
    })
    const data = {
      id: Number(this.data.id),
      schedules: schedules
    }
    console.log(data)
    this.qraphqlService.createTrainingDays(data).subscribe({
      next: (v: any) => {
        console.log(v)
      },
      error: (e: any) => {
        console.dir(e.networkError || e)
      },
    })
    this.daysSelected = []
    this.trainSelected = null
  }

}
