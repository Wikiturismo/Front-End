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
	static filter='';
	param='';
	paramfilter='Filtros';
	constructor(private router: Router) {
	}
	search() {
		HomeComponent.searchKey=this.param;
		HomeComponent.filter=this.paramfilter;
		this.router.navigate(['/dashboard/search']);
	}
}
