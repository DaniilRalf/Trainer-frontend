import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalCertificatesComponent} from "./modal-certificates/modal-certificates.component";
import {take} from "rxjs";

@Component({
  selector: 'comp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
  }

  public showCertificate(): void {
    this.dialog.open(ModalCertificatesComponent, {
      width: 'auto',
      height: 'auto',
    }).afterClosed().pipe(take(1)).subscribe()
  }

}
