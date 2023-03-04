import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
})
export class NewBookComponent implements OnInit {
  errors?: string[];

  form: FormGroup = this.fb.group({
    title: [
      ,
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ], //la coma expresa que no tendrá un vlaor por defecto
    slug: [, [Validators.required, Validators.pattern('[a-z0-9-]+')]],
    desc: [, [Validators.required]],
    price: [, [Validators.required, Validators.minLength(0)]],
    coverPath:[,[Validators.required]],
    filePath:[,[Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  controlHasError(control: string, error: string): boolean {
    //dirty/touched muestra los errores solo cuando el usuario haya usado los campos
    return (
      this.form.controls[control].hasError(error) &&
      this.form.controls[control].touched
    );
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
  uploadFile(event:any, control:string){
    const file = event.target.files[0];
    if(file){
      //formData:
      const formData = new FormData();
      formData.append('file',file);

      this.bookService.uploadFile(formData)
      .subscribe(response=>{
        this.form!.controls[control].setValue(response.path);
      })
    }
  }
  create() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.bookService.create(this.form.value).subscribe({
      next: (book) => {
        this.router.navigate(['/admin/books']);
      },
      error: (error) => {
        this.errors = error.error.errors;
      },
    });
  }

}
