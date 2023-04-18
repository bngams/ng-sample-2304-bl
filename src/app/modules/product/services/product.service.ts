import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllAny(): Observable<any> {
    // return this.http.get(environment.apiBaseUrl + '/products');
    return this.http.get(`${environment.apiBaseUrl}/products`);
  }

  getAll(): Observable<ProductAPIResponse> {
    return this.http.get<ProductAPIResponse>(`${environment.apiBaseUrl}/products`);
  }

  getTopProducts(): Observable<Product[]> {
    // we can let any here => it's temporary
    // return this.http.get<any>(`${environment.apiBaseUrl}/products`);
    
    // like any
    // return this.http.get(`${environment.apiBaseUrl}/products`);

    // pipe, map, etc.. => API RxJS => https://rxjs.dev/api
    return this.http.get<ProductAPIResponse>(`${environment.apiBaseUrl}/products`).pipe(
      map(res => res.products)
    );
  }

}


// should be in another files
interface APIResponse {
  total: number;
  skip: number;
  limit: number;
}

interface ProductAPIResponse extends APIResponse {
  products: Product[];
}
