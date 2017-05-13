import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetPlacesComponent } from './getplaces.component';
import {Observable} from 'rxjs/Rx';
import {Comment} from '../../../../../models/comment';
import { URLSearchParams } from '@angular/http';
import {Place} from '../../../../../models/placeval';

@Injectable()
export class Getplacesservice {
	nombre;
	constructor(private http: Http) {
	}
	sendName(name: string) {
		this.nombre=name;
		console.log(this.nombre);
		return this.nombre;
	}
	getPlace99(name: string) : Observable<GetPlacesComponent[]> {
		console.log(this.nombre);
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = 'http://localhost:3000/api/v1/places/name';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getComments(name: string) : Observable<GetPlacesComponent[]> {
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		params.set('sort', 'id+ASC');
		let url = 'http://localhost:3000/api/v1/places/comments';
		return this.http.get(url, { search: params })
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
