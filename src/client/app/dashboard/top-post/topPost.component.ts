import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Wikiservice } from '../../wiki.service';


@Component({
	moduleId: module.id,
    selector: 'top-post',
    templateUrl: './top-post.component.html',
    providers: [Wikiservice]
})

export class TopPostComponent {
	places;
	constructor(private wikiservice: Wikiservice) { 
       this.wikiservice.getTopPlaces().subscribe(res => this.places = res);
      }
}
