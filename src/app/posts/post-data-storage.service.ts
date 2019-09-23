import { PostService } from './post.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostDataStorageService {

  API_URL = 'https://talesofstories-e5c6d.firebaseio.com/';
  constructor(private http: HttpClient, private postService: PostService) { }
  saveRecipes() {
    this.http.put(this.API_URL + 'posts.json', this.postService.getPosts())
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {

    return this.http.get<Post[]>(this.API_URL + 'posts.json')
      .pipe(
        map((posts) => {
          return posts;
          // recipes.map(recipe => {
          //   return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
          // });
        }),
        tap(posts => {
          this.postService.setPosts(posts);
        }),
      );
  }
}
