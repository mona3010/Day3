import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/Shared Classes and types/DiscountOffers';
import { ICategory } from 'src/Shared Classes and types/ICategory';
import { IProduct } from 'src/Shared Classes and types/IProduct';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit 
    {
  Discount:DiscountOffers;
  storeName:string;
  storeLogo:string;
productList:IProduct[];
categoruList:ICategory[];
clientName:string;
IsPurchased:boolean;

  constructor(private productService:ProductServiceService , private router:Router , private activatedroute:ActivatedRoute)
   { 
     this.Discount = DiscountOffers.discount10;
     this.storeName="flower store";
     this.storeLogo='';
     this.productList=[ {id: 1 , name:"pro1", quantity: 3, price: 20, img: "https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }, 
                        {id: 2 , name: "pro2", quantity: 5, price: 30 , img :"https://img.freepik.com/free-photo/pink-flowers-pink_24837-301.jpg?size=626&ext=jpg"},
                        {id: 3 , name:"pro3", quantity: 3, price: 10, img: "https://images.unsplash.com/photo-1597437716867-83c0fc0f4f38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"}
                      ];
    
     this.categoruList=[{id: 1, name: `cat1`},
                        {id: 2, name: `cat2`},
                        {id: 3, name: `cat3`}
                     ];
     this.clientName="mona";
     this.IsPurchased=false;

  }

  ngOnInit(): void {
  }

  hideTable()
  {
    if (this.IsPurchased){
      this.IsPurchased = false;
    }
    else{
      this.IsPurchased = true;
    }
  }

  discountFunc()
  {
    if (this.Discount == DiscountOffers.discount10 || this.Discount == DiscountOffers.discount15)
    return true;
    else 
    return false
  }

  renderValues() 
  {
      this.productList=this.productService.GetAllProducts();
     
  }

  renderValuesById(id:string):any
  {​​​​​​​​
    this.productList=[];
    var product= this.productService.getProductById(id);
    if(product!=null)
    {​​​​​​​​
       return this.productList.push(product);
    }​​​​​​​​ 

}


ProductsWithDiscount()
{
  
  this.router.navigate(['productwithtDiscount'],{relativeTo:this.activatedroute})
}
ProductsWithOutDiscount()
{
  this.router.navigate(['productwithOutDiscount'],{relativeTo:this.activatedroute})
}
}

