import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { SeguradoraStoreQuery } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.query';
import { SeguradoraModel } from '@app/shared/model/seguradora.model';
import { LogService } from '@app/shared/service/log.service';

export class SeguradoraDataSource implements DataSource<SeguradoraModel> {
    private seguradorasSubject = new BehaviorSubject<SeguradoraModel[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    private lengthSubject = new BehaviorSubject<number>(0);

    public loading$ = this.loadingSubject.asObservable();
    public length$ = this.lengthSubject.asObservable();

    constructor(private seguradoraStoreQuery: SeguradoraStoreQuery,
                private logService: LogService) {}

    connect(collectionViewer: CollectionViewer): Observable<SeguradoraModel[]> {
      return this.seguradorasSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
      this.seguradorasSubject.complete();
      this.loadingSubject.complete();
    }

    loadSeguradoras(filter = '', sortDirection = 'asc', pageIndex = 0, pageSize = 3) {
      this.loadingSubject.next(true);
      this.seguradoraStoreQuery.$listaSeguradoras.subscribe((seguradoras: SeguradoraModel[]) => {
        this.loadingSubject.next(false);
        let seguradorasNext = [...seguradoras];
        if ( filter !== '' ) {
          seguradorasNext = seguradorasNext.filter((seguradora: SeguradoraModel) => {
            if ( seguradora.razaoSocial.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ) {
              return true;
            }
            return false;
          });
        }

        seguradorasNext = seguradorasNext.sort((a: SeguradoraModel, b: SeguradoraModel) => {
          if (a.razaoSocial < b.razaoSocial) {
            return -1;
          }
          if (a.razaoSocial > b.razaoSocial) {
             return 1;
          }
          return 0;
        });

        if ( sortDirection === 'desc' ) {
          seguradorasNext = seguradorasNext.reverse();
        }
        this.lengthSubject.next(seguradorasNext.length);
        this.seguradorasSubject.next(seguradorasNext);
      });
    }
}
