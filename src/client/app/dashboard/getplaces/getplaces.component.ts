import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Getplacesservice } from './Getplaces.service';
import {Comment} from './comment';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';

@Component({
	moduleId: module.id,
    selector: 'getplaces',
    templateUrl: './getplaces.component.html',
    providers: [Getplacesservice]
})

export class GetPlacesComponent {
	counter=[];
	Explace;
	namePlace : String;
	CommentCreat = new Comment(undefined,true,'',undefined,undefined,2,undefined,);
	comments;
	errorMessage: string;
	constructor(private getplacesservice: Getplacesservice) {
		this.getplacesservice.getPlace99("hotel taroa").subscribe(
			res =>
			 {
				 this.Explace = res;
				 this.namePlace = this.Explace[0].name;
				 this.CommentCreat.town_id = this.Explace[0].town_id;
				 this.CommentCreat.place_id = this.Explace[0].id;
				 this.CommentCreat.depart_id = this.Explace[0].depart_id;
			 }
			 );
		this.getplacesservice.getComments("hotel taroa").subscribe(
	 			res =>
	 			 {
	 				 this.comments = res;
	 			 }
	 			 );
		this.getplacesservice.getCountComments().subscribe(
		 			data =>{
		 				this.counter.push(data)
		 				this.CommentCreat.id=this.counter[0].count;
		 				console.log(this.counter);
		 				//console.log(this.postCreat);
		 			}
		 		);
	}

	createComment(){
		if (!this.CommentCreat) { return; }
		this.getplacesservice.NewComment(this.CommentCreat)
				.subscribe(
				commentplaces => this.CommentCreat,
				error => this.errorMessage = <any>error);
	}
}
