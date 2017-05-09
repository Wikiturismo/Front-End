import { Component } from '@angular/core';
import { Getplacesservice } from './Getplaces.service';
import {Comment} from './comment';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';


@Component({
	moduleId: module.id,
    selector: 'getplaces',
    templateUrl: './getplaces.component.html',
    providers: [Getplacesservice]

})

export class GetPlacesComponent {
	counter=[];
	paramname;
	Explace;
	namePlace : String;
	CommentCreat = new Comment(undefined,true,'',undefined,undefined,2,undefined,);
	comments;
	errorMessage: string;
	constructor(private getplacesservice: Getplacesservice) {
		if(RecentPostComponent.nombrePlace!=='') {
			this.paramname = RecentPostComponent.nombrePlace;
		}else if(RandomPostComponent.nombrePlace!=='') {
			this.paramname = RandomPostComponent.nombrePlace;
		}else if(TopPostComponent.nombrePlace!=='') {
			this.paramname = TopPostComponent.nombrePlace;
		}

		this.getplacesservice.getPlace99(this.paramname).subscribe(
			res => {
				 this.Explace = res;
				 this.namePlace = this.Explace[0].name;
				 this.CommentCreat.town_id = this.Explace[0].town.id;
				 this.CommentCreat.place_id = this.Explace[0].id;
				 this.CommentCreat.depart_id = this.Explace[0].depart.id;
			 }
			 );
		this.getplacesservice.getComments(this.paramname).subscribe(
	 			res => {
	 				 this.comments = res;
					 console.log(this.comments[0].user.id);
	 			 }
	 			 );
		this.getplacesservice.getCountComments().subscribe(
		 			data => {
		 				this.counter.push(data);
		 				this.CommentCreat.id=this.counter[0].count+1;
		 				//console.log(this.postCreat);
		 			}
		 		);
			RecentPostComponent.nombrePlace='';
			RandomPostComponent.nombrePlace='';
	}

	createComment() {
		if (!this.CommentCreat) { return; }
		this.getplacesservice.NewComment(this.CommentCreat)
				.subscribe(
				commentplaces => this.CommentCreat,
				error => this.errorMessage = <any>error);
	}
}
