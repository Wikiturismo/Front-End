import { Component } from '@angular/core';
import { Toptownservice } from './toptown.service';
import { GetTownservice } from '../getown/getown.service';

@Component({
	moduleId: module.id,
    selector: 'toptown',
    templateUrl: './toptown.component.html',
    providers: [Toptownservice, GetTownservice],
		styles: [`
			.carousel{
			    overflow:hidden;
			    width:100%;
					height:400px;
			}
			.slides{
			    list-style:none;
			    position:relative;
			}
			.slides > li{
			    position:relative;
			    float:left;
			}
			.carousel img{
			    display:block;
			    width:600px;
			    max-width:600px;
					height:400px;
			    max-height:400px;
			}
	  `],
})

export class ToptownComponent {
	static idTown=undefined;
	topt;
	constructor(private toptownservice: Toptownservice,private gettownssservice: GetTownservice) {
       this.toptownservice.getTopTowns().subscribe(res => this.topt = res);
      }
			goTown(id: number) {
				ToptownComponent.idTown=id;
			}

}
