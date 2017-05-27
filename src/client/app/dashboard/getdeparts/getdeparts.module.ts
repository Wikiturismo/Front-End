import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDepartsComponent } from './getdeparts.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule,
    FormsModule,
    RouterModule,
    CarouselModule],
    declarations: [GetDepartsComponent],
    exports: [GetDepartsComponent, RouterModule]
})

export class GetDepartsModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: GetDepartsModule,
          providers: [NameListService]
      };
  }
}
