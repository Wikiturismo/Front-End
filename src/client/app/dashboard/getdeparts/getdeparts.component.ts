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
			height:500px;
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
	    width:100%;
	    max-width:100%;
			height:100%;
	    max-height:500px;
	}
	  `],

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
