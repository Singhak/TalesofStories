import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-share',
  templateUrl: './social-share.component.html',
  styles: []
})
export class SocialShareComponent implements OnInit {

  @Input() shareUrl = 'https://talesoftales.com';
  constructor() { }

  ngOnInit() {
  }

}
