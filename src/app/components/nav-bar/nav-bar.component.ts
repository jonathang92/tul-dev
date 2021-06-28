import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  constructor(public cartService: CartService, public afa: AngularFireAuth, private fireAuth:AuthFirebaseService) {}
  get cartCount() {
    return this.cartService.itemsCount;
  }
  logout(){
    this.fireAuth.logout();
  }
  ngOnInit(): void {
  }

}
