import { Component, ViewChild } from '@angular/core';

import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent {
  poke = {
    name : '',
    height : 0,
    weight : 0,
    id: 0,
    images: {
      main: {
        male: '',
        maleShiny: '',
        female: '',
        femaleShiny: '',
      },
      secondary: {
        male: '',
        maleShiny: '',
        female: '',
        femaleShiny: '',
      }
    },
  };
  pokedex: any;
  id: number = 0;
  pokemon: any;
  title = 'poke-store';
  pokeTest: any;
  pokeIndex: number = 1;
  pokeImg: string = '';

  myPokedex: any = '';
  currentPokemon: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(){
    this.getPokemonByIndex();
    this.getAllPokedex();
  }

  enamorous(){
    this.pokemonService.getEnamorus().subscribe(
      enamorous => {
        this.myPokedex = JSON.stringify(enamorous);
      }
    )
  }

  pokeList(){
    for(let i = 1; i <= 5; i++){
      this.pokemonService.getPokemonGenericByIndex(i).subscribe(
        pokemon => {
          console.log(pokemon);
          this.poke.name = pokemon.name;
          this.poke.height = pokemon.height;
          this.poke.weight = pokemon.weight;
          this.poke.id = pokemon.id;
          this.poke.images.main.male = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';
          this.myPokedex += JSON.stringify(this.poke) + ',\n';
        }
      );
    }
    // this.myPokedex = JSON.stringify(this.myPokedex);
  }

  getPokemonByIndex(){
    this.pokemonService.getPokemonGenericByIndex(this.pokeIndex).subscribe(
      pokemon =>{
        this.pokemon = pokemon;
        this.pokeTest = JSON.stringify(pokemon);
        this.pokeImg = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pokemon.id + '.png';
        this.currentPokemon = pokemon.name;
        this.pokeTest = JSON.stringify(pokemon);
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
    console.log('woring...');
    this.enamorous();
  }
}
