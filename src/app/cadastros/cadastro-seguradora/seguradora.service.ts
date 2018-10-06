import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import { of } from 'rxjs';
const seguradoras: SeguradoraModel[] = [
  {razaoSocial: 'Tokio Marine Seguradora S/A', cnpj: '04403408/0001-65'},
  {razaoSocial: 'Allianz Seguros S/A', cnpj: '70424552/0001-02'},
  {razaoSocial: 'Bradesco Seguros S/A', cnpj: '63379326/0001-91'},
];

export class SeguradoraService {
  adicionar(seguradora: SeguradoraModel) {
    const actionPromise = new Promise<SeguradoraModel>((resolve, reject) => {
      setTimeout(() => {
        seguradoras.push(seguradora);
        resolve(seguradora);
      }, 500);
    });
    return of(actionPromise);
  }
}
