import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LogService } from '@app/shared/service/log.service';
import { SeguradoraStoreService } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.service';
import { SeguradoraStoreQuery } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.query';
import { MatSort } from '@angular/material/sort';
import { SeguradoraDataSource } from '@app/cadastros/cadastro-seguradora/seguradora.datasource';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-lista-seguradoras',
  templateUrl: './lista-seguradoras.component.html',
  styleUrls: ['./lista-seguradoras.component.css']
})
export class ListaSeguradorasComponent implements AfterViewInit, OnInit {
  columnsToDisplay = ['razaoSocial', 'cnpj'];
  dataSource: SeguradoraDataSource;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private logService: LogService,
              private seguradoraStoreService: SeguradoraStoreService,
              protected seguradoraStoreQuery: SeguradoraStoreQuery) { }

  ngOnInit() {
    this.logService.log('[ListaSeguradorasComponent.ngOnInit]');
    this.seguradoraStoreService.listAll().subscribe();
    this.dataSource = new SeguradoraDataSource(this.seguradoraStoreQuery, this.logService);
    this.dataSource.loadSeguradoras();
  }

  ngAfterViewInit() {
    this.sort.sortChange.pipe(
      tap(() => this.loadSeguradorasPage())
    ).subscribe();
  }

  loadSeguradorasPage() {
    this.logService.log('[ListaSeguradorasComponent.loadSeguradorasPage]');
    this.dataSource.loadSeguradoras('', this.sort.direction);
  }

  applyFilter(filter: string) {
    this.logService.log('[ListaSeguradorasComponent.applyFilter]');
    this.dataSource.loadSeguradoras(filter);
  }
}
