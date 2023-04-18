import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS_MOCK } from '../../mocks/product.mock'
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  productsFromParent!: Product[];

  products: Array<Product> = PRODUCTS_MOCK;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(
      res => this.products = res.products
    )
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
