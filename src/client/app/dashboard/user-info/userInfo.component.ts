import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { UserInfoservice } from './UserInfo.service';
//import {User} from '../../../../../models/user';
import {User} from './user';

@Component({
	moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [UserInfoservice]
})
	
export class UserInfoComponent {
	user = [];
	//created_at;
	//name;
	userCreat = new User(undefined, '', '', ''); 
    errorMessage: string;
	constructor(private userInfoservice: UserInfoservice) { 
			this.userInfoservice.getUser2().subscribe(data => this.user.push(data));
		}
	updateUser() {            
        if (!this.userCreat) { return; }
        this.userInfoservice.updateUser(this.userCreat)
            .subscribe(
            user => this.userCreat,
            error => this.errorMessage = <any>error);
    }
		
		//this.userInfoservice.getUser2().subscribe( res=> this.user=res.JSON().data);
       /*this.userInfoservice.getUser2().subscribe(
       	res => 
        { 
        	this.user = res;
        	//this.created_at = this.user.created_at;
        	//this.name = this.user.name;
        }
      );
      console.log(this.user);*/
    /*getUser2( ) {
    	//id=2;
	    let user= [];
	    this.userInfoservice.getUser2().subscribe(data => user.push(data));
	    this.user1 = user;
	    console.log("En metodo del componente");
	    console.log(this.user1);
   }*/
    	
    
      
}
