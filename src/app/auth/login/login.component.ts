import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AppErrorStateMatcher } from '@app/shared/app.errorstatematcher';
import { emailNotTaken } from '@app/auth/email.validator';
import { AuthService } from '@app/auth/auth.service';
import { SessionService } from '@app/auth/store/session.service';
import { LogService } from '@app/shared/service/log.service';
import { Router } from '@angular/router';
import { DialogService } from '@app/shared/dialog/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.email
    ], [
      emailNotTaken(this.authService)
    ]),
    password: new FormControl('', [
      Validators.required,
    ])
  });

  matcher = new AppErrorStateMatcher();

  constructor(private authService: AuthService,
              private sessionService: SessionService,
              private logService: LogService,
              private router: Router,
              private dialogService: DialogService) { }

  ngOnInit() {
  }

  login() {
    this.sessionService.login(this.loginForm.value).subscribe(
      (value) => {
        this.logService.log(value);
        this.loginForm.reset();
        this.router.navigate(['']);
        this.dialogService.alertSnackBar(`Bem vindo ${value.name}`);
      }
    );
  }

}
