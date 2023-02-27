import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './books/book-list/book-list.component';
import { NewBookComponent } from './books/new-book/new-book.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NewUsersComponent } from './users/new-users/new-users.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {
    path:'books',component:BookListComponent
  },
  {
    path:'books/new',component:NewBookComponent
  },
  {
    path:'books/:id',component:EditBookComponent
  },
  {
    path:'users',component:UserListComponent
  },
  {
    path:'users/new',component:NewUsersComponent
  },
  {
    path:'users/:id',component:EditUserComponent
  }
];

@NgModule({
  //al ser un modulo hijo usarmos forChild
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
