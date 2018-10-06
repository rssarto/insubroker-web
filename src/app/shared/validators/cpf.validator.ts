import { AbstractControl } from '@angular/forms';
import * as cpf from '@fnando/cpf';

export function validateCpf(control: AbstractControl) {
    return control.value && !cpf.isValid(control.value) ? {'invalidCpf': true} : null;
}
