import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService,
    private router: Router, 
    private socialAuthService: SocialAuthService, 
    private auth: AuthService
    ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      const obj = {
        name : user.name, 
        email : user.email, 
        id : user.id, 
        photoUrl : user.photoUrl
      };
      this.newUser(obj);
    });
  }

  newUser(user:any){
    console.log('newUser');
    this.auth.createUser(user).subscribe(
      res =>{
        console.log('res: ');
        console.log(res);
      }
    )
  }
}