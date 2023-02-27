import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html'
})
export class EditBookComponent implements OnInit {

  errors?:string [];
  form?:FormGroup;
  bookId?:number;

  constructor(
    private fb:FormBuilder,
    private bookService:BookService,
    private router:Router,
    private activateRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.bookId = parseInt(this.activateRoute.snapshot.paramMap.get('id')!);
    this.bookService.get(this.bookId)
    .subscribe(book=>{
      this.form=this.fb.group({
        title:[book.title,[Validators.required,Validators.minLength(3),Validators.maxLength(100)]],//la coma expresa que no tendrá un vlaor por defecto
        slug:[book.slug,[Validators.required,Validators.pattern('[a-z0-9-]+')]],
        desc:[book.desc,[Validators.required]],
        price:[book.price,[Validators.required,Validators.minLength(0)]],
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
    this.bookService.update(this.bookId!, this.form!.value)
    .subscribe({
      next:(book) =>{
      this.router.navigate(['/admin/books']);
    },
      error:(error=>{
        this.errors=error.error.errors;
      })
  })
  }
  createSlug() {
    const slug = this.form!.controls['title'].value
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '');

      this.form!.controls['slug'].setValue(slug);
  }
}
