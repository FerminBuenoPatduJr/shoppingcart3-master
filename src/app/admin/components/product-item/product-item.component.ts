import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product | undefined
  @Output() deleteActionEmitter = new EventEmitter()
  @Output() editActionEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.deleteActionEmitter.emit(this.product)
  }

  edit(){
    this.editActionEmitter.emit(this.product)
  }
}
