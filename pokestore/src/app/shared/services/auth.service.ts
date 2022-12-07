import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string ="http://apipaefinal-env.eba-kjqsq4p2.us-east-2.elasticbeanstalk.com";

  //localhost:5000

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('idToken') || '';
    return !!token;
  }

  createUser(user: any): Observable<any>{
    const potstUrl = this.url + "/users/postone";
    const headers = { "content-type":"application/json" }

    const req = JSON.stringify(user);
    return this.http.post(potstUrl , req, {'headers' : headers});
  }

  getUsers(): Observable<any>{
    const getAllUrl = this.url + "/users/getone";
    return this.http.get(getAllUrl);
  }

  putUser(user: any): Observable<any>{
    const potstUrl = this.url + "/users/putone"
    const headers = { "content-type":"application/json" }

    const req = JSON.stringify(user);
    return this.http.put(potstUrl , req, {'headers' : headers});
  }
  logUser(user:any): Observable<any>{
    const logurl = this.url+"/users/login"
    //const headers = {"content-type":"application/json"}
    //const req=JSON.stringify(user);
    return this.http.post(logurl,user);

  }


}
