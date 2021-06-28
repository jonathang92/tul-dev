import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public emailLogin:string ='';
  public emailRegister:string ='';
  public passwordLogin:string ='';
  public passwordRegister:string ='';

  constructor(private fireAuth:AuthFirebaseService) { }
  login(){
    this.fireAuth.mailLogin(this.emailLogin,this.passwordLogin);
    return false;
  }
  register(){
    this.fireAuth.register(this.emailRegister,this.passwordRegister);
    return false;
  }
  ngOnInit(): void {
  }

}
