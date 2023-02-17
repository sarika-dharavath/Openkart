import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products:Product[]=[
   
  new Product(
    'Y 81',
    'best features',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6DttcZ-mj9rJfqIuISXL0LOu-PE0VATpvbw&usqp=CAU',
    5000.00,
    'vivo'
    ),
    new Product(
      'fortuner',
      'best model',
      'https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg',
      4000000.00,
      'toyota'
    )
    ] 

  

}
