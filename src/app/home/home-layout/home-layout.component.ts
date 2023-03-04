import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html'
})
export class HomeLayoutComponent implements OnInit {

  constructor(
    private cartService :CartService
  ) { }

  ngOnInit(): void {
  }

  get cartItems(){
    return this.cartService.items;
  }
}
