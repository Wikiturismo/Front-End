import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ToptownComponent } from './toptown.component';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule, RouterModule,CarouselModule],
    declarations: [ToptownComponent],
    exports: [ToptownComponent, RouterModule]
})

export class ToptownModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: ToptownModule,
          providers: [NameListService]
      };
    }
}
