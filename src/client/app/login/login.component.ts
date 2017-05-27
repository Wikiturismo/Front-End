import { Component } from '@angular/core';
//import {Angular2TokenService} from "angular2-token";
//import {environment} from "../../../environments/environment";
import {environment} from "../../../environments/environment";
/**
*	This class represents the lazy loaded LoginComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'login-cmp',
	templateUrl: 'login.component.html',
	//providers: [Angular2TokenService],
	styleUrls: ['login.css']
})

export class LoginComponent {
	title = 'app works!';
  /*constructor(private authToken: Angular2TokenService){
   this.authToken.init(environment.token_auth_config);

    this.authToken.signIn({email: "mail1@gmail.com", password: "password1"}).subscribe(

        res => {

          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
          console.log('auth response body:', res.json()); //log the response body to show the user
        },

        err => {
          console.error('auth error:', err);
        }
    )
  }*/
}
