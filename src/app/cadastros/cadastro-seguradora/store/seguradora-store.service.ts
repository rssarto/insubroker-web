import { SeguradoraStore } from '@app/cadastros/cadastro-seguradora/store/seguradora.store';
import { SeguradoraService } from '@app/cadastros/cadastro-seguradora/seguradora.service';
import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import { Injectable } from '@angular/core';
import { LogService } from '@app/shared/service/log.service';

@Injectable()
export class SeguradoraStoreService {
  constructor(private seguradoraStore: SeguradoraStore,
              private seguradoraService: SeguradoraService,
              private logService: LogService) {}

  cadastrar(seguradora: SeguradoraModel) {
    this.logService.log('[SeguradoraStoreService.cadastrar]', seguradora);
    this.seguradoraStore.adicionar(seguradora);
  }
}
