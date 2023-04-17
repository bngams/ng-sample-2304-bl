import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /**
   * Products in carts
   * /!\ encapsulation
   */
  products: Product[] = [];

  /**
   * Products in carts wwith new Signal API
   */
  // productsSignal: Product[] = signal([]);

  /**
   * Products in carts with RxJS ****
   * $ suffix => async / Observable
   */
  productsSubject$ = new BehaviorSubject<Product[]>([]);

  get productsLength() {
    return this.products.length;
  }
}
