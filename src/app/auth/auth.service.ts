import { Usuario } from '@app/shared/model/usuario.model';
import { of, Observable } from 'rxjs';
import { Credential } from '@app/auth/model/credential.model';
import { SessionState } from '@app/auth/store/session.store';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const cadastros: Usuario[] = [
  new Usuario('RICARDO SOARES SARTO', '123456', 'ricardo.soares.sarto@gmail.com')
];

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {
  }

  cadastrar(cadastro: Usuario) {
    /*
    const actionPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        cadastros.push(cadastro);
        resolve();
      }, 500);
    });
    return of(actionPromise);
    */
   return this.httpClient.post(environment.resources.person, cadastro);
  }

  find(email: string): Observable<Usuario> {
    /*
    let cadastro: Usuario = null;
    const findIndex = cadastros.findIndex((value: Usuario) => value.login === email);
    if ( findIndex !== -1 ) {
      cadastro = cadastros[findIndex];
    }
    return of(cadastro);
    */
    return this.httpClient.get<Usuario>(environment.resources.person + '/email/' + email);
  }

  login(credential: Credential) {
    return this.find(credential.login).pipe(
      map((value) => {
        return { token: 'token', name: value.nome };
      })
    );
  }
}
