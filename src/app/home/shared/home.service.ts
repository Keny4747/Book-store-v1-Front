import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book, BookPage } from 'src/app/admin/books/shared/book.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http:HttpClient
  ) { }

  getLastBooks():Observable<Book[]>{
    return this.http.get<Book[]>(`${environment.apiBase}/last-books`)
  }
  getBooks(page: number = 0, size: number = 6):Observable<BookPage> {
    let params = new HttpParams();
    params = params.append('size',size);
    params = params.append('page',page);
    params = params.append('sort','createdAt,desc');

    return this.http.get<BookPage>(`${environment.apiBase}/books`,{params})
  }
  getBook(slug: string) :Observable<Book>{
    return this.http.get<Book>(`${environment.apiBase}/books-api/${slug}`)
  }
}
