import { LogService } from '@app/shared/service/log.service';
import { Store, StoreConfig } from '@datorama/akita';
import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import { SeguradoraStoreService } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.service';
import { SeguradoraStoreQuery } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.query';

export interface SeguradoraState {
  selectedSeguradoraForEdition?: SeguradoraModel;
  listaSeguradora?: SeguradoraModel[];
}

export function createInitialState(): SeguradoraState {
  return {
    listaSeguradora: [],
    selectedSeguradoraForEdition: null
  };
}

@StoreConfig({name: 'seguradora'})
export class SeguradoraStore extends Store<SeguradoraState> {
  constructor(private logService: LogService) {
    super(createInitialState());
  }

  add(seguradora: SeguradoraModel) {
    this.logService.log('[SeguradoraStore.adicionar]', seguradora);
    this.setState((state: SeguradoraState) => {
      return {
        selectedSeguradoraForEdition: state.selectedSeguradoraForEdition,
        listaSeguradora: [...state.listaSeguradora, seguradora]
      };
    });
  }

  addListAll(list: SeguradoraModel[]) {
    this.logService.log('[SeguradoraStore.adicionar]', list);
    this.setState((state: SeguradoraState) => {
      return {
        listaSeguradora: list
      };
    });
  }
}
