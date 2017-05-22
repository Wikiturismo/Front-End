import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgupdateComponent } from './imgupdate.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { NameListService } from '../../shared/name-list/index';


@NgModule({
    imports: [CommonModule, CarouselModule, RouterModule],
    declarations: [ImgupdateComponent],
    exports: [ImgupdateComponent, RouterModule]
})

export class ImgupdateModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: ImgupdateModule,
          providers: [NameListService]
      };
  }
 }
