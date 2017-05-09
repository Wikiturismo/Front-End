import { Component } from '@angular/core';
import { Departmentsservice } from './departments.service';
import { Getdepartssservice } from '../getdeparts/Getdeparts.service';



@Component({
	moduleId: module.id,
    selector: 'departments',
    templateUrl: './departments.component.html',
    providers: [Departmentsservice,Getdepartssservice]
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
