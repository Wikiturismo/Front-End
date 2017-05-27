import { Component } from '@angular/core';
import { Searchservice } from './search.service';
import { HomeComponent } from '../home/home.component';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';
import { GetTownComponent } from '../getown/getown.component';
import { ToptownComponent } from '../toptown/toptown.component';
import { GetDepartsComponent } from '../getdeparts/getdeparts.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { DepartmentsComponent } from '../departments/departments.component';

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html',
    providers: [Searchservice],
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

export class SearchComponent {
	static idPlace=undefined;
	static idDepart=undefined;
	static idTown=undefined;
	all=false;
	dep=false;
	tow=false;
	pla=false;
	param;
	filt;
	Explace;
	Extown;
	Exdepart;
	len3;
	len2;
	len1;
	constructor(private searchservice: Searchservice) {
		this.param=HomeComponent.searchKey;
		this.filt=HomeComponent.filter;
		if(this.filt==='Filtros') {
			this.dep=true;
			this.tow=true;
			this.pla=true;
			this.all=true;
		}else if(this.filt==='Departamentos') {
			this.dep=true;
		}else if(this.filt==='Ciudades') {
			this.tow=true;
		}else if(this.filt==='Lugares') {
			this.pla=true;
		}
		if(this.pla===true) {
			this.searchservice.getPlace(HomeComponent.searchKey).subscribe(
				res => {
					this.Explace = res;
					this.len3=this.Explace.length;
				}
				);
		}
		if(this.tow===true) {
			this.searchservice.getTown(HomeComponent.searchKey).subscribe(
				res => {
					this.Extown= res;
					this.len2=this.Extown.length;
				}
				);
		}
			if(this.dep===true) {
				this.searchservice.getDepart(HomeComponent.searchKey).subscribe(
					res => {
						this.Exdepart= res;
						this.len1=this.Exdepart.length;
					}
					);
			}
	}
	goPlace(id: number) {
		SearchComponent.idPlace=id;
		RecentPostComponent.idPlace=undefined;
		RandomPostComponent.idPlace=undefined;
		TopPostComponent.idPlace=undefined;
		GetTownComponent.idPlace=undefined;
	}
	goDepart(id: number) {
		SearchComponent.idDepart=id;
		RecentPostComponent.idDepart=undefined;
		DepartmentsComponent.idDepart=undefined;
		GetPlacesComponent.idDepart=undefined;
		GetTownComponent.idDepart=undefined;
		RandomPostComponent.idDepart=undefined;
		TopPostComponent.idDepart=undefined;
	}
	goTown(id: number) {
		SearchComponent.idTown=id;
		ToptownComponent.idTown=undefined;
		GetDepartsComponent.idTown=undefined;
		RecentPostComponent.idTown=undefined;
		GetPlacesComponent.idTown=undefined;
		RandomPostComponent.idTown=undefined;
		TopPostComponent.idTown=undefined;
	}

}
