import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetTownComponent } from './getown.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NameListService } from '../../shared/name-list/index';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

@NgModule({
    imports: [CommonModule,
    FormsModule,
    RouterModule,
    CarouselModule],
    declarations: [GetTownComponent],
    exports: [GetTownComponent, RouterModule]
})

export class GetTownModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: GetTownModule,
          providers: [NameListService]
      };
  }
 }
