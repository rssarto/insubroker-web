import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

export function confirmacaoSenhaValidator(cadastroForm: FormGroup) {
  return cadastroForm.get('senha').value === cadastroForm.get('confirmacaoSenha').value ? null : {confirmacaoSenhaDiferente: true};
}
