import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@app/auth/auth.service';
import { LoginComponent } from '@app/auth/login/login.component';
import { CoreModule } from '@app/core/core.module';
import { CadastroComponent } from '@app/auth/cadastro/cadastro.component';
import { AuthRouterModule } from '@app/auth/auth-router.module';
import { DialogModule } from '@app/shared/dialog/dialog.module';
import { SessionService } from '@app/auth/store/session.service';
import { SessionStore } from '@app/auth/store/session.store';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AuthRouterModule,
    DialogModule
  ],
  declarations: [LoginComponent, CadastroComponent],
  exports: [
    LoginComponent,
    AuthRouterModule
  ],
  providers: [
    AuthService, SessionService, SessionStore
  ]
})
export class AuthModule { }
