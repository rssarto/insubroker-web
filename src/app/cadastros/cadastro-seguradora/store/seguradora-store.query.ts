import { Query } from '@datorama/akita';
import { SeguradoraState, SeguradoraStore } from './seguradora.store';
import { Injectable } from '@angular/core';

@Injectable()
export class SeguradoraStoreQuery extends Query<SeguradoraState> {
  $listaSeguradoras = this.select((state: SeguradoraState) => state.listaSeguradora);

  constructor(protected store: SeguradoraStore) {
    super(store);
  }
}
