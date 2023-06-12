import { Component, OnInit } from '@angular/core';
import {LoginModalComponent} from "../header-sticky/login-modal/login-modal.component";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {StoreService} from "../../../../helpers/services/store.service";

@Component({
  selector: 'comp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private auth = false

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private soreService: StoreService,
  ) { }

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
