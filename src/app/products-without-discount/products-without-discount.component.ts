import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/Shared Classes and types/DiscountOffers';
import { IProduct } from 'src/Shared Classes and types/IProduct';

@Component({
  selector: 'app-products-without-discount',
  templateUrl: './products-without-discount.component.html',
  styleUrls: ['./products-without-discount.component.scss']
})
export class ProductsWithoutDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;
  constructor() {
    this.ProductList = [
      {id: 2, name: 'flower2', quantity: 4, price: 300},
      {id: 6, name: 'flower6', quantity: 22, price: 1000}
      ];
  
      this.Discount=DiscountOffers.discount10;
   }

  ngOnInit(): void {
  }

}
