import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
     { path: '', component: LoginComponent }, 
     { path: 'login', component: LoginComponent }, 
     { path: 'sign-up', component: SignUpComponent}, 
     { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard]}, 
     { path: '*', component: LoginComponent }, 
     // { path: 'dashboard', component: DashboardComponent}, 
]

;
