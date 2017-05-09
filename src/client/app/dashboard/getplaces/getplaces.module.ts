import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetPlacesComponent } from './getplaces.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NameListService } from '../../shared/name-list/index';

@NgModule({
    imports: [CommonModule,
    FormsModule,
    RouterModule],
    declarations: [GetPlacesComponent],
    exports: [GetPlacesComponent, RouterModule]
})

export class GetPlacesModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: GetPlacesModule,
          providers: [NameListService]
      };
  }
}
