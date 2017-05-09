import { Component } from '@angular/core';
import { Toptownservice } from './toptown.service';
import { GetTownservice } from '../getown/getown.service';

@Component({
	moduleId: module.id,
    selector: 'toptown',
    templateUrl: './toptown.component.html',
    providers: [Toptownservice, GetTownservice]
})

export class ToptownComponent {
	static nombreTown='';
	topt;
	constructor(private toptownservice: Toptownservice,private gettownssservice: GetTownservice) {
       this.toptownservice.getTopTowns().subscribe(res => this.topt = res);
      }
			goTown(name: string) {
				ToptownComponent.nombreTown=name;
				this.gettownssservice.sendName(name);
			}

}
