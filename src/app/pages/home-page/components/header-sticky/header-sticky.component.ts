import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginModalComponent} from "./login-modal/login-modal.component";
import {Router} from "@angular/router";
import {StoreService} from "../../../../helpers/services/store.service";

@Component({
  selector: 'comp-header-sticky',
  templateUrl: './header-sticky.component.html',
  styleUrls: ['./header-sticky.component.scss']
})
export class HeaderStickyComponent implements OnInit {

  private auth = false

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private soreService: StoreService
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
      this.router.navigate(['/personal'])
    }

  }

}
