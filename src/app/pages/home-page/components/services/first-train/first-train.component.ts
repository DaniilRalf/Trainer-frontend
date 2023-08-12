import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'comp-first-train',
  templateUrl: './first-train.component.html',
  styleUrls: ['./first-train.component.scss']
})
export class FirstTrainComponent implements OnInit {

  @Input() title!: string

  @Input() description!: string

  constructor() { }

  ngOnInit(): void {
  }

}
