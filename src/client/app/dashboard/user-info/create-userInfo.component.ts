import { Component }  from '@angular/core';
import {User} from '../../../../../models/user';
import { UserInfoservice } from './userInfo.service';

@Component({
	moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [UserInfoservice]
})
export class CreateUserInfoComponent {

    user = new User(undefined, '', '', '');
    errorMessage: string;

    constructor(private userInfoservice: UserInfoservice) { }

    updateUser() {
        if (!this.user) { return; }
        this.userInfoservice.updateUser(this.user)
            .subscribe(
            user => this.user,
            error => this.errorMessage = <any>error);
    }
}
