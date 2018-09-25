import { LogService } from '@app/shared/service/log.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';
import { ConfirmacaoSenhaErrorStateMatcher } from '@app/auth/cadastro/confirmacaoSenha.errorstatematcher';
import { AppErrorStateMatcher } from '@app/shared/app.errorstatematcher';
import { confirmacaoSenhaValidator } from '@app/auth/cadastro/confirmacao-senha.directive';
import { Usuario } from '@app/shared/model/usuario.model';
import { DialogService } from '@app/shared/dialog/dialog.service';
import { existingEmailValidator } from '@app/auth/email.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  confirmacaoSenhaMatcher = new ConfirmacaoSenhaErrorStateMatcher();
  cadastroForm: FormGroup;

  constructor(private cadastroService: AuthService, private dialogService: DialogService, private logService: LogService) {
    logService.log('constructor CadastroComponent');
  }

  onSubmit() {
    this.logService.log(this.cadastroForm);
    this.cadastroService.cadastrar(<Usuario>this.cadastroForm.value)
      .subscribe(() => {
        this.dialogService.alertSnackBar('Cadastro realizado com sucesso.');
        this.cadastroForm.reset();
      });
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.cadastroForm = new FormGroup({
      login: new FormControl('', [
        Validators.required,
        Validators.email
      ], [
        existingEmailValidator(this.cadastroService)
      ]),
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      senha: new FormControl('', [
        Validators.required
      ]),
      confirmacaoSenha: new FormControl('', [
        Validators.required
      ])
    }, {validators: [confirmacaoSenhaValidator]});

  }
}
