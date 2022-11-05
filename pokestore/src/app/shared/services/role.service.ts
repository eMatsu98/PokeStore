import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  getRole(): String {
    const role = localStorage.getItem('role') || '';
    return role;
  }
}
