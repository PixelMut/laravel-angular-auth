import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpReqService} from './services/http-req.service';
import {TokenService} from './services/token.service';
import {AuthService} from './services/auth.service';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule
  ],
  providers: [
    {provide : 'SnotifyToastConfig', useValue : ToastDefaults},
    HttpReqService,
    TokenService,
    AuthService,
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
