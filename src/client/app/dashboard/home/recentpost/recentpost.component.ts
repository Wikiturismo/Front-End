import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Recentpostservice } from './Recentpost.service';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'recentpost-cmp',
	templateUrl: 'recentpost.component.html',
	providers: [Recentpostservice]
})

export class RecentPostComponent {
	placesLast;
	constructor(private recentpostservice: Recentpostservice) { 
	
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	this.recentpostservice.getLastPlaces().subscribe(res => this.placesLast = res);
	}
}
