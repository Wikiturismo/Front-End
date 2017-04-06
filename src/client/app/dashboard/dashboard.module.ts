import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { UserInfoModule } from './user-info/UserInfo.module';
import { ContactUSModule } from './contactus/contactUs.module';
import { TopPostModule } from './top-post/topPost.module';
import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../shared/index';

@NgModule({
    imports: [
      CommonModule,
    	RouterModule,
    	HomeModule,
    	ContactUSModule,
      	UserInfoModule,
      	TopPostModule
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
