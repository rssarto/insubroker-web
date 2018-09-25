import { SessionService } from '@app/auth/store/session.service';
import { Component, OnInit } from '@angular/core';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { SessionQuery } from '@app/auth/store/session.query';
import { LogService } from '@app/shared/service/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*icons*/
  faIcons = faIcons;

  constructor(protected sessionQuery: SessionQuery,
              private sessionService: SessionService,
              private logService: LogService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.logService.log('[HeaderComponent.logout]: logging out.');
    this.sessionService.logout();
    this.router.navigate(['']);
  }

}
