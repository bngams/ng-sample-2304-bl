import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/modules/product/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // use observer / subjet to update products
  // products!: Product[];

  constructor(
    readonly cartService: CartService,
    readonly authService: AuthService
  ) { }

  ngOnInit() {
    // use observer / subjet to update products
    // this.cartService.productsSubject$.subscribe(observer)
  }

  getProductsLength(): number {
    return this.cartService.products.length;
  }

  get productsLength() {
    return this.cartService.products.length;
  }

  fakeLogin() {
    // const credentials = {email: '', pwd: ''} as Credentials; 
    this.authService.login({email: '', pwd: ''});
  }

  fakeLogout() {
    this.authService.logout();
  }

}
