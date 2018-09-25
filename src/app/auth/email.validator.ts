import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { AsyncValidator } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@app/auth/auth.service';

export function existingEmailValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return authService.find(control.value).pipe(
      map(
        cadastro => {
          return cadastro ? {'emailTaken': true} : null;
        }
      )
    );
  };
}

export function emailNotTaken(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return authService.find(control.value).pipe(
      map(
        cadastro => {
          return cadastro ? null : {'emailNotTaken': true};
        }
      )
    );
  };
}
