import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  // dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ProductDashboardComponent },
  { path: 'details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
