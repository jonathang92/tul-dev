import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart: Array<Cart> = []
  
  constructor() { 
    this.initStorage();  
  }
  
  initStorage(){
    let data = localStorage.getItem('tulcar')
    if (data) {
      this.cart = JSON.parse(data);
    } else {
      this.setStorage();
    }
  }
  setStorage() {
    localStorage.setItem(
      'tulcar',
      JSON.stringify(this.cart)
    );
  }
  addToCart(product: Product,card_id:number, quantity:number){
    const i = this.cart.findIndex((el) => el.id === product.id);
    if (i != -1) {
      this.cart[i].quantity += quantity;
    } else {
      this.cart.push({ ...product,
        cart_id: card_id,
        quantity:quantity
      });
    }
    this.setStorage();
  }

  removeFromCart(id:number){
    const i = this.cart.findIndex((el) => el.id === id);
    this.cart.splice(i, 1);
    this.setStorage();
  }

  deleteCart(){
    this.cart = [];
    this.setStorage();
  }

  get itemsCount() {
    let count:number = 0;
    this.cart.forEach(element => {
      count += element.quantity;
    });
    return count;
  }
}
