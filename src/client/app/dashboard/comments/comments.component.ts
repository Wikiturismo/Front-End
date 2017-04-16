import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Wikiservice } from '../../wiki.service';

@Component({
	moduleId: module.id,
    selector: 'comments',
    templateUrl: './comments.component.html',
    providers: [Wikiservice]
})

export class CommentsComponent {
	CommsPlace;
	constructor(private wikiservice: Wikiservice) { 
       this.wikiservice.getPlace99().subscribe(res => this.CommsPlace = res.json().data);
      }

}
