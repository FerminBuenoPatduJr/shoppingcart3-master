import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm : FormGroup
  editedProduct : Product[] | undefined
  editedProduct2 : Product | undefined
  constructor(private fb : FormBuilder, private adminService : AdminService, private router : Router) { 
    this.editedProduct = this.adminService.editedProduct
    
    if(this.editedProduct != undefined){
      this.productForm = this.fb.group({
          id : this.editedProduct[0].id,
          name : this.editedProduct[0].name,
          brand : this.editedProduct[0].brand,
          gender: this.editedProduct[0].gender,
          category: this.editedProduct[0].category,
          price: this.editedProduct[0].price,
          is_in_inventory: this.editedProduct[0].is_in_inventory,
          items_left: this.editedProduct[0].items_left,
          imageURL : this.editedProduct[0].imageURL
        })
      
   
    }else{
       this.productForm = this.fb.group({
      name : [''],
      brand : [''],
      gender: [''],
      category: [''],
      price: [],
      is_in_inventory: [true],
      items_left: [],
      imageURL : ['']
    })
  
     
     

    }
  }
   
    ngOnInit(): void {
    }
  
    submit(){
      const newProduct = this.productForm.value as Product
      if(this.adminService.addFlag && !this.adminService.editFlag){
        this.adminService.addProducts(newProduct).subscribe()
      }else if(!this.adminService.addFlag && this.adminService.editFlag){
        this.adminService.edit(newProduct).subscribe()
       
      }
      this.productForm.reset()
      this.router.navigate(["admin/product"])
      
    }



  }

  



