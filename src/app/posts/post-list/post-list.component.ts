import { PostService } from './../post.service';
import { Post } from './../post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    // this.posts = this._postService.getPosts();
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts()
      .subscribe(data => {

        this.posts = data.map(e => {
          return {
            id: e.payload.doc.id,
            isEdit: false,
            content: e.payload.doc.data().content,
            subtitle: e.payload.doc.data().subtitle,
            postDate: e.payload.doc.data().postDate,
            title: e.payload.doc.data().title
          };
        });
      });
  }
}

