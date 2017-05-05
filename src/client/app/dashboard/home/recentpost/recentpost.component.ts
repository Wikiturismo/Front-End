import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Recentpostservice } from './Recentpost.service';
import { Getplacesservice } from '../../getplaces/Getplaces.service';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'recentpost-cmp',
	templateUrl: 'recentpost.component.html',
	providers: [Recentpostservice,Getplacesservice]
})

export class RecentPostComponent {
	placesLast;
	static nombrePlace='';
	constructor(private recentpostservice: Recentpostservice, private getplacesservice: Getplacesservice) {

    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	this.recentpostservice.getLastPlaces().subscribe(res => this.placesLast = res);
	}
	goPlace(name: string){
		RecentPostComponent.nombrePlace=name;
		this.getplacesservice.sendName(name);
	}
}
