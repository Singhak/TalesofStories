import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './../post.model';
import { PostService } from './../post.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {

  post: Post;
  id: number;
  defautImg = '../../../assets/img/defaults/article.jpg';
  shareUrl = '';
  decs = 'Checkout our latest poems and stories at our website.';
  postSubscription: Subscription;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.postService.isInternetConnected();
    this.shareUrl = '';
    this.route.params.subscribe((param: Params) => {
      if (param.id) {
        this.id = +param.id;
        this.post = this.postService.getPost(+param.id);
        if (!this.post) {
          this.postService.getPosts();
        } else {
          this.post.imgPath = this.post.imgPath ? this.post.imgPath : this.defautImg;
        }
      }
    });
    this.postSubscription = this.postService.postNotification.subscribe((posts) => {
      if (posts && posts.length) {
        this.post = posts[this.id];
      }
    });
  }
  ngOnDestroy() {
    this.postSubscription.unsubscribe()
  }
}
