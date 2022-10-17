import { Component } from '@angular/core';

import { PokemonService } from 'src/app/shared/service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pokemon: any;
  title = 'poke-store';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(){
    this.getPokemonByIndex();
  }

  getTitle(){
    return this.title;
  }

  getPokemonByIndex(){
    const pokemon = this.pokemonService.getPokemonGeneric();
    console.log(pokemon);
    return JSON.stringify(pokemon);
  }
}
