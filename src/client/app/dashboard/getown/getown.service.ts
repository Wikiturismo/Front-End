import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetTownComponent } from './getown.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
import {Comment} from '../../../../../models/comment';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class GetTownservice {
	constructor(private http: Http) {

	}
	getPlace99(name: string) : Observable<GetTownComponent[]> {
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = "http://localhost:3000/api/v1/places/name";
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getComments() : Observable<GetTownComponent[]> {
		//name = name.replace(" ","%20");
		//var ruta = 'http://localhost:3000/api/v1/places/comments?q='+name;
		return this.http.get('http://localhost:3000/api/v1/places/comments?q=hotel%20taroa')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountComments() : Observable<GetTownComponent[]> {
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