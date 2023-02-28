import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.css']

})
export class UserListComponent implements OnInit {

  users:User[]=[];

  displayedColumns:string [] = ['firstName','lastName','fullName','email','role','actions'];
  constructor(private userService:UserService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    //this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getUsers(){
    this.userService.paginate()
    .subscribe(users=>{
      this.users =users;
    });
  }
  deleteUser(user:User){
    if (confirm('Estas seguro de eliminar este usuario?')) {
      this.userService.delete(user.id!).subscribe(() => {
        this.getUsers();
      });
    }
  }
}
