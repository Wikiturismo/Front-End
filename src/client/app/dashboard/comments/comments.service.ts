import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CommentsComponent } from './comments.component';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Commentsservice {
	constructor(private http: Http) {

	}
	getPlace99Com() : Observable<CommentsComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/name?q=hotel+taroa')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
