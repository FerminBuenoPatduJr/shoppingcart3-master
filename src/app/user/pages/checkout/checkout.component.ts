import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, EMPTY, forkJoin, switchMap } from 'rxjs';
import { CoreUserService } from 'src/app/core/services/core-user.service';
import { Order } from '../../models/order';
import { Products } from '../../models/products';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  // checkoutData : any
  // currentPendingData : any
  // public checkoutOrder : Order[] = []
  // public itemTotalPrice : number = 0
  // placeOrderData : any = []
  // currentPendingOrders : any
 // newPendingOrders : Order[] =[]

  public cartOrders : Order[] = [];
  public grandTotal: number = 0;

  constructor(private userService : UserService, private router : Router, private coreUser : CoreUserService) { }

  ngOnInit(): void {
    
    // this.userService.getCheckOutData().subscribe(data => {
    //   this.checkoutData = data
    //   this.checkoutOrder = this.checkoutData.checkouts
    //   console.log(this.checkoutOrder)
     
      
    //   for(let item of this.checkoutOrder){
    //     this.itemTotalPrice += item.price*item.quantity
    //     console.log(this.itemTotalPrice)
    //   }
    // },
    // ) 
    this.cartOrders = this.userService.getcartItem();
    this.grandTotal = this.userService.getTotalPrice();
  }

  // placeOrder(){
  //   let res1 = this.userService.getCheckOutData()
  //   let res2 = this.userService.getPendingOrder()
  //   forkJoin([res1, res2]).pipe(
  //     switchMap((data) =>{
  //       let newPendingOrders :any
  //       this.checkoutData = data[0]
  //           this.checkoutOrder = this.checkoutData.checkouts
  //           this.currentPendingData = data[1]
  //           this.currentPendingOrders = this.currentPendingData.pendingOrders
  //           console.log(this.currentPendingOrders)   
  //           console.log(this.checkoutOrder)
  //           if(this.currentPendingOrders.length !== 0){
  //             newPendingOrders = this.currentPendingOrders
  //               this.checkoutOrder.forEach((order) => {
  //                 newPendingOrders.push(order)
  //               })
  //             }else{
  //               newPendingOrders = this.checkoutOrder
  //             }
             
  //           console.log(newPendingOrders)
  //       return this.userService.placeOrder(newPendingOrders)
  //     }),
  //     switchMap((data : any) =>{
  //       console.log(data)
  //       return this.userService.deleteCheckout()
  //     }),
  //     switchMap((data) => {
  //       return EMPTY
  //     }),
  //     catchError((err) => {
  //       if(err.status === 404){
  //        console.log(err.status)
  //       }
  //       return EMPTY
  //     })
  //   ).subscribe()
  //   this.router.navigate(["user/pending-orders"])
  // }

  pendingOrders(checkOutList : Order[]){
    this.userService.pendingOrders(checkOutList);
    this.router.navigate(["user/pending-orders"])
  }

}