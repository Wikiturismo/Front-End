import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { GetTownComponent } from './getown.component';
import {Observable} from 'rxjs/Rx';
import {Commenttowns} from '../../../../../models/commenttown';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class GetTownservice {
	constructor(private http: Http) {
	}
	getLastPlaces(depart_id: number) : Observable<GetTownComponent[]> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', String(depart_id));
		let url = 'http://localhost:3000/api/v1/places/lastbytown';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getTowns(id: number) : Observable<GetTownComponent[]> {
		let url = 'http://localhost:3000/api/v1/towns/';
		url+=id;
		return this.http.get(url)
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getComments(id: number) : Observable<GetTownComponent[]> {
		let url = 'http://localhost:3000/api/v1/towns/comments?q=';
		url+=id;
		return this.http.get(url)
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getCountComments() : Observable<GetTownComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/commenttowns/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	NewComment(comment: Commenttowns) {
		let body = JSON.stringify( comment);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(('http://localhost:3000/api/v1/commenttowns'), body, options)
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
