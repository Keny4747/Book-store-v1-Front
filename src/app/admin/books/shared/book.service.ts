import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookPage } from './book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  paginate(size:number = 8,page:number=0):Observable<BookPage>{
    let params = new HttpParams();
    params = params.append('size',size);
    params = params.append('page',page);
    params = params.append('sort','createdAt,desc');

   return this.http.get<BookPage>(`${environment.apiBase}/books`,{params});
  }
  get(id:number):Observable<Book>{
    return this.http.get<Book>(`${environment.apiBase}/books/${id}`);
  }
  create(book:Book):Observable<Book>{
    return this.http.post<Book>(`${environment.apiBase}/books`,book);
  }
  update(id:number,book:Book){
    return this.http.put<Book>(`${environment.apiBase}/books/${id}`,book);
  }
  delete(id:number){
    return this.http.delete(`${environment.apiBase}/books/${id}`);
  }
  uploadFile(formData:FormData):Observable<any>{
    return this.http.post(`${environment.apiBase}/media/upload`,formData);
  }
}
