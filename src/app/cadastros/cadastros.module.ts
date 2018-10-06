import { CoreModule } from '@app/core/core.module';
import { NgModule } from '@angular/core';
import { CadastrosRouterModule } from '@app/cadastros/cadastros-router.module';
import { CadastroSeguradoraModule } from '@app/cadastros/cadastro-seguradora/cadastro-seguradora.module';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    CadastrosRouterModule,
    CadastroSeguradoraModule
  ],
  providers: [],
  exports: [CadastrosRouterModule]
})
export class CadastrosModule {

}
