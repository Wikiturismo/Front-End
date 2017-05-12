import { Component } from '@angular/core';
import { Departmentsservice } from './departments.service';
import { Getdepartssservice } from '../getdeparts/Getdeparts.service';



@Component({
	moduleId: module.id,
    selector: 'departments',
    templateUrl: './departments.component.html',
    providers: [Departmentsservice,Getdepartssservice],
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

export class DepartmentsComponent {
	static nombreDepart='';
	departs;
	constructor(private departmentsservice: Departmentsservice,private getdepartssservice: Getdepartssservice) {
       this.departmentsservice.getDepartments().subscribe(res => this.departs = res);
      }
			goDepart(name: string) {
				DepartmentsComponent.nombreDepart=name;
				this.getdepartssservice.sendName(name);
			}

}
