import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Departmentsservice } from './departments.service';



@Component({
	moduleId: module.id,
    selector: 'departments',
    templateUrl: './departments.component.html',
    providers: [Departmentsservice]
})

export class DepartmentsComponent {
	departs;
	constructor(private departmentsservice: Departmentsservice) {
       this.departmentsservice.getDepartments().subscribe(res => this.departs = res);
      }

}
