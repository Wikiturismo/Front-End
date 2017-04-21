import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserInfoComponent } from './userinfo.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
import {User} from '../../../../../models/user';

@Injectable()
export class UserInfoservice {
	constructor(private http: Http) {
	
	}
	getUser2() : Observable<UserInfoComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/users/2')
		// .map(res => (<Response>res).json().data)
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	
	updateUser(user: User) {                
        let body = JSON.stringify( user);            
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.patch(('http://localhost:3000/api/v1/users/2'), body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("servicio");
        console.log(body);
        return body.data || {};
    }
	
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
}