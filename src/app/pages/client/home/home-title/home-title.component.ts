import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-title',
  templateUrl: './home-title.component.html',
  styleUrls: ['./home-title.component.scss']
})
export class HomeTitleComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() active?: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
