import { Component } from '@angular/core';
import { Recentpostservice } from './Recentpost.service';
import { Getplacesservice } from '../../getplaces/Getplaces.service';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'recentpost-cmp',
	templateUrl: 'recentpost.component.html',
	providers: [Recentpostservice,Getplacesservice],
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

export class RecentPostComponent {
	static nombrePlace='';
	placesLast;
	constructor(private recentpostservice: Recentpostservice, private getplacesservice: Getplacesservice) {
	this.recentpostservice.getLastPlaces().subscribe(res => this.placesLast = res);
	}
	goPlace(name: string) {
		RecentPostComponent.nombrePlace=name;
		this.getplacesservice.sendName(name);
	}
}
