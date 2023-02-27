import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './books/book-list/book-list.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { NewBookComponent } from './books/new-book/new-book.component';

import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './users/user-list/user-list.component';
import { NewUsersComponent } from './users/new-users/new-users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';


@NgModule({
  declarations: [
    BookListComponent,
    EditBookComponent,
    NewBookComponent,
    UserListComponent,
    NewUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
