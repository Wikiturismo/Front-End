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
	countimg=[];
	towns;
	file = undefined;
	fileName = undefined;
	formData = new FormData();
	//selectedDepart= this.cities[1];;
	postCreat = new Place(undefined, '', true, '','','','',undefined,10,undefined,2);
    errorMessage: string;
	constructor(private http: Http, private createpostservice: Createpostservice) {
		this.createpostservice.getCount().subscribe(
			data => {
				this.counter.push(data);
				this.postCreat.id=this.counter[0].count+1;
				//console.log(this.counter[0].count);
				//console.log(this.postCreat);
			}
		);
		this.createpostservice.getTowns(1).subscribe(
			data=> {this.towns= data;
			console.log(this.towns);}
		);
		this.createpostservice.getCountImages().subscribe(
				 data => {
					 this.countimg.push(data);
				 }
			 );
	}
	createPost() {
		this.placeImage(this.formData);
		if (!this.postCreat) { return; }
		this.createpostservice.createPost(this.postCreat)
				.subscribe(
				place => this.postCreat,
				error => this.errorMessage = <any>error);
	}
	fileEvent(fileInput: any) {
		this.file = fileInput.target.files[0];
		console.log(this.countimg[0].count);
		this.formData.append('id',this.countimg[0].count+1);
		this.formData.append('image', this.file);
		this.formData.append('place_id',this.postCreat.id);
		console.log(this.formData);
	}
	placeImage(form: any) {
			this.http.post('http://localhost:3000/api/v1/imageplaces', this.formData).subscribe();
	}
  onChange(depart) {
		this.createpostservice.getTowns(depart).subscribe(
			data=> {this.towns= data;
			console.log(this.towns);}
		);
  }
}
