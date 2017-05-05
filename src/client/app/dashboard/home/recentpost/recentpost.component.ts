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
	providers: [Recentpostservice,Getplacesservice],
	styles: [`
.carousel{
    overflow:hidden;
    width:100%;
}
.slides{
    list-style:none;
    position:relative;
    width:500%; /* Number of panes * 100% */
    overflow:hidden; /* Clear floats */
        /* Slide effect Animations*/
    -moz-animation:carousel 16s infinite;
    -webkit-animation:carousel 16s infinite;
    animation:carousel 16s infinite;
}
.slides > li{
    position:relative;
    float:left;
    width: 20%; /* 100 / number of panes */
}
.carousel img{
    display:block;
    width:100%;
    max-width:100%;
}
@keyframes carousel{
    0%    { left:-5%; }
    11%   { left:-5%; }
    12.5% { left:-105%; }
    23.5% { left:-105%; }
    25%   { left:-205%; }
    36%   { left:-205%; }
    37.5% { left:-305%; }
    48.5% { left:-305%; }
    50%   { left:-405%; }
    61%   { left:-405%; }
    62.5% { left:-305%; }
    73.5% { left:-305%; }
    75%   { left:-205%; }
    86%   { left:-205%; }
    87.5% { left:-105%; }
    98.5% { left:-105%; }
    100%  { left:-5%; }
}
  `],
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
