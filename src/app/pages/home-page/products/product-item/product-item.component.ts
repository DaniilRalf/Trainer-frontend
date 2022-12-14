import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../models/types/product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() number!: number;
  public activeDesc: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
