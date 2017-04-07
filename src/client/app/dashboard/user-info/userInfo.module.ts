import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './userInfo.component';

@NgModule({
    imports: [CommonModule],
    declarations: [UserInfoComponent],
    exports: [UserInfoComponent]
})

export class UserInfoModule { }
