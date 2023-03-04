import { Injectable } from '@angular/core';
import { Book } from 'src/app/admin/books/shared/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private key='storebook_cart0223';
  private _items:Book[]=[];
  constructor() {
    const itemsString =localStorage.getItem(this.key);

    this._items = itemsString?JSON.parse(itemsString):[];
  }

  get items() {//este tipo de declaracion permite que el cliente no sepa que esta llamando a una funcion sino a una propiedad
    return this._items;
  }

  addItem(book: Book) {
    this._items.push(book);
    this.saveInLocalStorage();
  }
  removeItem(book: Book) {
    this._items = this._items.filter(i=>i.id!=book.id);
    this.saveInLocalStorage();
  }
  clear() {
    this._items=[];
    this.saveInLocalStorage();
  }
  itemAlreadyExists(book: Book):boolean {
    return this._items.findIndex(i => i.id == book.id)>=0;

  }

  saveInLocalStorage(){
    //almacenamiento del navegador con la clave y valor(el cual tiene que ser una cadena)
    localStorage.setItem(this.key,JSON.stringify(this._items));
  }
}
