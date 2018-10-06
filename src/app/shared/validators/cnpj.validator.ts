import { AbstractControl } from '@angular/forms';
import * as cnpj from '@fnando/cnpj';

export function validateCpf(control: AbstractControl) {
  return control.value && !cnpj.isValid(control.value) ? {'invalidCnpj': true} : null;
}
