import { Component , ViewChild ,OnInit } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'angday1';
  

  @ViewChild(ProductComponent) product:ProductComponent;
 renderval()  
  {
      this.product.renderValues();
 
    }
    rendervalById(id:string)  
    { 
 
        this.product.renderValuesById(id);
     
    }
   
}





