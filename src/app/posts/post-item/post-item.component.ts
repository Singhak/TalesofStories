import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post: Post;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
    // this.post = {
    //   title: 'The recipe of the day',
    //   subtitle: 'Food from heart',
    //   postedBy: 'By Anil Kumar',
    //   postDate: '20-12-19',
    //   type: 'Poem',
    //   content: 'This is the recipe that is made by my wife and doe this at home in spare tim,',
    //   imgPath: '../../../assets/img/home-bg.jpg'
    // };

  }

  onPostClick() {

  }

}
