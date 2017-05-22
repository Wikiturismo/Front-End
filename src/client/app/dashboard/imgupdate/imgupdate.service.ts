import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ImgupdateComponent } from './imgupdate.component';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Imgupdateservice {

	constructor(private http: Http) {
	}
	getImages() : Observable<ImgupdateComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/top.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

	getPlace(id: number) : Observable<ImgupdateComponent[]> {
		let url = 'http://localhost:3000/api/v1/places/';
		url+=id;
		console.log(url);
		return this.http.get(url)
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
