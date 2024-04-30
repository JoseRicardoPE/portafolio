import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product: Producto[] = [];
  loaded = true;

  constructor(private http: HttpClient) { 
    this.loadProducts();
  }

  private loadProducts() {
    this.http.get('https://angular-practica-portafolio-default-rtdb.firebaseio.com/productos_idx.json').subscribe((response: any) => {
      console.log(response);
      this.product = response;

      setTimeout(() => {
        this.loaded = false;
      },1000)
    });
  }
}
