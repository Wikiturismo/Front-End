import { Component } from '@angular/core';
import { Imgupdateservice } from '../imgupdate/Imgupdate.service';
import { GetPlacesComponent } from '../getplaces/getplaces.component';
import { GetTownComponent } from '../getown/getown.component';

@Component({
	moduleId: module.id,
	selector: 'imgupdate-cmp',
	templateUrl: 'imgupdate.component.html',
	providers: [Imgupdateservice],
})

export class ImgupdateComponent {
	places;
	imgpla = GetPlacesComponent.images;
	imgtowns = GetTownComponent.images;
	img;

	constructor(private imgupdateservice: Imgupdateservice) {
			//console.log("esta id es: " + GetPlacesComponent.idGlobal);
			//console.log("images: " + 	JSON.stringify(this.img));
			//console.log(GetTownComponent.images);
			//console.log(this.imgpla);
			//console.log("GetTown images: " + 	JSON.stringify(GetTownComponent.images));
			//console.log("images variable: " + 	JSON.stringify(this.imgtowns));
			//console.log(this.imgtowns);

			GetPlacesComponent.images=undefined;
			console.log("getplacescmponent = "+GetPlacesComponent.images);

			if(this.imgpla!==undefined) {

				//console.log("antes place "+this.imgpla);
				//console.log("antes town"+this.imgtowns);
				this.img = this.imgpla;
				this.imgpla = undefined;
				this.imgtowns = undefined;
				//console.log("despues place "+this.imgpla);
				//console.log("despues town "+this.imgtowns);

				//console.log(GetTownComponent.images);
				//console.log(this.img);
			}else {
				//console.log("antes place "+this.imgpla);
				//console.log("antes town"+this.imgtowns);
				this.img = this.imgtowns;
				this.imgpla = undefined;
				this.imgtowns = undefined;
				//console.log("despues place "+this.imgpla);
				//console.log("despues town "+this.imgtowns);
			}
			//console.log(this.img);
			 //this.imgupdateservice.getPlace(GetPlacesComponent.idGlobal).subscribe(res => this.places = res);

			}


}
