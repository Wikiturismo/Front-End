import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopPostComponent } from './topPost.component';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
    imports: [CommonModule, CarouselModule, RouterModule,StarRatingModule],
    declarations: [TopPostComponent],
    exports: [TopPostComponent, RouterModule]
})

export class TopPostModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: TopPostModule,
          providers: [NameListService]
      };
    }
}
