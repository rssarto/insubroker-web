import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroSeguradoraComponent } from '@app/cadastros/cadastro-seguradora/cadastro-seguradora.component';
import { CadastrosGuard } from '@app/cadastros/cadastros.guard';
import { CadastrosComponent } from '@app/cadastros/cadastros.component';

const routes: Routes = [
  {
    path: 'cadastro-seguradora',
    component: CadastrosComponent,
    canActivate: [CadastrosGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CadastrosGuard
  ]
})
export class CadastrosRouterModule {

}
