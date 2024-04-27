import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any;
  loaded = false;

  constructor( private http: HttpClient ) { 

    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json').subscribe( (response: any) => {
      this.loaded = true;
      this.info = response;
      console.log(response);
    });
  }

}
