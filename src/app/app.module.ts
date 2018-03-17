import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Header1Component } from './header1/header1.component';
import { CapselectComponent } from './capselect/capselect.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    Header1Component,
    CapselectComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
