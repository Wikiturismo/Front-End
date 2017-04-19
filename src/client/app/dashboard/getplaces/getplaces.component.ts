import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Getplacesservice } from './Getplaces.service';

@Component({
	moduleId: module.id,
    selector: 'getplaces',
    templateUrl: './getplaces.component.html',
    providers: [Getplacesservice]
})

export class GetPlacesComponent {
	Explace;
	constructor(private getplacesservice: Getplacesservice) { 
		this.getplacesservice.getPlace99().subscribe(res => this.Explace = res);
	}
}
