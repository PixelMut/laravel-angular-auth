import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpReqService} from '../../../services/http-req.service';

@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {
  error=[];
  form = {
    email : '',
    password : '',
    password_confirm : '',
    reset_token : ''
  };

  constructor(private route: ActivatedRoute,
              private httpsrv: HttpReqService,
              private router: Router) {
    this.route.queryParams.subscribe(
      (params) => {
        this.form.reset_token = params['token'];
      }
    );
  }

  ngOnInit() {

  }

  onSubmit(){

    this.httpsrv.changePassword(this.form).subscribe(
      (data)=>{
        this.handleResponse(data);
      },
      (error)=>{
        this.handleError(error);
      }
    );
  }

  handleResponse(resp){
    this.router.navigateByUrl('/login');
  }

  handleError(error){
    console.log(error);
  }


}
