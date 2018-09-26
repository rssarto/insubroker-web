import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@app/header/header.component';
import { CoreModule } from '@app/core/core.module';
import { AuthModule } from '@app/auth/auth.module';
import { ProfileIconService } from '@app/header/profile-icon.service';

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
  ],
  providers: [
    ProfileIconService
  ]
})
export class HeaderModule { }
