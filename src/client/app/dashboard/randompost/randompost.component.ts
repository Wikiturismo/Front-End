import { Component } from '@angular/core';
import { RandomPostservice } from './randompost.service';
import { Getplacesservice } from '../getplaces/Getplaces.service';


@Component({
	moduleId: module.id,
    selector: 'randompost',
    templateUrl: './randompost.component.html',
    providers: [RandomPostservice, Getplacesservice],
		styles: [`
	.carousel{
	    overflow:hidden;
	    width:100%;
			height:500px;
	}
	.slides{
	    list-style:none;
	    position:relative;
	}
	.slides > li{
	    position:relative;
	    float:left;
	}
	.carousel img{
	    display:block;
	    width:100%;
	    max-width:100%;
			height:100%;
	    max-height:500px;
	}
	  `],
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
