import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { PokemonGeneric } from 'src/app/shared/interfaces/pokemon-generic'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private genericPokemon: PokemonGeneric = {
    forms: [{
      name: "no name",
      url: "no url"
    }]
  };

  pokeIndex: number = 1;
  pokeUrl: string = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokemonGeneric(): Observable<any> {
    const url = this.pokeUrl + 'pokemon/' + this.pokeIndex;
    const pokemon = this.http.get(url);
    console.log('first' + JSON.stringify(pokemon));
    return pokemon;
  }
}
