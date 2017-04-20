import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { TopPostComponent } from './TopPost.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class TopPostservice {
	constructor(private http: Http) {
	}
	getTopPlaces() : Observable<TopPostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/top.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}