import { Component } from '@angular/core';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { Router } from '@angular/router';
import { GetTownComponent } from '../getown/getown.component';

@Component({
	moduleId: module.id,
    selector: 'contactus',
		providers: [GetPlacesComponent,GetTownComponent],
    templateUrl: './contact-Us.component.html'
})

export class ContactUSComponent {
	constructor(private router: Router){
		if (GetPlacesComponent.lawea === 1){
			this.router.navigate(['/dashboard/getplaces']);
		}
		if (GetTownComponent.lawea2 === 1){
			this.router.navigate(['/dashboard/getowns']);
		}
	}
}
