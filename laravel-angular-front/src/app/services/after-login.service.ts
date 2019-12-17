import { Injectable } from '@angular/core';

import {TokenService} from './token.service';
import {CanActivate} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  constructor(private tokensrv: TokenService) { }


  canActivate(): boolean {
    return this.tokensrv.loggedIn();
  }


}
