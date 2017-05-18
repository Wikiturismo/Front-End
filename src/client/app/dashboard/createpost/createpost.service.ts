import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CreatePostComponent } from './createpost.component';
import {Observable} from 'rxjs/Rx';
import {Place} from '../../../../../models/place';
import { Router } from '@angular/router';

@Injectable()
export class Createpostservice {
	constructor(private http: Http, private router: Router) {

	}
	getCount() : Observable<CreatePostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getTowns(depart: number) : Observable<CreatePostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/departs/towns?q='+depart+'&sort=name+ASC')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	createPost(place: Place) {
        let body = JSON.stringify( place);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
				//this.router.navigate(['/dashboard/home']);
        return this.http.post(('http://localhost:3000/api/v1/places'), body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
		getCountImages() : Observable<CreatePostComponent[]> {
			return this.http.get('http://localhost:3000/api/v1/imageplaces/count')
			.map(this.extractData)
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
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
