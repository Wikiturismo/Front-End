import { Component} from '@angular/core';
import { Http } from '@angular/http';
import { UserInfoservice } from './UserInfo.service';
//import {User} from '../../../../../models/user';
import {User} from './user';

@Component({
	moduleId: module.id,
    selector: 'user-info',
    templateUrl: './user-info.component.html',
    providers: [UserInfoservice]
})

export class UserInfoComponent {
	user = [];
	file = undefined;
	fileName = undefined;
	formData = new FormData();
	imagec=0;
	imgen;
	url;
	userCreat = new User(undefined, '', '', '','');
  errorMessage: string;
	constructor(private http: Http,
		private userInfoservice: UserInfoservice) {
			this.userInfoservice.getUser2().subscribe(
				data => {
					this.user.push(data);
					this.userCreat.id=this.user[0].id;
					this.userCreat.name=this.user[0].name;
					this.userCreat.kind=this.user[0].kind;
					this.userCreat.email=this.user[0].email;
					this.userCreat.ubication=this.user[0].ubication;
					console.log(this.user[0].imageusers);
					this.imgen=this.user[0].imageusers;
					this.imagec=this.user[0].imageusers.length;
					//console.log(this.userCreat);
				}
			);
		}
		fileEvent(fileInput: any) {
	    this.file = fileInput.target.files[0];
			this.formData.append('image', this.file);
			this.formData.append('user_id',this.userCreat.id);
		}
		userImage(form: any) {
			if(this.imagec===0) {
				this.http.post('http://localhost:3000/api/v1/imageusers', this.formData).subscribe();
			}else {
				this.url='http://localhost:3000/api/v1/imageusers/3';
				this.http.patch(this.url, this.formData).subscribe();
			}
		}
	updateUser() {
		this.userImage(this.formData);
        if (!this.userCreat) { return; }
        this.userInfoservice.updateUser(this.userCreat)
            .subscribe(
            user => this.userCreat,
            error => this.errorMessage = <any>error);

    }

		//this.userInfoservice.getUser2().subscribe( res=> this.user=res.JSON().data);
       /*this.userInfoservice.getUser2().subscribe(
       	res =>
        {
        	this.user = res;
        	//this.created_at = this.user.created_at;
        	//this.name = this.user.name;
        }
      );
      console.log(this.user);*/
    /*getUser2( ) {
    	//id=2;
	    let user= [];
	    this.userInfoservice.getUser2().subscribe(data => user.push(data));
	    this.user1 = user;
	    console.log("En metodo del componente");
	    console.log(this.user1);
   }*/



}
