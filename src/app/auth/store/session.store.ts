import { Store, StoreConfig } from '@datorama/akita';
import { StorageService } from '@app/shared/service/storage.service';
import { LogService } from '@app/shared/service/log.service';

export interface SessionState {
  token: string;
  name: string;
}

export function createInitialState(storageService: StorageService): SessionState {
  return {
    token: null,
    name: null,
    ...storageService.getSession(),
  };
}

@StoreConfig({name: 'session'})
export class SessionStore extends Store<SessionState> {
  constructor(private storageService: StorageService, private logService: LogService) {
    super(createInitialState(storageService));
  }

  login(session: SessionState) {
    this.update(session);
    this.logService.log('[SessionStore.login]', session);
    this.storageService.saveSession(session);
  }

  logout() {
    this.storageService.clearSession();
    this.logService.log('[SessionStore.logout]');
    this.update(createInitialState(this.storageService));
  }
}
