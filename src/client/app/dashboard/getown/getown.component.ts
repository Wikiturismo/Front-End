import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { GetTownservice } from './getown.service';
import {Commenttowns} from './commenttown';

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
	CommentCreat = new Commenttowns(undefined,true,'',undefined,2,undefined,);
	comments;
	errorMessage: string;
	constructor(private getownservice: GetTownservice) {
		this.getownservice.getPlace99("tunja").subscribe(
			res =>
			 {
				 this.Explace = res;
				 this.namePlace = this.Explace[0].name;
				 this.CommentCreat.town_id = this.Explace[0].id;
				 this.CommentCreat.depart_id = this.Explace[0].depart.id;
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
		 		 				this.CommentCreat.id=this.counter[0].count+1;
		 		 				//console.log(this.postCreat);
		 		 			}
		 		 		);
	}

	createComment(){
		if (!this.CommentCreat) { return; }
		this.getownservice.NewComment(this.CommentCreat)
				.subscribe(
				commenttowns => this.CommentCreat,
				error => this.errorMessage = <any>error);
				console.log(this.CommentCreat);
	}
}
