import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroupDirective, NgForm, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AppErrorStateMatcher } from '@app/shared/app.errorstatematcher';
import { emailNotTaken } from '@app/auth/email.validator';
import { AuthService } from '@app/auth/auth.service';
import { SessionService } from '@app/auth/store/session.service';
import { LogService } from '@app/shared/service/log.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    loginFormControl: new FormControl('', [
      Validators.required,
      Validators.email
    ], [
      emailNotTaken(this.authService)
    ]),
    passwordFormControl: new FormControl('', [
      Validators.required,
    ])
  });

  matcher = new AppErrorStateMatcher();

  constructor(private authService: AuthService, private sessionService: SessionService, private logService: LogService) { }

  ngOnInit() {
  }

  login() {
    this.sessionService.login(this.loginForm.value).subscribe(
      (value) => {
        this.logService.log(value);
        this.loginForm.reset();
      }
    );
  }

}
