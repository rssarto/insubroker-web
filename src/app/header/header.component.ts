import { ProfileIconService } from '@app/header/profile-icon.service';
import { SessionService } from '@app/auth/store/session.service';
import { Component, OnInit } from '@angular/core';
import * as faIcons from '@fortawesome/free-solid-svg-icons';
import { SessionQuery } from '@app/auth/store/session.query';
import { LogService } from '@app/shared/service/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  /*icons*/
  faIcons = faIcons;
  faIconProfile = faIcons.faUserCircle;

  constructor(protected sessionQuery: SessionQuery,
              private sessionService: SessionService,
              private logService: LogService,
              private router: Router,
              protected profileIconService: ProfileIconService) { }

  ngOnInit() {
  }

  logout() {
    this.logService.log('[HeaderComponent.logout]: logging out.');
    this.sessionService.logout();
    this.router.navigate(['']);
  }

}
