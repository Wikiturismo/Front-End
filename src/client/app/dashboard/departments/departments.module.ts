import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule, CarouselModule, RouterModule],
    declarations: [DepartmentsComponent],
    exports: [DepartmentsComponent, RouterModule]
})

export class DepartmentsModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: DepartmentsModule,
          providers: [NameListService]
      };
    }
}
