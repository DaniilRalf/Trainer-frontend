import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'comp-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public statusVideo: { status: string }[] = [
    {status: "pause"},
    {status: "pause"},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  public changeStatusVideo(event: Event, indexVideo: number): void {
    this.statusVideo[indexVideo].status = event.type
  }

}
