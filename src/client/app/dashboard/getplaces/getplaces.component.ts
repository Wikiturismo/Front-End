import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Wikiservice } from '../../wiki.service';

@Component({
	moduleId: module.id,
    selector: 'getplaces',
    templateUrl: './getplaces.component.html',
    providers: [Wikiservice]
})

export class GetPlacesComponent {
	Explace;
	constructor(private wikiservice: Wikiservice) { 
	this.wikiservice.getPlace99().subscribe(res => this.Explace = res.json().data);
	}
}
