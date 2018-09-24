import { Component, OnInit } from '@angular/core';
import { faMarker } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import * as faIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*icons*/
  faIcons = faIcons;
  faMarker = faMarker;
  faBars = faBars;
  faPhone = faPhone;

  constructor() { }

  ngOnInit() {
  }

}
