import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
//import { HomeComponent } from './home/home.component';
//import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ValueComponent } from './value/value.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      //HomeComponent,
      //RegisterComponent,
      HomeComponent,
      RegisterComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
