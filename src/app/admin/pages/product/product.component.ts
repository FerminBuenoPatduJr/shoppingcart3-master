import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { AdminService } from '../../services/admin.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private adminService : AdminService, private router : Router) { }
  public products : Product[] = []
  ngOnInit(): void {
    this.adminService.getProducts().subscribe((data) => {
      this.products = data
      console.log(this.products) 
    })
    
    
  }
  add(){
    this.adminService.addFlag = true
    this.adminService.editFlag = false
    this.router.navigate(["admin/form"])
  }

  delete(product : Product){
    let res1 = this.adminService.delete(product)
    let res2 = this.adminService.getProducts()
    forkJoin([res1,res2]).subscribe( data => this.products = data[1])

  }

  edit(product : Product){
    this.adminService.editProductForm(product.id, this.products)
    this.adminService.editFlag = true;
    this.adminService.addFlag = false;
    this.router.navigate(['admin/form'])
    console.log(product.id)
  }

  deleteAll(){
    for(let product of this.products){
      this.delete(product)
    }
  }
  
}
