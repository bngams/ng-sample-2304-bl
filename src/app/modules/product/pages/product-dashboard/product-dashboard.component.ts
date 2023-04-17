import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(ProductListComponent)
  productListComponent!: ProductListComponent;

  products: Product[] = new Array<Product>();

  // only DI
  constructor() {
  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    console.log('OnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.initProducts();
  }

  initProducts(): void {
    this.productListComponent.products = [];
  }


  // EventEmitter<Product>
  addProductToList(product: Product): void {
    this.products.push(product);
    this.productListComponent.addProduct(product);
    // this.productListComponent.products.push(); // /!\ encapsulation object
  }
}
