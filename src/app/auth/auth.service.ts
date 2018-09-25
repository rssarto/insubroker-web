import { Usuario } from '@app/shared/model/usuario.model';
import { of, Observable } from 'rxjs';
import { Credential } from '@app/auth/model/credential.model';
import { SessionState } from '@app/auth/store/session.store';

const cadastros: Usuario[] = [];

export class AuthService {
  cadastrar(cadastro: Usuario) {
    const actionPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        cadastros.push(cadastro);
        resolve();
      }, 500);
    });
    return of(actionPromise);
  }

  find(email: string): Observable<Usuario> {
    let cadastro: Usuario = null;
    const findIndex = cadastros.findIndex((value: Usuario) => value.login === email);
    if ( findIndex !== -1 ) {
      cadastro = cadastros[findIndex];
    }
    return of(cadastro);
  }

  login(credential: Credential) {
    return of({token: 'token', name: 'RICARDO SOARES SARTO'});
  }

}
