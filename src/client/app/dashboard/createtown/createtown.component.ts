import { Component } from '@angular/core';
import { Createtownservice } from './createtown.service';
import {Town} from './town';

@Component({
	moduleId: module.id,
    selector: 'createtown',
    templateUrl: './createtown.component.html',
		providers: [Createtownservice]
})

export class CreateTownComponent {
	counter=[];
	namePlace : String;
	TownCreat = new Town(undefined,'','',undefined,undefined,'',true,true,undefined);
	errorMessage: string;
	constructor(private createtownservice: Createtownservice) {
		this.createtownservice.getCountTowns().subscribe(
		 			data => {
		 				this.counter.push(data);
		 				this.TownCreat.id=this.counter[0].count+1;
		 				//console.log(this.counter);
		 				//console.log(this.postCreat);
		 			}
		 		);
	}

	createTown() {
		if (!this.TownCreat) { return; }
		this.createtownservice.NewTown(this.TownCreat)
				.subscribe(
				towns => this.TownCreat,
				error => this.errorMessage = <any>error);
	}

}
