import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(public cartService:CartService) { }

  deleteCart(){
    this.cartService.deleteCart();
  }
  get cart():Array<Cart> {
    return this.cartService.cart;
  }
  ngOnInit(): void {}

}
