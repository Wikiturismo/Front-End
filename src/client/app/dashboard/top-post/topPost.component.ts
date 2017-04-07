import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
    selector: 'top-post',
    templateUrl: './top-post.component.html'
})

export class TopPostComponent {
	places;
	constructor(private http: Http ) {
       http.get('http://localhost:3000/places/top.json').subscribe(res => this.places = res.json().data);
      }
}
