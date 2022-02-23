import { Injectable } from '@angular/core';
import { Products } from '../Classes/products';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  private productList: Products[] = [];

  constructor() { }

  getProductList() {
    return this.productList;
  }

  addProduct(product: Products) {
    this.productList.push(product);
  }

  removeProduct(product: Products) {
   
    this.productList.splice(this.productList.indexOf(product), 1);
    
  }




}
