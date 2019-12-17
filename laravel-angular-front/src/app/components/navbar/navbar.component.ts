import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn;
  constructor(private authsrv: AuthService,
              private router: Router,
              private tokensrv: TokenService) { }

  ngOnInit() {
    this.authsrv.authStatus.subscribe(
      (data) => {
        this.loggedIn = data;
      });
  }

  logOut(event: MouseEvent){
    event.preventDefault();
    this.tokensrv.removeFromStorage();
    this.authsrv.changedAuthStatus(false);
    // this.router.navigate(['/profile']);
    this.router.navigateByUrl('/login');
  }

}
