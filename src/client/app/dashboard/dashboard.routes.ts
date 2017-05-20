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
import { GetTownRoutes } from './getown/index';
import { DepartmentsRoutes } from './departments/index';
import { ToptownRoutes } from './toptown/index';
import { GetDepartsRoutes } from './getdeparts/index';
import { SearchRoutes } from './search/index';

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
        ...CreateTownRoutes,
        ...GetTownRoutes,
        ...GetDepartsRoutes,
        ...DepartmentsRoutes,
        ...ToptownRoutes,
        ...SearchRoutes,
    	]
  	}
];
