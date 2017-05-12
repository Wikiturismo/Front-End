import { Component } from '@angular/core';
import { TopPostservice } from './topPost.service';
import { Getplacesservice } from '../getplaces/Getplaces.service';


@Component({
	moduleId: module.id,
    selector: 'top-post',
    templateUrl: './top-post.component.html',
    providers: [TopPostservice,Getplacesservice],
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

export class TopPostComponent {
	static nombrePlace='';
	places;
	constructor(private topPostservice: TopPostservice, private getplacesservice: Getplacesservice) {
       this.topPostservice.getTopPlaces().subscribe(res => this.places = res);
      }
			goPlace(name: string) {
				TopPostComponent.nombrePlace=name;
				this.getplacesservice.sendName(name);
			}
}
