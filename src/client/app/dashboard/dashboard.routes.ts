import { Route } from '@angular/router';

import { HomeRoutes } from './home/index';
import { UserInfoRoutes } from './user-info/index';
import { TopPostRoutes } from './top-post/index';
import { ContactUSRoutes } from './contactus/index';
import { CommentsRoutes } from './comments/index';
import { GetPlacesRoutes } from './getplaces/index';
import { CreatePostRoutes } from './createpost/index';
import { DashboardComponent } from './index';
import { RandomPostRoutes } from './randompost/index';
import { CreateTownRoutes } from './createtown/index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
	    	...HomeRoutes,
	    	...ContactUSRoutes,
	    	...UserInfoRoutes,
	    	...TopPostRoutes,
        ...CommentsRoutes,
        ...GetPlacesRoutes,
        ...CreatePostRoutes,
        ...RandomPostRoutes,
        ...CreateTownRoutes

    	]
  	}
];
