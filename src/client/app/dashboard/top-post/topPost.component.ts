import { Component } from '@angular/core';
import { TopPostservice } from './topPost.service';
import { Getplacesservice } from '../getplaces/Getplaces.service';


@Component({
	moduleId: module.id,
    selector: 'top-post',
    templateUrl: './top-post.component.html',
    providers: [TopPostservice,Getplacesservice],
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

export class TopPostComponent {
	static idPlace=undefined;
	places;
	starRatingConfig;
	constructor(private topPostservice: TopPostservice, private getplacesservice: Getplacesservice) {
       this.topPostservice.getTopPlaces().subscribe(
				 res => {
					 this.places = res;

					 this.starRatingConfig = {};

					this.starRatingConfig.id = 1221;
					this.starRatingConfig.showHalfStars = true;
					this.starRatingConfig.numOfStars = 5;
					this.starRatingConfig.size = 'large';
					this.starRatingConfig.space = 'no';
					this.starRatingConfig.disabled  = false;
					this.starRatingConfig.starType = 'svg';
					this.starRatingConfig.labelPosition = 'bottom';
					this.starRatingConfig.labelVisible = true;
					this.starRatingConfig.speed = 'slow';
					this.starRatingConfig.hoverEnabled = false;
					this.starRatingConfig.direction = 'ltr';
					this.starRatingConfig.step = 0.5;
					this.starRatingConfig.readOnly = true;
				 });
      }
			goPlace(id: number) {
				TopPostComponent.idPlace=id;
			};
			getColor = (rating: number, numOfStars: number, staticColor?: any) => {
				return staticColor || 'ok';
			};
			getHalfStarVisible=(rating):boolean => {
			 return Math.abs(rating % 1) > 0;
			};
}
