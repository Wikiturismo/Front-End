import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Wikiservice } from '../../../wiki.service';

/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'recentpost-cmp',
	templateUrl: 'recentpost.component.html',
	providers: [Wikiservice]
})

export class RecentPostComponent {
	placesLast;
	constructor(private wikiservice: Wikiservice) { 
	
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	this.wikiservice.getLastPlaces().subscribe(res => this.placesLast = res);
	}
}
