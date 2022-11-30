import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token') || '';
    return !!token;
  }

  createUser(user: any): Observable<any>{
    console.log('trying to post...');
    const url="http://localhost:5000/users/postone";
    const headers = { "content-type":"application/json" }

    const req = JSON.stringify(user);
    return this.http.post(url , req, {'headers' : headers});
  }
}
