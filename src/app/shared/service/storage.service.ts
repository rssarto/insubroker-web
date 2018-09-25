import { Injectable } from '@angular/core';

export const TOKEN_KEY = 'AuthToken';
export const STATE_KEY = 'AppState';
export const SESSION_KEY = 'AppSession';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.removeItem(STATE_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveState(state: string) {
    window.sessionStorage.removeItem(STATE_KEY);
    window.sessionStorage.setItem(STATE_KEY, state);
  }

  public getState(): string {
    return window.sessionStorage.getItem(STATE_KEY);
  }

  public saveSession(session: any) {
    this.clearSession();
    window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  }

  public clearSession() {
    window.sessionStorage.removeItem(SESSION_KEY);
  }

  public getSession() {
    return JSON.parse(window.sessionStorage.getItem(SESSION_KEY));
  }
}
