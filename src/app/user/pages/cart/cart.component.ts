import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, forkJoin, switchMap } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { Order } from '../../models/order';
import { Products } from '../../models/products';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  //EJ Variables
  cartData : any
  cartOrder: Order[] = []
  currentCheckOutData : any
  currentCheckOutOrders : any

  //Nica Variables
  public product: Products[] = [];
  public grandTotal: number = 0;

  constructor(private userService : UserService, private router : Router,
    private sharedService : SharedService) { }

  ngOnInit(): void {
    this.sharedService.hide();
    

    //TO SUBSCRIBE TO PRODUCT GETTER
    this.userService.getProducts()
    .subscribe(res => {
      this.product = res;
      this.grandTotal = this.userService.getTotalPrice();
    });


    // this.userService.getCartData().subscribe((data) =>{
    //   this.cartData = data
    //   this.cartOrder = this.cartData.carts
    //   console.log(this.cartOrder)
    // })

  }//closing brace for ngOnInit


  //TO REMOVE ALL ITEMS ON CART
  emptycart(){
    this.userService.removeAllCart();
  }

  //TO REMOVE ONE ITEM ON CART
  executeDeleteOrder(item : any) {
    this.userService.removeCartItem(item);
  }

  //EJ's CHECKOUT FUNCTION
  // checkout(){
  //   let res1 = this.userService.getCartData()
  //   let res2 = this.userService.getCheckOut()
  //   forkJoin([res1, res2]).pipe(
  //     switchMap((data) =>{
  //       let newCheckouts : any
  //       this.cartData = data[0]
  //       this.cartOrder = this.cartData.carts
  //       this.currentCheckOutData = data[1]
  //       this.currentCheckOutOrders = this.currentCheckOutData.checkouts
  //       console.log(this.currentCheckOutOrders)
  //       console.log(this.cartOrder)
  //       if(this.currentCheckOutOrders.length !== 0){
  //         newCheckouts = this.currentCheckOutOrders
  //         this.cartOrder.forEach((order) =>{
  //           newCheckouts.push(order)
  //         })
          
  //       }else{
  //         newCheckouts = this.cartOrder
  //         console.log(newCheckouts)
  //       }
  //      return this.userService.checkout(newCheckouts)
  //     }),
  //     switchMap((data: any) =>{
  //       return this.userService.deleteCart()
  //     }),
  //     switchMap((data) =>{
  //       return EMPTY
  //     })
  //   ).subscribe()

  //   this.router.navigate(["user/checkout"])
  // }

  //Nica's CHECKOUT FUNCTION

  checkout(cartorder : Order[]) {
    this.userService.checkOut(cartorder);
    this.router.navigate(["user/checkout"])
  }

}
