import {Component} from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent{
  [x: string]: any;

  user: any;
  loggedIn: any;

  constructor(private authService: SocialAuthService, private router: Router, private socialAuthService: SocialAuthService, private http: HttpClient) {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user.idToken);
    });
  }

  postUser(user: any): Observable<any>{
    const url="http://localhost:5000/api/postone";
    const headers = { "content-type":"application/json" }

    const req = JSON.stringify(user);
    return this.http.post(url , req, {'headers' : headers});
  }
}
