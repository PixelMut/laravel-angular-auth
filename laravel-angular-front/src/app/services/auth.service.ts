import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {TokenService} from './token.service';

@Injectable()
export class AuthService {
  loggedIn = new BehaviorSubject(this.tokensrv.loggedIn());
  authStatus = this.loggedIn.asObservable();



  constructor(private tokensrv : TokenService) { }

  changedAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

}
