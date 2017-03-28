import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RecentPostComponent } from './recentpost/recentpost.component';


@NgModule({
    imports: [CommonModule, CarouselModule],
    declarations: [HomeComponent,RecentPostComponent],
    exports: [HomeComponent]
})

export class HomeModule { }
