import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Createpostservice } from './createpost.service';
import {Place} from './place';

@Component({
	moduleId: module.id,
    selector: 'createpost',
    templateUrl: './createpost.component.html',
    providers: [Createpostservice]
})

export class CreatePostComponent {
	counter=[];
	towns;
	postCreat = new Place(undefined, '', true, '','','','',undefined,10,undefined,2);
    errorMessage: string;
	constructor(private createpostservice: Createpostservice) {
		this.createpostservice.getCount().subscribe(
			data =>{
				this.counter.push(data)
				this.postCreat.id=this.counter[0].count;
				//console.log(this.counter[0].count);
				//console.log(this.postCreat);
			}
		);
		this.createpostservice.getTowns().subscribe(
			data=> {this.towns= data;
			console.log(this.towns);}
		)
	}
	createPost(){
		if (!this.postCreat) { return; }
		this.createpostservice.createPost(this.postCreat)
				.subscribe(
				place => this.postCreat,
				error => this.errorMessage = <any>error);
	}
}
