import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDescription } from 'src/app/interfaces/product-description';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product!: ProductDescription;
  id!: string;

  constructor(private route: ActivatedRoute,
      public productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // console.log(params['id']);
      this.productService.getProduct(params['id']).subscribe((product: ProductDescription) => {
        this.id = params['id'];
        this.product = product;
        console.log(product);
      });

    });
  }

}
