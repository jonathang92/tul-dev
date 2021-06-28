import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import database from 'firebase'

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  public products: Array<Product> = [
    // { id: 1, name: "Product 1", sku: "TUL DFJ1230", description:"Similique quaerat itaque vitae animi expedita eveniet. Non qui amet quia. Quaerat quisquam maxime iusto et porro consequatur." },
    // { id: 2, name: "Product 2", sku: "TUL FJT1023", description:"Similique quaerat itaque vitae animi expedita eveniet. Non qui amet quia. Quaerat quisquam maxime iusto et porro consequatur." },
    // { id: 3, name: "Product 3", sku: "TUL HKY5061", description:"Similique quaerat itaque vitae animi expedita eveniet. Non qui amet quia. Quaerat quisquam maxime iusto et porro consequatur." },
    // { id: 4, name: "Product 4", sku: "TUL CKF6932", description:"Similique quaerat itaque vitae animi expedita eveniet. Non qui amet quia. Quaerat quisquam maxime iusto et porro consequatur." },
    // { id: 5, name: "Product 5", sku: "TUL GYLT034", description:"Similique quaerat itaque vitae animi expedita eveniet. Non qui amet quia. Quaerat quisquam maxime iusto et porro consequatur." },
    // { id: 6, name: "Product 6", sku: "TUL YOT1235", description:"Similique quaerat itaque vitae animi expedita eveniet. Non qui amet quia. Quaerat quisquam maxime iusto et porro consequatur." },
  ];
  public testProduct:any;
  constructor(private db:AngularFireDatabase) { 
    this.db.list('products').valueChanges().subscribe(data=> this.products = data as Array<Product>);
  }

}
