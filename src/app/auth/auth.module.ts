import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CoreModule } from '../core/core.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthRouterModule } from './auth-router.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from '../shared/dialog/dialog.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    MatDialogModule,
    AuthRouterModule,
    DialogModule
  ],
  declarations: [LoginComponent, CadastroComponent],
  exports: [
    LoginComponent,
    AuthRouterModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
