import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  editedProduct : Product[] | undefined
  editFlag : boolean = false
  addFlag : boolean = false
  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:3000/products")
  }


  addProducts(product : Product){
    return this.http.post("http://localhost:3000/products", product)
  }

  delete(product: Product){
    return this.http.delete(`http://localhost:3000/products/${product.id}`)
  }

  edit(product : Product){
    return this.http.put(`http://localhost:3000/products/${product.id}`, product)
    
  }
  editProductForm(id:number, products : Product[]){
    this.editedProduct = products.filter((product : Product) =>{
      if(product.id == id){
        return product
      }

    })
    return this.editedProduct
}
}
