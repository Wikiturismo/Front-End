import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { placesLast } from './dashboard/home/recentpost/recentpost.component';

@Injectable()
export class Wikiservice {
	//placesLast1;
	constructor(private http: Http) {
	
	}
	getLastPlaces() {
		return this.http.get('http://localhost:3000/api/v1/places/last.json');
		//return this.http.get('http://localhost:3000/api/v1/places/last.json').subscribe(res => this.placesLast1 = res.json().data);
		//return this.placesLast1;
	}
	getPlace99() {
		return this.http.get('http://localhost:3000/api/v1/places/name/NamePlace+99');
	}
	getTopPlaces() {
		return this.http.get('http://localhost:3000/api/v1/places/top.json');
	}
	getUser2() {
		return this.http.get('http://localhost:3000/api/v1/users/name/NameUser+2');
	}

}