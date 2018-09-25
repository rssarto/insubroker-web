import { Injectable } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { SessionStore } from '@app/auth/store/session.store';
import { Credential } from '@app/auth/model/credential.model';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class SessionService {
  constructor(private sessionStore: SessionStore, private authService: AuthService) { }

  login(credentials: Credential) {
    return this.authService.login(credentials).pipe(
      tap(value => this.sessionStore.login(value))
    );
  }

  logout() {
    this.sessionStore.logout();
  }
}
