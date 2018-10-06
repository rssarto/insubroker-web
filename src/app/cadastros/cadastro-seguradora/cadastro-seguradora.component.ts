import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as CpfValidator from '@app/shared/validators/cnpj.validator';
import { SeguradoraStoreService } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.service';
import { LogService } from '@app/shared/service/log.service';
import { DialogService } from '@app/shared/dialog/dialog.service';
import { SeguradoraService } from '@app/cadastros/cadastro-seguradora/seguradora.service';
import * as fromMessages from '@app/shared/static/static.messages';
import { AppErrorStateMatcher } from '@app/shared/app.errorstatematcher';

@Component({
  selector: 'app-cadastro-seguradora',
  templateUrl: './cadastro-seguradora.component.html',
  styleUrls: ['./cadastro-seguradora.component.css']
})
export class CadastroSeguradoraComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  seguradoraForm: FormGroup;

  constructor(private seguradoraStoreService: SeguradoraStoreService,
              private logService: LogService,
              private seguradoraService: SeguradoraService,
              private dialogService: DialogService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.seguradoraForm = new FormGroup({
      razaoSocial: new FormControl('', [
        Validators.required
      ]),
      cnpj: new FormControl('', [
        Validators.required,
        CpfValidator.validateCpf
      ])
    });
  }

  onSubmit() {
    this.logService.log('[CadastroSeguradoraComponent.onSubmit]', this.seguradoraForm.value);
    this.seguradoraService.adicionar(this.seguradoraForm.value).subscribe(
      (value) => {
        this.seguradoraStoreService.cadastrar(this.seguradoraForm.value);
        this.dialogService.alertSnackBar(fromMessages.messages.cadastro.success);
        this.seguradoraForm.reset();
        this.logService.log('[CadastroSeguradoraComponent.onSubmit]', this.seguradoraForm);
      }
    );
  }
}
