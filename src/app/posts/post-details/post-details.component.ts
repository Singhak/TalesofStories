import { Route, Routes, ActivatedRoute, Params } from '@angular/router';
import { Post } from './../post.model';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  defautImg = '../../../assets/img/defaults/article.jpg';
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      if (param.id) {
        this.post = this.postService.getPost(+param.id);
        this.post.imgPath = this.post.imgPath ? this.post.imgPath : this.defautImg;
      }

    });
  }

}
