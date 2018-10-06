import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as CpfValidator from '@app/shared/validators/cnpj.validator';
import { SeguradoraStoreService } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.service';
import { LogService } from '@app/shared/service/log.service';
import { DialogService } from '@app/shared/dialog/dialog.service';
import { SeguradoraService } from '@app/cadastros/cadastro-seguradora/seguradora.service';
import * as fromMessages from '@app/shared/static/static.messages';
import { AppErrorStateMatcher } from '@app/shared/app.errorstatematcher';
import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import * as cnpj from '@fnando/cnpj';
import * as fromSeguradoraValidator from '@app/cadastros/cadastro-seguradora/seguradora.validator';

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
      ], [
        fromSeguradoraValidator.validateTakenCnpj(this.seguradoraService, this.logService)
      ])
    });
  }

  onSubmit() {
    const seguradora = new SeguradoraModel(this.seguradoraForm.value.razaoSocial, cnpj.format(this.seguradoraForm.value.cnpj));
    this.logService.log('[CadastroSeguradoraComponent.onSubmit]', seguradora);
    this.seguradoraService.adicionar(seguradora).subscribe(
      (value) => {
        this.seguradoraStoreService.add(seguradora);
        this.dialogService.alertSnackBar(fromMessages.messages.cadastro.success);
        this.seguradoraForm.reset();
      }
    );
  }
}
