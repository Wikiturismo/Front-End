import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TopPostservice } from './topPost.service';


@Component({
	moduleId: module.id,
    selector: 'top-post',
    templateUrl: './top-post.component.html',
    providers: [TopPostservice]
})

export class TopPostComponent {
	places;
	constructor(private topPostservice: TopPostservice) { 
       this.topPostservice.getTopPlaces().subscribe(res => this.places = res);
      }
}
