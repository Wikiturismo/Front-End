import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetPlacesComponent } from './getplaces.component';
import {Observable} from 'rxjs/Rx';
import {Comment} from '../../../../../models/comment';
import {Place} from '../../../../../models/placeval';
import {Valoration} from '../../../../../models/valoration';
import { URLSearchParams } from '@angular/http';

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
	getImageUser(id: number) : Observable<GetPlacesComponent[]> {
		let url = 'http://localhost:3000/api/v1/users/images?q=';
		url+=id;
		return this.http.get(url)
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountComments() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/commentplaces/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountVal() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/valorations/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getVal(place_id: number, user_id: number) : Observable<GetPlacesComponent[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('place', String(place_id));
		params.set('user', String(user_id));
		let url = 'http://localhost:3000/api/v1/valorations/userplace';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	postVal(valoration: Valoration) : Observable<GetPlacesComponent[]> {
		let body = JSON.stringify(valoration);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers});
		let url = 'http://localhost:3000/api/v1/valorations/';
		return this.http.post(url, body, options)
				.map(this.extractData)
				.catch(this.handleError);
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
	getUser2() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/users/3')
		// .map(res => (<Response>res).json().data)
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
