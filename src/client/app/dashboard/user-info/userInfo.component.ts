import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { UserInfoservice } from './UserInfo.service';

@Component({
	moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [UserInfoservice]
})

export class UserInfoComponent {
	user;
	constructor(private userInfoservice: UserInfoservice) { 
       this.userInfoservice.getUser2().subscribe(res => this.user = res);
      }
}
