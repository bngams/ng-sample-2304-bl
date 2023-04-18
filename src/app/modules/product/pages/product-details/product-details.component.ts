import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routeSnapshot: ActivatedRouteSnapshot ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => { params.get('id') }
    )

    // const id = parseInt(this.routeSnapshot.paramMap.get('id'));
  }

}
