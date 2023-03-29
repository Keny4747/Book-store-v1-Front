import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './index/index.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

const routes: Routes = [
  {
    path:'',
    component:HomeLayoutComponent,
    children:[
      {
        path:'',component:IndexComponent
      },
      {
        path:'books',component:BooksComponent
      },
      {
        path:'books/:slug',component:BookDetailComponent
      },
      {
        path:'cart',component:CartComponent
      },
      {
        path:'order/:id',component:OrderDetailComponent
      }
    ]
  }
];

@NgModule({
  //al ser un modulo hijo usarmos forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
