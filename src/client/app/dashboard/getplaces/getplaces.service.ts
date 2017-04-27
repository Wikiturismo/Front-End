import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetPlacesComponent } from './getplaces.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Getplacesservice {
	constructor(private http: Http) {

	}
	getPlace99() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/name?q=hotel+taroa')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
