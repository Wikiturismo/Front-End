import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CreateTownComponent } from './createtown.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
import {Town} from '../../../../../models/town';

@Injectable()
export class Createtownservice {
	constructor(private http: Http) {

	}
	getCountTowns() : Observable<CreateTownComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/towns/count')
		.map(this.extractDataCount)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	NewTown(town: Town) {
		let body = JSON.stringify( town);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post(('http://localhost:3000/api/v1/towns'), body, options)
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