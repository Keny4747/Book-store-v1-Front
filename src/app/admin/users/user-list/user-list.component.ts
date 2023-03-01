import { Component, OnInit } from '@angular/core';
import { User, UserPage } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.css']

})
export class UserListComponent implements OnInit {
  userPage?:UserPage;

  displayedColumns:string [] = ['firstName','lastName','fullName','email','role','actions'];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
    //this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getUsers(){
    this.userService.paginate()
    .subscribe((userPage)=>{
      this.userPage =userPage;
    });
  }
  deleteUser(user:User){
    if (confirm('Estas seguro de eliminar este usuario?')) {
      this.userService.delete(user.id!).subscribe(() => {
        this.getUsers();
      });
    }
  }

  paginateUsers(event:PageEvent){
    const page = event.pageIndex;
    const size = event.pageSize;

    this.userService.paginate(size,page)
    .subscribe(userPage =>{
      this.userPage = userPage;
    })

  }
}
