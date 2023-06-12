import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {StoreService} from "../../../../helpers/services/store.service";
import {HomeControlService} from "../../home-control.service";

@Component({
  selector: 'comp-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.scss']
})
export class HeaderStickyComponent implements OnInit {

  private auth = false

  @Output() scrollAbout: EventEmitter<void> = new EventEmitter<void>()
  @Output() scrollServices: EventEmitter<void> = new EventEmitter<void>()
  @Output() scrollQuestions: EventEmitter<void> = new EventEmitter<void>()
  @Output() scrollUp: EventEmitter<void> = new EventEmitter<void>()

  constructor(
    private dialog: MatDialog,
    private soreService: StoreService,
    private homeControl: HomeControlService,
  ) {
  }

  ngOnInit(): void {
    this.checkAuth()
  }

  private checkAuth(): void {
    this.auth = !!this.soreService?.USER?.token
  }

  public login(): void {
    if (!this.auth) {
      this.dialog.open(LoginModalComponent, {
        width: '500px',
      })
    } else {
      this.homeControl.navigate('/personal')
    }
  }

  public onScroll(event: 'about' | 'services' | 'questions' | 'up'): void {
    if (event === 'about') {
      this.scrollAbout.emit()
    } else if (event === 'services') {
      this.scrollServices.emit()
    } else if (event === 'questions') {
      this.scrollQuestions.emit()
    } else if (event === 'up') {
      this.scrollUp.emit()
    }
  }

}
