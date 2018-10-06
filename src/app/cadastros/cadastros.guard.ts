import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SessionQuery } from '@app/auth/store/session.query';
import { LogService } from '@app/shared/service/log.service';

@Injectable()
export class CadastrosGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionQuery: SessionQuery,
    private logService: LogService
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.logService.log('[CadastrosGuard.canActivate]', route, state);
    const isLoggedIn = this.sessionQuery.isLoggedIn();
    if ( !isLoggedIn ) {
      this.router.navigate(['login']);
    }
    return isLoggedIn;
  }
}
