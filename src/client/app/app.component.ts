import { Component } from '@angular/core';
import { Config } from './shared/index';
import { Http } from '@angular/http';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html'
})





export class AppComponent {
  /*departs: string;
	constructor(private http: Http ) {
       http.get('http://localhost:3000/api/v1/departs.json').subscribe(res => this.departs = res.json().data);
      }*/
	}
