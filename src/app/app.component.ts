import { Component, ViewChild } from '@angular/core';

import { PokemonService } from 'src/app/shared/service/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pokemon: any;
  title = 'poke-store';
  pokemonString: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void{
    // this.getPokemonByIndex(0);
  }

  getTitle(){
    return this.title;
  }

  getPokemonByIndex(pokeId: number){
    this.pokemon = this.pokemonService.getPokemonGeneric(pokeId);
    console.log('THIS POKEMON: ' ,this.pokemon.name);
  }
  
  doOnChange(pokeInput: any){
    this.getPokemonByIndex(pokeInput.value);
    this.pokemonString = JSON.stringify(this.pokemon);
  }
}
