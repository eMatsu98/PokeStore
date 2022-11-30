import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as socketIo from 'socket.io-client'
import { environment } from 'src/environments/environment';

import { AuthService } from 'src/app/shared/services/auth.service';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Parametros', params);
      this.user = params['user'];
    });
    this.socketClient = socketIo.io(environment.apiUrl);

    this.id = '' + sessionStorage.getItem('id');

    this.auth.getUsers().subscribe(
      users => {
        this.usr = users.find((usr:any) => usr.id === this.id);
        if(users.find((usr:any) => usr.id === this.id)) console.log('true');
      }
    );
  }

  profilePicture(){
    this.text = localStorage.getItem('poke-name');
  }

}