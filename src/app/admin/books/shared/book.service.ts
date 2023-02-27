import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book, BookPage } from './book.model';

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

   return this.http.get<BookPage>('http://localhost:9090/api/books',{params});
  }
  get(id:number):Observable<Book>{
    return this.http.get<Book>(`http://localhost:9090/api/books/${id}`);
  }
  create(book:Book):Observable<Book>{
    return this.http.post<Book>('http://localhost:9090/api/books',book);
  }
  update(id:number,book:Book){
    return this.http.put<Book>(`http://localhost:9090/api/books/${id}`,book);
  }
  delete(id:number){
    return this.http.delete(`http://localhost:9090/api/books/${id}`);
  }
}
