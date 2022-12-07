import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as socketIo from 'socket.io-client'
import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/shared/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from 'src/app/components/dialog-content/dialog-content.component';
import { PokemonService } from 'src/app/shared/services/pokemon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  socketClient: any;
shared() {
this.socketClient.emit('share',{
  name:'profile'
})
}
  id: string = '';
  usr:any;
  text: any = '';
  user: string = '';

  pokemon: any;
  pk: any;

  myPokemon: any = {  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    public dialog: MatDialog,
    private route: Router,
    private pokemonService: PokemonService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Parametros', params);
      this.user = params['user'];
    });
    this.socketClient = socketIo.io(environment.apiUrl);

    this.id = '' + sessionStorage.getItem('id');
    // this.activatedRoute.queryParams.subscribe(params => {
    //     console.log('aaaaaaaaaaaaaaaaaaaaaaaaa' + params);
    //     this.id = '' + params['id'];
    //   }
    // );

    this.auth.getUsers().subscribe(
      users => {
        this.usr = users.find((usr:any) => usr.id === this.id);
        if(users.find((usr:any) => usr.id === this.id)) console.log('true');
      }
      
    );
    console.log(this.usr);
    this.getMyPokemon();

  }

  profilePicture(){
    this.text = localStorage.getItem('poke-name');
  }

  openDialog(){
    const dialogRef = this.dialog.open(DialogContentComponent, {
    });

    dialogRef.afterClosed().subscribe(
      result => console.log('Dialog Result', result)
    );
  }

  getMyPokemon(){
    this.usr.pokemon.forEach((currPokemon: any, i:number) => {
      console.log(currPokemon);
      currPokemon.forEach((pkmn: number, j:number) => {
        console.log("i: " + i + " j: " + j);
        console.log('this.pokemonService.getPokemonGenericByIndex('+pkmn+').subscribe');
        this.pokemonService.getPokemonGenericByIndex(pkmn).subscribe(
          pokemon => {
            this.myPokemon[i][j] = {
              name: pokemon.name,
              img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + pkmn + '.png',
            }
          }
        )
      });
    });
  }

  getOnePokemon(){
    this.pokemonService.getPokemonGenericByIndex(5).subscribe(
      pokemon => {
        this.myPokemon = {
          name: pokemon.name,
          img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + 5 + '.png',
        }
      }
    )
  }

    print(){
      console.log(this.usr);
      this.getMyPokemon();
      console.log(this.myPokemon);
    }

}