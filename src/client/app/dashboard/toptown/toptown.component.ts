import { Component } from '@angular/core';
import { Toptownservice } from './toptown.service';
import { GetTownservice } from '../getown/getown.service';
import { GetDepartsComponent } from '../getdeparts/getdeparts.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { GetTownComponent } from '../getown/getown.component';
import { DepartmentsComponent } from '../departments/departments.component';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';
import { SearchComponent } from '../search/search.component';

@Component({
	moduleId: module.id,
    selector: 'toptown',
    templateUrl: './toptown.component.html',
    providers: [Toptownservice, GetTownservice],
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

export class ToptownComponent {
	static idTown=undefined;
	static idDepart=undefined;
	topt;
	constructor(private toptownservice: Toptownservice,private gettownssservice: GetTownservice) {
       this.toptownservice.getTopTowns().subscribe(res => this.topt = res);
      }
			goTown(id: number) {
				ToptownComponent.idTown=id;
				GetDepartsComponent.idTown=undefined;
				RecentPostComponent.idTown=undefined;
				GetPlacesComponent.idTown=undefined;
				RandomPostComponent.idTown=undefined;
				TopPostComponent.idTown=undefined;
				SearchComponent.idTown=undefined;
			}
			goDepart(id: number) {
				ToptownComponent.idDepart=id;
				GetTownComponent.idDepart=undefined;
				RecentPostComponent.idDepart=undefined;
				DepartmentsComponent.idDepart=undefined;
				GetPlacesComponent.idDepart=undefined;
				RandomPostComponent.idDepart=undefined;
				TopPostComponent.idDepart=undefined;
				SearchComponent.idDepart=undefined;
			}

}
