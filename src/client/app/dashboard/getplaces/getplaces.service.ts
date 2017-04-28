import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetPlacesComponent } from './getplaces.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
import {Comment} from '../../../../../models/comment';

@Injectable()
export class Getplacesservice {
	constructor(private http: Http) {

	}
	getPlace99() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/name?q=hotel+taroa')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getComments() : Observable<GetPlacesComponent[]> {
		//name = name.replace(" ","%20");
		//var ruta = 'http://localhost:3000/api/v1/places/comments?q='+name;
		return this.http.get('http://localhost:3000/api/v1/places/comments?q=hotel%20taroa')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountComments() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/commentplaces/count')
		.map(this.extractDataCount)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	NewComment(comment: Comment) {
		let body = JSON.stringify( comment);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(('http://localhost:3000/api/v1/commentplaces'), body, options)
				.map(this.extractData)
				.catch(this.handleError);
	}
	private extractData(res: Response) {
			let body = res.json();
			//console.log("servicio");
			//console.log(body);
			return body.data || {};
	}
	private extractDataCount(res: Response) {
			let body = res.json();
			//console.log("servicio");
			//console.log(body);
			return body || {};
	}

	private handleError(error: Response) {
			console.error(error);
			return Observable.throw(error.json().error || 'Server Error');
	}

}
