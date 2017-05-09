import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CreatePostComponent } from './createpost.component';
import {Observable} from 'rxjs/Rx';
import {Place} from '../../../../../models/place';

@Injectable()
export class Createpostservice {
	constructor(private http: Http) {

	}
	getCount() : Observable<CreatePostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/count')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getTowns() : Observable<CreatePostComponent[]> {	
		return this.http.get('http://localhost:3000/api/v1/towns?sort=name+ASC')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	createPost(place: Place) {
        let body = JSON.stringify( place);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(('http://localhost:3000/api/v1/places'), body, options)
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
