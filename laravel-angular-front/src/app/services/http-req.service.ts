import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpReqService {

  baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(form){
    return this.http.post(`${this.baseUrl}/login`, form);
  }

  signup(form){
    return this.http.post(`${this.baseUrl}/signup`, form);
  }

  sendPwdResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
  }

  changePassword(form){
    return this.http.post(`${this.baseUrl}/resetPassword`, form);
  }

}
