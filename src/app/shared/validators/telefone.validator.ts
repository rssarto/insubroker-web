import { AbstractControl } from '@angular/forms';
import * as fromUtilFunctions from '@app/shared/util.function';

export function validateTelefone(control: AbstractControl) {
  if ( control.value.trim() !== '' ) {
    if  ( fromUtilFunctions.isCelular(control.value) ) {
      if ( !fromUtilFunctions.isValidCelular(control.value) ) {
        return {'invalidCelular' : true};
      }
    } else {
      if ( !fromUtilFunctions.isValidTelefoneFixo(control.value) ) {
        return {'invalidTelefoneFixo': true};
      }
    }
  }
  return null;
}
