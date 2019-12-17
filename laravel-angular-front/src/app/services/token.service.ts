import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  iss = {
    login : 'http://localhost:8000/api/login',
    signup : 'http://localhost:8000/api/signup'
  };

  constructor() { }

  handle(token){
    this.setFromStorage(token);
    console.log(this.isValid())
    // console.log(this.checkPayload(token))
  }

  setFromStorage(token){
    localStorage.setItem('token', token);
  }

  getFromStorage(){
    return localStorage.getItem('token');
  }

  removeFromStorage(){
    localStorage.removeItem('token');
  }

  isValid(){
    const token = this.getFromStorage()
    if(token){
      const payload = this.checkPayload(token);
      if(payload){
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
      return false
    }
    return false
  }

  checkPayload(token){
    const payload = token.split('.')[1];
    return this.decodePayload(payload);
  }

  decodePayload(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }
}
