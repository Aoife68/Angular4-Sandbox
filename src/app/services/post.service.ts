import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/Post';

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}


@Injectable()
export class PostService {
  postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]>{
    return this.http.get<Post[]>(this.postUrl);
  }

  savePost(post:Post): Observable<Post>{
    return this.http.post<Post>(this.postUrl, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post>{
    //send to url with id concatonated
    const url =`${this.postUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  //single pipe syntax here for 'or'
  removePost(post: Post | number): Observable<Post>{
    //if argument passed in is a number we use post if not we use post.id
    const id = typeof post === 'number' ? post : post.id;

    const url =`${this.postUrl}/${id}`;

    return this.http.delete<Post>(url, httpOptions);
   
  }

  //method called in post-details component
  getPost(id: number): Observable<Post>{
    //send to url with id concatonated
    const url =`${this.postUrl}/${id}`;
    return this.http.get<Post>(url);
  }

}
