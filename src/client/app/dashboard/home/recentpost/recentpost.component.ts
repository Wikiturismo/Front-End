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
		height:400px;
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
    width:600px;
    max-width:600px;
		height:400px;
    max-height:400px;
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
