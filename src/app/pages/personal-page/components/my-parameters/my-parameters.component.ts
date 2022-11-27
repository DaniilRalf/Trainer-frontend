import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Parameters, User} from "../../../../models/types/user";
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-my-parameters',
  templateUrl: './my-parameters.component.html',
  styleUrls: ['./my-parameters.component.scss']
})
export class MyParametersComponent implements OnInit {
  @Input() public user!: BehaviorSubject<User>

  userParameters: any = [];
  displayedKey = ['date_metering', 'shoulder_bust', 'shoulder_girth', 'shoulder_hip', 'shoulder_hips'];

  public graph = {
    data: [
      { x: [1, 2, 3],
        y: [2, 6, 3],
        name: 'test',
        type: 'scatter',
        mode: 'lines+markers',
        line: {
          shape: 'spline'
        },
        marker: {
          size: 8,
          color: 'red'
        } },
      { x: [1, 2, 3],
        y: [4, 8, 6],
        name: 'test',
        type: 'scatter',
        mode: 'lines+markers',
        line: {},
        marker: {
          size: 8,
          color: 'blue'
        } },
    ],
    layout: {width: 700, height: 400, hovermode: 'closest', clickmode: 'none', dragmode: false}
  };

  constructor() { }

  ngOnInit(): void {
    this.initTable();
  }

  initTable() {
    this.user.subscribe((i: User) => {
      this.userParameters = i.parameters
      this.initGraph()
    })
  }

  initGraph() {
    // let lineX: number[] = []
    // let lineY: number[] = []
    // this.userParameters.forEach( (item: Parameters) => {
    //   console.log(item)
    //   lineX.push(Number(item.date_metering));
    //   lineY.push(Number(item.shoulder_hip))
    // })
    // this.graph.data[0].x = lineX
    // this.graph.data[0].y = lineY
  }

}
