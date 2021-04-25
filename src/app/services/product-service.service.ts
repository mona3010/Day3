import { Injectable } from '@angular/core';
import { IProduct } from 'src/Shared Classes and types/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService
 {
  ProductList : IProduct[] =[]; 

  constructor()
   { 
    // {
    //   this.ProductList=[{
    //     id:8,
    //     name :"flwoer1",
    //     quantity : 3,
    //      price : 200,
    //     img : "https://img.freepik.com/free-photo/pink-flowers-pink_24837-301.jpg?size=626&ext=jpg"},

    //     {
    //        id: 9,
    //        name: "flwer2" ,
    //         quantity: 5 ,
    //          price:100 ,
    //          img:"https://img.huffingtonpost.com/asset/5eab310824000054028ea0c2.jpeg?cache=3aKWSTf8Yx&ops=scalefit_720_noupscale"},
    //     {
    //       id:10,
    //       name :"flwoer3",
    //      quantity : 1,
    //        price : 150,
    //       img : "https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    //     ];
    //   }

    

  
}
GetAllProducts()
  {
      return this.ProductList;
  }

  getProductById(id:any):any
  {
    for(var i=0;i<this.ProductList.length;i++){
      if(id==this.ProductList[i].id)
        return this.ProductList[i];
    }
     if(isNaN(id))
        return null; 
  }


// GetAllProducts():IProduct[]
// {
//    return this.ProductList;
// }   

//  getProductByID(pID:number)
// {
//   return this.ProductList.find((x )=> x.id=== pID);
// } 

}




  

