import { NgModule } from '@angular/core';
import { CadastroSeguradoraComponent } from './cadastro-seguradora/cadastro-seguradora.component';
import { CadastrosRouterModule } from '@app/cadastros/cadastros-router.module';

@NgModule({
  declarations: [CadastroSeguradoraComponent],
  imports: [CadastrosRouterModule],
  providers: [],
  exports: [CadastrosRouterModule]
})
export class CadastrosModule {

}
