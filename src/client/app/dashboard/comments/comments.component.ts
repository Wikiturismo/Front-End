import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
    selector: 'comments',
    templateUrl: './comments.component.html'
})

export class CommentsComponent {
	CommsPlace;
	constructor(private http: Http ) {
       http.get('http://localhost:3000/places/name/NamePlace+1').subscribe(res => this.CommsPlace = res.json().data);
      }

}
