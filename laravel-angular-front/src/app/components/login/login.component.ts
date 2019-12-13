import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpReqService} from '../../services/http-req.service';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form = {
    email : '',
    password : ''
  };

  error = null;

  constructor(private httpreqservice: HttpReqService,
              private tokenservice : TokenService) { }

  ngOnInit() {
  }

  onSubmit(){

    return this.httpreqservice.login(this.form).subscribe(
      (data) => {
        this.handleResponse(data);
      },
      (error)=>{
        this.handleError(error);
      }
    );

  }

  handleResponse(data){
    this.tokenservice.handle(data.access_token)
  }

  handleError(error){
    this.error = error.error.error;
    //console.log(this.error)

  }
}
