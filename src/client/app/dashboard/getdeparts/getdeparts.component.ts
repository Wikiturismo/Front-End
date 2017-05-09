import { Component } from '@angular/core';
import { Getdepartssservice } from './Getdeparts.service';
import { DepartmentsComponent } from '../departments/departments.component';


@Component({
	moduleId: module.id,
    selector: 'getdeparts',
    templateUrl: './getdeparts.component.html',
    providers: [Getdepartssservice]

})

export class GetDepartsComponent {
	counter=[];
	Explace;
	errorMessage: string;
	constructor(private getdepartsservice: Getdepartssservice) {
		this.getdepartsservice.getDepart(DepartmentsComponent.nombreDepart).subscribe(
			res => {
				 this.Explace = res;
			 }
			 );
	}
}
