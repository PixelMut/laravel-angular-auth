import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpReqService} from '../../services/http-req.service';

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

  constructor(private httpreqservice: HttpReqService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.error = [];
    this.httpreqservice.signup(this.form).subscribe((data) => {
        console.log(data);
      },
      (error) => {
        this.handleError(error);
      }
    );


  }

  handleError(error){
    this.error = error.error.errors;

  }
}
