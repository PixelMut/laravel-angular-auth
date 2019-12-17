import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Promise} from 'q';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate{

  constructor(private tokensrv: TokenService) { }

  canActivate(): boolean {
    return !this.tokensrv.loggedIn();
  }
}
