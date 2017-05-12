import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CreateTownComponent } from './createtown.component';
import {Observable} from 'rxjs/Rx';
import {Town} from '../../../../../models/town';
import { Router } from '@angular/router';

@Injectable()
export class Createtownservice {
	constructor(private http: Http, private router: Router) {

	}
	getCountTowns() : Observable<CreateTownComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/towns/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	NewTown(town: Town) {
		let body = JSON.stringify( town);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		this.router.navigate(['/dashboard/home']);
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
	private handleError(error: Response) {
			console.error(error);
			return Observable.throw(error.json().error || 'Server Error');
		}


}
