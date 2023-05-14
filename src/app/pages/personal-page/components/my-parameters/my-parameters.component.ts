import {Component, Input, OnInit} from '@angular/core'
import {User} from "../../../../models/types/user"
import * as PlotlyJS from 'plotly.js-dist-min'
import {PlotlyModule} from 'angular-plotly.js'

PlotlyModule.plotlyjs = PlotlyJS

@Component({
  selector: 'app-my-parameters',
  templateUrl: './my-parameters.component.html',
  styleUrls: ['./my-parameters.component.scss']
})
export class MyParametersComponent implements OnInit {
  @Input() public user!: User

  public displayedKey = ['date_metering', 'shoulder_bust', 'shoulder_girth', 'shoulder_hip', 'shoulder_hips'];

  public graph = {
    data: [
      {
        x: [new Date(1680282000000), new Date(1681059600000), new Date(1681923600000)],
        y: [2, 12, 3],
        name: 'Обхват груди',
        type: 'scatter',
        mode: 'lines+markers',
        line: {
          shape: 'spline'
        },
        marker: {
          size: 8,
          color: 'red'
        },
        fill: 'tozeroy', // добавлен параметр fill
        fillcolor: 'rgba(255, 0, 0, 0.2)', // задан цвет заливки
      },
      {
        x: [new Date(1680282000000), new Date(1681059600000), new Date(1681923600000)],
        y: [4, 8, 6],
        name: 'Бицепс',
        type: 'scatter',
        mode: 'lines+markers',
        line: {},
        marker: {
          size: 8,
          color: 'blue'
        },
        fill: 'tozeroy', // добавлен параметр fill
        fillcolor: 'rgba(0, 0, 255, 0.2)' // задан цвет заливки
      },
    ],
    layout: {
      width: 1000,
      height: 400,
      hovermode: 'closest',
      clickmode: 'none',
      dragmode: false,
      transition: {
        duration: 1000,
        easing: 'cubic-in-out'
      }
    }
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
