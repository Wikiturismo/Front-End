import { Component } from '@angular/core';
import { Searchservice } from './search.service';
import { HomeComponent } from '../home/home.component';

@Component({
	moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html',
    providers: [Searchservice],
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

export class SearchComponent {
	static idPlace=undefined;
	static idDepart=undefined;
	static idTown=undefined;
	param;
	Explace;
	Extown;
	Exdepart;
	len3;
	len2;
	len1;
	constructor(private searchservice: Searchservice) {
		this.param=HomeComponent.searchKey;
		this.searchservice.getPlace(HomeComponent.searchKey).subscribe(
			res => {
				this.Explace = res;
				this.len3=this.Explace.length;
			}
			);
			this.searchservice.getTown(HomeComponent.searchKey).subscribe(
				res => {
					this.Extown= res;
					this.len2=this.Extown.length;
				}
				);
				this.searchservice.getDepart(HomeComponent.searchKey).subscribe(
					res => {
						this.Exdepart= res;
						this.len1=this.Exdepart.length;
					}
					);

	}
	goPlace(id: number) {
		SearchComponent.idPlace=id;
	}
	goDepart(id: number) {
		SearchComponent.idDepart=id;
	}
	goTown(id: number) {
		SearchComponent.idTown=id;
	}

}
