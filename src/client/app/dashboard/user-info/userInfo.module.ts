import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './userInfo.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [	CommonModule,
    			FormsModule
    ],
    declarations: [UserInfoComponent],
    exports: [UserInfoComponent]
})

export class UserInfoModule { }
