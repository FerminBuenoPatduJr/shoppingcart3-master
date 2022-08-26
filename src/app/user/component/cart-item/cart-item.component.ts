import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../../models/order';
import { Products } from '../../models/products';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartorder : Products | undefined;
  @Output() deleteorderEmitter = new EventEmitter<Products>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteOrder() {
    this.deleteorderEmitter.emit(this.cartorder);
  }
}