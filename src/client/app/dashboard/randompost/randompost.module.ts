import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RandomPostComponent } from './randompost.component';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [CommonModule, CarouselModule, RouterModule],
    declarations: [RandomPostComponent],
    exports: [RandomPostComponent, RouterModule]
})

export class RandomPostModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: RandomPostModule,
          providers: [NameListService]
      };
  }
}
