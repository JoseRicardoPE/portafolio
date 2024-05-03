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
  productFilter: Producto[] = [];

  constructor(private http: HttpClient) { 
    this.loadProducts();
  }

  private loadProducts() {

    return new Promise<Producto | void>((resolve, reject) => {
      this.http.get('https://angular-practica-portafolio-default-rtdb.firebaseio.com/productos_idx.json').subscribe((response: Producto[] | any) => {
        console.log(response);
        this.product = response;
        this.loaded = false;
        resolve();
        // setTimeout(() => {
        //   this.loaded = false;
        // },2000)
      });
    });
  }

  getProduct(id: string) {
    return this.http.get(`https://angular-practica-portafolio-default-rtdb.firebaseio.com/productos/${ id }.json`);
  }

  searchProduct(term: string) {
    if (this.product.length === 0) {
      // * cargar productos
      this.loadProducts().then( () => {
        // * ejecutar después de tener los productos
        // * aplicar el filtro
        this.filterProducts(term);
      });
    // * si ya están los datos cargados se aplica el filtro
    } else {
      // * aplicar el filtro
      this.filterProducts(term);
    }
  }

  private filterProducts(term: string) {
    console.log(this.product);

    // * Purgar el arreglo para cuando vuelva a llamar los productos filtrados
    this.productFilter = [];

    term = term.toLowerCase().replace(/[^\u0000-\u007E]/g, '');

    this.product.forEach(prod => {
      const titleLowerCase = prod.titulo.toLowerCase().replace(/[^\u0000-\u007E]/g, '');
      if (prod.categoria.indexOf(term) >= 0 || titleLowerCase.indexOf(term) >= 0) {
        this.productFilter.push(prod);
      }
    })
  }
}
