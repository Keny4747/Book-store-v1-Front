import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IndexComponent } from './index/index.component';
import { BooksComponent } from './books/books.component';

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
