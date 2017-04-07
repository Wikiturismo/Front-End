import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
    selector: 'getplaces',
    templateUrl: './getplaces.component.html'
})

export class GetPlacesComponent {
	Explace;
	constructor(private http: Http ) {
       http.get('http://localhost:3000/places/name/NamePlace+1').subscribe(res => this.Explace = res.json().data);
      }
}
