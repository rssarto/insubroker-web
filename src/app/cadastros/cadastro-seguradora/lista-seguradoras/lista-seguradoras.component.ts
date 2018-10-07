import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LogService } from '@app/shared/service/log.service';
import { SeguradoraStoreService } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.service';
import { SeguradoraStoreQuery } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.query';
import { MatSort } from '@angular/material/sort';
import { SeguradoraDataSource } from '@app/cadastros/cadastro-seguradora/seguradora.datasource';
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs/index';

@Component({
  selector: 'app-lista-seguradoras',
  templateUrl: './lista-seguradoras.component.html',
  styleUrls: ['./lista-seguradoras.component.css']
})
export class ListaSeguradorasComponent implements AfterViewInit, OnInit {
  columnsToDisplay = ['razaoSocial', 'cnpj'];
  dataSource: SeguradoraDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    merge(this.paginator.page, this.sort.sortChange).pipe(
      tap(() => this.loadSeguradorasPage())
    ).subscribe();
  }

  loadSeguradorasPage() {
    this.logService.log('[ListaSeguradorasComponent.loadSeguradorasPage]');
    this.dataSource.loadSeguradoras('', this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

  applyFilter(filter: string) {
    this.logService.log('[ListaSeguradorasComponent.applyFilter]');
    this.dataSource.loadSeguradoras(filter);
  }
}
