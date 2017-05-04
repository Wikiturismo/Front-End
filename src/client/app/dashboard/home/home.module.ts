import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RecentPostComponent } from './recentpost/recentpost.component';
import { RouterModule } from '@angular/router';
import { NameListService } from '../../shared/name-list/index';


@NgModule({
    imports: [CommonModule, CarouselModule, RouterModule],
    declarations: [HomeComponent,RecentPostComponent],
    exports: [HomeComponent, RouterModule]
})

export class HomeModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: HomeModule,
          providers: [NameListService]
      };
  }
 }
