import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CreatePostComponent } from './createpost.component';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/Rx";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Createpostservice {
	constructor(private http: Http) {

	}
	
}
