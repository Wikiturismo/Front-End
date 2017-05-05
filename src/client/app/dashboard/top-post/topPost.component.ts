import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TopPostservice } from './topPost.service';
import { Getplacesservice } from '../getplaces/Getplaces.service';


@Component({
	moduleId: module.id,
    selector: 'top-post',
    templateUrl: './top-post.component.html',
    providers: [TopPostservice,Getplacesservice]
})

export class TopPostComponent {
	places;
	static nombrePlace='';
	constructor(private topPostservice: TopPostservice, private getplacesservice: Getplacesservice) {
       this.topPostservice.getTopPlaces().subscribe(res => this.places = res);
      }
			goPlace(name: string){
				TopPostComponent.nombrePlace=name;
				this.getplacesservice.sendName(name);
			}
}
