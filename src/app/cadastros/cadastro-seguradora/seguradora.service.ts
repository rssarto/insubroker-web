import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { LogService } from '@app/shared/service/log.service';

@Injectable()
export class SeguradoraService {
  seguradoras: SeguradoraModel[] = [
    {razaoSocial: 'Tokio Marine Seguradora S/A', cnpj: '04.403.408/0001-65'},
    {razaoSocial: 'Allianz Seguros S/A', cnpj: '70.424.552/0001-02'},
    {razaoSocial: 'Bradesco Seguros S/A', cnpj: '63.379.326/0001-91'},
  ];

  constructor(private logService: LogService) { }

  adicionar(seguradora: SeguradoraModel) {
    const actionPromise = new Promise<SeguradoraModel>((resolve, reject) => {
      setTimeout(() => {
        this.seguradoras = [...this.seguradoras, seguradora];
        resolve(seguradora);
      }, 500);
    });
    return of(actionPromise);
  }

  listAll() {
    return of(this.seguradoras);
  }

  obterPorCnpj(cnpj: string) {
    this.logService.log('[LogService.obterPorCnpj]', cnpj);
    let seguradora: SeguradoraModel = null;
    const findIndex = this.seguradoras.findIndex((value: SeguradoraModel) => value.cnpj === cnpj);
    this.logService.log('[LogService.obterPorCnpj]', findIndex);
    if ( findIndex !== -1 ) {
      seguradora = this.seguradoras[findIndex];
    }
    this.logService.log('[LogService.obterPorCnpj]', seguradora);
    return of( seguradora );
  }
}
