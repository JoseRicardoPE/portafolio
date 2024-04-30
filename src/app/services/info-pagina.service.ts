import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  loaded = false;
  team: any[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarInfo();
    this.loadTeam();
  }
  
  private cargarInfo() {
    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json').subscribe( (response: InfoPagina) => {
      this.loaded = true;
      this.info = response;
      console.log(response.email);
    });
  }

  private loadTeam() {
    this.http.get('https://angular-practica-portafolio-default-rtdb.firebaseio.com/equipo.json').subscribe((response: any) => {
      this.team = response;
      console.log(response);
    })
  }

}
