import { Component, OnInit } from '@angular/core';
import {HttpReqService} from '../../../services/http-req.service';
import {SnotifyModule, SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {
  form = {
    email: ''
  };

  constructor(private httpsrv: HttpReqService,
              private notify: SnotifyService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.httpsrv.sendPwdResetLink(this.form).subscribe(
      (data)=> {
        this.handleResponse(data);
      },
      (error)=> {
        this.notify.error(error.error.error);
      }
    );
  }

  handleResponse(res){
    console.log(res);
    this.form.email = '';

  }
}
