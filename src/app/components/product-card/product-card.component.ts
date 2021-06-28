import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass']
})
export class ProductCardComponent implements OnInit {
  @Input () cart: Boolean = false;
  @Input () product:Product = {
    id: 0,
    name: "",
    sku: "",
    description: "",
  };

  quantity : number = 0;

  constructor(public cartService: CartService) { }

  add(){
    // this.mainService.addToCard();
    if (this.quantity < 99) {
      this.quantity++;
      if (this.cart) {
        this.saveToCart(1);
      }
    }
  }
  substract(){
    if (this.quantity > 1) {
      this.quantity--;
      if (this.cart) {
        this.saveToCart(-1);
      }
    }
  }
  saveToCart(quantity:number = 0){
    if (quantity != 0) {
      this.cartService.addToCart(this.product, 1, quantity);
    } else {
      this.cartService.addToCart(this.product, 1, this.quantity);
      this.quantity = 1;
    }
  }
  adjustLimits(){
    if (this.quantity < 1) {
      this.quantity = 1;
    } else if (this.quantity > 99){
      this.quantity = 99;
    }
  }
  deleteFromCart(){
    this.cartService.removeFromCart(this.product.id);
  }
  ngOnInit(): void {
    this.quantity = (this.product.quantity) ? this.product.quantity : 1;
  }
}
