import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from '../Classes/products';
import { ServizioService } from '../Services/servizio.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() openModify = new EventEmitter();

  lista: Products[] = [];

  constructor(private servizioService: ServizioService) { }

  ngOnInit(): void {
    this.lista = this.servizioService.getProductList();
  }
  removeProduct(item: Products) {
    this.servizioService.removeProduct(item);
  }
  modifyProduct(item: Products) {
     this.openModify.emit(item);
  
    
  }

}
