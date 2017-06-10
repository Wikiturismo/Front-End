import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule, CarouselModule, RouterModule],
    declarations: [SearchComponent],
    exports: [SearchComponent, RouterModule]
})

export class SearchModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: SearchModule,
          providers: [NameListService]
      };
    }
}
