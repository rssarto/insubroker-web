import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { AsyncValidator } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

/*
export class EmailAlreadyRegisteredValidator implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cadastro = this.authService.find(control.value);
    if ( cadastro !== null ) {
      return of({'emailAlreadyRegistered' : true});
    }
    return null;
  }
}
*/

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
