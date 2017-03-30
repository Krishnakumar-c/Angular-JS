import { Component } from '@angular/core';
import {PostService} from '../services/post.service';


@Component({
	moduleId:module.id,
	selector: 'user',
	templateUrl: 'user.component.html',
	providers:[PostService]
})
export class UserComponent  {
	name : string;
	email : string;
	address: address;
	hobbies : string[];
	showHobbies : boolean;
	posts:post[];

	constructor(private postsService:PostService){
		this.name = 'Angular';
		this.email = 'krishnakumar.c@fayausa.com';
		this.address = {
			street : '43 Main Street',
			city :'Ca',
			state :'California'
		}
		this.hobbies = ['music', 'movies', 'sports'];
		this.showHobbies = false;
		this.postsService.getPosts().subscribe(posts =>{
			this.posts = posts;
		});
	}

	toggleHobbies(){
		if(this.showHobbies == true){
			this.showHobbies = false;
		} else {
			this.showHobbies = true;
		}
	}
	addHobby(hobby=''){
		this.hobbies.push(hobby);
	}
	deleteHobby(i=''){
		this.hobbies.splice(i,1);
	}
}

interface address{
	street:string;
	city:string;
	state:string;
}

interface post{
	id :number;
	title : string;
	body :string;
}
