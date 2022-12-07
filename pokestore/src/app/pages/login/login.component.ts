import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  //passwordFormControl = new FormControl('', [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$")]);

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService,
    private router: Router, 
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
  login(user:any){
    console.log('entre')
    const obj = {
      email: 'souless496@gmail.com',
      password: 'password'
    }
    console.log(obj);

    this.auth.logUser(obj).subscribe(res=>{
      console.log("entre");
      
      console.log(res);
      sessionStorage.setItem('idToken',res.token );
      console.log(res.id);
      sessionStorage.setItem('id',res.id);
      
      this.router.navigate(['../profile/' + res.id], {
        relativeTo: this.activatedRoute
      });
    })
    
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
