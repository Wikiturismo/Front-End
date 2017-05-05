import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Sidebarservice } from './sidebar.service';

@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.html',
	providers: [Sidebarservice]
})

export class SidebarComponent {
	user = [];
	imgen;
	errorMessage: string;
	constructor(private sidebarservice: Sidebarservice) {
			this.sidebarservice.getUser2().subscribe(
				data =>{
					this.user.push(data)
					this.imgen=this.user[0].imageusers;
				}
			);
		}

	showMenu: string = '';
	addExpandClass(element: any) {
		if (element === this.showMenu) {
			this.showMenu = '0';
		} else {
			this.showMenu = element;
		}
	}
}
