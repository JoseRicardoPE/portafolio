import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infoPagina: InfoPaginaService,
              public productsService: ProductsService) 
  {

  }
}
