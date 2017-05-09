import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GetDepartsComponent } from './getdeparts.component';
import {Observable} from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class Getdepartssservice {
	nombre;
	constructor(private http: Http) {
	}
	sendName(name: string) {
		this.nombre=name;
		console.log(this.nombre);
		return this.nombre;
	}
	getDepart(name: string) : Observable<GetDepartsComponent[]> {
		console.log(this.nombre);
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = 'http://localhost:3000/api/v1/departs/name';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
