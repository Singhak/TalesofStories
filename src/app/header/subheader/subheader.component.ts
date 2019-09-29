import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styles: [`
  .intro-header .site-heading {
    color:darkgoldenrod
  }
  h1{
    -webkit-text-stroke: 3px black;
   paint-order: stroke fill;
  }
  .subheading,
  .meta {
    color:white;
    font-style:oblique;
    font-weight:700
  }
  `]
})
export class SubheaderComponent implements OnInit {
  @Input() heading: string;
  @Input() subheading: string;
  @Input() img: string;
  @Input() author?: string;
  @Input() date?: string;
  @Input() social?: string;
  @Input() imgId?: string;
  @Input() imgOwner?: string;
  constructor() { }

  ngOnInit() {
    if (!this.social) {
      this.social = 'https://www.facebook.com/1step2wardsLife/';
    }
  }

}
