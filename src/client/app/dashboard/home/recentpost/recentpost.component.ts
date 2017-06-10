import { Component } from '@angular/core';
import { Recentpostservice } from './Recentpost.service';
import { Getplacesservice } from '../../getplaces/Getplaces.service';
import { RandomPostComponent } from '../../randompost/randompost.component';
import { TopPostComponent } from '../../top-post/topPost.component';
import { GetTownComponent } from '../../getown/getown.component';
import { SearchComponent } from '../../search/search.component';
import { ToptownComponent } from '../../toptown/toptown.component';
import { GetDepartsComponent } from '../../getdeparts/getdeparts.component';
import { GetPlacesComponent } from '../../getplaces/getplaces.component';
import { DepartmentsComponent } from '../../departments/departments.component';
/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'recentpost-cmp',
	templateUrl: 'recentpost.component.html',
	providers: [Recentpostservice,Getplacesservice],
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

export class RecentPostComponent {
	static idPlace=undefined;
	static idDepart=undefined;
	static idTown=undefined;
	placesLast;
	constructor(private recentpostservice: Recentpostservice, private getplacesservice: Getplacesservice) {
	this.recentpostservice.getLastPlaces().subscribe(res => this.placesLast = res);
	}
	goPlace(id: number) {
		RecentPostComponent.idPlace=id;
		RandomPostComponent.idPlace=undefined;
		TopPostComponent.idPlace=undefined;
		GetTownComponent.idPlace=undefined;
		SearchComponent.idPlace=undefined;
	}
	goDepart(id: number) {
		RecentPostComponent.idDepart=id;
		DepartmentsComponent.idDepart=undefined;
		GetPlacesComponent.idDepart=undefined;
		GetTownComponent.idDepart=undefined;
		RandomPostComponent.idDepart=undefined;
		TopPostComponent.idDepart=undefined;
		SearchComponent.idDepart=undefined;
	}
	goTown(id: number) {
		RecentPostComponent.idTown=id;
		ToptownComponent.idTown=undefined;
		GetDepartsComponent.idTown=undefined;
		GetPlacesComponent.idTown=undefined;
		RandomPostComponent.idTown=undefined;
		TopPostComponent.idTown=undefined;
		SearchComponent.idTown=undefined;
	}
}
