import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS_MOCK } from '../../mocks/product.mock'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()
  productsFromParent!: Product[];

  products: Array<Product> = PRODUCTS_MOCK;

  addProduct(product: Product): void {
    this.products.push(product);
  }
}
