import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Product } from 'src/app/admin/models/product';
import { Order } from '../models/order';
import { Pending } from '../models/pending';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  productsurl = "http://localhost:3000/products";
  cartsurl = "http://localhost:3000/carts";

  products: Products[] = [];
  public cartItemList : any =[];
  public productList = new BehaviorSubject<any>([]);
  public checkOutList : any =[];
  public pendingOrdersList : any =[];
  public search = new BehaviorSubject<string>("");
  
  constructor(private http: HttpClient) { }

  getProductItem(): Observable<Products[]> {
  return this.http.get<Products[]>(this.productsurl);
  }

  //-------------------for checkout--------------------------
  // getCheckOutData(){
  //   return this.http.get("http://localhost:3000/checkouts/1")
  // }
  
  // getPendingOrder(){
  //   return this.http.get("http://localhost:3000/pendingOrders/1")
  // }
  
  // placeOrder(order : Order[]){
    
  //   return this.http.put ("http://localhost:3000/pendingOrders/1", {pendingOrders : order })
  // }
  
  // deleteCheckout(){
  //   return this.http.put("http://localhost:3000/checkouts/1", {checkouts : []})
  // }

  // NICA'S CHECKOUT
  getcartItem(){
    return this.cartItemList;
  }

  checkOut(cartItemList : Order[]){
    this.checkOutList.push(cartItemList);
    // this.cartItemList.next(this.checkOutList);
    console.log(this.checkOutList)
  }

  removeCheckOutItem(product: any){
    this.checkOutList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.checkOutList.splice(index,1);
      }
    })
    this.cartItemList.next(this.checkOutList);
  }
  //-------------for Cart---------------------

  getCartData(){
    return this.http.get("http://localhost:3000/carts/1")
  }

  // getCheckOut(){
  //   return this.http.get("http://localhost:3000/checkouts/1")
  // }

  // checkout(order : Order[]){
  //   return this.http.put("http://localhost:3000/checkouts/1", {checkouts : order})
  // }

  // deleteCart(){
  //   return this.http.put("http://localhost:3000/carts/1",{carts:[]})
  // }

  
  // NICA'S ADD TO CART

  //getter
  getProducts(){
    return this.productList.asObservable();
  }

  //setter
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }


  addtoCart(product : any){
    // this.cartItemList.push(product);
    // this.productList.next(this.cartItemList);
    // this.getTotalPrice();
    // console.log(this.cartItemList)
    // return this.http.put(`${this.cartsurl}/${product.id}`, product);
    return this.http.put(`${this.cartsurl}/${1}`, { carts : product});
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  //FOR PENDING ORDERS
getcheckOutItems() {
  return this.checkOutList;
}

pendingOrders(checkOutList : Pending[]){
  this.pendingOrdersList.push(checkOutList);
  console.log(this.pendingOrdersList);
}

}




