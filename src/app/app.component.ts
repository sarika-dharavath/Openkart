import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'openkart';
  selectLink: string = 'home';
  selectedProduct: Product;


  onClick(){
    this.title='Flipkar';
  }
}
