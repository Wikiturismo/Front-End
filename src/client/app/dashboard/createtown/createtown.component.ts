import { Component } from '@angular/core';
import { Createtownservice } from './createtown.service';
import { Http } from '@angular/http';
import {Town} from './town';
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'createtown',
    templateUrl: './createtown.component.html',
		providers: [Createtownservice]
})

export class CreateTownComponent {
	counter=[];
	countimg=[];
	namePlace : String;
	file = undefined;
	fileName = undefined;
	formData = new FormData();
	TownCreat = new Town(undefined,'','',undefined,undefined,'',true,true,undefined);
	errorMessage: string;
	constructor(private http: Http, private createtownservice: Createtownservice,private router: Router) {
		this.createtownservice.getCountTowns().subscribe(
		 			data => {
		 				this.counter.push(data);
		 				this.TownCreat.id=this.counter[0].count+1;
		 				//console.log(this.counter);
		 				//console.log(this.postCreat);
		 			}
		 		);
				this.createtownservice.getCountImages().subscribe(
						 data => {
							 this.countimg.push(data);
						 }
					 );
	}
	fileEvent(fileInput: any) {
		this.file = fileInput.target.files[0];
		console.log(this.countimg[0].count);
		this.formData.append('id',this.countimg[0].count+1);
		this.formData.append('image', this.file);
		this.formData.append('town_id',this.TownCreat.id);
		console.log(this.formData);
	}
	townImage(form: any) {
			this.http.post('http://localhost:3000/api/v1/imagetowns', this.formData).subscribe(
		() =>this.router.navigate(['/dashboard/home']));
	}
	createTown() {
		if (!this.TownCreat) { return; }
		this.createtownservice.NewTown(this.TownCreat)
				.subscribe(
				towns => this.TownCreat,
				error => this.errorMessage = <any>error,
			()=> 	this.townImage(this.formData));
	}

}
