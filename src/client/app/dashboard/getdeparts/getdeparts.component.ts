import { Component } from '@angular/core';
import { Getdepartssservice } from './Getdeparts.service';
import { DepartmentsComponent } from '../departments/departments.component';
import { GetTownComponent } from '../getown/getown.component';
import { ToptownComponent } from '../toptown/toptown.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';
import { SearchComponent } from '../search/search.component';

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
		} else if(SearchComponent.idDepart!==undefined) {
			this.paramid = SearchComponent.idDepart;
		} else if(ToptownComponent.idDepart!==undefined) {
			this.paramid = ToptownComponent.idDepart;
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
	}
	goTown(id: number) {
		GetDepartsComponent.idTown=id;
		ToptownComponent.idTown=undefined;
		RecentPostComponent.idTown=undefined;
		GetPlacesComponent.idTown=undefined;
		RandomPostComponent.idTown=undefined;
		TopPostComponent.idTown=undefined;
		SearchComponent.idTown=undefined;
	}
}
