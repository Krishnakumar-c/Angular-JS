import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PostService{
	 constructor(private http:Http){
	 	console.log('Post Service Initialied ...');
	 }

	 getPosts(){
	 	return this.http.get('https://jsonplaceholder.typicode.com/posts')
	 	.map(res => res.json());
	 }
}
