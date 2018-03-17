import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapselectComponent } from './capselect/capselect.component';

export const router: Routes = [
    {
        path: '',redirectTo :'home',pathMatch: 'full'
    },
    {
        path: 'home/login',component : LoginComponent
    },
    {
        path: 'home/markets',component : CapselectComponent
    },
    {
        path: 'home/saved_stocks',component : HomeComponent
    },
    {
        path: 'home',component : HomeComponent
    }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);