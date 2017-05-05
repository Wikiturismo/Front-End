import { Routes } from '@angular/router';
import { LoginRoutes } from './login/index';
import { LoginComponent } from './login/index';


import { DashboardRoutes } from './dashboard/index';

export const routes: Routes = [
	...LoginRoutes,
	...DashboardRoutes,



	{ path: '**', component: LoginComponent }
];
/*
	{ path: '**', redirectTo: '/app/login',
    pathMatch: 'full' }



]; */
