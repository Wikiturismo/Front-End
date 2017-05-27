import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SearchComponent } from './search.component';
import {Observable} from 'rxjs/Rx';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class Searchservice {
	constructor(private http: Http) {
	}
	getPlace(name: string) : Observable<SearchComponent[]> {
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = 'http://localhost:3000/api/v1/places/name';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getTown(name: string) : Observable<SearchComponent[]> {
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = 'http://localhost:3000/api/v1/towns/name';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getDepart(name: string) : Observable<SearchComponent[]> {
		name = name.split(' ').join('+');
		let params: URLSearchParams = new URLSearchParams();
		params.set('q', name);
		let url = 'http://localhost:3000/api/v1/departs/name';
		return this.http.get(url, { search: params })
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
}
