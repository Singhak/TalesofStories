import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  maxLen = 6;
  prev = 0;
  next = 0;
  posts: Post[];
  tempPosts: Post[] = [];
  isLoading = false;
  isErrorAlert = false;
  errorMsg = 'Some error occured while loading posts';
  isConneted = true;
  constructor(private postService: PostService) { }
  filterBy = 'all';
  postSubscription: Subscription;

  ngOnInit() {
    this.isLoading = true;
    this.isConneted = this.postService.isInternetConnected();
    if (this.isConneted) {
      this.postService.getPosts();
    } else {
      this.isLoading = false;
      this.isErrorAlert = true;
      this.errorMsg = 'There is no internet connection';
    }
    this.postSubscription = this.postService.postNotification.subscribe((posts) => {
      if (posts && posts.length) {
        this.isLoading = false;
        this.isErrorAlert = false;
        this.posts = posts;
        this.next = this.maxLen;
        this.tempPosts = this.posts.slice(0, this.maxLen);
      } else {
        if (posts) {
          this.isLoading = false;
          this.isErrorAlert = true;
        }
      }

    });
  }

  onPrev() {
    this.prev = this.prev - this.maxLen;
    this.next = this.next - this.maxLen;
    this.tempPosts = this.posts.slice(this.prev, this.next);
  }

  onNext() {
    this.prev = this.prev + this.maxLen;
    this.next = this.next + this.maxLen;
    this.tempPosts = this.posts.slice(this.prev, this.next);
  }

  onClose() {
    this.isErrorAlert = false;
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}

