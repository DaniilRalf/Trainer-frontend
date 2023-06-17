import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StoreService} from "../../../../helpers/services/store.service";
import {HomeControlService} from "../../home-control.service";

@Component({
  selector: 'comp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private auth = false

  @Output() scrollAbout: EventEmitter<void> = new EventEmitter<void>()
  @Output() scrollServices: EventEmitter<void> = new EventEmitter<void>()
  @Output() scrollQuestions: EventEmitter<void> = new EventEmitter<void>()
  @Output() scrollReviews: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    private dialog: MatDialog,
    private soreService: StoreService,
    private homeControl: HomeControlService,
  ) { }

  ngOnInit(): void {
    this.checkAuth()
  }

  private checkAuth(): void {
    this.auth = !!this.soreService?.USER?.token
  }

  public login(): void {
    if (!this.auth) {
      this.homeControl.navigate('/login')
    } else {
      this.homeControl.navigate('/personal')
    }
  }

  public onScroll(event: 'about' | 'services' | 'questions' | 'reviews'): void {
    if (event === 'about') {
      this.scrollAbout.emit()
    } else if (event === 'services') {
      this.scrollServices.emit()
    } else if (event === 'questions') {
      this.scrollQuestions.emit()
    } else if (event === 'reviews') {
      this.scrollReviews.emit()
    }
  }
}
