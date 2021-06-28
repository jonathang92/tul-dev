import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './views/cart/cart.component';
import { LoginComponent } from './views/login/login.component';
import { ProductListComponent } from './views/product-list/product-list.component';

const routes: Routes = [
{path: '', component: ProductListComponent},
{path: 'cart', component: CartComponent},
{path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
