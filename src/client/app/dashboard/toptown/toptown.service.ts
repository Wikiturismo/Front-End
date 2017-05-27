import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ToptownComponent } from './toptown.component';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Toptownservice {
	constructor(private http: Http) {
	}
	getTopTowns() : Observable<ToptownComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/towns')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
