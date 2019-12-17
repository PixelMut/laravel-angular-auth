import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpReqService} from '../../services/http-req.service';
import {TokenService} from '../../services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = {
    email : '',
    name : '',
    password : '',
    password_confirmation : ''
  };

  error = [];

  constructor(private httpreqservice: HttpReqService,
              private tokenservice: TokenService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.error = [];
    this.httpreqservice.signup(this.form).subscribe((data) => {
        this.handleResponse(data);
      },
      (error) => {
        this.handleError(error);
      }
    );


  }

  handleResponse(data){
    this.tokenservice.handle(data.access_token);
    // this.router.navigate(['/profile']);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.errors;

  }
}
