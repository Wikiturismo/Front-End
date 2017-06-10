import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DepartmentsComponent } from './departments.component';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Departmentsservice {
	constructor(private http: Http) {
	}
	getDepartments() : Observable<DepartmentsComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/departs')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
