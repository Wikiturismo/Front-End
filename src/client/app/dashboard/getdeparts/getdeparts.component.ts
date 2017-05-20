import { Component } from '@angular/core';
import { Getdepartssservice } from './Getdeparts.service';
import { DepartmentsComponent } from '../departments/departments.component';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { GetTownComponent } from '../getown/getown.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';

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
	static idTown=undefined;
	counter=[];
	Explace=[];
	LastTowns;
	paramid;
	errorMessage: string;
	constructor(private getdepartsservice: Getdepartssservice) {
		if(DepartmentsComponent.idDepart!==undefined) {
			this.paramid = DepartmentsComponent.idDepart;
		}else if(RecentPostComponent.idDepart!==undefined) {
			this.paramid = RecentPostComponent.idDepart;
		}else if(GetPlacesComponent.idDepart!==undefined) {
			this.paramid = GetPlacesComponent.idDepart;
		}else if(GetTownComponent.idDepart!==undefined) {
			this.paramid = GetTownComponent.idDepart;
		}else if(RandomPostComponent.idDepart!==undefined) {
			this.paramid = RandomPostComponent.idDepart;
		}else if(TopPostComponent.idDepart!==undefined) {
			this.paramid = TopPostComponent.idDepart;
		}
		this.getdepartsservice.getDepart(this.paramid).subscribe(
			res => {
				 this.Explace[0] = res;
			 }
			 );
			 this.getdepartsservice.getLastTowns(this.paramid).subscribe(
	 			res => {
	 				 this.LastTowns = res;
	 			 }
	 			 );
		RecentPostComponent.idDepart=undefined;
		DepartmentsComponent.idDepart=undefined;
		GetPlacesComponent.idDepart=undefined;
		GetTownComponent.idDepart=undefined;
		RandomPostComponent.idDepart=undefined;
		TopPostComponent.idDepart=undefined;
	}
	goTown(id: number) {
		GetDepartsComponent.idTown=id;
	}
}
