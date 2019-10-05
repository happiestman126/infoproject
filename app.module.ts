import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {HttpModule} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const mypage : Routes = [
  {path:"LoginComponent", component:LoginComponent},
  {path:"HomeComponent", component:HomeComponent}
                          ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    RouterModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
