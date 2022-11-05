import { Component, ViewChild } from '@angular/core';

import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent {
  pokemon: any;
  title = 'poke-store';
  pokeTest: any;
  pokeIndex: number = 1;
  pokeImg: string = '';

  pokedex: any;
  currentPokemon: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(){
    this.getPokemonByIndex();
    this.getAllPokedex();
  }

  getPokemonByIndex(){
    this.pokemonService.getPokemonGenericByIndex(this.pokeIndex).subscribe(
      pokemon =>{
        this.pokemon = pokemon;
        this.pokeTest = JSON.stringify(pokemon);
        this.pokeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';
        this.currentPokemon = pokemon.name;
      }
    )
    console.log('by index')
  }

  getPokemonByName(){
    this.pokemonService.getPokemonGenericByName(this.currentPokemon).subscribe(
      pokemon =>{
        this.pokemon = pokemon;
        this.pokeTest = JSON.stringify(pokemon);
        this.pokeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';
        this.pokeIndex = pokemon.id;
      }
    )
    console.log('by name')
  }

  getAllPokedex(){
    this.pokemonService.getPokedex().subscribe(
      pokedex => {
        this.pokedex = pokedex.results;
      }
    )
  }

  changePokemon(pokemon: string){
    this.currentPokemon = pokemon;
    this.refresh();
  }

  refresh(){
    this.pokeTest = this.currentPokemon;
    this.currentPokemon = this.pokemon.name;
  }
}
