import { SeguradoraStoreService } from './store/seguradora-store.service';
import { SeguradoraService } from './seguradora.service';
import { CoreModule } from '@app/core/core.module';
import { NgModule } from '@angular/core';
import { CadastroSeguradoraComponent } from '@app/cadastros/cadastro-seguradora/cadastro-seguradora.component';
import { ListaSeguradorasComponent } from './lista-seguradoras/lista-seguradoras.component';
import { SeguradoraStoreQuery } from '@app/cadastros/cadastro-seguradora/store/seguradora-store.query';
import { SeguradoraStore } from '@app/cadastros/cadastro-seguradora/store/seguradora.store';

@NgModule({
  declarations: [
    CadastroSeguradoraComponent,
    ListaSeguradorasComponent
  ],
  imports: [
    CoreModule
  ],
  providers: [
    SeguradoraService, SeguradoraStore, SeguradoraStoreService, SeguradoraStoreQuery
  ],
  exports: [
    CadastroSeguradoraComponent
  ]
})
export class CadastroSeguradoraModule {

}
