import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {


  constructor(public productsService:ProductsService) { }
  public products:Array<Product> = this.productsService.products;
  ngOnInit(): void {
  }

}
