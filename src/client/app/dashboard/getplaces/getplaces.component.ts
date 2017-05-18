import { Component } from '@angular/core';
import { Getplacesservice } from './Getplaces.service';
import { Comment } from './comment';
import { RecentPostComponent } from '../home/recentpost/recentpost.component';
import { RandomPostComponent } from '../randompost/randompost.component';
import { TopPostComponent } from '../top-post/topPost.component';
import { GetTownComponent } from '../getown/getown.component';
import { Place } from './placeval';
import { Valoration } from './valoration';
import { Color } from 'ng2-charts';


@Component({
	moduleId: module.id,
    selector: 'getplaces',
    templateUrl: './getplaces.component.html',
    providers: [Getplacesservice],
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
	  `]
})

export class GetPlacesComponent {
	labels:string[] = ['Votos 1', 'Votos 2', 'Votos 3', 'Votos 4', 'Votos 5'];
  data:number[] = [0,0,0,0,0];
  type:string = 'doughnut';
  colorsEmptyObject: Array<Color> = [{}];
  datasets: any[] = [
  {
    data: this.data,
    backgroundColor: [
			'#FF2522',
      '#FF9706',
      '#FFFF3B',
      '#0622FF',
			'#1A8C19'
    ]
  }];
	valor;
	counter=[];
	countval=[];
	paramid;
	Explace=[];
	starRatingConfig;
	namePlace : String;
	placevalo= new Place(undefined,'',1,'','','','',undefined,undefined,undefined,
	undefined,undefined,undefined,undefined,undefined,undefined,undefined);
	CommentCreat = new Comment(undefined,true,'',undefined,undefined,2,undefined,);
	valora = new Valoration(undefined,undefined,undefined,2);
	comments;
	errorMessage: string;
	//######constructor
	constructor(private getplacesservice: Getplacesservice) {
		if(RecentPostComponent.idPlace!==undefined) {
			this.paramid = RecentPostComponent.idPlace;
		}else if(RandomPostComponent.idPlace!==undefined) {
			this.paramid = RandomPostComponent.idPlace;
		}else if(TopPostComponent.idPlace!==undefined) {
			this.paramid = TopPostComponent.idPlace;
		}else if(GetTownComponent.idPlace!==undefined) {
			this.paramid = GetTownComponent.idPlace;
		}

		this.getplacesservice.getPlace99(this.paramid).subscribe(
			res => {
				 this.Explace[0] = res;
				 this.namePlace = this.Explace[0].name;

				 this.placevalo.id = this.Explace[0].id;
				 //valoration
				 this.valora.place_id = this.Explace[0].id;
				 //valoration
				 this.placevalo.name = this.Explace[0].name;
				 this.placevalo.description = this.Explace[0].description;
				 this.placevalo.ubication = this.Explace[0].ubication;
				 this.placevalo.address = this.Explace[0].address;
				 this.placevalo.kind = this.Explace[0].kind;
				 this.placevalo.entrycost = this.Explace[0].entrycost;
				 this.placevalo.town_id = this.Explace[0].town_id;
				 this.placevalo.depart_id = this.Explace[0].depart_id;
				 this.placevalo.user_id = this.Explace[0].user_id;
				 this.placevalo.valoration = this.Explace[0].valoration;
				 this.placevalo.valone = this.Explace[0].valone;
				 this.placevalo.valtwo = this.Explace[0].valtwo;
				 this.placevalo.valthree = this.Explace[0].valthree;
				 this.placevalo.valfour = this.Explace[0].valfour;
				 this.placevalo.valfive = this.Explace[0].valfive;

				 this.data[0] = this.Explace[0].valone;
				 this.data[1] = this.Explace[0].valtwo;
				 this.data[2] = this.Explace[0].valthree;
				 this.data[3] = this.Explace[0].valfour;
				 this.data[4] = this.Explace[0].valfive;

				 this.CommentCreat.town_id = this.Explace[0].town.id;
				 this.CommentCreat.place_id = this.Explace[0].id;
				 this.CommentCreat.depart_id = this.Explace[0].depart.id;
				 this.starRatingConfig = {};

				this.starRatingConfig.id = 1221;
				this.starRatingConfig.rating = this.Explace[0].valoration;
				this.starRatingConfig.showHalfStars = true;
				this.starRatingConfig.numOfStars = 5;
				this.starRatingConfig.size = 'large';
				this.starRatingConfig.space = 'no';
				this.starRatingConfig.starType = 'svg';
				this.starRatingConfig.labelPosition = 'bottom';
				this.starRatingConfig.labelText = this.starRatingConfig.rating;
				this.starRatingConfig.labelVisible = true;
				this.starRatingConfig.speed = 'slow';
				this.starRatingConfig.hoverEnabled = true;
				this.starRatingConfig.direction = 'ltr';
				this.starRatingConfig.step = 0.5;
			 this.getplacesservice.getVal(this.Explace[0].id,2).subscribe(
					res => {
						 this.valor = res;
						 if(this.valor.length===0) {
							 this.starRatingConfig.disabled  = false;
							this.starRatingConfig.readOnly = false;
						 }else {
							 this.starRatingConfig.disabled  = true;
							 this.starRatingConfig.readOnly = true;
						 }
					 }
					 );
			 }
			 );
		this.getplacesservice.getComments(this.paramid).subscribe(
	 			res => {
	 				 this.comments = res;
					 console.log(this.comments);
					 //console.log(this.comments[0].user.id);
	 			 }
	 			 );
		this.getplacesservice.getCountComments().subscribe(
		 			data => {
		 				this.counter.push(data);
		 				this.CommentCreat.id=this.counter[0].count+1;
		 				//console.log(this.postCreat);
		 			}
		 		);
				this.getplacesservice.getCountVal().subscribe(
				 			data => {
				 				this.countval.push(data);
				 				this.valora.id=this.countval[0].count+1;
				 			}
				 		);
			RecentPostComponent.idPlace=undefined;
			RandomPostComponent.idPlace=undefined;
			TopPostComponent.idPlace=undefined;
			GetTownComponent.idPlace=undefined;
	}
	getColor = (rating: number, numOfStars: number, staticColor?: any) => {
		return staticColor || 'ok';
	};
	getHalfStarVisible=(rating):boolean => {
	 return Math.abs(rating % 1) > 0;
	};
	onHoverRatingChange = ($event) => {
		console.log('onHoverRatingChange $event: ', $event);
	};
	onRatingChange = ($event) => {
		console.log('onRatingUpdated $event: ', $event);
	};
	onClick = ($event) => {
		if($event.rating===1) {
			this.placevalo.valone+=1;
		}else if($event.rating===2) {
			this.placevalo.valtwo+=1;
		}else if($event.rating===3) {
			this.placevalo.valthree+=1;
		}else if($event.rating===4) {
			this.placevalo.valfour+=1;
		}else if($event.rating===5) {
			this.placevalo.valfive+=1;
		}
		this.valora.val=$event.rating;
		//calculating valoration
		this.placevalo.valoration=(this.placevalo.valone*1 + this.placevalo.valtwo*2 +
			this.placevalo.valthree*3 + this.placevalo.valfour*4 +
			this.placevalo.valfive*5)/(this.placevalo.valone + this.placevalo.valtwo +
				this.placevalo.valthree + this.placevalo.valfour + this.placevalo.valfive);
		this.placevalo.valoration = +Number(this.placevalo.valoration).toFixed(2);

		if (!this.placevalo) { return; }
		this.getplacesservice.patchValoration(this.placevalo)
				.subscribe(
				place => this.placevalo,
				error => this.errorMessage = <any>error);
		if (!this.valora) { return; }
		this.getplacesservice.postVal(this.valora)
					.subscribe(
					valoration => this.valora,
					error => this.errorMessage = <any>error);
	};
	createComment() {
		if (!this.CommentCreat) { return; }
		this.getplacesservice.NewComment(this.CommentCreat)
				.subscribe(
				commentplaces => this.CommentCreat,
				error => this.errorMessage = <any>error);
	}
}
