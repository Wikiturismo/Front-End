import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserInfoComponent } from './userinfo.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class UserInfoservice {
	constructor(private http: Http) {
	
	}
	getUser2() : Observable<UserInfoComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/users/name/NameUser+2')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}