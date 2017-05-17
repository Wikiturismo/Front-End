import { Component } from '@angular/core';
import { Getdepartssservice } from './Getdeparts.service';
import { DepartmentsComponent } from '../departments/departments.component';


@Component({
	moduleId: module.id,
    selector: 'getdeparts',
    templateUrl: './getdeparts.component.html',
    providers: [Getdepartssservice],
		styles: [`
			.carousel{
			    overflow:hidden;
			    width:100%;
					height:400px;
			}
			.slides{
			    list-style:none;
			    position:relative;
			}
			.slides > li{
			    position:relative;
			    float:left;
			}
			.carousel img{
			    display:block;
			    width:600px;
			    max-width:600px;
					height:400px;
			    max-height:400px;
			}
	  `],

})

export class GetDepartsComponent {
	counter=[];
	Explace=[];
	errorMessage: string;
	constructor(private getdepartsservice: Getdepartssservice) {
		this.getdepartsservice.getDepart(DepartmentsComponent.idDepart).subscribe(
			res => {
				 this.Explace[0] = res;
			 }
			 );
	}
}
