import { Component } from '@angular/core';
import { Products } from './Classes/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Progetto';

  modifica = false;
  detailProdotto!: Products;

  open(item: Products) {
      this.modifica = true;
      this.detailProdotto = item;
    
  }
  close() {
    this.modifica = false;
  }
}
