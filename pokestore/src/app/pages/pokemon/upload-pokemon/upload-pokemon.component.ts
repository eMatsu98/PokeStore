import { Component, OnInit } from '@angular/core';

import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-upload-pokemon',
  templateUrl: './upload-pokemon.component.html',
  styleUrls: ['./upload-pokemon.component.scss']
})
export class UploadPokemonComponent implements OnInit {

  myCurrent: any;
  myPokemon: any = {id: 0};
  wantedCurrent: any;
  wantedPokemon: any = {id: 0};

  class: any;

  pokedex: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokedex();
  }

  getMyPokemonByIndex(){
    this.pokemonService.getPokemonGenericByIndex(this.myPokemon.id).subscribe(
      pokemon=>{
        this.myPokemon = {
          name : pokemon.name,
          img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png',
          id : pokemon.id,
        }
        this.myCurrent = this.myPokemon.name;
      }
    );
  }

  getMyPokemonByName(){
    this.pokemonService.getPokemonGenericByName(this.myCurrent).subscribe(
      pokemon=>{
        console.log(pokemon.id);
        console.log(pokemon.name);
        this.myPokemon = {
          name : pokemon.name,
          img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png',
          id : pokemon.id,
        }
      }
    );
  }

  getWantedPokemonByIndex(){
    this.pokemonService.getPokemonGenericByIndex(this.wantedPokemon.id).subscribe(
      pokemon=>{
        this.wantedPokemon = {
          name : pokemon.name,
          img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png',
          id : pokemon.id,
        }
        this.wantedCurrent = this.wantedPokemon.name;
      }
    );
  }

  getWantedPokemonByName(){
    this.pokemonService.getPokemonGenericByName(this.wantedCurrent).subscribe(
      pokemon=>{
        console.log(pokemon.id);
        console.log(pokemon.name);
        this.wantedPokemon = {
          name : pokemon.name,
          img : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png',
          id : pokemon.id,
        }
      }
    );
  }

  getAllPokedex(){
    this.pokemonService.getPokedex().subscribe(
      pokedex => {
        this.pokedex = pokedex.results;
        this.pokedex = this.pokedex.sort(function(a:any, b:any) {
          let pokeA = a.name.toUpperCase();
          let pokeB = b.name.toUpperCase();
          if(pokeA < pokeB) return -1;
          if(pokeA > pokeB) return 1;
          return 0;
        });
        console.log(this.pokedex);
      }
    )
  }

  selectPokemon(){
    if(!this.myPokemon.id){
      console.log('left');
    }
    if(!this.wantedPokemon.id){
      console.log('right');
    }
    console.log(this.myPokemon.id + " -> " + this.wantedPokemon.id);
  }

}
