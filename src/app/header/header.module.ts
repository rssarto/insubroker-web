import { AppModule } from '@app/app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/header/header.component';
import { CoreModule } from '@app/core/core.module';
import { AuthModule } from '@app/auth/auth.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    AuthModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
