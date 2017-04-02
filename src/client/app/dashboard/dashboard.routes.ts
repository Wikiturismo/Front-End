import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { BlankPageRoutes } from './blank-page/index';
import { ContactUSRoutes } from './contactus/index';

import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ContactUSRoutes,
	    	...BlankPageRoutes
    	]
  	}
];
