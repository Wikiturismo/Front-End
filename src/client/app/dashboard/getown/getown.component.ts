import { Component } from '@angular/core';
import { GetTownservice } from './getown.service';
import {Commenttowns} from './commenttown';
import { ToptownComponent } from '../toptown/toptown.component';
import { GetDepartsComponent } from '../getdeparts/getdeparts.component';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';

@Component({
	moduleId: module.id,
    selector: 'getown',
    templateUrl: './getown.component.html',
    providers: [GetTownservice],
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

export class GetTownComponent {
	static idPlace=undefined;
	static idDepart=undefined;
	counter=[];
	Explace=[];
	namePlace : String;
	CommentCreat = new Commenttowns(undefined,true,'',undefined,2,undefined,);
	comments;
	paramid;
	LastPlaces;
	errorMessage: string;
	constructor(private getownservice: GetTownservice) {
		if(ToptownComponent.idTown!==undefined) {
			this.paramid = ToptownComponent.idTown;
		}else if(GetDepartsComponent.idTown!==undefined) {
			this.paramid = GetDepartsComponent.idTown;
		}else if(RecentPostComponent.idTown!==undefined) {
			this.paramid = RecentPostComponent.idTown;
		}else if(GetPlacesComponent.idTown!==undefined) {
			this.paramid = GetPlacesComponent.idTown;
		}else if(RandomPostComponent.idTown!==undefined) {
			this.paramid = RandomPostComponent.idTown;
		}else if(TopPostComponent.idTown!==undefined) {
			this.paramid = TopPostComponent.idTown;
		}
		this.getownservice.getTowns(this.paramid).subscribe(
			res => {
				 this.Explace[0] = res;
				 this.namePlace = this.Explace[0].name;
				 this.CommentCreat.town_id = this.Explace[0].id;
				 this.CommentCreat.depart_id = this.Explace[0].depart.id;
			 }
			 );
		this.getownservice.getComments(this.paramid).subscribe(
	 			res => {
	 				 this.comments = res;
	 			 }
	 			 );
		this.getownservice.getCountComments().subscribe(
		 			data => {
		 				this.counter.push(data);
		 				this.CommentCreat.id=this.counter[0].count+1;
		 				//console.log(this.postCreat);
		 			}
				);
		this.getownservice.getLastPlaces(this.paramid).subscribe(
					res => {
		 	 				 this.LastPlaces = res;
		 	 			 }
		 	 			 );
						 ToptownComponent.idTown=undefined;
						 GetDepartsComponent.idTown=undefined;
						 RecentPostComponent.idTown=undefined;
						 GetPlacesComponent.idTown=undefined;
						 RandomPostComponent.idTown=undefined;
						 TopPostComponent.idTown=undefined;
	}
	createComment() {
		if (!this.CommentCreat) { return; }
		this.getownservice.NewComment(this.CommentCreat)
				.subscribe(
				commenttowns => this.CommentCreat,
				error => this.errorMessage = <any>error);
				console.log(this.CommentCreat);
	}
	goPlace(id: number) {
		GetTownComponent.idPlace=id;
	}
	goDepart(id: number) {
		GetTownComponent.idDepart=id;
	}
}
