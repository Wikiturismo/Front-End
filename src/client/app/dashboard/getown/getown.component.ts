import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { GetTownservice } from './getown.service';
import {Comment} from './comment';

@Component({
	moduleId: module.id,
    selector: 'getown',
    templateUrl: './getown.component.html',
    providers: [GetTownservice]
})

export class GetTownComponent {
	counter=[];
	Explace;
	namePlace : String;
	CommentCreat = new Comment(undefined,true,'',undefined,undefined,2,undefined,);
	comments;
	errorMessage: string;
	constructor(private getownservice: GetTownservice) {
		this.getownservice.getPlace99("hotel taroa").subscribe(
			res =>
			 {
				 this.Explace = res;
				 this.namePlace = this.Explace[0].name;
				 this.CommentCreat.town_id = this.Explace[0].town_id;
				 this.CommentCreat.place_id = this.Explace[0].id;
				 this.CommentCreat.depart_id = this.Explace[0].depart_id;
			 }
			 );
		this.getownservice.getComments().subscribe(
	 			res =>
	 			 {
	 				 this.comments = res;
	 			 }
	 			 );
		this.getownservice.getCountComments().subscribe(
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
		this.getownservice.NewComment(this.CommentCreat)
				.subscribe(
				commentplaces => this.CommentCreat,
				error => this.errorMessage = <any>error);
	}
}
