import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SidebarComponent } from './sidebar';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Sidebarservice {
	constructor(private http: Http) {

	}
	getUser2() : Observable<SidebarComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/users/3')
		.map(this.extractData)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
    private extractData(res: Response) {
        let body = res.json();
        //console.log("servicio");
        //console.log(body);
        return body.data || {};
    }

}
