import { Component } from '@angular/core';
import { Departmentsservice } from './departments.service';
import { Getdepartssservice } from '../getdeparts/Getdeparts.service';
import { GetTownComponent } from '../getown/getown.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';
import { SearchComponent } from '../search/search.component';

@Component({
	moduleId: module.id,
    selector: 'departments',
    templateUrl: './departments.component.html',
    providers: [Departmentsservice,Getdepartssservice],
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

export class DepartmentsComponent {
	static idDepart=undefined;
	departs;
	constructor(private departmentsservice: Departmentsservice,private getdepartssservice: Getdepartssservice) {
       this.departmentsservice.getDepartments().subscribe(res => this.departs = res);
      }
			goDepart(id: number) {
				DepartmentsComponent.idDepart=id;
				RecentPostComponent.idDepart=undefined;
				GetPlacesComponent.idDepart=undefined;
				GetTownComponent.idDepart=undefined;
				RandomPostComponent.idDepart=undefined;
				TopPostComponent.idDepart=undefined;
				SearchComponent.idDepart=undefined;
			}

}
