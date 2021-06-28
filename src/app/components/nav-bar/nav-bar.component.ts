import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(public cartService: CartService) {}
  get cartCount() {
    return this.cartService.itemsCount;
  }
  ngOnInit(): void {
  }

}
