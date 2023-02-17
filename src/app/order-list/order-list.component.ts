import { Component } from '@angular/core';
import { order} from '../order.model';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orders: order[] = [
    new order('ORD123','Y 81'),
    new order('ORD124', 'fortuner')
  ]
}

