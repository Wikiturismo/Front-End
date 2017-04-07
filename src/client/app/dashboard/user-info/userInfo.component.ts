import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user-info.component.html'
})

export class UserInfoComponent {
	user;
	constructor(private http: Http ) {
       http.get('http://localhost:3000/users/name/NameUser+2').subscribe(res => this.user = res.json().data);
      }
}
