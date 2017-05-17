import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetPlacesComponent } from './getplaces.component';
import {Observable} from 'rxjs/Rx';
import {Comment} from '../../../../../models/comment';
import {Place} from '../../../../../models/placeval';

@Injectable()
export class Getplacesservice {
	constructor(private http: Http) {
	}
	getPlace99(id: number) : Observable<GetPlacesComponent[]> {
		let url = 'http://localhost:3000/api/v1/places/';
		url+=id;
		return this.http.get(url)
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getComments(id: number) : Observable<GetPlacesComponent[]> {
		let url = 'http://localhost:3000/api/v1/places/comments?q=';
		url+=id;
		return this.http.get(url)
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountComments() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/commentplaces/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	patchValoration(place: Place) : Observable<GetPlacesComponent[]> {
		let body = JSON.stringify( place);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		let url = 'http://localhost:3000/api/v1/places/';
		url+=place.id;
		return this.http.patch(url, body, options)
				.map(this.extractData)
				.catch(this.handleError);
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
