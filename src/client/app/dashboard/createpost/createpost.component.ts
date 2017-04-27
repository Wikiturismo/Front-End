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
	postCreat = new Place(600, '', true, '','','','',undefined,10,undefined,2);
    errorMessage: string;
	constructor(private createpostservice: Createpostservice) {

	}
	createPost(){
		if (!this.postCreat) { return; }
		this.createpostservice.createPost(this.postCreat)
				.subscribe(
				place => this.postCreat,
				error => this.errorMessage = <any>error);
	}
}
