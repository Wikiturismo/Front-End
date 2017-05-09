import { Component } from '@angular/core';
import { RandomPostservice } from './randompost.service';
import { Getplacesservice } from '../getplaces/Getplaces.service';


@Component({
	moduleId: module.id,
    selector: 'randompost',
    templateUrl: './randompost.component.html',
    providers: [RandomPostservice, Getplacesservice]
})

export class RandomPostComponent {
	static nombrePlace='';
	places;
	constructor(private randomPostservice: RandomPostservice, private getplacesservice: Getplacesservice) {
		this.randomPostservice.getRandomPlaces().subscribe(res => this.places = res);
      }
			goPlace(name: string) {
				RandomPostComponent.nombrePlace=name;
				this.getplacesservice.sendName(name);
			}
}
