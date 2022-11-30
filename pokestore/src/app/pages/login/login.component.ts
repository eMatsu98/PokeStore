import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService,
    private router: Router, 
    private socialAuthService: SocialAuthService, 
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
    ) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      const obj = {
        name : user.name, 
        email : user.email, 
        id : user.id, 
        photoUrl : user.photoUrl,
      };
      this.singUp(obj);
    });
  }

  singUp(user:any){
    this.auth.getUsers().subscribe(
      users=>{
        if(!(users.find((x:any) => x.id === user.id))){
          this.auth.createUser(user).subscribe(
            res =>{
              console.log('res: ');
              console.log(res);
            }
          )
        }
        sessionStorage.setItem('idToken', user.idToken);
        sessionStorage.setItem('id', user.id);
        this.router.navigate(['../profile/' + this.user.id], {
          relativeTo: this.activatedRoute
        });
      }
    )
  }
}
