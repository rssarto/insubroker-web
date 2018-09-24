import { Cadastro } from './model/cadastro.model';
import { of } from 'rxjs';

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

}
