import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopPostComponent } from './topPost.component';
import { NameListService } from '../../shared/name-list/index';

@NgModule({
    imports: [CommonModule, RouterModule],
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
