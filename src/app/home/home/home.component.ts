import { Post } from './../../posts/post.model';
import { PostService } from './../../posts/post.service';
import { Component, OnInit } from '@angular/core';
import { configuration } from '../../configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = configuration.home;
  homePosts: Post[];
  constructor(private postService: PostService) {
    postService.getPosts();
  }

  ngOnInit() {
    this.postService.postNotification.subscribe((posts) => {
      this.homePosts = posts.slice(0, 5);
    });
  }

}
