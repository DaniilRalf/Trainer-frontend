import { Component, OnInit } from '@angular/core';
import data from '../../../../assets/data.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public products = data.products

  constructor() { }

  ngOnInit(): void {
  }

}
