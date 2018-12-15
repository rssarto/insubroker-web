import { Usuario } from '@app/shared/model/usuario.model';
import { Observable } from 'rxjs';
import { Credential } from '@app/auth/model/credential.model';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {
  }

  cadastrar(cadastro: Usuario) {
   return this.httpClient.post(environment.resources.person, cadastro);
  }

  find(email: string): Observable<Usuario> {
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
