import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class ConfirmacaoSenhaErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    // const isSubmitted = form && form.submitted;
    const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched));
    const invalidParent = !!(control &&
                             control.parent &&
                             control.parent.dirty &&
                             control.parent.hasError('confirmacaoSenhaDiferente'));
    return (invalidCtrl || invalidParent);
  }
}

