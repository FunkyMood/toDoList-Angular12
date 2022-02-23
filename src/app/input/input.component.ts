import { Component, OnInit } from '@angular/core';
import { Products } from '../Classes/products';
import { ServizioService } from '../Services/servizio.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  product: Products = new Products;

  constructor(private servizioService: ServizioService) { }

  ngOnInit(): void {
  }

  addProduct() {
    this.servizioService.addProduct(this.product);
    this.product = new Products;
  }

}
