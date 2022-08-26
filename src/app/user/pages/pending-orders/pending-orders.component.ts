import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Pending } from '../../models/pending';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.scss']
})
export class PendingOrdersComponent implements OnInit {
  public checkoutOrders : Pending[] = [];
  public grandTotal: number = 0;
  
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.checkoutOrders = this.userService.getcheckOutItems();
    this.grandTotal = this.userService.getTotalPrice();
  }

}
