import { Component } from '@angular/core';
import { RandomPostservice } from './randompost.service';
import { Getplacesservice } from '../getplaces/Getplaces.service';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { TopPostComponent } from '../top-post/topPost.component';
import { GetTownComponent } from '../getown/getown.component';
import { SearchComponent } from '../search/search.component';
import { ToptownComponent } from '../toptown/toptown.component';
import { GetDepartsComponent } from '../getdeparts/getdeparts.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { DepartmentsComponent } from '../departments/departments.component';

@Component({
	moduleId: module.id,
    selector: 'randompost',
    templateUrl: './randompost.component.html',
    providers: [RandomPostservice, Getplacesservice],
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

export class RandomPostComponent {
	static idPlace=undefined;
	static idDepart=undefined;
	static idTown=undefined;
	places;
	constructor(private randomPostservice: RandomPostservice, private getplacesservice: Getplacesservice) {
		this.randomPostservice.getRandomPlaces().subscribe(res => this.places = res);
      }
			goPlace(id: number) {
				RandomPostComponent.idPlace=id;
				RecentPostComponent.idPlace=undefined;
				TopPostComponent.idPlace=undefined;
				GetTownComponent.idPlace=undefined;
				SearchComponent.idPlace=undefined;
			}
			goDepart(id: number) {
				RandomPostComponent.idDepart=id;
				RecentPostComponent.idDepart=undefined;
				DepartmentsComponent.idDepart=undefined;
				GetPlacesComponent.idDepart=undefined;
				GetTownComponent.idDepart=undefined;
				TopPostComponent.idDepart=undefined;
				SearchComponent.idDepart=undefined;
			}
			goTown(id: number) {
				RandomPostComponent.idTown=id;
				ToptownComponent.idTown=undefined;
				GetDepartsComponent.idTown=undefined;
				RecentPostComponent.idTown=undefined;
				GetPlacesComponent.idTown=undefined;
				TopPostComponent.idTown=undefined;
				SearchComponent.idTown=undefined;
			}
}
