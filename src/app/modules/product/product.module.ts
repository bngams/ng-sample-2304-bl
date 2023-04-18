import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';


@NgModule({
  declarations: [
    ProductDashboardComponent,
    ProductListComponent,
    ProductFormComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
