import { Query, toBoolean } from '@datorama/akita';
import { SessionState, SessionStore } from '@app/auth/store/session.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {
  isLoggedIn$ = this.select((state: SessionState) => toBoolean(state.token));
  name$ = this.select((state: SessionState) => state.name);

  constructor(protected store: SessionStore) {
    super(store);
  }

  isLoggedIn() {
    return toBoolean(this.getSnapshot().token);
  }

}
