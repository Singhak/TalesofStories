import { Component, OnInit, Input } from '@angular/core';
import '../../../icons';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styles: []
})
export class SocialShareComponent implements OnInit {

  @Input() shareUrl = 'https://talesoftales.com';
  @Input() desc;
  @Input() imgPath;
  hasTags = 'poem, painting, stories, arts, love, breakup, blog, shayri, gazal, tales, tale, story';
  constructor() { }

  ngOnInit() {
  }

}
