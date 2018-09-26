import { Usuario } from '@app/shared/model/usuario.model';
import { of, Observable } from 'rxjs';
import { Credential } from '@app/auth/model/credential.model';
import { SessionState } from '@app/auth/store/session.store';
import { map } from 'rxjs/operators';

const cadastros: Usuario[] = [
  new Usuario('RICARDO SOARES SARTO', '123456', 'ricardo.soares.sarto@gmail.com')
];

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
    return this.find(credential.login).pipe(
      map((value) => {
        return { token: 'token', name: value.nome };
      })
    );
  }
}
