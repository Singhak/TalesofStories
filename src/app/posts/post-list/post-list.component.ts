import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';
import { isError } from 'util';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  isLoading = false;
  isErrorAlert = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts();
    this.postService.postNotification.subscribe((posts) => {
      this.isLoading = false;
      this.posts = posts;
      if (!this.posts.length) {
        this.isErrorAlert = true;
      }
    });
  }

  onClose() {
    this.isErrorAlert = false;
  }
}

