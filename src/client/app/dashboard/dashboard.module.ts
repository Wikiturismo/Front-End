import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { BlankPageModule } from './blank-page/blankPage.module';
import { ContactUSModule } from './contactus/contactUs.module';

import { DashboardComponent } from './dashboard.component';

import { SidebarComponent } from '../shared/index';

@NgModule({
    imports: [
      CommonModule,
    	RouterModule,
    	HomeModule,
    	ContactUSModule,
      BlankPageModule,
    ],
    declarations: [DashboardComponent, SidebarComponent],
    exports: [DashboardComponent, SidebarComponent]
})

export class DashboardModule { }
