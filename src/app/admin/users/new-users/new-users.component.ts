import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html'

})
export class NewUsersComponent implements OnInit {

  form:FormGroup = this.fb.group({
    firstName:[,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
    lastName:[,[Validators.required,Validators.maxLength(30)]],

    email:[,[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password:[,[Validators.required,Validators.minLength(5)]],
    role:[,[Validators.required]]
  })

  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }

  create(){
    if(this.form.invalid){
      this.form.markAsTouched();
      return
    }
    this.userService.create(this.form.value)
    .subscribe(user=>{
      this.router.navigate(['/admin/users'])
    })
  }
}
