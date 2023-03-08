import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/admin/books/shared/book.model';
import { HomeService } from '../shared/home.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html'
})
export class BookDetailComponent implements OnInit {

  book?:Book;

  constructor(
    private homeService:HomeService,
    private activateRoute:ActivatedRoute,
    private cartService:CartService
  ){}
  ngOnInit(): void {
    const slug = this.activateRoute.snapshot.paramMap.get('slug')!;

    this.homeService.getBook(slug)
    .subscribe(book=> {
      this.book = book;
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
