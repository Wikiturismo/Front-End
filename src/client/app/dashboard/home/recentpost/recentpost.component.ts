import { Component } from '@angular/core';
import { Http } from '@angular/http';


/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'recentpost-cmp',
	templateUrl: 'recentpost.component.html'
})

export class RecentPostComponent {
	placesLast;
	constructor(private http: Http ) {
       http.get('http://localhost:3000/places/last.json').subscribe(res => this.placesLast = res.json().data);
      }
}
