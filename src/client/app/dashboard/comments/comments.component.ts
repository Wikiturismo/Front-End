import { Component } from '@angular/core';
import { Commentsservice } from './comments.service';

@Component({
	moduleId: module.id,
    selector: 'comments',
    templateUrl: './comments.component.html',
    providers: [Commentsservice]
})

export class CommentsComponent {
	CommsPlace;
	constructor(private commentsservice: Commentsservice) {

       this.commentsservice.getPlace99Com().subscribe(res => this.CommsPlace = res);
      }

}
