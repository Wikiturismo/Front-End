import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './userInfo.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NameListService } from '../../shared/name-list/index';

@NgModule({
    imports: [	CommonModule,
    			FormsModule,
          RouterModule
    ],
    declarations: [UserInfoComponent],
    exports: [UserInfoComponent, RouterModule]
})

export class UserInfoModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: UserInfoModule,
          providers: [NameListService]
      };
  }

 }
