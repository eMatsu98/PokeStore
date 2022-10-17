import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { PokemonGeneric } from 'src/app/shared/interfaces/pokemon-generic'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private genericPokemon: PokemonGeneric = {
    name: "",
    height: 0,
    weight: 0,
    id: 0,
    base_experience: 0,
  };

  pokeUrl: string = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  getPokemonGeneric(pokeId: number): PokemonGeneric {
    const url = this.pokeUrl + 'pokemon/' + pokeId;
    (this.http.get<any>(url).subscribe(pokemon =>{
      this.genericPokemon = this.constructPokemon(pokemon, this.genericPokemon);
      this.genericPokemon = pokemon;
    }));
    return this.genericPokemon;
  }

  constructPokemon(p: any, gp: PokemonGeneric): PokemonGeneric{
    gp.name = p.forms[0].name;
    gp.height = p.height;
    gp.weight = p.weight;
    gp.id = p.id;
    gp.base_experience = p.base_experience;
    return gp;
  }
}
