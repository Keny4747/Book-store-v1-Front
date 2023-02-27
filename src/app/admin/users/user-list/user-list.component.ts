import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'

})
export class UserListComponent implements OnInit {

  users:User[]=[];
  id!:number;
  constructor(private userService:UserService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userService.paginate()
    .subscribe(users=>{
      console.log('users',users);
      this.users =users;
    })
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }


}
