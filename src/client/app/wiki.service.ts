import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecentPostComponent } from './dashboard/home/recentpost/recentpost.component';
import { CommentsComponent } from './dashboard/comments/comments.component';
import { GetPlacesComponent } from './dashboard/getplaces/getplaces.component';
import { TopPostComponent } from './dashboard/top-post/TopPost.component';
import { UserInfoComponent } from './dashboard/user-info/userinfo.component';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Wikiservice {
	//placesLast1;
	constructor(private http: Http) {

	}
	getLastPlaces() : Observable<RecentPostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/last.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
		//return this.http.get('http://localhost:3000/api/v1/places/last.json').subscribe(res => this.placesLast1 = res.json().data);
		//return this.placesLast1;
	}
	getPlace99() : Observable<GetPlacesComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/name/NamePlace+99')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getPlace99Com() : Observable<CommentsComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/name/NamePlace+99')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getTopPlaces() : Observable<TopPostComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/places/top.json')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}
	getUser2() : Observable<UserInfoComponent[]> {
		return this.http.get('http://localhost:3000/api/v1/users/name/NameUser+2')
		.map(res => (<Response>res).json().data)
		.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
	}

}
