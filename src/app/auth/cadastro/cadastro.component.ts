import { AuthService } from './../auth.service';
import { ConfirmacaoSenhaErrorStateMatcher } from './confirmacaoSenha.errorstatematcher';
import { AppErrorStateMatcher } from './../../shared/app.errorstatematcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { confirmacaoSenhaValidator } from './confirmacao-senha.directive';
import { Cadastro } from '../model/cadastro.model';
import { DialogService } from '../../shared/dialog/dialog.service';
import { existingEmailValidator } from './email.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  confirmacaoSenhaMatcher = new ConfirmacaoSenhaErrorStateMatcher();
  cadastroForm: FormGroup;

  constructor(private cadastroService: AuthService, private dialogService: DialogService) {
    console.log('constructor CadastroComponent');
  }

  onSubmit() {
    console.log(this.cadastroForm);
    this.cadastroService.cadastrar(<Cadastro>this.cadastroForm.value)
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
