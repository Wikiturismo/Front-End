import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPostComponent } from './recentpost.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [CommonModule, CarouselModule, RecentPostComponent],
    declarations: [RecentPostComponent],
    exports: [RecentPostComponent]
})

export class RecentPostModule { }
