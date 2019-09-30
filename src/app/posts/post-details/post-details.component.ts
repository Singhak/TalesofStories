import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Post } from './../post.model';
import { PostService } from './../post.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  defautImg = '../../../assets/img/defaults/article.jpg';
  shareUrl = '';
  decs = 'Checkout our latest poems and stories at our website.'
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.shareUrl = 'http://github.com/Epotignano/ng2-social-share';
    this.route.params.subscribe((param: Params) => {
      if (param.id) {
        this.post = this.postService.getPost(+param.id);
        this.post.imgPath = this.post.imgPath ? this.post.imgPath : this.defautImg;
      }
    });
  }

}
