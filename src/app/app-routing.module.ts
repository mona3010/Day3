import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PostsComponent } from './posts/posts.component';
import { ProductComponent } from './product/product.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithoutDiscountComponent } from './products-without-discount/products-without-discount.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 { path:'users',component:UsersComponent},
 {path:'posts',component:PostsComponent},
  
 {path:'Login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'notes',component:NotesComponent},
 {path:'product',component:ProductComponent,
 children:
 [
   
   {path:'productwithtDiscount',component:ProductsWithDiscountComponent},
   {path:'productwithOutDiscount',component:ProductsWithoutDiscountComponent}
 ]},
 {path:'home',component:HomeComponent},

//  {path:'productspage',component:ProductComponent,
    
//   },
//  {path:'**',component:pageNotFoud}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
