import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Createpostservice } from './createpost.service';

@Component({
	moduleId: module.id,
    selector: 'createpost',
    templateUrl: './createpost.component.html',
    providers: [Createpostservice]
})

export class CreatePostComponent {
	Explace;
	constructor(private createpostservice: Createpostservice) {
		
	}
}
