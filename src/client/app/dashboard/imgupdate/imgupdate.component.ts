import { Component } from '@angular/core';
import { Imgupdateservice } from '../imgupdate/Imgupdate.service';
import { GetPlacesComponent } from '../getplaces/getplaces.component';


@Component({
	moduleId: module.id,
	selector: 'imgupdate-cmp',
	templateUrl: 'imgupdate.component.html',
	providers: [Imgupdateservice],
})

export class ImgupdateComponent {
	places;
	img = GetPlacesComponent.images;

	constructor(private imgupdateservice: Imgupdateservice) {
			console.log("esta id es: " + GetPlacesComponent.idGlobal);
			console.log("images: " + 	JSON.stringify(this.img));
			 this.imgupdateservice.getPlace(GetPlacesComponent.idGlobal).subscribe(res => this.places = res);

			}


}
