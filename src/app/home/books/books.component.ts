import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/home.service';
import { Book, BookPage } from 'src/app/admin/books/shared/book.model';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {

  bookPage?:BookPage;

  constructor(
    private homeService:HomeService,
    private cartService:CartService
  ) { }

  ngOnInit(): void {
    this.homeService.getBooks()
    .subscribe(bookPage=>{
      this.bookPage=bookPage;
    })
  }

  addBookToCart(book:Book){
    this.cartService.addItem(book);
  }

  removeBookFromCart(book:Book){
    this.cartService.removeItem(book);
  }

  bookExistInCart(book:Book):boolean{
    return this.cartService.itemAlreadyExists(book);
  }
}
