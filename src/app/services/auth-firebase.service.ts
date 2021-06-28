import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Router} from "@angular/router"
import { CartService } from './cart.service';
@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  
  // public userLogged = false;

  constructor(
    private afa: AngularFireAuth,
    private router: Router,
    public cartService:CartService,
  ) {
    // this.afa.user.subscribe(user => this.userLogged = true);
  }

  mailLogin(mail:string, password:string){
    this.afa.signInWithEmailAndPassword(mail, password)
    .then(r=> {console.log(r); this.router.navigate(['/'])})
    .catch(e => console.log(e));
  }
  register(mail:string, password:string){
    this.afa.createUserWithEmailAndPassword(mail,password)
    .then(r=> {console.log(r); this.router.navigate(['/'])})
    .catch(e => console.log(e));
  }
  logout(){
    this.afa.signOut();
    this.cartService.deleteCart();
  }

}
