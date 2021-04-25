import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/Shared Classes and types/DiscountOffers';
import { IProduct } from 'src/Shared Classes and types/IProduct';

@Component({
  selector: 'app-products-with-discount',
  templateUrl: './products-with-discount.component.html',
  styleUrls: ['./products-with-discount.component.scss']
})
export class ProductsWithDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;
  constructor()
   { 
    this.ProductList = [
    {id: 1, name: 'flower2', quantity: 3, price: 90},
    {id: 3, name: 'flower3', quantity: 2, price: 50},
    {id: 5, name: 'flower5', quantity: 8, price: 200},
    {id: 4, name: 'flower6', quantity: 10, price: 300}
   
    ];

    this.Discount=DiscountOffers.discount10;
  }

  ngOnInit(): void {
  }
}






