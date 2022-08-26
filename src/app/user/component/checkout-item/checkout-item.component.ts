import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { Products } from '../../models/products';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent implements OnInit {
  @Input() checkout : Order | undefined
  
  constructor() { }

  ngOnInit(): void {
  }
  
}

