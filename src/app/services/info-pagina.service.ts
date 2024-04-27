import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;

  constructor( private http: HttpClient ) { 

    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json').subscribe( (response: InfoPagina) => {
      this.loaded = true;
      this.info = response;
      console.log(response.email);
    });
  }

}
