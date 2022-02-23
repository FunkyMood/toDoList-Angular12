import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from '../Classes/products';



@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  @Input() product!: Products
  @Output() closeEmit = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
 
  }

  close() {
    this.closeEmit.emit();
  }

}
