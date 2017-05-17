import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GetDepartsComponent } from './getdeparts.component';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Getdepartssservice {
	constructor(private http: Http) {
	}
	getDepart(id: number) : Observable<GetDepartsComponent[]> {
		let url = 'http://localhost:3000/api/v1/departs/';
		url+=id;
		return this.http.get(url)
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
