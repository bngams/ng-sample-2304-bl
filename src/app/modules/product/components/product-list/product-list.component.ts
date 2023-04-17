import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { PRODUCTS_MOCK } from '../../mocks/product.mock'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Array<Product> = PRODUCTS_MOCK;
}
