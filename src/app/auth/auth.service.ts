import { Cadastro } from './model/cadastro.model';
import { of, Observable } from 'rxjs';

const cadastros: Cadastro[] = [];

export class AuthService {
  cadastrar(cadastro: Cadastro) {
    const actionPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        cadastros.push(cadastro);
        resolve();
      }, 500);
    });
    return of(actionPromise);
  }

  find(email: string): Observable<Cadastro> {
    let cadastro: Cadastro = null;
    const findIndex = cadastros.findIndex((value: Cadastro) => value.login === email);
    if ( findIndex !== -1 ) {
      cadastro = cadastros[findIndex];
    }
    return of(cadastro);
  }

}
