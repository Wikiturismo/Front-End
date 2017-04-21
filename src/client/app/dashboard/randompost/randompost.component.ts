import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { RandomPostservice } from './randompost.service';


@Component({
	moduleId: module.id,
    selector: 'randompost',
    templateUrl: './randompost.component.html',
    providers: [RandomPostservice]
})

export class RandomPostComponent {
	places;
	constructor(private randomPostservice: RandomPostservice) {
		this.randomPostservice.getRandomPlaces().subscribe(res => this.places = res);
      }
}
