import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(){
    return!!localStorage.getItem('token');
  }
}