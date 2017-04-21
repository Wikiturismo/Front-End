import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { UserInfoModule } from './user-info/UserInfo.module';
import { ContactUSModule } from './contactus/contactUs.module';
import { TopPostModule } from './top-post/topPost.module';
import { DashboardComponent } from './dashboard.component';
import { CommentsModule } from './comments/comments.module';
import { GetPlacesModule } from './getplaces/getplaces.module';
import { SidebarComponent } from '../shared/index';
import { CreatePostModule } from './createpost/createpost.module';
import { RandomPostModule } from './randompost/randompost.module';

@NgModule({
    imports: [
      CommonModule,
    	RouterModule,
    	HomeModule,
    	ContactUSModule,
      	UserInfoModule,
      	TopPostModule,
        CommentsModule,
        GetPlacesModule,
        CreatePostModule,
        RandomPostModule,
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
