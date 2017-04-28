import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CreateTownComponent } from './createtown.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';
import {Place} from '../../../../../models/place';

@Injectable()
export class Createtownservice {
	constructor(private http: Http) {

	}
	

}
