import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RecentPostComponent } from './recentpost.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Recentpostservice {
	constructor(private http: Http) {
	
	}
	getLastPlaces() : Observable<RecentPostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/last.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	
}