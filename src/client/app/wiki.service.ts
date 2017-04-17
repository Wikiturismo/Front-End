import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { RecentPostComponent } from './dashboard/home/recentpost/recentpost.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';



@Injectable()
export class Wikiservice {
	//placesLast1;
	constructor(private http: Http) {

	}
	getLastPlaces() : Observable<RecentPostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/last.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		//return this.http.get('http://localhost:3000/api/v1/places/last.json').subscribe(res => this.placesLast1 = res.json().data);
		//return this.placesLast1;
	}
	getPlace99() {
		return this.http.get('http://localhost:3000/api/v1/places/name/NamePlace+99');
	}
	getTopPlaces() {
		return this.http.get('http://localhost:3000/api/v1/places/top.json');
	}
	getUser2() {
		return this.http.get('http://localhost:3000/api/v1/users/name/NameUser+2');
	}

}
