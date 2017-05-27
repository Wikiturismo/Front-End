import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule }   from '@angular/forms';
//import {Angular2TokenService} from "angular2-token";

/*@NgModule({
    imports: [CommonModule, RouterModule,FormsModule,],
    providers: [ Angular2TokenService ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
*/
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  //providers: [Angular2TokenService ],
  exports: [LoginComponent]
})

export class LoginModule { }
