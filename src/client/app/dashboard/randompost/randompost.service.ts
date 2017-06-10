import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RandomPostComponent } from './randompost.component';

import {Observable} from 'rxjs/Rx';

@Injectable()
export class RandomPostservice {
	constructor(private http: Http) {
	}
	getRandomPlaces() : Observable<RandomPostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/random.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
