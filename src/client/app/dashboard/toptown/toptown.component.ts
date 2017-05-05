import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Toptownservice } from './toptown.service';



@Component({
	moduleId: module.id,
    selector: 'toptown',
    templateUrl: './toptown.component.html',
    providers: [Toptownservice]
})

export class ToptownComponent {
	topt;
	constructor(private toptownservice: Toptownservice) {
       this.toptownservice.getTopTowns().subscribe(res => this.topt = res);
      }

}
