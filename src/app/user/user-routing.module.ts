import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes : Routes = [
  {
    path: "",
    component: DashboardComponent,
    
  },
  {
    path: "cart",
    component: CartComponent,
    
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    
  },
  {
    path: "pending-orders",
    component: PendingOrdersComponent,
    
  },
  {
    path: "profile",
    component: ProfileComponent,
    
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
