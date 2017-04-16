import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Wikiservice } from '../../wiki.service';

@Component({
	moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [Wikiservice]
})

export class UserInfoComponent {
	user;
	constructor(private wikiservice: Wikiservice) { 
       this.wikiservice.getUser2().subscribe(res => this.user = res.json().data);
      }
}
