import { Component, OnInit } from '@angular/core';
import { LogService } from '@app/shared/service/log.service';
import { SeguradoraStoreService } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.service';
import { SeguradoraStoreQuery } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.query';

@Component({
  selector: 'app-lista-seguradoras',
  templateUrl: './lista-seguradoras.component.html',
  styleUrls: ['./lista-seguradoras.component.css']
})
export class ListaSeguradorasComponent implements OnInit {
  columnsToDisplay = ['razaoSocial', 'cnpj'];

  constructor(private logService: LogService,
              private seguradoraStoreService: SeguradoraStoreService,
              protected seguradoraStoreQuery: SeguradoraStoreQuery) { }

  ngOnInit() {
    this.logService.log('[ListaSeguradorasComponent.ngOnInit]');
    this.seguradoraStoreService.listAll().subscribe();
  }

}
