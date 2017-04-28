import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetPlacesComponent } from './getplaces.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
import {Comment} from '../../../../../models/comment';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class Getplacesservice {
	constructor(private http: Http) {

	}
	getPlace99(name: string) : Observable<GetPlacesComponent[]> {
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = "http://localhost:3000/api/v1/places/name";
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	//name: string como para
	getComments() : Observable<GetPlacesComponent[]> {
		//name = name.split(' ').join('+');
		//let params: URLSearchParams = new URLSearchParams();
		//params.set('q', name);
		//let url = "http://localhost:3000/api/v1/places/comments";
		//return this.http.get(url, { search: params })
		return this.http.get('http://localhost:3000/api/v1/places/comments?q=hotel%20taroa&sort=id%20ASC&columns=id,%20content,%20user')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountComments() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/commentplaces/count')
		.map(this.extractData)
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
	private handleError(error: Response) {
			console.error(error);
			return Observable.throw(error.json().error || 'Server Error');
	}

}
