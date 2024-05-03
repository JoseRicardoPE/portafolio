import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagina: InfoPaginaService,
              private route: Router) { }

  ngOnInit(): void {
  }

  searchProduct(textSearch: string) {
    // console.log(textSearch);
    //? sólo funciona si el usuario ingresa por lo menos una letra, de lo contrario no hará búsqueda
    if (textSearch.length < 1) return;
    this.route.navigate(['/search', textSearch]); 

  }
}
