import { Component } from '@angular/core';
import { Router } from '@angular/router';
/**
*	This class represents the lazy loaded HomeComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'home-cmp',
	templateUrl: 'home.component.html'
})

export class HomeComponent {
	static searchKey='';
	param='';
	constructor(private router: Router) {
	}
	search() {
		HomeComponent.searchKey=this.param;
		console.log(this.param);
		console.log(HomeComponent.searchKey);
		this.router.navigate(['/dashboard/search']);
	}
}
