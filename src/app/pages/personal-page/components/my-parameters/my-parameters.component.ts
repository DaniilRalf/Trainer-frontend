import {ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core'
import {User} from "../../../../models/types/user"
import {ChartConfiguration, ChartOptions, ChartType} from "chart.js";
import {DatePipe} from "@angular/common";


@Component({
  selector: 'app-my-parameters',
  templateUrl: './my-parameters.component.html',
  styleUrls: ['./my-parameters.component.scss'],
  providers: [DatePipe],
})
export class MyParametersComponent implements OnInit {

  public displayedKey = ['date_metering', 'weight', 'shoulder_bust', 'shoulder_girth', 'shoulder_hip', 'shoulder_hips'];

  public graphData!: ChartConfiguration<'line'>['data']
  public graphDataOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
  }
  public graphDataLegend = true

  @Input() public user!: User


  constructor(
    private datePipe: DatePipe,
  ) {
  }

  ngOnInit(): void {
    this.graphInit()
  }

  private graphInit(): void {
    this.graphData = {
      labels: [],
      datasets: [
        {
          label: 'Бицепс (см.)',
          data: [],
          fill: true, tension: 0.5,
          borderColor: 'rgb(53,213,0)',
          backgroundColor: 'rgba(13,187,0,0.3)',
          pointRadius: 6,
        },
        {
          label: 'Обхват бедра (см.)',
          data: [],
          fill: true, tension: 0.5,
          borderColor: 'rgb(255,210,65)',
          backgroundColor: 'rgba(255,204,0,0.3)',
          pointRadius: 6,
        },
        {
          label: 'Вес (см.)',
          data: [],
          fill: true, tension: 0.5,
          borderColor: 'rgb(164,0,0)',
          backgroundColor: 'rgba(255,0,0,0.3)',
          pointRadius: 6,

        },
        {
          label: 'Обхват груди (см.)',
          data: [],
          fill: true, tension: 0.5,
          borderColor: 'rgb(0,69,213)',
          backgroundColor: 'rgba(0,81,255,0.3)',
          pointRadius: 6,
        },
        {
          label: 'Обхват бёдер (см.)',
          data: [],
          fill: true, tension: 0.5,
          borderColor: 'rgb(213,82,0)',
          backgroundColor: 'rgba(255,115,0,0.3)',
          pointRadius: 6,
        },
      ]
    }

    if (this.user.parameters!.length > 0) {
      const dataSort = this.user.parameters?.sort(
        (a, b) => Number(a.date_metering) - Number(b.date_metering)
      )
      dataSort!.forEach((parameter) => {
        /** заполение данных Бицепса*/
        this.graphData.datasets[0].data.push(Number(parameter.shoulder_girth))
        /** заполение данных Обхвата бедра*/
        this.graphData.datasets[1].data.push(Number(parameter.shoulder_hip))
        /** заполнение оси даты*/
        this.graphData.labels?.push(this.datePipe.transform(parameter.date_metering, 'dd-MM-yyyy'))
        /** заполение данных веса*/
        this.graphData.datasets[2].data.push(Number(parameter.weight))
        /** заполение данных Обхвата груди*/
        this.graphData.datasets[3].data.push(Number(parameter.shoulder_bust))
        /** заполение данных Обхвата бёдер*/
        this.graphData.datasets[4].data.push(Number(parameter.shoulder_hips))
      })
    }

  }

}
