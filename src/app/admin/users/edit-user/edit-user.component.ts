import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html'

})
export class EditUserComponent implements OnInit {
  errors?:string[];
  form?:FormGroup;
  userId?:number;
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private router:Router,
    private activateRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userId=parseInt(this.activateRoute.snapshot.paramMap.get('id')!);
    this.userService.get(this.userId)
    .subscribe(user=>{
      this.form= this.fb.group({
        firstName:[user.firstName,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        lastName:[user.lastName,[Validators.required,Validators.maxLength(30)]],
        email:[user.email,[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
        password:[user.password,[Validators.required,Validators.minLength(5)]],
        role:[user.role,[Validators.required]]
      })
    })
  }

  controlHasError(control:string, error:string):boolean{
    //dirty/touched muestra los errores solo cuando el usuario haya usado los campos
    return this.form!.controls[control].hasError(error) && this.form!.controls[control].touched;
  }
  update(){
    if(this.form!.invalid){
      this.form!.markAllAsTouched();
      return
    }
    this.userService.update(this.userId!,this.form!.value)
    .subscribe({
      next:(user)=>{
        this.router.navigate(['/admin/users']);
      },
      error:(error=>{
        this.errors=error.error.errors;
      })
    })
  }

}
