import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { SeguradoraService } from '@app/cadastros/cadastro-seguradora/seguradora.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import { LogService } from '@app/shared/service/log.service';
import * as cnpj from '@fnando/cnpj';

export function validateTakenCnpj(seguradoraService: SeguradoraService, logService: LogService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    logService.log('[validateTakenCnpj]', control);
    return seguradoraService.obterPorCnpj(cnpj.format(control.value)).pipe(
      map((seguradora: SeguradoraModel) => {
        return seguradora !== null ? {'cnpjTaken' : true} : null;
      })
    );
  };
}
