import { Component, OnInit } from '@angular/core';
import { configuration } from '../../configuration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = configuration.home;
  constructor() { }

  ngOnInit() {
  }

}
