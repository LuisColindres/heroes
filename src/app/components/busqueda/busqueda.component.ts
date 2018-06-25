import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute ) { 
    
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe( this.termino );
    }) 
    
    
  }

  verHeroe( idx: number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
