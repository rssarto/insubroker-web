import { AuthService } from './../auth.service';
import { ConfirmacaoSenhaErrorStateMatcher } from './confirmacaoSenha.errorstatematcher';
import { AppErrorStateMatcher } from './../../shared/app.errorstatematcher';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { confirmacaoSenhaValidator } from './confirmacao-senha.directive';
import { Cadastro } from '../model/cadastro.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertDialogComponent } from '../../shared/dialog/alert-dialog/alert-dialog.component';
import { DialogService } from '../../shared/dialog/dialog.service';

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
        Validators.required
      ]),
      nome: new FormControl('', [
        Validators.required
      ]),
      senha: new FormControl('', [
        Validators.required
      ]),
      confirmacaoSenha: new FormControl('', [
        Validators.required
      ])
    }, {validators: [confirmacaoSenhaValidator]});

  }

  reset() {
    this.createForm();
  }
}
